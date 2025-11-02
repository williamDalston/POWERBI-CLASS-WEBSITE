'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import CTAButton from '@/components/shared/CTAButton'

interface Lesson {
  id: string
  title: string
}

interface LessonNavigationBarProps {
  currentLessonId: string
  currentLessonTitle: string
  nextLesson?: Lesson
  previousLesson?: Lesson
  onNext?: () => void
  onPrevious?: () => void
  moduleTitle?: string
  lessonPosition?: { lessonIndex: number; totalLessons: number }
}

export default function LessonNavigationBar({
  currentLessonId,
  currentLessonTitle,
  nextLesson,
  previousLesson,
  onNext,
  onPrevious,
  moduleTitle,
  lessonPosition,
}: LessonNavigationBarProps) {
  const router = useRouter()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 pb-safe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3">
          {/* Previous Button */}
          <div className="flex items-center gap-4 flex-1">
            {previousLesson && onPrevious ? (
              <button
                onClick={onPrevious}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-accent hover:text-accent transition-all group"
                title={previousLesson.title}
              >
                <svg className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">Previous</span>
              </button>
            ) : (
              <div className="w-[100px]" /> // Spacer for alignment
            )}

            {/* Lesson Info - Hidden on small screens */}
            <div className="hidden md:flex items-center gap-3 flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-500 truncate">
                  {moduleTitle && `${moduleTitle} • `}
                  {lessonPosition && `Lesson ${lessonPosition.lessonIndex} of ${lessonPosition.totalLessons}`}
                </p>
                <p className="text-sm font-medium text-gray-900 truncate" title={currentLessonTitle}>
                  {currentLessonTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Center: Dashboard Link */}
          <Link
            href="/dashboard"
            className="flex items-center justify-center p-2.5 text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-all"
            title="Back to Dashboard"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>

          {/* Next Button */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            {nextLesson && onNext ? (
              <CTAButton
                onClick={onNext}
                className="flex items-center gap-2 px-4 py-2.5 text-sm"
              >
                <span>Next Lesson</span>
                <svg className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </CTAButton>
            ) : (
              <button
                onClick={() => router.push('/dashboard')}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-gray-400 rounded-lg cursor-not-allowed"
                disabled
              >
                <span className="hidden sm:inline">Complete</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Keyboard Shortcuts Hint - Only on larger screens */}
        <div className="hidden lg:flex items-center justify-center gap-4 pb-2 pt-1 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">←</kbd>
            <span>Previous</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">→</kbd>
            <span>Next</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <kbd className="px-2 py-1 bg-gray-100 rounded text-xs font-mono">Esc</kbd>
            <span>Dashboard</span>
          </div>
        </div>
      </div>
    </div>
  )
}

