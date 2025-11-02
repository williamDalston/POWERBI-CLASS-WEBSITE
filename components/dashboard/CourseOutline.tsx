'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface Lesson {
  id: string
  title: string
  duration?: number
  isCompleted?: boolean
  isLocked?: boolean
}

interface Module {
  id: string
  title: string
  description?: string
  lessons: Lesson[]
  isExpanded?: boolean
}

interface CourseOutlineProps {
  modules: Module[]
  currentLessonId?: string
  nextLessonId?: string
  className?: string
}

export default function CourseOutline({
  modules,
  currentLessonId,
  nextLessonId,
  className = '',
}: CourseOutlineProps) {
  // Auto-expand module containing current lesson or next lesson
  const getInitialExpandedModules = () => {
    const expanded = new Set<string>(modules.filter((m) => m.isExpanded).map((m) => m.id))
    
    // Find module with current lesson
    if (currentLessonId) {
      const moduleWithCurrent = modules.find((m) => 
        m.lessons.some((l) => l.id === currentLessonId)
      )
      if (moduleWithCurrent) {
        expanded.add(moduleWithCurrent.id)
      }
    }
    
    // Find module with next lesson
    if (nextLessonId) {
      const moduleWithNext = modules.find((m) => 
        m.lessons.some((l) => l.id === nextLessonId)
      )
      if (moduleWithNext) {
        expanded.add(moduleWithNext.id)
      }
    }
    
    return expanded
  }

  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    getInitialExpandedModules()
  )
  
  const currentLessonRef = useRef<HTMLLIElement>(null)

  // Scroll to current lesson when module is expanded
  useEffect(() => {
    if (currentLessonId && currentLessonRef.current && expandedModules.size > 0) {
      // Small delay to ensure DOM is rendered
      setTimeout(() => {
        currentLessonRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }, 100)
    }
  }, [currentLessonId, expandedModules])

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => {
      const next = new Set(prev)
      if (next.has(moduleId)) {
        next.delete(moduleId)
      } else {
        next.add(moduleId)
      }
      return next
    })
  }

  const formatDuration = (minutes?: number) => {
    if (!minutes) return ''
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
  }

  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.length, 0)
  const completedLessons = modules.reduce(
    (sum, m) => sum + m.lessons.filter((l) => l.isCompleted).length,
    0
  )

  // Find next incomplete lesson for quick jump
  const findNextLesson = () => {
    for (const module of modules) {
      for (const lesson of module.lessons) {
        if (!lesson.isCompleted && !lesson.isLocked) {
          const lessonIndex = module.lessons.indexOf(lesson)
          const isPreviousCompleted = lessonIndex === 0 || module.lessons[lessonIndex - 1]?.isCompleted
          if (isPreviousCompleted) {
            return lesson
          }
        }
      }
    }
    return null
  }

  const nextLesson = findNextLesson()

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 className="font-serif text-2xl text-primary-900 mb-2">Course Outline</h3>
          <p className="font-sans text-sm text-gray-600">
            {completedLessons} of {totalLessons} lessons completed
          </p>
        </div>
        {nextLesson && (
          <Link
            href={`/dashboard/lessons/${nextLesson.id}`}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent/90 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Jump to Next Lesson
          </Link>
        )}
      </div>

      <div className="space-y-2">
        {modules.map((module) => {
          const isExpanded = expandedModules.has(module.id)
          const moduleCompleted = module.lessons.every((l) => l.isCompleted)
          const moduleInProgress = module.lessons.some(
            (l) => l.isCompleted && !moduleCompleted
          )

          return (
            <div
              key={module.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Module Header */}
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-neutral-50 transition-colors text-left"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="flex-shrink-0">
                    {moduleCompleted ? (
                      <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    ) : moduleInProgress ? (
                      <div className="h-6 w-6 rounded-full bg-accent flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-white"></div>
                      </div>
                    ) : (
                      <div className="h-6 w-6 rounded-full border-2 border-gray-300"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-serif text-lg text-primary-900">{module.title}</h4>
                    {module.description && (
                      <p className="font-sans text-sm text-gray-600 mt-1">{module.description}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-sans text-sm text-gray-500">
                    {module.lessons.filter((l) => l.isCompleted).length}/
                    {module.lessons.length}
                  </span>
                  <svg
                    className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                      isExpanded ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {/* Assessment Button */}
              {isExpanded && module.id !== 'module-0' && (
                <div className="border-t border-gray-200 bg-neutral-50 px-4 py-3">
                  <Link
                    href={`/dashboard/assessments/${module.id.replace('module-', '')}`}
                    className="flex items-center gap-2 text-sm font-medium text-purple-700 hover:text-purple-800 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    Take Module Assessment
                  </Link>
                </div>
              )}

              {/* Module Lessons */}
              {isExpanded && (
                <div className="border-t border-gray-200 bg-neutral-50">
                  <ul className="divide-y divide-gray-200">
                    {module.lessons.map((lesson, index) => {
                      const isCurrent = lesson.id === currentLessonId
                      const isNext = lesson.id === nextLessonId
                      const isPreviousCompleted =
                        index === 0 || module.lessons[index - 1]?.isCompleted

                      return (
                        <li 
                          key={lesson.id}
                          ref={isCurrent ? currentLessonRef : null}
                          id={isCurrent ? `lesson-${lesson.id}` : undefined}
                          className={isCurrent ? 'scroll-mt-4' : ''}
                        >
                          <Link
                            href={
                              lesson.isLocked || !isPreviousCompleted
                                ? '#'
                                : `/dashboard/lessons/${lesson.id}`
                            }
                            onClick={(e) => {
                              if (lesson.isLocked || !isPreviousCompleted) {
                                e.preventDefault()
                              }
                            }}
                            className={`flex items-center gap-3 p-4 transition-all ${
                              isCurrent
                                ? 'bg-accent bg-opacity-10 border-l-4 border-accent shadow-sm'
                                : isNext
                                ? 'bg-blue-50 border-l-4 border-blue-300'
                                : lesson.isLocked || !isPreviousCompleted
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:bg-white hover:shadow-sm'
                            }`}
                            aria-disabled={lesson.isLocked || !isPreviousCompleted}
                          >
                            <div className="flex-shrink-0">
                              {lesson.isCompleted ? (
                                <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                                  <svg
                                    className="h-4 w-4 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              ) : lesson.isLocked || !isPreviousCompleted ? (
                                <div className="h-6 w-6 rounded-full border-2 border-gray-300 flex items-center justify-center">
                                  <svg
                                    className="h-3 w-3 text-gray-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              ) : (
                                <div className="h-6 w-6 rounded-full border-2 border-gray-300"></div>
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <p
                                  className={`font-sans ${
                                    isCurrent
                                      ? 'font-semibold text-accent'
                                      : isNext
                                      ? 'font-medium text-blue-900'
                                      : lesson.isCompleted
                                      ? 'text-gray-700'
                                      : 'text-gray-900'
                                  }`}
                                >
                                  {lesson.title}
                                </p>
                                {isCurrent && (
                                  <span className="px-2 py-0.5 text-xs font-medium bg-accent text-white rounded-full">
                                    Current
                                  </span>
                                )}
                                {isNext && !isCurrent && (
                                  <span className="px-2 py-0.5 text-xs font-medium bg-blue-200 text-blue-900 rounded-full">
                                    Next
                                  </span>
                                )}
                              </div>
                            </div>
                            {lesson.duration && (
                              <span className="font-sans text-xs text-gray-500">
                                {formatDuration(lesson.duration)}
                              </span>
                            )}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

