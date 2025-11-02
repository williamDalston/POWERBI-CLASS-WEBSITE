'use client'

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { logger } from '@/lib/utils/logger'

export interface CodeBlockProps {
  code: string
  language?: 'dax' | 'm' | 'sql' | 'javascript' | 'typescript' | 'json' | 'xml' | 'html' | 'css' | 'bash'
  fileName?: string
  showLineNumbers?: boolean
  startCollapsed?: boolean
  className?: string
}

export default function CodeBlock({
  code,
  language = 'javascript',
  fileName,
  showLineNumbers = true,
  startCollapsed = false,
  className = ''
}: CodeBlockProps) {
  const [isCollapsed, setIsCollapsed] = useState(startCollapsed)
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      logger.error(new Error('Failed to copy code'), { error: err })
    }
  }

  const getLanguageLabel = () => {
    const labels: Record<string, string> = {
      dax: 'DAX',
      m: 'Power Query M',
      sql: 'SQL',
      javascript: 'JavaScript',
      typescript: 'TypeScript',
      json: 'JSON',
      xml: 'XML',
      html: 'HTML',
      css: 'CSS',
      bash: 'Bash'
    }
    return labels[language] || language.toUpperCase()
  }

  const getLanguageColor = () => {
    const colors: Record<string, string> = {
      dax: 'bg-blue-100 text-blue-700',
      m: 'bg-green-100 text-green-700',
      sql: 'bg-purple-100 text-purple-700',
      javascript: 'bg-yellow-100 text-yellow-700',
      typescript: 'bg-blue-100 text-blue-700',
      json: 'bg-gray-100 text-gray-700',
      xml: 'bg-orange-100 text-orange-700',
      html: 'bg-pink-100 text-pink-700',
      css: 'bg-indigo-100 text-indigo-700',
      bash: 'bg-gray-800 text-white'
    }
    return colors[language] || 'bg-gray-100 text-gray-700'
  }

  return (
    <div className={`bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {fileName && (
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <svg className="h-4 w-4 text-gray-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              <span className="font-mono text-sm text-gray-700 truncate" title={fileName}>
                {fileName}
              </span>
            </div>
          )}
          <span className={`px-2 py-0.5 rounded text-xs font-medium flex-shrink-0 ${getLanguageColor()}`}>
            {getLanguageLabel()}
          </span>
        </div>
        <div className="flex items-center gap-1 ml-2">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors"
            aria-label={isCollapsed ? 'Expand code' : 'Collapse code'}
          >
            {isCollapsed ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            )}
          </button>
          <button
            onClick={handleCopy}
            className="p-1.5 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded transition-colors relative"
            aria-label="Copy code to clipboard"
          >
            {copied ? (
              <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Code Content */}
      {!isCollapsed && (
        <div className="relative">
          <SyntaxHighlighter
            language={language === 'dax' ? 'javascript' : language === 'm' ? 'javascript' : language}
            style={tomorrow}
            showLineNumbers={showLineNumbers}
            customStyle={{
              margin: 0,
              padding: '1rem',
              fontSize: '0.875rem',
              lineHeight: '1.5',
              fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
            }}
            lineNumberStyle={{
              paddingRight: '1rem',
              color: '#9ca3af',
              userSelect: 'none'
            }}
          >
            {code}
          </SyntaxHighlighter>
          {isCollapsed && (
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
              <button
                onClick={() => setIsCollapsed(false)}
                className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Show Code
              </button>
            </div>
          )}
        </div>
      )}

      {/* Collapsed State */}
      {isCollapsed && (
        <div className="px-4 py-3 bg-gray-50 text-center">
          <button
            onClick={() => setIsCollapsed(false)}
            className="text-sm text-gray-600 hover:text-gray-900 font-medium flex items-center justify-center gap-2 mx-auto"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Show code ({code.split('\n').length} lines)
          </button>
        </div>
      )}
    </div>
  )
}

