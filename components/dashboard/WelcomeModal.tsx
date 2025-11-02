'use client'

import { useEffect, useState } from 'react'
import CTAButton from '@/components/shared/CTAButton'

interface WelcomeModalProps {
  onStartLesson?: () => void
  onTakeTour?: () => void
  isFirstVisit?: boolean
}

export default function WelcomeModal({
  onStartLesson,
  onTakeTour,
  isFirstVisit = true,
}: WelcomeModalProps) {
  const [isOpen, setIsOpen] = useState(isFirstVisit)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsAnimating(false), 100)
    return () => clearTimeout(timer)
  }, [])

  // Close modal when user clicks outside or on close button
  const handleClose = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsOpen(false)
      // Store that user has seen welcome in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('hasSeenWelcome', 'true')
      }
    }, 200)
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const handleStartLesson = () => {
    handleClose()
    setTimeout(() => onStartLesson?.(), 250)
  }

  const handleTakeTour = () => {
    handleClose()
    setTimeout(() => onTakeTour?.(), 250)
  }

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen])

  // Don't render if not open
  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 transition-opacity duration-200 ${
        isAnimating ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-modal-title"
    >
      <div
        className={`relative w-full max-w-lg rounded-2xl bg-white shadow-2xl transform transition-all duration-300 ${
          isAnimating
            ? 'scale-95 opacity-0 translate-y-4'
            : 'scale-100 opacity-100 translate-y-0'
        }`}
        style={{
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 z-10 text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-full p-2"
          aria-label="Close welcome modal"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="px-8 sm:px-10 py-10 sm:py-12 text-center">
          {/* Welcome Icon */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-gradient-to-br from-accent/20 to-accent/10 p-5 sm:p-6 shadow-lg">
              <svg
                className="h-14 w-14 sm:h-16 sm:w-16 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="mb-8 space-y-4">
            <h2
              id="welcome-modal-title"
              className="font-serif text-3xl sm:text-4xl text-primary-900 leading-tight"
            >
              Welcome to Your Journey
            </h2>
            <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto px-2">
              You're about to begin mastering Power BI and advancing your data analytics career.
              Let's get you started on the right path.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 px-2">
            <CTAButton
              onClick={handleStartLesson}
              className="flex-1 sm:flex-none min-w-[200px] transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Start Your First Lesson
            </CTAButton>
            <CTAButton
              onClick={handleTakeTour}
              variant="secondary"
              className="flex-1 sm:flex-none min-w-[200px] transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Take a Quick Tour
            </CTAButton>
          </div>

          {/* Footer text */}
          <p className="text-sm text-gray-500 font-sans leading-relaxed">
            You can always access the tour from the dashboard later.
          </p>
        </div>
      </div>
    </div>
  )
}

