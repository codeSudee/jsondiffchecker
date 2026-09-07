import { parseJson, formatJson, diffJson, diffToJsonPatch, diffToMarkdown, type JsonValue, type ParseResult } from '../lib/json-diff';
import { renderDiffTree } from '../lib/diff-renderer';

interface PaneState {
  side: 'left' | 'right';
  root: HTMLElement;
  editor: HTMLTextAreaElement;
  errorBanner: HTMLElement;
  errorMessage: HTMLElement;
  charCount: HTMLElement;
  urlBar: HTMLElement;
  urlInput: HTMLInputElement;
  fileInput: HTMLInputElement;
  parsed: ParseResult;
}

function initPane(root: HTMLElement, side: 'left' | 'right'): PaneState {
  const editor = root.querySelector<HTMLTextAreaElement>('[data-role="editor"]')!;
  const errorBanner = root.querySelector<HTMLElement>('[data-role="error-banner"]')!;
  const errorMessage = root.querySelector<HTMLElement>('[data-role="error-message"]')!;
  const charCount = root.querySelector<HTMLElement>('[data-role="char-count"]')!;
  const urlBar = root.querySelector<HTMLElement>('[data-role="url-bar"]')!;
  const urlInput = root.querySelector<HTMLInputElement>('[data-role="url-input"]')!;
  const fileInput = root.querySelector<HTMLInputElement>('[data-role="file-input"]')!;

  return {
    side,
    root,
    editor,
    errorBanner,
    errorMessage,
    charCount,
    urlBar,
    urlInput,
    fileInput,
    parsed: { ok: false },
  };
}

function updateCharCount(pane: PaneState) {
  const len = pane.editor.value.length;
  pane.charCount.textContent = `${len.toLocaleString()} char${len === 1 ? '' : 's'}`;
}

function showError(pane: PaneState, message: string, line?: number, column?: number) {
  pane.errorBanner.classList.remove('hidden');
  pane.errorBanner.classList.add('flex');
  pane.errorMessage.textContent = line !== undefined ? `Line ${line}, column ${column}: ${message}` : message;
}

function hideError(pane: PaneState) {
  pane.errorBanner.classList.add('hidden');
  pane.errorBanner.classList.remove('flex');
}

function validatePane(pane: PaneState): ParseResult {
  const text = pane.editor.value;
  if (text.trim().length === 0) {
    pane.parsed = { ok: false };
    hideError(pane);
    return pane.parsed;
  }
  const result = parseJson(text);
  pane.parsed = result;
  if (!result.ok && result.error) {
    showError(pane, result.error.message, result.error.line, result.error.column);
  } else {
    hideError(pane);
  }
  return result;
}

function setupPaneInteractions(pane: PaneState, onChange: () => void) {
  let debounceTimer: ReturnType<typeof setTimeout> | undefined;
  pane.editor.addEventListener('input', () => {
    updateCharCount(pane);
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      validatePane(pane);
      onChange();
    }, 250);
  });

  pane.root.querySelector('[data-action="format"]')?.addEventListener('click', () => {
    const result = validatePane(pane);
    if (result.ok && result.value !== undefined) {
      pane.editor.value = formatJson(result.value);
      updateCharCount(pane);
      onChange();
    }
  });

  pane.root.querySelector('[data-action="clear"]')?.addEventListener('click', () => {
    pane.editor.value = '';
    updateCharCount(pane);
    hideError(pane);
    pane.parsed = { ok: false };
    onChange();
  });

  pane.root.querySelector('[data-action="upload"]')?.addEventListener('click', () => {
    pane.fileInput.click();
  });

  pane.fileInput.addEventListener('change', () => {
    const file = pane.fileInput.files?.[0];
    if (!file) return;
    if (file.size > 20 * 1024 * 1024) {
      showError(pane, 'File is larger than 20 MB. Try a smaller file to avoid slowing down your browser.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      pane.editor.value = String(reader.result ?? '');
      updateCharCount(pane);
      validatePane(pane);
      onChange();
    };
    reader.onerror = () => {
      showError(pane, 'Could not read that file.');
    };
    reader.readAsText(file);
    pane.fileInput.value = '';
  });

  pane.root.querySelector('[data-action="load-url"]')?.addEventListener('click', () => {
    pane.urlBar.classList.remove('hidden');
    pane.urlBar.classList.add('flex');
    pane.urlInput.focus();
  });

  pane.root.querySelector('[data-action="cancel-url"]')?.addEventListener('click', () => {
    pane.urlBar.classList.add('hidden');
    pane.urlBar.classList.remove('flex');
  });

  const doFetch = async () => {
    const url = pane.urlInput.value.trim();
    if (!url) return;
    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.protocol !== 'https:' && parsedUrl.protocol !== 'http:') {
        showError(pane, 'Only http(s) URLs are supported.');
        return;
      }
    } catch {
      showError(pane, 'That does not look like a valid URL.');
      return;
    }
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (!res.ok) {
        showError(pane, `Request failed with status ${res.status}.`);
        return;
      }
      const text = await res.text();
      pane.editor.value = text;
      updateCharCount(pane);
      validatePane(pane);
      onChange();
      pane.urlBar.classList.add('hidden');
      pane.urlBar.classList.remove('flex');
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        showError(pane, 'Request timed out after 15 seconds.');
      } else {
        showError(pane, 'Could not fetch that URL. The server may not allow cross-origin requests from this page.');
      }
    }
  };

  pane.root.querySelector('[data-action="fetch-url"]')?.addEventListener('click', doFetch);
  pane.urlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doFetch();
  });
}

