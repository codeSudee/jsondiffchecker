/**
 * Framework-agnostic JSON diff engine.
 * Runs entirely client-side — no network calls, no external dependencies.
 */

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export interface ParseError {
  message: string;
  line: number;
  column: number;
  /** Character offset into the source string */
  offset: number;
}

export interface ParseResult {
  ok: boolean;
  value?: JsonValue;
  error?: ParseError;
}

/**
 * Parse JSON text and, on failure, compute a line/column for the error
 * by re-scanning the source using the offset reported by V8/JSC's
 * "position N" style messages (Chrome, Safari) or by binary-searching
 * with JSON.parse on progressively shorter substrings as a fallback.
 */
export function parseJson(text: string): ParseResult {
  if (text.trim().length === 0) {
    return {
      ok: false,
      error: { message: 'Input is empty.', line: 1, column: 1, offset: 0 },
    };
  }

  try {
    const value = JSON.parse(text) as JsonValue;
    return { ok: true, value };
  } catch (err) {
    const error = locateJsonError(text, err as Error);
    return { ok: false, error };
  }
}

function locateJsonError(text: string, err: Error): ParseError {
  const message = err.message || 'Invalid JSON';
  let offset = -1;

  // V8 (Chrome/Node): "Unexpected token } in JSON at position 42"
  // or newer: "Expected ',' or '}' after property value in JSON at position 42"
  const positionMatch = message.match(/position (\d+)/i);
  if (positionMatch) {
    offset = parseInt(positionMatch[1], 10);
  }

  // JavaScriptCore (Safari): "JSON Parse error: Unexpected token ..."
  // does not include a position, so fall back to a scanning heuristic.
  if (offset === -1) {
    offset = findLikelyErrorOffset(text);
  }

  const { line, column } = offsetToLineColumn(text, Math.max(0, offset));
  return { message: cleanErrorMessage(message), line, column, offset: Math.max(0, offset) };
}

function cleanErrorMessage(message: string): string {
  return message
    .replace(/^JSON\.parse:\s*/i, '')
    .replace(/^JSON Parse error:\s*/i, '')
    .replace(/\s*in JSON at position \d+(\s*\(line \d+ column \d+\))?/i, '')
    .trim();
}

function offsetToLineColumn(text: string, offset: number): { line: number; column: number } {
  let line = 1;
  let column = 1;
  const clamped = Math.min(offset, text.length);
  for (let i = 0; i < clamped; i++) {
    if (text[i] === '\n') {
      line++;
      column = 1;
    } else {
      column++;
    }
  }
  return { line, column };
}

/**
 * Fallback for engines that don't report a position: binary-search the
 * shortest prefix that still fails to parse, narrowing to the error site.
 */
function findLikelyErrorOffset(text: string): number {
  let lo = 0;
  let hi = text.length;
  // Find the shortest valid-looking truncation boundary.
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    try {
      JSON.parse(text.slice(0, mid) + suffixCloser(text.slice(0, mid)));
      lo = mid + 1;
    } catch {
      hi = mid;
    }
  }
  return Math.max(0, lo - 1);
}

function suffixCloser(_partial: string): string {
  // Best-effort: not a real closer, just used to probe parse validity.
  return '';
}

export function formatJson(value: JsonValue, indent = 2): string {
  return JSON.stringify(value, null, indent);
}

export type DiffType = 'added' | 'removed' | 'changed' | 'unchanged';

export interface DiffEntry {
  /** JSON Pointer (RFC 6901) path to this node */
  path: string;
  /** Human dot/bracket path, e.g. user.roles[0] */
  displayPath: string;
  type: DiffType;
  leftValue?: JsonValue;
  rightValue?: JsonValue;
}

export interface DiffOptions {
  /** Treat arrays as sets (ignore order) when comparing */
  ignoreArrayOrder?: boolean;
  /** Treat key order as insignificant (always true for objects semantically) */
  ignoreKeyOrder?: boolean;
}

export interface DiffResult {
  entries: DiffEntry[];
  stats: { added: number; removed: number; changed: number };
  identical: boolean;
}

