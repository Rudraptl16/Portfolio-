import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
import { copyToClipboard } from '../../utils/copyProtection';
import toast from 'react-hot-toast';

/**
 * Reusable CodeSnippet component with Copy Code functionality
 * Explicitly marked with data-copy-allowed="true" for exception-based copy protection.
 */
export default function CodeSnippet({
  code = '',
  language = 'bash',
  title = '',
  className = '',
  showLineNumbers = false
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    const success = await copyToClipboard(code);
    if (success) {
      setCopied(true);
      toast.success('Code copied to clipboard!', {
        id: 'code-copy-toast',
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    } else {
      toast.error('Failed to copy code to clipboard.');
    }
  };

  const lines = code.trim().split('\n');

  return (
    <div
      data-copy-allowed="true"
      className={`rounded-xl sm:rounded-2xl border border-dark-border bg-dark-surface/90 backdrop-blur-md overflow-hidden shadow-lg transition-all duration-300 ${className}`}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-3.5 sm:px-4 py-2 sm:py-2.5 border-b border-dark-border bg-dark-textMain/[0.03]">
        <div className="flex items-center gap-2 min-w-0">
          <Terminal size={14} className="text-indigo-500 dark:text-indigo-400 shrink-0" />
          <span className="font-mono text-[11px] sm:text-xs font-bold text-dark-textMain uppercase tracking-wider truncate">
            {title || language}
          </span>
          {title && language && (
            <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-mono uppercase bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
              {language}
            </span>
          )}
        </div>

        {/* Copy Code Action Button */}
        <button
          type="button"
          data-copy-allowed="true"
          onClick={handleCopy}
          aria-label="Copy Code"
          title="Copy Code to Clipboard"
          className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs font-mono font-bold tracking-wide uppercase transition-all duration-200 border cursor-pointer bg-dark-textMain/[0.04] hover:bg-dark-textMain/[0.08] text-dark-textMuted hover:text-dark-textMain border-dark-border hover:border-indigo-500/40"
        >
          {copied ? (
            <>
              <Check size={12} className="text-emerald-500 dark:text-emerald-400 shrink-0" />
              <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={12} className="text-indigo-500 dark:text-indigo-400 shrink-0" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-3.5 sm:p-4 overflow-x-auto custom-scrollbar">
        <pre
          data-copy-allowed="true"
          className="font-mono text-xs sm:text-sm text-dark-textMain leading-relaxed select-text"
        >
          <code data-copy-allowed="true" className="select-text">
            {showLineNumbers ? (
              lines.map((line, idx) => (
                <div key={idx} className="table-row">
                  <span className="table-cell pr-3 text-dark-textMuted/40 select-none text-right font-mono text-[11px]">
                    {idx + 1}
                  </span>
                  <span className="table-cell select-text">{line}</span>
                </div>
              ))
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
