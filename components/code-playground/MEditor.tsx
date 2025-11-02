'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

// Dynamically import Monaco Editor to avoid SSR issues
const MonacoEditor = dynamic(
  () => import('@monaco-editor/react'),
  { ssr: false, loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded" /> }
)

interface MEditorProps {
  initialCode?: string
  onRun?: (code: string) => void
  height?: string
  template?: {
    name: string
    code: string
  }
}

export default function MEditor({ 
  initialCode = '', 
  onRun,
  height = '400px',
  template
}: MEditorProps) {
  const [code, setCode] = useState(initialCode || template?.code || '')
  const [output, setOutput] = useState<string>('')
  const [isRunning, setIsRunning] = useState(false)
  const [showHints, setShowHints] = useState(false)

  const mHints = [
    'let\n  Source = Excel.Workbook(File.Contents("C:\\data.xlsx"), null, true)\nin\n  Source',
    'let\n  Source = Csv.Document(File.Contents("C:\\data.csv"), [Delimiter=",", Columns=5])\nin\n  Source',
    'let\n  Source = Table.SelectRows(Sales, each [Amount] > 1000)\nin\n  Source',
    'let\n  Source = Table.TransformColumnTypes(Sales, {{"Date", type date}})\nin\n  Source',
    'let\n  Source = Table.UnpivotOtherColumns(Sales, {"ID"}, "Attribute", "Value")\nin\n  Source',
    'let\n  Merged = Table.NestedJoin(Table1, {"ID"}, Table2, {"ID"}, "NewColumn")\nin\n  Merged',
    'let\n  Source = Table.AddColumn(Sales, "Category", each if [Amount] > 1000 then "High" else "Low")\nin\n  Source',
    'let\n  Grouped = Table.Group(Sales, {"Region"}, {{"Total", each List.Sum([Amount])}})\nin\n  Grouped'
  ]

  const handleRun = () => {
    setIsRunning(true)
    
    // Simulate code execution with a delay
    setTimeout(() => {
      // In a real implementation, this would execute M code
      // For now, we'll show a placeholder output
      setOutput('✅ Query executed successfully!\n\nNote: This is a preview. Full M execution will be available when connected to Power BI Desktop.')
      setIsRunning(false)
      onRun?.(code)
    }, 800)
  }

  const handleReset = () => {
    setCode(template?.code || initialCode)
    setOutput('')
  }

  const handleClear = () => {
    setCode('')
    setOutput('')
  }

  const insertHint = (hint: string) => {
    setCode(hint)
    setShowHints(false)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-4 py-3 bg-gradient-to-r from-green-50 to-teal-50 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
          </svg>
          <h3 className="font-sans font-semibold text-gray-900">Power Query M Editor</h3>
          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">
            Power Query
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowHints(!showHints)}
            className="px-3 py-1 text-sm font-sans text-gray-700 hover:bg-green-100 rounded transition-colors"
          >
            💡 Hints
          </button>
        </div>
      </div>

      {/* Hints Dropdown */}
      {showHints && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 py-2 bg-green-50 border-b border-green-200"
        >
          <div className="grid grid-cols-1 gap-2">
            {mHints.map((hint, idx) => (
              <button
                key={idx}
                onClick={() => insertHint(hint)}
                className="px-3 py-2 text-left text-xs font-mono bg-white hover:bg-green-100 border border-green-200 rounded transition-colors"
              >
                {hint.split('\n')[0]}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Editor */}
      <div className="relative">
        <MonacoEditor
          height={height}
          language="m"
          value={code}
          onChange={(value) => setCode(value || '')}
          theme="vs-light"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: 'on' as const,
            lineNumbers: 'on' as const,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            tabSize: 2,
            padding: { top: 10, bottom: 10 },
          }}
        />
      </div>

      {/* Controls */}
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={handleRun}
            disabled={isRunning || !code.trim()}
            className="px-4 py-2 bg-accent text-white rounded-lg font-sans font-medium hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isRunning ? (
              <>
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Running...
              </>
            ) : (
              <>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Run Query
              </>
            )}
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-sans font-medium hover:bg-gray-100 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-sans font-medium hover:bg-gray-100 transition-colors"
          >
            Clear
          </button>
        </div>
        <div className="text-xs text-gray-500 font-sans">
          {code.split('\n').length} lines
        </div>
      </div>

      {/* Output */}
      {output && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-t border-gray-200 bg-gray-50"
        >
          <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-200">
            <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h4 className="font-sans font-semibold text-gray-900 text-sm">Query Result</h4>
          </div>
          <div className="px-4 py-3">
            <pre className="font-mono text-sm text-gray-700 whitespace-pre-wrap bg-white p-3 rounded border border-gray-200">
              {output}
            </pre>
          </div>
        </motion.div>
      )}
    </div>
  )
}


