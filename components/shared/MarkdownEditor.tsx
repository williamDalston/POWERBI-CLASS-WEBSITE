'use client'

import { useState, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  minHeight?: string
  showToolbar?: boolean
  splitView?: boolean
}

export default function MarkdownEditor({
  value,
  onChange,
  placeholder = 'Write your notes in Markdown...',
  minHeight = '400px',
  showToolbar = true,
  splitView = false,
}: MarkdownEditorProps) {
  const [showPreview, setShowPreview] = useState(!splitView)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const insertMarkdown = (before: string, after: string = '') => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = value.substring(start, end)
    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end)
    
    onChange(newText)
    
    // Restore cursor position
    setTimeout(() => {
      textarea.focus()
      const newCursorPos = start + before.length + selectedText.length + after.length
      textarea.setSelectionRange(newCursorPos, newCursorPos)
    }, 0)
  }

  const toolbarButtons = [
    { label: 'Bold', icon: 'B', markdown: '**', after: '**', shortcut: 'Ctrl+B' },
    { label: 'Italic', icon: 'I', markdown: '*', after: '*', shortcut: 'Ctrl+I' },
    { label: 'Code', icon: '</>', markdown: '`', after: '`', shortcut: 'Ctrl+`' },
    { label: 'Link', icon: '🔗', markdown: '[', after: '](url)', shortcut: 'Ctrl+K' },
  ]

  const blockButtons = [
    { label: 'H2', markdown: '## ' },
    { label: 'H3', markdown: '### ' },
    { label: 'Bullet List', markdown: '- ' },
    { label: 'Number List', markdown: '1. ' },
    { label: 'Code Block', markdown: '```\n', after: '\n```' },
    { label: 'Quote', markdown: '> ' },
    { label: 'Divider', markdown: '\n---\n' },
  ]

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      {showToolbar && (
        <div className="flex items-center gap-2 p-2 border-b border-gray-200 bg-gray-50 flex-wrap">
          {/* Inline Formatting */}
          <div className="flex items-center gap-1 border-r border-gray-300 pr-2">
            {toolbarButtons.map((btn) => (
              <button
                key={btn.label}
                type="button"
                onClick={() => insertMarkdown(btn.markdown, btn.after)}
                className="px-2 py-1 text-sm font-sans text-gray-700 hover:bg-gray-200 rounded transition-colors flex items-center gap-1"
                title={btn.label}
              >
                <span className="font-bold">{btn.icon}</span>
              </button>
            ))}
          </div>

          {/* Block Formatting */}
          <div className="flex items-center gap-1">
            {blockButtons.map((btn) => (
              <button
                key={btn.label}
                type="button"
                onClick={() => insertMarkdown(btn.markdown, btn.after)}
                className="px-2 py-1 text-xs font-sans text-gray-700 hover:bg-gray-200 rounded transition-colors"
                title={btn.label}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Preview Toggle (for split view) */}
          {splitView && (
            <div className="flex items-center gap-1 border-l border-gray-300 pl-2 ml-auto">
              <button
                type="button"
                onClick={() => setShowPreview(!showPreview)}
                className="px-2 py-1 text-xs font-sans text-gray-700 hover:bg-gray-200 rounded transition-colors"
              >
                {showPreview ? '📝 Edit' : '👁️ Preview'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Editor/Preview */}
      <div className="flex-1 overflow-hidden" style={{ minHeight }}>
        {splitView ? (
          <div className="grid grid-cols-2 h-full">
            {/* Editor */}
            <div className="border-r border-gray-200 flex flex-col">
              <textarea
                ref={textareaRef}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="flex-1 w-full p-4 font-sans text-sm focus:outline-none resize-none leading-relaxed"
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace' }}
              />
            </div>

            {/* Preview */}
            {showPreview && (
              <div className="overflow-auto p-4 prose prose-sm max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code({ className, children, ...props }: any) {
                      const match = /language-(\w+)/.exec(className || '')
                      const isInline = !match
                      return !isInline && match ? (
                        <SyntaxHighlighter
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      )
                    },
                  }}
                >
                  {value || placeholder}
                </ReactMarkdown>
              </div>
            )}
          </div>
        ) : (
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full h-full p-4 font-sans text-sm focus:outline-none resize-none leading-relaxed"
            style={{ fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace' }}
          />
        )}
      </div>
    </div>
  )
}