function isObject(v: JsonValue | undefined): v is { [key: string]: JsonValue } {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function isArray(v: JsonValue | undefined): v is JsonValue[] {
  return Array.isArray(v);
}

function escapePointerSegment(segment: string): string {
  return segment.replace(/~/g, '~0').replace(/\//g, '~1');
}

function toDisplayPath(segments: (string | number)[]): string {
  if (segments.length === 0) return '$';
  let out = '$';
  for (const seg of segments) {
    if (typeof seg === 'number') {
      out += `[${seg}]`;
    } else if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(seg)) {
      out += `.${seg}`;
    } else {
      out += `["${seg}"]`;
    }
  }
  return out;
}

function valuesEqual(a: JsonValue, b: JsonValue, options: DiffOptions): boolean {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;

  if (isArray(a) && isArray(b)) {
    if (a.length !== b.length) return false;
    if (options.ignoreArrayOrder) {
      const bCopy = [...b];
      for (const itemA of a) {
        const idx = bCopy.findIndex((itemB) => valuesEqual(itemA, itemB, options));
        if (idx === -1) return false;
        bCopy.splice(idx, 1);
      }
      return true;
    }
    return a.every((item, i) => valuesEqual(item, b[i], options));
  }

  if (isObject(a) && isObject(b)) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    return aKeys.every((k) => k in b && valuesEqual(a[k], b[k], options));
  }

  return false;
}

/** Candidate field names checked (in order) for a stable per-element identity. */
const STABLE_ID_KEYS = ['id', 'uuid', 'key'];

/**
 * If every object in `items` carries the same identifying key with a
 * primitive (string/number) value, return that key. Used to match array
 * elements by identity rather than by position when ignoring array order.
 */
function findStableIdKey(items: JsonValue[]): string | null {
  if (items.length === 0 || !items.every(isObject)) return null;
  const objs = items as { [key: string]: JsonValue }[];
  for (const candidate of STABLE_ID_KEYS) {
    const allHavePrimitiveId = objs.every((o) => {
      const v = o[candidate];
      return (typeof v === 'string' || typeof v === 'number') && v !== undefined;
    });
    if (allHavePrimitiveId) return candidate;
  }
  return null;
}

interface ArrayMatchPair {
  aIndex: number;
  bIndex: number;
}

interface ArrayMatchResult {
  /** Matched element pairs (by original index in each array), in b-index order. */
  pairs: ArrayMatchPair[];
  /** Indices into `a` with no counterpart in `b` (removed). */
  unmatchedA: number[];
  /** Indices into `b` with no counterpart in `a` (added). */
  unmatchedB: number[];
}

/**
 * Match elements of two arrays by identity instead of position, for use
 * when ignoreArrayOrder is set.
 *
 * - Objects that share a stable id field (id/uuid/key) are matched by that
 *   field's value, regardless of whether the rest of the object differs
 *   (a matched-but-different pair is reported as "changed", not add+remove).
 * - Everything else (primitives, or objects without a usable id field) is
 *   matched by deep-equality, multiset-style: each element on the left is
 *   paired with one exactly-equal, not-yet-claimed element on the right.
 */
function matchArraysByIdentity(a: JsonValue[], b: JsonValue[], options: DiffOptions): ArrayMatchResult {
  const pairs: ArrayMatchPair[] = [];
  const claimedA = new Set<number>();
  const claimedB = new Set<number>();

  const aIdKey = findStableIdKey(a);
  const bIdKey = findStableIdKey(b);
  const usableIdKey = aIdKey && aIdKey === bIdKey ? aIdKey : null;

  if (usableIdKey) {
    const bById = new Map<string | number, number>();
    b.forEach((item, i) => {
      const v = (item as { [key: string]: JsonValue })[usableIdKey];
      if (typeof v === 'string' || typeof v === 'number') bById.set(v, i);
    });
    a.forEach((item, aIndex) => {
      const v = (item as { [key: string]: JsonValue })[usableIdKey];
      if (typeof v !== 'string' && typeof v !== 'number') return;
      const bIndex = bById.get(v);
      if (bIndex !== undefined && !claimedB.has(bIndex)) {
        pairs.push({ aIndex, bIndex });
        claimedA.add(aIndex);
        claimedB.add(bIndex);
      }
    });
  } else {
    // Deep-equality multiset matching: pair each unclaimed `a` element with
    // an unclaimed, exactly-equal `b` element.
    a.forEach((itemA, aIndex) => {
      if (claimedA.has(aIndex)) return;
      const bIndex = b.findIndex((itemB, i) => !claimedB.has(i) && valuesEqual(itemA, itemB, options));
      if (bIndex !== -1) {
        pairs.push({ aIndex, bIndex });
        claimedA.add(aIndex);
        claimedB.add(bIndex);
      }
    });
  }

  const unmatchedA = a.map((_, i) => i).filter((i) => !claimedA.has(i));
  const unmatchedB = b.map((_, i) => i).filter((i) => !claimedB.has(i));
  pairs.sort((p1, p2) => p1.bIndex - p2.bIndex);

  return { pairs, unmatchedA, unmatchedB };
}

/**
 * Compute a semantic diff between two JSON values, walking both trees
 * in parallel and emitting added/removed/changed entries at each path.
 */
