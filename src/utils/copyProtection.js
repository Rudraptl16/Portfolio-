// Transient authorization window for programmatic clipboard operations
let authorizedCopyTimer = null;
let isAuthorizedCopyActiveFlag = false;

/**
 * Temporarily flags that an authorized copy operation is occurring.
 * Used so browser DOM 'copy' events triggered by button clicks are allowed through.
 */
export function markAuthorizedCopy(durationMs = 1500) {
  isAuthorizedCopyActiveFlag = true;
  if (authorizedCopyTimer) {
    clearTimeout(authorizedCopyTimer);
  }
  authorizedCopyTimer = setTimeout(() => {
    isAuthorizedCopyActiveFlag = false;
  }, durationMs);
}

/**
 * Returns true if an authorized copy operation is currently underway.
 */
export function isAuthorizedCopyActive() {
  return isAuthorizedCopyActiveFlag;
}

/**
 * Safe clipboard copy utility with fallback for cross-browser & mobile support.
 * Ensures the Clipboard API is called safely without being blocked by global event listeners.
 * 
 * @param {string} text - The text to write to clipboard
 * @returns {Promise<boolean>} - Resolves to true if copy succeeded, false otherwise
 */
export async function copyToClipboard(text) {
  if (text === null || text === undefined) return false;
  const content = String(text);

  // Set transient authorization flag before clipboard operation
  markAuthorizedCopy();

  // Try standard modern Async Clipboard API first
  if (typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    try {
      await navigator.clipboard.writeText(content);
      return true;
    } catch (err) {
      console.warn('Navigator clipboard.writeText failed, trying fallback textarea:', err);
    }
  }

  // Robust fallback using offscreen textarea for older browsers or restricted contexts
  if (typeof document !== 'undefined') {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = content;
      textarea.setAttribute('readonly', '');
      textarea.setAttribute('data-copy-allowed', 'true');
      textarea.style.position = 'fixed';
      textarea.style.top = '-9999px';
      textarea.style.left = '-9999px';
      textarea.style.opacity = '0';
      textarea.style.pointerEvents = 'none';
      document.body.appendChild(textarea);

      textarea.focus();
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);

      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);

      return Boolean(successful);
    } catch (fallbackErr) {
      console.error('Fallback clipboard copy failed:', fallbackErr);
      return false;
    }
  }

  return false;
}

/**
 * Checks if an element is an editable form input or textarea.
 * Form controls must remain fully interactive (select, copy, cut, paste, right-click context menu).
 */
export function isEditableElement(target) {
  if (!target) return false;
  if (typeof Element !== 'undefined' && !(target instanceof Element)) return false;

  const tagName = target.tagName ? target.tagName.toLowerCase() : '';
  if (tagName === 'input' || tagName === 'textarea') {
    const type = target.getAttribute?.('type')?.toLowerCase();
    // Non-textual input types like submit/button don't contain user-typed text
    if (type === 'button' || type === 'submit' || type === 'reset' || type === 'image') {
      return false;
    }
    return true;
  }

  if (target.isContentEditable || target.getAttribute?.('contenteditable') === 'true') {
    return true;
  }

  return false;
}

/**
 * Core exception-checking function.
 * Determines whether a copy or selection action is explicitly authorized.
 * 
 * Authorized cases:
 * 1. Form inputs, textareas, and contenteditable fields.
 * 2. Elements or ancestors with `data-copy-allowed="true"`.
 * 3. Buttons/links labeled "Copy", "Copy Code", or with title/aria-label containing "Copy".
 * 4. Dedicated email/phone copy buttons or elements marked with `data-copy-email` / `data-copy-phone`.
 * 5. Active user selection contained inside an authorized element.
 * 6. Programmatic copy in progress via `isAuthorizedCopyActive()`.
 */
export function isCopyAuthorized(target) {
  // 1. Programmatic authorized copy currently in progress
  if (isAuthorizedCopyActive()) {
    return true;
  }

  if (!target) {
    // Check if current document.activeElement is an editable element or authorized
    if (typeof document !== 'undefined' && document.activeElement && document.activeElement !== document.body) {
      if (isCopyAuthorized(document.activeElement)) return true;
    }
    return false;
  }

  if (typeof Element !== 'undefined' && !(target instanceof Element)) {
    return false;
  }

  // 2. Direct editable element (inputs, textareas, contact forms)
  if (isEditableElement(target) || target.closest?.('input, textarea, [contenteditable="true"]')) {
    return true;
  }

  // 3. Explicit exception marker: data-copy-allowed="true"
  if (target.closest?.('[data-copy-allowed="true"], [data-copy="true"]')) {
    return true;
  }

  // 4. Buttons, links or clickable elements explicitly dedicated to copying
  const button = target.closest?.('button, [role="button"], a');
  if (button) {
    // Check attributes
    if (
      button.getAttribute?.('data-copy-allowed') === 'true' ||
      button.hasAttribute?.('data-copy-email') ||
      button.hasAttribute?.('data-copy-phone')
    ) {
      return true;
    }

    // Check title & aria-label
    const title = (button.getAttribute?.('title') || '').toLowerCase();
    const ariaLabel = (button.getAttribute?.('aria-label') || '').toLowerCase();
    if (title.includes('copy') || ariaLabel.includes('copy')) {
      return true;
    }

    // Check visible text
    const text = (button.innerText || button.textContent || '').trim().toLowerCase();
    if (
      text.includes('copy') ||
      text.includes('copied') ||
      text.includes('copy code') ||
      text.includes('copy email') ||
      text.includes('copy phone')
    ) {
      return true;
    }

    // Check class names (e.g. copy-btn, copy-hash)
    const className = (typeof button.className === 'string' ? button.className : '').toLowerCase();
    if (className.includes('copy')) {
      return true;
    }
  }

  // 5. Active user selection check (if selection is inside an authorized container or input)
  if (typeof window !== 'undefined' && window.getSelection) {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0 && !selection.isCollapsed) {
      const anchorNode = selection.anchorNode;
      const anchorEl = (typeof Element !== 'undefined' && anchorNode instanceof Element) ? anchorNode : anchorNode?.parentElement;
      if (anchorEl) {
        if (isEditableElement(anchorEl) || anchorEl.closest?.('[data-copy-allowed="true"]')) {
          return true;
        }
      }
    }
  }

  return false;
}
