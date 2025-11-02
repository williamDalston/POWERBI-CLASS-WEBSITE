'use client'

import { useState, useEffect } from 'react'

export interface LabStep {
  id: string
  instruction: string
  completed?: boolean
}

export interface InteractiveLabStepsProps {
  steps: LabStep[]
  lessonId: string
  autoSave?: boolean
  showProgress?: boolean
  collapsibleCompleted?: boolean
  className?: string
}

export default function InteractiveLabSteps({
  steps,
  lessonId,
  autoSave = true,
  showProgress = true,
  collapsibleCompleted = true,
  className = ''
}: InteractiveLabStepsProps) {
  // Load saved progress from localStorage
  const getSavedProgress = (): Record<string, boolean> => {
    if (typeof window === 'undefined') return {}
    try {
      const saved = localStorage.getItem(`lab-progress-${lessonId}`)
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  }

  const [stepStates, setStepStates] = useState<Record<string, boolean>>(
    () => {
      const saved = getSavedProgress()
      // Merge with initial step states
      const merged: Record<string, boolean> = {}
      steps.forEach((step) => {
        merged[step.id] = step.completed || saved[step.id] || false
      })
      return merged
    }
  )
  const [expandedCompleted, setExpandedCompleted] = useState(!collapsibleCompleted)

  // Calculate completion statistics
  const completedCount = Object.values(stepStates).filter(Boolean).length
  const totalSteps = steps.length
  const completionPercentage = (completedCount / totalSteps) * 100

  // Auto-save progress
  useEffect(() => {
    if (autoSave && typeof window !== 'undefined') {
      localStorage.setItem(`lab-progress-${lessonId}`, JSON.stringify(stepStates))
    }
  }, [stepStates, lessonId, autoSave])

  const toggleStep = (stepId: string) => {
    setStepStates((current) => ({
      ...current,
      [stepId]: !current[stepId]
    }))
  }

  // Separate completed and incomplete steps
  const completedSteps = steps.filter((step) => stepStates[step.id])
  const incompleteSteps = steps.filter((step) => !stepStates[step.id])
  const displaySteps = collapsibleCompleted
    ? [...incompleteSteps, ...(expandedCompleted ? completedSteps : [])]
    : steps

  return (
    <div className={`bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm ${className}`}>
      {/* Header with Progress */}
      {showProgress && (
        <div className="px-4 py-3 bg-gradient-to-r from-green-50 to-blue-50 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-sans font-semibold text-gray-900">
              Lab Progress
            </h3>
            <span className="text-sm font-sans font-medium text-gray-700">
              {completedCount} / {totalSteps} completed
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-green-500 to-blue-500 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
              role="progressbar"
              aria-valuenow={completionPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      )}

      {/* Steps List */}
      <div className="divide-y divide-gray-200">
        {displaySteps.map((step, idx) => {
          const isCompleted = stepStates[step.id]
          return (
            <div
              key={step.id}
              className={`px-4 py-3 flex items-start gap-3 transition-colors ${
                isCompleted ? 'bg-green-50' : 'bg-white hover:bg-gray-50'
              }`}
            >
              {/* Checkbox */}
              <button
                onClick={() => toggleStep(step.id)}
                className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                  isCompleted
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'border-gray-300 hover:border-green-400'
                }`}
                aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
              >
                {isCompleted && (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>

              {/* Step Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full font-sans font-medium text-sm bg-gray-100 text-gray-600 mt-0.5">
                    {steps.findIndex((s) => s.id === step.id) + 1}
                  </span>
                  <p
                    className={`font-sans text-sm leading-relaxed flex-1 ${
                      isCompleted ? 'text-gray-600 line-through' : 'text-gray-900'
                    }`}
                  >
                    {step.instruction}
                  </p>
                </div>
              </div>
            </div>
          )
        })}

        {/* Show/Hide Completed Steps Button */}
        {collapsibleCompleted && completedSteps.length > 0 && (
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
            <button
              onClick={() => setExpandedCompleted(!expandedCompleted)}
              className="w-full flex items-center justify-center gap-2 text-sm font-sans font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {expandedCompleted ? (
                <>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                  Hide completed steps ({completedSteps.length})
                </>
              ) : (
                <>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Show completed steps ({completedSteps.length})
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Completion Message */}
      {completedCount === totalSteps && completedCount > 0 && (
        <div className="px-4 py-3 bg-green-50 border-t border-green-200">
          <div className="flex items-center gap-2 text-green-800">
            <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-sans font-semibold">
              🎉 Congratulations! You&apos;ve completed all lab steps!
            </span>
          </div>
        </div>
      )}
    </div>
  )
}