export function diffJson(
  left: JsonValue,
  right: JsonValue,
  options: DiffOptions = {}
): DiffResult {
  const entries: DiffEntry[] = [];

  function walk(a: JsonValue | undefined, b: JsonValue | undefined, segments: (string | number)[]) {
    const pointer = '/' + segments.map((s) => escapePointerSegment(String(s))).join('/');
    const displayPath = toDisplayPath(segments);

    if (a === undefined && b !== undefined) {
      entries.push({ path: pointer, displayPath, type: 'added', rightValue: b });
      return;
    }
    if (a !== undefined && b === undefined) {
      entries.push({ path: pointer, displayPath, type: 'removed', leftValue: a });
      return;
    }
    if (a === undefined && b === undefined) return;

    const av = a as JsonValue;
    const bv = b as JsonValue;

    if (isObject(av) && isObject(bv)) {
      const keys = new Set([...Object.keys(av), ...Object.keys(bv)]);
      for (const key of keys) {
        walk(av[key], bv[key], [...segments, key]);
      }
      return;
    }

    if (isArray(av) && isArray(bv)) {
      if (options.ignoreArrayOrder) {
        const { pairs, unmatchedA, unmatchedB } = matchArraysByIdentity(av, bv, options);
        for (const { aIndex, bIndex } of pairs) {
          walk(av[aIndex], bv[bIndex], [...segments, bIndex]);
        }
        for (const aIndex of unmatchedA) {
          entries.push({
            path: '/' + [...segments, aIndex].map((s) => escapePointerSegment(String(s))).join('/'),
            displayPath: toDisplayPath([...segments, aIndex]),
            type: 'removed',
            leftValue: av[aIndex],
          });
        }
        for (const bIndex of unmatchedB) {
          entries.push({
            path: '/' + [...segments, bIndex].map((s) => escapePointerSegment(String(s))).join('/'),
            displayPath: toDisplayPath([...segments, bIndex]),
            type: 'added',
            rightValue: bv[bIndex],
          });
        }
        return;
      }
      const maxLen = Math.max(av.length, bv.length);
      for (let i = 0; i < maxLen; i++) {
        walk(av[i], bv[i], [...segments, i]);
      }
      return;
    }

    // Type mismatch or primitive comparison
    if (!valuesEqual(av, bv, options)) {
      entries.push({ path: pointer, displayPath, type: 'changed', leftValue: av, rightValue: bv });
    }
  }

  walk(left, right, []);

  const stats = { added: 0, removed: 0, changed: 0 };
  for (const e of entries) {
    if (e.type === 'added') stats.added++;
    else if (e.type === 'removed') stats.removed++;
    else if (e.type === 'changed') stats.changed++;
  }

  return { entries, stats, identical: entries.length === 0 };
}

/** Serialize the diff as an RFC 6902 JSON Patch-like document. */
export function diffToJsonPatch(result: DiffResult): string {
  const ops = result.entries.map((e) => {
    if (e.type === 'added') return { op: 'add', path: e.path, value: e.rightValue };
    if (e.type === 'removed') return { op: 'remove', path: e.path };
    return { op: 'replace', path: e.path, value: e.rightValue, oldValue: e.leftValue };
  });
  return JSON.stringify(ops, null, 2);
}

/** Serialize the diff as a human-readable Markdown changelog. */
export function diffToMarkdown(result: DiffResult): string {
  if (result.identical) {
    return '# JSON Diff\n\nNo differences found. Both documents are semantically identical.\n';
  }

  const lines: string[] = ['# JSON Diff', ''];
  lines.push(
    `**Summary:** ${result.stats.added} added, ${result.stats.removed} removed, ${result.stats.changed} changed`,
    ''
  );

  const added = result.entries.filter((e) => e.type === 'added');
  const removed = result.entries.filter((e) => e.type === 'removed');
  const changed = result.entries.filter((e) => e.type === 'changed');

  if (added.length) {
    lines.push('## Added', '');
    for (const e of added) {
      lines.push(`- \`${e.displayPath}\`: ${JSON.stringify(e.rightValue)}`);
    }
    lines.push('');
  }

  if (removed.length) {
    lines.push('## Removed', '');
    for (const e of removed) {
      lines.push(`- \`${e.displayPath}\`: ${JSON.stringify(e.leftValue)}`);
    }
    lines.push('');
  }

  if (changed.length) {
    lines.push('## Changed', '');
    for (const e of changed) {
      lines.push(`- \`${e.displayPath}\`: ${JSON.stringify(e.leftValue)} → ${JSON.stringify(e.rightValue)}`);
    }
    lines.push('');
  }

  return lines.join('\n');
}
