'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DAXEditor from '../code-playground/DAXEditor'
import MEditor from '../code-playground/MEditor'

type LabType = 'dax' | 'm' | 'concept'

interface LabStep {
  id: string
  title: string
  instruction: string
  hint?: string
  solution?: string
  type: LabType
  code?: string
}

interface InteractiveLabProps {
  title: string
  description: string
  steps: LabStep[]
  dataset?: {
    name: string
    url: string
  }
}

export default function InteractiveLab({
  title,
  description,
  steps,
  dataset
}: InteractiveLabProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())

  const currentLabStep = steps[currentStep]
  const isLastStep = currentStep === steps.length - 1
  const isFirstStep = currentStep === 0

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStep(currentStep + 1)
      setShowHint(false)
      setShowSolution(false)
    }
  }

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep(currentStep - 1)
      setShowHint(false)
      setShowSolution(false)
    }
  }

  const handleComplete = () => {
    setCompletedSteps(new Set([...completedSteps, currentLabStep.id]))
  }

  const handleShowSolution = () => {
    setShowSolution(!showSolution)
  }

  const progress = ((completedSteps.size + 1) / steps.length) * 100

  return (
    <div className="bg-white rounded-lg border-2 border-accent overflow-hidden shadow-lg">
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-accent to-accent-dark">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <h2 className="text-2xl font-serif text-white font-bold">{title}</h2>
            </div>
            <p className="text-white text-opacity-90 font-sans">{description}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 bg-white bg-opacity-20 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-white rounded-full"
          />
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-between mt-3">
          {steps.map((step, idx) => (
            <div
              key={step.id}
              className={`flex items-center ${idx < steps.length - 1 ? 'flex-1' : ''}`}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-sans font-semibold text-sm transition-colors ${
                    idx < currentStep || completedSteps.has(step.id)
                      ? 'bg-white text-accent'
                      : idx === currentStep
                      ? 'bg-white text-accent-dark border-2 border-white'
                      : 'bg-white bg-opacity-30 text-white'
                  }`}
                >
                  {completedSteps.has(step.id) ? '✓' : idx + 1}
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-1 ${
                    idx < currentStep ? 'bg-white' : 'bg-white bg-opacity-30'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dataset Download */}
      {dataset && (
        <div className="px-6 py-3 bg-blue-50 border-b border-blue-200 flex items-center gap-3">
          <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          </svg>
          <span className="font-sans text-sm text-blue-900">
            Practice Dataset:
          </span>
          <a
            href={dataset.url}
            download
            className="font-sans text-sm text-accent hover:text-accent-dark font-semibold underline"
          >
            {dataset.name}
          </a>
        </div>
      )}

      {/* Current Step Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step Header */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-accent bg-opacity-10 text-accent font-sans font-semibold rounded-full text-sm">
                  Step {currentStep + 1} of {steps.length}
                </span>
                {completedSteps.has(currentLabStep.id) && (
                  <span className="px-3 py-1 bg-green-100 text-green-800 font-sans font-semibold rounded-full text-sm flex items-center gap-1">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Completed
                  </span>
                )}
              </div>
              <h3 className="text-xl font-serif text-primary-900 font-bold mb-2">
                {currentLabStep.title}
              </h3>
              <p className="font-sans text-gray-700 leading-relaxed">
                {currentLabStep.instruction}
              </p>
            </div>

            {/* Hint Button */}
            {currentLabStep.hint && (
              <div className="mb-4">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center gap-2 px-4 py-2 border border-accent text-accent font-sans font-medium rounded-lg hover:bg-accent bg-opacity-10 transition-colors w-full sm:w-auto"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                  {showHint ? 'Hide Hint' : 'Show Hint'}
                </button>
                <AnimatePresence>
                  {showHint && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg"
                    >
                      <p className="font-sans text-yellow-900">{currentLabStep.hint}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Code Editor or Concept Content */}
            <div className="mb-4">
              {currentLabStep.type === 'dax' && (
                <DAXEditor
                  initialCode={currentLabStep.code}
                  template={currentLabStep.code ? { name: 'Template', code: currentLabStep.code } : undefined}
                  height="350px"
                />
              )}
              {currentLabStep.type === 'm' && (
                <MEditor
                  initialCode={currentLabStep.code}
                  template={currentLabStep.code ? { name: 'Template', code: currentLabStep.code } : undefined}
                  height="350px"
                />
              )}
              {currentLabStep.type === 'concept' && (
                <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
                  <p className="font-sans text-gray-700 leading-relaxed">
                    {currentLabStep.instruction}
                  </p>
                </div>
              )}
            </div>

            {/* Solution */}
            {currentLabStep.solution && (
              <div className="mb-4">
                <button
                  onClick={handleShowSolution}
                  className="flex items-center gap-2 px-4 py-2 border border-green-600 text-green-700 font-sans font-medium rounded-lg hover:bg-green-50 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {showSolution ? 'Hide Solution' : 'View Solution'}
                </button>
                <AnimatePresence>
                  {showSolution && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3"
                    >
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h4 className="font-sans font-semibold text-green-900 mb-2">
                          Solution:
                        </h4>
                        <pre className="font-mono text-sm text-green-800 whitespace-pre-wrap bg-white p-3 rounded border border-green-200">
                          {currentLabStep.solution}
                        </pre>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <button
            onClick={handlePrevious}
            disabled={isFirstStep}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-sans font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Previous
          </button>

          <button
            onClick={handleComplete}
            className="px-6 py-2 bg-accent text-white rounded-lg font-sans font-medium hover:bg-accent-dark transition-colors flex items-center gap-2"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Mark Complete
          </button>

          <button
            onClick={handleNext}
            disabled={isLastStep}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-sans font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            Next
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Completion Message */}
      <AnimatePresence>
        {completedSteps.size === steps.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white"
          >
            <div className="flex items-center gap-3">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-serif font-bold text-lg">Congratulations!</h3>
                <p className="font-sans">You've completed all steps in this lab. Great work!</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

