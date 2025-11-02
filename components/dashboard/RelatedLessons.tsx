'use client'

import Link from 'next/link'
import { getRelatedLessons } from '@/lib/utils/recommendationUtils'
import { Lesson } from '@/lib/data/courseData'

interface RelatedLessonsProps {
  lessonId: string
  limit?: number
  className?: string
}

export default function RelatedLessons({ lessonId, limit = 4, className = '' }: RelatedLessonsProps) {
  const relatedLessons = getRelatedLessons(lessonId, limit)

  if (relatedLessons.length === 0) {
    return null
  }

  return (
    <div className={className}>
      <div className="mb-4">
        <h3 className="text-lg font-sans font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          Related Lessons
        </h3>
        <p className="text-sm font-sans text-gray-600 dark:text-gray-400 mt-1">
          Continue learning with related content
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {relatedLessons.map((lesson) => (
          <Link
            key={lesson.id}
            href={`/dashboard/lessons/${lesson.id}`}
            className="group p-4 rounded-lg border-2 border-gray-200 bg-white hover:border-accent hover:shadow-md transition-all dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-accent/10 transition-colors">
                <svg
                  className="h-5 w-5 text-gray-600 group-hover:text-accent dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-sans font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors line-clamp-2">
                  {lesson.title}
                </h4>
                {lesson.description && (
                  <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                    {lesson.description}
                  </p>
                )}
                <div className="flex items-center gap-3 mt-2 text-xs font-sans text-gray-500 dark:text-gray-500">
                  {lesson.duration && (
                    <span className="flex items-center gap-1">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {lesson.duration} min
                    </span>
                  )}
                  {lesson.difficulty && (
                    <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700">
                      {lesson.difficulty}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}