function initDiffChecker(container: HTMLElement) {
  const leftRoot = container.querySelector<HTMLElement>('[data-pane="left"]')!;
  const rightRoot = container.querySelector<HTMLElement>('[data-pane="right"]')!;
  const leftPane = initPane(leftRoot, 'left');
  const rightPane = initPane(rightRoot, 'right');

  const diffTree = container.querySelector<HTMLElement>('[data-role="diff-tree"]')!;
  const diffEmpty = container.querySelector<HTMLElement>('[data-role="diff-empty"]')!;
  const statAdded = container.querySelector<HTMLElement>('[data-role="stat-added"]')!;
  const statRemoved = container.querySelector<HTMLElement>('[data-role="stat-removed"]')!;
  const statChanged = container.querySelector<HTMLElement>('[data-role="stat-changed"]')!;
  const ignoreArrayOrderToggle = container.querySelector<HTMLInputElement>('[data-role="ignore-array-order"]')!;

  let lastPatch = '';
  let lastMarkdown = '';
  let diffRows: HTMLElement[] = [];
  let activeDiffIndex = -1;

  function clearActiveHighlight() {
    if (activeDiffIndex >= 0 && diffRows[activeDiffIndex]) {
      diffRows[activeDiffIndex].classList.remove('ring-2', 'ring-link');
    }
  }

  function focusDiffRow(index: number) {
    if (diffRows.length === 0) return;
    clearActiveHighlight();
    activeDiffIndex = ((index % diffRows.length) + diffRows.length) % diffRows.length;
    const row = diffRows[activeDiffIndex];
    row.classList.add('ring-2', 'ring-link');
    // Expand ancestors
    let el: HTMLElement | null = row;
    while (el) {
      const details: HTMLDetailsElement | null = el.closest('details');
      if (details && !details.open) details.open = true;
      el = details ? details.parentElement : null;
    }
    row.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  function recompute() {
    const leftOk = leftPane.parsed.ok && leftPane.parsed.value !== undefined;
    const rightOk = rightPane.parsed.ok && rightPane.parsed.value !== undefined;

    if (!leftOk || !rightOk) {
      diffTree.classList.add('hidden');
      diffEmpty.classList.remove('hidden');
      diffEmpty.classList.add('flex');
      statAdded.textContent = '0';
      statRemoved.textContent = '0';
      statChanged.textContent = '0';
      diffRows = [];
      activeDiffIndex = -1;
      return;
    }

    const leftValue = leftPane.parsed.value as JsonValue;
    const rightValue = rightPane.parsed.value as JsonValue;

    const result = diffJson(leftValue, rightValue, { ignoreArrayOrder: ignoreArrayOrderToggle.checked });
    statAdded.textContent = String(result.stats.added);
    statRemoved.textContent = String(result.stats.removed);
    statChanged.textContent = String(result.stats.changed);

    lastPatch = diffToJsonPatch(result);
    lastMarkdown = diffToMarkdown(result);

    if (result.identical) {
      diffTree.classList.add('hidden');
      diffEmpty.classList.remove('hidden');
      diffEmpty.classList.add('flex');
      diffEmpty.querySelector('p')!.textContent = 'No differences found — both documents are semantically identical.';
      diffRows = [];
      activeDiffIndex = -1;
      return;
    }

    diffEmpty.classList.add('hidden');
    diffEmpty.classList.remove('flex');
    diffTree.classList.remove('hidden');
    diffTree.innerHTML = renderDiffTree(leftValue, rightValue, result.entries);

    diffRows = Array.from(diffTree.querySelectorAll<HTMLElement>('.diff-row')).filter(
      (r) => r.dataset.difftype !== 'unchanged'
    );
    activeDiffIndex = -1;
  }

  setupPaneInteractions(leftPane, recompute);
  setupPaneInteractions(rightPane, recompute);

  ignoreArrayOrderToggle.addEventListener('change', recompute);

  container.querySelector('[data-action="next-diff"]')?.addEventListener('click', () => {
    if (diffRows.length) focusDiffRow(activeDiffIndex + 1);
  });
  container.querySelector('[data-action="prev-diff"]')?.addEventListener('click', () => {
    if (diffRows.length) focusDiffRow(activeDiffIndex - 1);
  });

  document.addEventListener('keydown', (e) => {
    if (document.activeElement === leftPane.editor || document.activeElement === rightPane.editor) return;
    if (diffRows.length === 0) return;
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      focusDiffRow(activeDiffIndex + 1);
    } else if (e.key === 'Enter' && e.shiftKey) {
      e.preventDefault();
      focusDiffRow(activeDiffIndex - 1);
    }
  });

  diffTree.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>('[data-action="copy-path"]');
    if (!btn) return;
    const path = btn.dataset.path ?? '';
    navigator.clipboard?.writeText(path).then(
      () => {
        const original = btn.textContent;
        btn.textContent = '✓';
        setTimeout(() => {
          btn.textContent = original;
        }, 1000);
      },
      () => {
        btn.title = 'Copy failed — select and copy manually';
      }
    );
  });

  container.querySelector('[data-action="copy-diff"]')?.addEventListener('click', async (e) => {
    if (!lastPatch) return;
    const btn = e.currentTarget as HTMLElement;
    const original = btn.textContent;
    try {
      await navigator.clipboard?.writeText(lastPatch);
      btn.textContent = 'Copied!';
    } catch {
      btn.textContent = 'Copy failed';
    }
    setTimeout(() => {
      btn.textContent = original;
    }, 1200);
  });

  const downloadMenu = container.querySelector<HTMLElement>('[data-role="download-menu"]')!;
  const downloadToggle = container.querySelector<HTMLElement>('[data-action="download-menu-toggle"]')!;

  downloadToggle.addEventListener('click', () => {
    const isHidden = downloadMenu.classList.contains('hidden');
    downloadMenu.classList.toggle('hidden', !isHidden ? true : false);
    downloadMenu.classList.toggle('flex', isHidden);
    downloadToggle.setAttribute('aria-expanded', String(isHidden));
  });

  document.addEventListener('click', (e) => {
    if (!downloadMenu.contains(e.target as Node) && !downloadToggle.contains(e.target as Node)) {
      downloadMenu.classList.add('hidden');
      downloadMenu.classList.remove('flex');
      downloadToggle.setAttribute('aria-expanded', 'false');
    }
  });

  downloadMenu.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      downloadMenu.classList.add('hidden');
      downloadMenu.classList.remove('flex');
      downloadToggle.setAttribute('aria-expanded', 'false');
      downloadToggle.focus();
    }
  });

  function download(filename: string, content: string, mime: string) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  container.querySelector('[data-action="download-patch"]')?.addEventListener('click', () => {
    if (!lastPatch) return;
    download('json-diff-patch.json', lastPatch, 'application/json');
  });

  container.querySelector('[data-action="download-markdown"]')?.addEventListener('click', () => {
    if (!lastMarkdown) return;
    download('json-diff-changelog.md', lastMarkdown, 'text/markdown');
  });
}

function boot() {
  const container = document.querySelector<HTMLElement>('[data-role="diff-checker"]');
  if (!container) return;
  initDiffChecker(container);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
