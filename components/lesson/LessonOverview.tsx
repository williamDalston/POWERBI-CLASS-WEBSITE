'use client'

import { Lesson } from '@/lib/data/courseData'
import { ContentCompletenessBadge } from './ContentCompletenessBadge'
import { DifficultyBadge } from './DifficultyBadge'

interface LessonOverviewProps {
  lesson: Lesson
}

export function LessonOverview({ lesson }: LessonOverviewProps) {
  const formatDuration = (minutes?: number) => {
    if (!minutes) return ''
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0 ? `${hours}h ${mins}m` : `~${mins}m`
  }

  return (
    <section className="mb-8 p-6 bg-gradient-to-br from-neutral-50 to-white rounded-xl border border-neutral-200 shadow-sm">
      {/* Header with title and meta */}
      <div className="mb-6">
        <div className="flex flex-wrap items-start gap-3 mb-4">
          {lesson.difficulty && <DifficultyBadge difficulty={lesson.difficulty} />}
          {lesson.duration && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 text-neutral-700 rounded-md text-sm font-medium">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {formatDuration(lesson.duration)}
            </div>
          )}
        </div>
      </div>

      {/* Content completeness badge */}
      <div className="mb-6">
        <ContentCompletenessBadge lesson={lesson} showDescription={true} size="md" />
      </div>

      {/* Concept preview if available */}
      {lesson.content?.concept && (
        <div className="mb-6 p-4 bg-white rounded-lg border border-primary-200 border-l-4 border-l-primary-500">
          <div className="flex items-start gap-2">
            <svg className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <h3 className="font-semibold text-neutral-900 mb-2">In This Lesson</h3>
              <p className="text-neutral-700 text-[15px] leading-relaxed line-clamp-3">
                {lesson.content.concept}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* What you'll learn */}
      {lesson.content && (
        <div className="space-y-2">
          <h4 className="font-semibold text-neutral-900 text-sm flex items-center gap-2">
            <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            What You'll Learn
          </h4>
          <ul className="space-y-1.5">
            {lesson.content.concept && (
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <svg className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Understand the key concept</span>
              </li>
            )}
            {lesson.content.labs && lesson.content.labs.length > 0 && (
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <svg className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Complete hands-on lab exercises</span>
              </li>
            )}
            {lesson.content.keyPoints && lesson.content.keyPoints.length > 0 && (
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <svg className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Master key takeaways</span>
              </li>
            )}
          </ul>
        </div>
      )}
    </section>
  )
}

