'use client'

import { useState } from 'react'
import DAXEditor from '../code-playground/DAXEditor'
import MEditor from '../code-playground/MEditor'

interface TryItYourselfProps {
  title: string
  instruction: string
  type: 'dax' | 'm'
  template?: string
  hint?: string
  solution?: string
}

export default function TryItYourself({
  title,
  instruction,
  type,
  template,
  hint,
  solution
}: TryItYourselfProps) {
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)

  return (
    <div className="my-6 bg-gradient-to-br from-accent/5 to-blue-50 rounded-lg border border-accent/20 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 bg-gradient-to-r from-accent to-accent-dark flex items-center gap-2">
        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
        <h3 className="font-serif text-white font-bold text-lg">{title}</h3>
      </div>

      {/* Instruction */}
      <div className="px-4 py-3 bg-white border-b border-gray-200">
        <p className="font-sans text-gray-700 leading-relaxed">{instruction}</p>
      </div>

      {/* Code Editor */}
      <div className="px-4 py-4 bg-white">
        {type === 'dax' && (
          <DAXEditor
            initialCode={template}
            template={template ? { name: 'Template', code: template } : undefined}
            height="300px"
          />
        )}
        {type === 'm' && (
          <MEditor
            initialCode={template}
            template={template ? { name: 'Template', code: template } : undefined}
            height="300px"
          />
        )}
      </div>

      {/* Hint & Solution */}
      {(hint || solution) && (
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex flex-wrap gap-2">
          {hint && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="px-4 py-2 border border-yellow-400 text-yellow-700 bg-yellow-50 font-sans font-medium rounded-lg hover:bg-yellow-100 transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
          )}
          {solution && (
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="px-4 py-2 border border-green-600 text-green-700 bg-green-50 font-sans font-medium rounded-lg hover:bg-green-100 transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {showSolution ? 'Hide Solution' : 'View Solution'}
            </button>
          )}
        </div>
      )}

      {/* Hint Display */}
      {showHint && hint && (
        <div className="px-4 py-3 bg-yellow-50 border-t border-yellow-200">
          <p className="font-sans text-yellow-900">{hint}</p>
        </div>
      )}

      {/* Solution Display */}
      {showSolution && solution && (
        <div className="px-4 py-3 bg-green-50 border-t border-green-200">
          <h4 className="font-sans font-semibold text-green-900 mb-2">Solution:</h4>
          <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap bg-white p-3 rounded border border-green-200">
            {solution}
          </pre>
        </div>
      )}
    </div>
  )
}





