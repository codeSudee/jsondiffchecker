import { describe, it, expect } from 'vitest';
import { parseJson, diffJson, formatJson, diffToJsonPatch, diffToMarkdown } from './json-diff';

describe('parseJson', () => {
  it('parses valid JSON', () => {
    const result = parseJson('{"a": 1}');
    expect(result.ok).toBe(true);
    expect(result.value).toEqual({ a: 1 });
  });

  it('reports empty input', () => {
    const result = parseJson('   ');
    expect(result.ok).toBe(false);
    expect(result.error?.line).toBe(1);
  });

  it('reports line/column for a trailing comma error', () => {
    const text = '{\n  "a": 1,\n}';
    const result = parseJson(text);
    expect(result.ok).toBe(false);
    expect(result.error).toBeDefined();
    expect(result.error!.line).toBeGreaterThanOrEqual(1);
  });

  it('reports error for unquoted key', () => {
    const result = parseJson('{a: 1}');
    expect(result.ok).toBe(false);
  });
});

describe('formatJson', () => {
  it('pretty prints with 2-space indent', () => {
    expect(formatJson({ a: 1 })).toBe('{\n  "a": 1\n}');
  });
});

describe('diffJson', () => {
  it('reports no diff for identical objects', () => {
    const result = diffJson({ a: 1, b: [1, 2] }, { a: 1, b: [1, 2] });
    expect(result.identical).toBe(true);
    expect(result.entries).toHaveLength(0);
  });

  it('detects added keys', () => {
    const result = diffJson({ a: 1 }, { a: 1, b: 2 });
    expect(result.stats.added).toBe(1);
    expect(result.entries[0]).toMatchObject({ type: 'added', path: '/b' });
  });

  it('detects removed keys', () => {
    const result = diffJson({ a: 1, b: 2 }, { a: 1 });
    expect(result.stats.removed).toBe(1);
    expect(result.entries[0]).toMatchObject({ type: 'removed', path: '/b' });
  });

  it('detects changed values', () => {
    const result = diffJson({ a: 1 }, { a: 2 });
    expect(result.stats.changed).toBe(1);
    expect(result.entries[0]).toMatchObject({ type: 'changed', leftValue: 1, rightValue: 2 });
  });

  it('handles deeply nested objects', () => {
    const left = { a: { b: { c: { d: 1 } } } };
    const right = { a: { b: { c: { d: 2 } } } };
    const result = diffJson(left, right);
    expect(result.entries[0]).toMatchObject({ path: '/a/b/c/d', type: 'changed' });
  });

  it('handles arrays with index-based paths', () => {
    const result = diffJson({ items: [1, 2, 3] }, { items: [1, 5, 3] });
    expect(result.entries[0]).toMatchObject({ path: '/items/1', type: 'changed' });
  });

  it('handles array length differences as added/removed', () => {
    const result = diffJson({ items: [1, 2] }, { items: [1, 2, 3] });
    expect(result.stats.added).toBe(1);
    expect(result.entries[0].path).toBe('/items/2');
  });

  it('ignores array order when option set', () => {
    const result = diffJson({ items: [1, 2, 3] }, { items: [3, 1, 2] }, { ignoreArrayOrder: true });
    expect(result.identical).toBe(true);
  });

  it('detects order-sensitive array diff by default', () => {
    const result = diffJson({ items: [1, 2, 3] }, { items: [3, 1, 2] });
    expect(result.identical).toBe(false);
  });

  it('the example from the bug report: reordered strings are not "changed"', () => {
    const result = diffJson(
      ['apple', 'banana', 'cherry'],
      ['banana', 'apple', 'cherry'],
      { ignoreArrayOrder: true }
    );
    expect(result.identical).toBe(true);
    expect(result.stats).toEqual({ added: 0, removed: 0, changed: 0 });
  });

  it('without the option, the same reordered strings show as changed (default preserved)', () => {
    const result = diffJson(['apple', 'banana', 'cherry'], ['banana', 'apple', 'cherry']);
    expect(result.identical).toBe(false);
    expect(result.stats.changed).toBe(2);
  });

  it('ignoreArrayOrder still detects a genuinely added primitive', () => {
    const result = diffJson({ items: [1, 2, 3] }, { items: [3, 2, 1, 4] }, { ignoreArrayOrder: true });
    expect(result.stats).toEqual({ added: 1, removed: 0, changed: 0 });
    expect(result.entries[0]).toMatchObject({ type: 'added', rightValue: 4, path: '/items/3' });
  });

  it('ignoreArrayOrder still detects a genuinely removed primitive', () => {
    const result = diffJson({ items: [1, 2, 3] }, { items: [3, 1] }, { ignoreArrayOrder: true });
    expect(result.stats).toEqual({ added: 0, removed: 1, changed: 0 });
    expect(result.entries[0]).toMatchObject({ type: 'removed', leftValue: 2 });
  });

  it('ignoreArrayOrder matches objects by id field even when reordered and unchanged', () => {
    const left = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];
    const right = [{ id: 2, name: 'b' }, { id: 1, name: 'a' }];
    const result = diffJson(left, right, { ignoreArrayOrder: true });
    expect(result.identical).toBe(true);
  });

  it('ignoreArrayOrder matches objects by id field and reports nested changes, not add+remove', () => {
    const left = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];
    const right = [{ id: 2, name: 'b' }, { id: 1, name: 'changed' }];
    const result = diffJson(left, right, { ignoreArrayOrder: true });
    expect(result.stats).toEqual({ added: 0, removed: 0, changed: 1 });
    expect(result.entries[0]).toMatchObject({ type: 'changed', leftValue: 'a', rightValue: 'changed' });
  });

  it('ignoreArrayOrder matches objects by uuid field', () => {
    const left = [{ uuid: 'x', v: 1 }, { uuid: 'y', v: 2 }];
    const right = [{ uuid: 'y', v: 2 }, { uuid: 'x', v: 1 }];
    const result = diffJson(left, right, { ignoreArrayOrder: true });
    expect(result.identical).toBe(true);
  });

  it('ignoreArrayOrder detects add/remove of objects with an id field (no id collision)', () => {
    const left = [{ id: 1 }, { id: 2 }];
    const right = [{ id: 2 }, { id: 3 }];
    const result = diffJson(left, right, { ignoreArrayOrder: true });
    expect(result.stats).toEqual({ added: 1, removed: 1, changed: 0 });
    const removed = result.entries.find((e) => e.type === 'removed');
    const added = result.entries.find((e) => e.type === 'added');
    expect(removed?.leftValue).toEqual({ id: 1 });
    expect(added?.rightValue).toEqual({ id: 3 });
  });

  it('ignoreArrayOrder falls back to deep-equality matching for objects without an id field', () => {
    const left = [{ name: 'a', v: 1 }, { name: 'b', v: 2 }];
    const right = [{ name: 'b', v: 2 }, { name: 'a', v: 1 }];
    const result = diffJson(left, right, { ignoreArrayOrder: true });
    expect(result.identical).toBe(true);
  });

  it('ignoreArrayOrder deep-equality fallback still detects real changes for objects without an id field', () => {
    const left = [{ name: 'a', v: 1 }, { name: 'b', v: 2 }];
    const right = [{ name: 'b', v: 2 }, { name: 'a', v: 99 }];
    const result = diffJson(left, right, { ignoreArrayOrder: true });
    // No shared id-like field, so unmatched elements are reported as remove+add
    // rather than a single "changed" entry — this is expected without identity.
    expect(result.stats).toEqual({ added: 1, removed: 1, changed: 0 });
  });

  it('ignoreArrayOrder handles duplicate primitive values (multiset semantics)', () => {
    const result = diffJson({ items: [1, 1, 2] }, { items: [2, 1, 1] }, { ignoreArrayOrder: true });
    expect(result.identical).toBe(true);
  });

  it('ignoreArrayOrder detects a duplicate-value count mismatch as add/remove', () => {
    const result = diffJson({ items: [1, 1, 2] }, { items: [1, 2, 2] }, { ignoreArrayOrder: true });
    expect(result.stats).toEqual({ added: 1, removed: 1, changed: 0 });
  });

  it('ignoreArrayOrder recurses into matched objects and diffs their nested arrays as multisets too', () => {
    const left = [{ id: 1, tags: ['a', 'b'] }];
    const right = [{ id: 1, tags: ['a', 'c'] }];
    const result = diffJson(left, right, { ignoreArrayOrder: true });
    // The outer objects match by id. Their nested `tags` arrays are primitive
    // arrays with no identity, so under multiset semantics 'b' -> 'c' is a
    // genuine remove + add, not a "changed" — same rule as top-level arrays.
    expect(result.stats).toEqual({ added: 1, removed: 1, changed: 0 });
    expect(result.entries.every((e) => e.path.startsWith('/0/tags/'))).toBe(true);
  });

  it('ignoreArrayOrder reports changed for a matched-by-id object when a nested array is unchanged apart from order', () => {
    const left = [{ id: 1, tags: ['a', 'b'], note: 'x' }];
    const right = [{ id: 1, tags: ['b', 'a'], note: 'y' }];
    const result = diffJson(left, right, { ignoreArrayOrder: true });
    // tags reordered only -> no diff there; note differs -> one changed entry.
    expect(result.stats).toEqual({ added: 0, removed: 0, changed: 1 });
    expect(result.entries[0]).toMatchObject({ path: '/0/note', type: 'changed', leftValue: 'x', rightValue: 'y' });
  });

  it('escapes JSON pointer special characters', () => {
    const result = diffJson({}, { 'a/b': 1, 'c~d': 2 });
    const paths = result.entries.map((e) => e.path).sort();
    expect(paths).toEqual(['/a~1b', '/c~0d']);
  });

  it('treats type changes (object vs primitive) as changed', () => {
    const result = diffJson({ a: { x: 1 } }, { a: 'hello' });
    expect(result.entries[0]).toMatchObject({ type: 'changed' });
  });
});

describe('diffToJsonPatch', () => {
  it('produces valid JSON with add/remove/replace ops', () => {
    const result = diffJson({ a: 1, b: 2 }, { a: 2, c: 3 });
    const patch = JSON.parse(diffToJsonPatch(result));
    expect(patch).toHaveLength(3);
    const ops = patch.map((p: { op: string }) => p.op).sort();
    expect(ops).toEqual(['add', 'remove', 'replace']);
  });
});

describe('diffToMarkdown', () => {
  it('reports no differences for identical input', () => {
    const result = diffJson({ a: 1 }, { a: 1 });
    expect(diffToMarkdown(result)).toContain('No differences found');
  });

  it('includes summary and sections for each diff type', () => {
    const result = diffJson({ a: 1, b: 2 }, { a: 2, c: 3 });
    const md = diffToMarkdown(result);
    expect(md).toContain('## Added');
    expect(md).toContain('## Removed');
    expect(md).toContain('## Changed');
  });
});
