import React, { useEffect } from 'react';
import { isEditableElement, isCopyAuthorized } from '../utils/copyProtection';

/**
 * Reusable CopyProtection Component
 * 
 * Enforces global content protection across the portfolio while strictly permitting
 * authorized exceptions (Copy buttons, email/phone copy, code copy, and form inputs).
 */
export default function CopyProtection({ children, disabled = false }) {
  useEffect(() => {
    if (disabled || typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    // 1. Context Menu (Right Click) Protection
    const handleContextMenu = (e) => {
      // Allow normal right-click interaction inside form inputs & textareas
      if (isEditableElement(e.target) || e.target.closest('[data-contextmenu-allowed="true"]')) {
        return;
      }

      // Block casual image saving via right-click
      // Block general portfolio text context menu
      e.preventDefault();
    };

    // 2. Global Copy & Cut Protection
    const handleCopy = (e) => {
      if (isCopyAuthorized(e.target) || isCopyAuthorized(document.activeElement)) {
        return; // Allow authorized copy
      }

      // Prevent unauthorized copy
      e.preventDefault();
      if (e.clipboardData) {
        e.clipboardData.clearData();
      }
    };

    const handleCut = (e) => {
      if (isCopyAuthorized(e.target) || isCopyAuthorized(document.activeElement)) {
        return; // Allow authorized cut in inputs
      }

      e.preventDefault();
    };

    // 3. Keyboard Shortcut Protection (Ctrl+C, Cmd+C, Ctrl+X, Cmd+X, Ctrl+A outside inputs)
    const handleKeyDown = (e) => {
      const isModifierPressed = e.ctrlKey || e.metaKey;

      if (isModifierPressed) {
        const key = e.key ? e.key.toLowerCase() : '';

        // Block Ctrl+C / Cmd+C (Copy) and Ctrl+X / Cmd+X (Cut) for unauthorized targets
        if (key === 'c' || key === 'x') {
          if (!isCopyAuthorized(e.target) && !isCopyAuthorized(document.activeElement)) {
            e.preventDefault();
            return;
          }
        }

        // Block Ctrl+A / Cmd+A (Select All) on general page text
        // Allow select all inside editable form fields or data-copy-allowed areas
        if (key === 'a') {
          if (!isEditableElement(e.target) && !e.target.closest('[data-copy-allowed="true"]')) {
            e.preventDefault();
            return;
          }
        }

        // Prevent standard source inspection shortcuts (DevTools)
        // Ctrl+Shift+I / Cmd+Option+I, Ctrl+Shift+J, Ctrl+U
        if (
          (e.shiftKey && (key === 'i' || key === 'j' || key === 'c')) ||
          key === 'u'
        ) {
          e.preventDefault();
          return;
        }
      }

      // F12 key (DevTools)
      if (e.key === 'F12') {
        e.preventDefault();
      }
    };

    // 4. Text Selection Start Protection (selectstart)
    const handleSelectStart = (e) => {
      // Allow selection inside inputs, textareas, or explicitly authorized containers
      if (isEditableElement(e.target) || e.target.closest('[data-copy-allowed="true"]')) {
        return;
      }

      // Block selection of normal portfolio text
      e.preventDefault();
    };

    // 5. Drag & Drop Protection (dragstart)
    const handleDragStart = (e) => {
      // Prevent casual image dragging
      const isImage = e.target.tagName?.toLowerCase() === 'img' || e.target.closest('img');
      if (isImage) {
        e.preventDefault();
        return;
      }

      // Prevent dragging unauthorized text selections
      if (!isEditableElement(e.target) && !e.target.closest('[draggable="true"]')) {
        e.preventDefault();
      }
    };

    // Attach listeners with capture = true to intercept before default browser actions
    document.addEventListener('contextmenu', handleContextMenu, true);
    document.addEventListener('copy', handleCopy, true);
    document.addEventListener('cut', handleCut, true);
    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('selectstart', handleSelectStart, true);
    document.addEventListener('dragstart', handleDragStart, true);

    // Clean up event listeners on unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu, true);
      document.removeEventListener('copy', handleCopy, true);
      document.removeEventListener('cut', handleCut, true);
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('selectstart', handleSelectStart, true);
      document.removeEventListener('dragstart', handleDragStart, true);
    };
  }, [disabled]);

  // Support both wrapping mode and standalone mode
  return children ? <>{children}</> : null;
}
