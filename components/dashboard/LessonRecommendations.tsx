'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getSmartRecommendations, Recommendation } from '@/lib/utils/recommendationUtils'

interface LessonRecommendationsProps {
  currentLessonId?: string
  limit?: number
  className?: string
}

export default function LessonRecommendations({
  currentLessonId,
  limit = 5,
  className = '',
}: LessonRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    // Load recommendations asynchronously
    const loadRecommendations = () => {
      try {
        const recs = getSmartRecommendations({ currentLessonId }, limit)
        setRecommendations(recs)
      } catch (err) {
        console.error('Failed to load recommendations:', err)
      } finally {
        setIsLoading(false)
      }
    }

    // Small delay to avoid blocking UI
    const timeoutId = setTimeout(loadRecommendations, 100)
    return () => clearTimeout(timeoutId)
  }, [currentLessonId, limit])

  if (isLoading) {
    return (
      <div className={className}>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    )
  }

  if (recommendations.length === 0) {
    return null
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-accent bg-accent/5'
      case 'medium':
        return 'border-blue-300 bg-blue-50'
      default:
        return 'border-gray-200 bg-gray-50'
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high':
        return (
          <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )
      default:
        return (
          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )
    }
  }

  return (
    <div className={className}>
      <div className="mb-4">
        <h3 className="text-lg font-sans font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          Recommended for You
        </h3>
        <p className="text-sm font-sans text-gray-600 dark:text-gray-400 mt-1">
          Personalized suggestions based on your progress and learning patterns
        </p>
      </div>

      <div className="space-y-3">
        {recommendations.map((rec, index) => (
          <Link
            key={rec.lesson.id}
            href={`/dashboard/lessons/${rec.lesson.id}`}
            className={`block p-4 rounded-lg border-2 transition-all hover:shadow-md ${getPriorityColor(
              rec.priority
            )} dark:bg-gray-800 dark:border-gray-700`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {getPriorityIcon(rec.priority)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-sans font-semibold text-gray-900 dark:text-white line-clamp-2">
                    {rec.lesson.title}
                  </h4>
                  {rec.priority === 'high' && (
                    <span className="flex-shrink-0 px-2 py-0.5 text-xs font-sans font-medium rounded-full bg-accent/20 text-accent">
                      High Priority
                    </span>
                  )}
                </div>
                <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {rec.reason}
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs font-sans text-gray-500 dark:text-gray-500">
                  {rec.lesson.duration && (
                    <span className="flex items-center gap-1">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {rec.lesson.duration} min
                    </span>
                  )}
                  {rec.lesson.difficulty && (
                    <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700">
                      {rec.lesson.difficulty}
                    </span>
                  )}
                  {rec.lesson.moduleNumber !== undefined && (
                    <span>Module {rec.lesson.moduleNumber}</span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {recommendations.length >= limit && (
        <div className="mt-4 text-center">
          <button
            onClick={() => {
              // Could expand to show more recommendations
              console.log('Show more recommendations')
            }}
            className="text-sm font-sans text-accent hover:text-accent-dark font-medium underline-offset-4 hover:underline transition-colors"
          >
            Show more recommendations
          </button>
        </div>
      )}
    </div>
  )
}

