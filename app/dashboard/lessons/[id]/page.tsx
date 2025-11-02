'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useCallback } from 'react'
import Link from 'next/link'
import LessonPlayer from '@/components/dashboard/LessonPlayer'
import Container from '@/components/shared/Container'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import CTAButton from '@/components/shared/CTAButton'
import { getLessonById, getNextLesson, getPreviousLesson, getModuleForLesson, getLessonPositionInModule } from '@/lib/data/courseData'
import { useLessons } from '@/lib/hooks/useLessons'

export default function LessonPage() {
  const params = useParams()
  const router = useRouter()
  const lessonId = params?.id as string
  const { markLessonComplete } = useLessons()
  
  // Get lesson from course data
  const lessonData = getLessonById(lessonId)
  const moduleInfo = lessonData ? getModuleForLesson(lessonId) : undefined
  const lessonPosition = lessonData ? getLessonPositionInModule(lessonId) : undefined
  
  // Get next and previous lessons
  const nextLesson = lessonId ? getNextLesson(lessonId) : undefined
  const previousLesson = lessonId ? getPreviousLesson(lessonId) : undefined
  
  // Convert to LessonPlayer format
  const lesson = lessonData ? {
    id: lessonData.id,
    title: lessonData.title,
    description: lessonData.description,
    videoUrl: lessonData.videoUrl,
    duration: lessonData.duration,
    videoChapters: lessonData.videoChapters,
    exerciseMaterials: lessonData.exerciseMaterials || [],
    content: lessonData.content,
    isCompleted: lessonData.isCompleted || false,
  } : {
    id: 'not-found',
    title: 'Lesson Not Found',
    description: 'The lesson you are looking for does not exist.',
    isCompleted: false,
  }

  // Build breadcrumbs
  const breadcrumbs = lessonData && moduleInfo
    ? [
        { label: 'Dashboard', href: '/dashboard' },
        { label: moduleInfo.module.title, href: `/dashboard#module-${moduleInfo.module.id}` },
        { label: lesson.title, href: `/dashboard/lessons/${lessonId}` },
      ]
    : [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Lesson', href: `/dashboard/lessons/${lessonId}` },
      ]

  const handleComplete = async (id: string) => {
    await markLessonComplete(id)
    console.log('Lesson completed:', id)
  }

  const handleNext = useCallback(() => {
    if (nextLesson) {
      router.push(`/dashboard/lessons/${nextLesson.id}`)
    } else {
      router.push('/dashboard')
    }
  }, [nextLesson, router])

  const handlePrevious = useCallback(() => {
    if (previousLesson) {
      router.push(`/dashboard/lessons/${previousLesson.id}`)
    } else {
      router.push('/dashboard')
    }
  }, [previousLesson, router])

  // Keyboard shortcuts for navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in input, textarea, or contenteditable
      const target = e.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return
      }

      // Left arrow for previous lesson
      if (e.key === 'ArrowLeft' && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
        if (previousLesson) {
          e.preventDefault()
          handlePrevious()
        }
      }
      // Right arrow for next lesson
      else if (e.key === 'ArrowRight' && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
        if (nextLesson) {
          e.preventDefault()
          handleNext()
        }
      }
      // Escape to go back to dashboard
      else if (e.key === 'Escape') {
        e.preventDefault()
        router.push('/dashboard')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextLesson, previousLesson, router, handleNext, handlePrevious])

  return (
    <Container maxWidth="4xl" className="py-8">
      {/* Breadcrumbs with Back to Dashboard button */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <Breadcrumbs items={breadcrumbs} />
        <Link href="/dashboard">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-sans text-gray-700 hover:text-accent border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </button>
        </Link>
      </div>

      {/* Module Context */}
      {moduleInfo && lessonPosition && (
        <div className="mb-6 p-4 bg-neutral-50 rounded-lg border border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <Link
                href={`/dashboard#module-${moduleInfo.module.id}`}
                className="text-sm font-sans text-gray-600 hover:text-accent transition-colors inline-flex items-center gap-1 mb-1 group"
              >
                <svg
                  className="h-4 w-4 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                {moduleInfo.part.title} • {moduleInfo.module.title}
              </Link>
              <p className="text-sm font-sans text-gray-700">
                Lesson {lessonPosition.lessonIndex} of {lessonPosition.totalLessons} in this module
              </p>
            </div>
            {moduleInfo && (
              <div className="flex items-center gap-2">
                <div className="text-xs font-sans text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                  {moduleInfo.module.part}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Next/Previous Lesson Navigation Preview */}
      {(nextLesson || previousLesson) && (
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {previousLesson && (
            <Link
              href={`/dashboard/lessons/${previousLesson.id}`}
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 p-2 bg-gray-100 rounded-lg group-hover:bg-accent group-hover:bg-opacity-10 transition-colors">
                  <svg className="h-5 w-5 text-gray-600 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-sans text-gray-500 mb-1">Previous Lesson</p>
                  <p className="font-sans text-sm font-medium text-gray-900 truncate group-hover:text-accent">
                    {previousLesson.title}
                  </p>
                </div>
              </div>
            </Link>
          )}
          {nextLesson && (
            <Link
              href={`/dashboard/lessons/${nextLesson.id}`}
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-accent hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="flex-1 min-w-0 text-right">
                  <p className="text-xs font-sans text-gray-500 mb-1">Next Lesson</p>
                  <p className="font-sans text-sm font-medium text-gray-900 truncate group-hover:text-accent">
                    {nextLesson.title}
                  </p>
                </div>
                <div className="flex-shrink-0 p-2 bg-gray-100 rounded-lg group-hover:bg-accent group-hover:bg-opacity-10 transition-colors">
                  <svg className="h-5 w-5 text-gray-600 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          )}
        </div>
      )}

      <LessonPlayer
        lesson={lesson}
        onComplete={handleComplete}
        onNext={handleNext}
        onPrevious={handlePrevious}
        nextLesson={nextLesson}
        previousLesson={previousLesson}
      />
    </Container>
  )
}

