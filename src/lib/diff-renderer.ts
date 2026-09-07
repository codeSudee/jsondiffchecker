import type { JsonValue, DiffEntry, DiffType } from './json-diff';

/**
 * Renders a merged JSON tree (left + right) as HTML with inline diff
 * highlighting. Deeply nested nodes are individually collapsible via
 * <details> so huge documents don't produce an unmanageably long,
 * layout-breaking page.
 */

type PathStatus = Map<string, DiffEntry>;

function buildStatusMap(entries: DiffEntry[]): PathStatus {
  const map: PathStatus = new Map();
  for (const e of entries) map.set(e.path, e);
  return map;
}

function escapePointerSegment(segment: string): string {
  return segment.replace(/~/g, '~0').replace(/\//g, '~1');
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatPrimitive(v: JsonValue): string {
  if (typeof v === 'string') return `"${escapeHtml(v)}"`;
  if (v === null) return 'null';
  return String(v);
}

const ANCESTOR_HAS_DIFF = new Set<string>();

/** Precompute which ancestor paths contain at least one diff, for auto-expand. */
function markAncestors(entries: DiffEntry[]) {
  ANCESTOR_HAS_DIFF.clear();
  for (const e of entries) {
    const segments = e.path.split('/').filter(Boolean);
    let acc = '';
    for (const seg of segments) {
      acc += '/' + seg;
      ANCESTOR_HAS_DIFF.add(acc);
    }
  }
}

function rowWrapper(pointer: string, type: DiffType | 'unchanged', inner: string): string {
  const typeClass =
    type === 'added'
      ? 'bg-diff-added-soft'
      : type === 'removed'
        ? 'bg-diff-removed-soft'
        : type === 'changed'
          ? 'bg-diff-changed-soft'
          : '';
  const marker =
    type === 'added' ? '+' : type === 'removed' ? '\u2212' : type === 'changed' ? '~' : ' ';
  const markerClass =
    type === 'added'
      ? 'text-diff-added'
      : type === 'removed'
        ? 'text-diff-removed'
        : type === 'changed'
          ? 'text-diff-changed'
          : 'text-transparent';

  return `<span class="diff-row group flex gap-2 rounded-sm px-1 -mx-1 ${typeClass}" data-path="${escapeHtml(pointer)}" data-difftype="${type}"><span class="select-none ${markerClass} w-3 shrink-0 text-center">${marker}</span><span class="min-w-0 flex-1 whitespace-pre-wrap break-all">${inner}</span><button type="button" class="copy-path-btn shrink-0 rounded-sm px-1 text-[11px] text-faint opacity-0 hover:bg-hairline-soft hover:text-body group-hover:opacity-100" data-action="copy-path" data-path="${escapeHtml(pointer)}" title="Copy path">\u29c9</button></span>`;
}

/** Public entry point: render a merged left/right JSON tree with diff highlights. */
export function renderDiffTree(left: JsonValue, right: JsonValue, entries: DiffEntry[]): string {
  const statusMap = buildStatusMap(entries);
  markAncestors(entries);
  return renderMerged(left, right, [], statusMap, 0);
}

function valueClassFor(value: JsonValue): string {
  if (typeof value === 'string') return 'text-value-string';
  if (typeof value === 'number') return 'text-value-number';
  if (typeof value === 'boolean') return 'text-value-boolean';
  return 'text-faint';
}

function renderMerged(
  left: JsonValue | undefined,
  right: JsonValue | undefined,
  segments: (string | number)[],
  statusMap: PathStatus,
  depth: number,
  keyLabel: string | null = null
): string {
  const pointer = '/' + segments.map((s) => escapePointerSegment(String(s))).join('/');
  const entry = statusMap.get(pointer);
  const indent = '  '.repeat(depth);
  const keyPrefix =
    keyLabel !== null
      ? `<span class="text-body">${escapeHtml(keyLabel)}</span><span class="text-faint">: </span>`
      : '';

  if (right === undefined && left !== undefined) {
    return renderRemovedSubtree(left, segments, depth, keyLabel);
  }

  const value = right as JsonValue;

  if (Array.isArray(value)) {
    const leftArr = Array.isArray(left) ? left : undefined;
    if (value.length === 0 && (!leftArr || leftArr.length === 0)) {
      return `${indent}${rowWrapper(pointer, entry?.type ?? 'unchanged', `${keyPrefix}<span class="text-faint">[]</span>`)}\n`;
    }
    const hasDiff = ANCESTOR_HAS_DIFF.has(pointer) || depth < 1;
    const maxLen = Math.max(value.length, leftArr?.length ?? 0);
    let items = '';
    for (let i = 0; i < maxLen; i++) {
      items += renderMerged(leftArr?.[i], value[i], [...segments, i], statusMap, depth + 1);
    }
    return `${indent}<details ${hasDiff ? 'open' : ''} class="diff-node"><summary class="cursor-pointer select-none list-none">${keyPrefix}<span class="text-faint">[</span><span class="details-hint text-faint text-[11px]"> ${value.length} item${value.length === 1 ? '' : 's'} </span><span class="text-faint">...]</span></summary>${items}${indent}<span class="text-faint">]</span></details>\n`;
  }

  if (value !== null && typeof value === 'object') {
    const leftObj = left !== null && typeof left === 'object' && !Array.isArray(left) ? (left as Record<string, JsonValue>) : undefined;
    const keys = Array.from(new Set([...(leftObj ? Object.keys(leftObj) : []), ...Object.keys(value)]));
    if (keys.length === 0) {
      return `${indent}${rowWrapper(pointer, entry?.type ?? 'unchanged', `${keyPrefix}<span class="text-faint">{}</span>`)}\n`;
    }
    const hasDiff = ANCESTOR_HAS_DIFF.has(pointer) || depth < 1;
    let items = '';
    for (const k of keys) {
      items += renderMerged(leftObj?.[k], value[k], [...segments, k], statusMap, depth + 1, k);
    }
    return `${indent}<details ${hasDiff ? 'open' : ''} class="diff-node"><summary class="cursor-pointer select-none list-none">${keyPrefix}<span class="text-faint">{</span><span class="details-hint text-faint text-[11px]"> ${keys.length} key${keys.length === 1 ? '' : 's'} </span><span class="text-faint">...}</span></summary>${items}${indent}<span class="text-faint">}</span></details>\n`;
  }

  const type = entry?.type ?? 'unchanged';

  if (type === 'changed' && entry) {
    const oldStr = entry.leftValue !== undefined ? formatPrimitive(entry.leftValue) : '';
    const newStr = entry.rightValue !== undefined ? formatPrimitive(entry.rightValue) : '';
    return `${indent}${rowWrapper(
      pointer,
      'changed',
      `${keyPrefix}<span class="text-diff-removed line-through opacity-70">${escapeHtml(oldStr)}</span> <span class="text-faint">\u2192</span> <span class="${valueClassFor(value)} font-medium">${escapeHtml(newStr)}</span>`
    )}\n`;
  }

  return `${indent}${rowWrapper(pointer, type, `${keyPrefix}<span class="${valueClassFor(value)}">${escapeHtml(formatPrimitive(value))}</span>`)}\n`;
}

function renderRemovedSubtree(
  value: JsonValue,
  segments: (string | number)[],
  depth: number,
  keyLabel: string | null
): string {
  const pointer = '/' + segments.map((s) => escapePointerSegment(String(s))).join('/');
  const indent = '  '.repeat(depth);
  const keyPrefix =
    keyLabel !== null
      ? `<span class="text-body">${escapeHtml(keyLabel)}</span><span class="text-faint">: </span>`
      : '';

  if (Array.isArray(value)) {
    const summary = `${value.length} item${value.length === 1 ? '' : 's'}`;
    return `${indent}${rowWrapper(pointer, 'removed', `${keyPrefix}<span class="text-faint">[${summary} removed]</span>`)}\n`;
  }
  if (value !== null && typeof value === 'object') {
    const keys = Object.keys(value);
    const summary = `${keys.length} key${keys.length === 1 ? '' : 's'}`;
    return `${indent}${rowWrapper(pointer, 'removed', `${keyPrefix}<span class="text-faint">{${summary} removed}</span>`)}\n`;
  }
  return `${indent}${rowWrapper(pointer, 'removed', `${keyPrefix}<span class="line-through opacity-80">${escapeHtml(formatPrimitive(value))}</span>`)}\n`;
}
