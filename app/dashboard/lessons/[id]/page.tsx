'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useCallback, useState } from 'react'
import Link from 'next/link'
import VideoSection from '@/components/lesson/VideoSection'
import LessonContent from '@/components/lesson/LessonContent'
import { LessonNav } from '@/components/lesson/LessonNav'
import { ScrollProgress } from '@/components/lesson/ScrollProgress'
import { TableOfContents } from '@/components/lesson/TableOfContents'
import { LessonOverview } from '@/components/lesson/LessonOverview'
import { ReadingModeBanner } from '@/components/lesson/ReadingModeBanner'
import LessonNotesPanel from '@/components/dashboard/LessonNotesPanel'
import FloatingActionButton from '@/components/shared/FloatingActionButton'
import { getLessonById, getNextLesson, getPreviousLesson, getModuleForLesson, getLessonPositionInModule } from '@/lib/data/courseData'
import { useLessons } from '@/lib/hooks/useLessons'
import { useSwipeNavigation } from '@/lib/hooks/useSwipeNavigation'

export default function LessonPage() {
  const params = useParams()
  const router = useRouter()
  const lessonId = params?.id as string
  const { markLessonComplete } = useLessons()
  const [isNotesPanelOpen, setIsNotesPanelOpen] = useState(false)
  
  // Enable swipe navigation on mobile
  useSwipeNavigation({ enabled: true, disableOnScroll: true })
  
  // Get lesson from course data
  const lessonData = getLessonById(lessonId)
  const moduleInfo = lessonData ? getModuleForLesson(lessonId) : undefined
  const lessonPosition = lessonData ? getLessonPositionInModule(lessonId) : undefined
  
  // Get next and previous lessons
  const nextLesson = lessonId ? getNextLesson(lessonId) : undefined
  const previousLesson = lessonId ? getPreviousLesson(lessonId) : undefined
  
  // Convert to lesson format
  const lesson = lessonData ? {
    id: lessonData.id,
    title: lessonData.title,
    description: lessonData.description,
    videoUrl: lessonData.videoUrl,
    duration: lessonData.duration,
    difficulty: lessonData.difficulty,
    exerciseMaterials: lessonData.exerciseMaterials || [],
    content: lessonData.content,
    isCompleted: lessonData.isCompleted || false,
  } : {
    id: 'not-found',
    title: 'Lesson Not Found',
    description: 'The lesson you are looking for does not exist.',
    isCompleted: false,
  }

  const handleComplete = async (id: string) => {
    await markLessonComplete(id)
    // Lesson completion is tracked by markLessonComplete function
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

  // Keyboard shortcuts: n/p for next/prev, j/k for scroll, arrow keys still work
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

      // Cmd+E / Ctrl+E to toggle notes panel
      if ((e.metaKey || e.ctrlKey) && e.key === 'e') {
        e.preventDefault()
        setIsNotesPanelOpen(prev => !prev)
      }
      // n = next lesson
      else if (e.key === 'n' && !e.ctrlKey && !e.metaKey && !e.shiftKey && nextLesson) {
        e.preventDefault()
        handleNext()
      }
      // p = previous lesson
      else if (e.key === 'p' && !e.ctrlKey && !e.metaKey && !e.shiftKey && previousLesson) {
        e.preventDefault()
        handlePrevious()
      }
      // j = scroll down one viewport
      else if (e.key === 'j' && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
        e.preventDefault()
        window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' })
      }
      // k = scroll up one viewport
      else if (e.key === 'k' && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
        e.preventDefault()
        window.scrollBy({ top: -window.innerHeight * 0.9, behavior: 'smooth' })
      }
      // Left arrow for previous lesson
      else if (e.key === 'ArrowLeft' && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
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
      // Escape to go back to dashboard or close notes panel
      else if (e.key === 'Escape') {
        e.preventDefault()
        if (isNotesPanelOpen) {
          setIsNotesPanelOpen(false)
        } else {
          router.push('/dashboard')
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextLesson, previousLesson, router, handleNext, handlePrevious, isNotesPanelOpen])

  // Format duration
  const formatDuration = (minutes?: number) => {
    if (!minutes) return ''
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0 ? `${hours}h ${mins}m` : `~${mins}m`
  }

  return (
    <>
      <ScrollProgress />
      
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:pt-8 pb-32">
        {/* Tiny breadcrumb */}
        <div className="mb-4 text-xs text-neutral-500">
          <Link href="/dashboard" className="hover:text-neutral-800 transition-colors">
            Dashboard
          </Link>
          {moduleInfo && (
            <>
              {' / '}
              <Link href={`/dashboard#module-${moduleInfo.module.id}`} className="hover:text-neutral-800 transition-colors">
                {moduleInfo.module.title}
              </Link>
            </>
          )}
          {' / '}
          <span className="text-neutral-700">{lesson.title}</span>
        </div>

        {/* Title + meta row */}
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-serif tracking-tight text-neutral-900 mb-1">
            {lesson.title}
          </h1>
          <div className="mt-1 text-sm text-neutral-500">
            {lesson.duration && formatDuration(lesson.duration)}
            {lessonPosition && ` • Lesson ${lessonPosition.lessonIndex} of ${lessonPosition.totalLessons}`}
          </div>
        </header>

        {/* Video Section or Reading Mode Banner */}
        <div className="mb-6">
          {lesson.videoUrl ? (
            <VideoSection videoUrl={lesson.videoUrl} hasVideo={!!lesson.videoUrl} />
          ) : (
            lessonData && <ReadingModeBanner lesson={lessonData} />
          )}
        </div>

        {/* Two-column layout: content + TOC */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_260px]">
          {/* Main content */}
          <div className="max-w-3xl">
            {lessonData && <LessonOverview lesson={lessonData} />}
            <LessonContent lesson={lesson} />

            {/* Navigation at bottom */}
            <LessonNav
              prev={previousLesson ? {
                href: `/dashboard/lessons/${previousLesson.id}`,
                label: previousLesson.title
              } : undefined}
              next={nextLesson ? {
                href: `/dashboard/lessons/${nextLesson.id}`,
                label: nextLesson.title
              } : undefined}
            />

            {/* Mark Complete Button */}
            {!lesson.isCompleted && (
              <div className="mt-6">
                <button
                  onClick={() => handleComplete(lesson.id)}
                  className="rounded-lg bg-primary-600 px-4 py-2 text-white hover:bg-primary-700 transition-colors"
                >
                  Mark as Complete
                </button>
              </div>
            )}
          </div>

          {/* Table of Contents (desktop only) */}
          <TableOfContents contentId="lesson-content" />
        </div>
      </div>

      {/* Mobile sticky bottom action bar */}
      {nextLesson && (
        <div className="fixed inset-x-0 bottom-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 p-3 sm:hidden border-t border-neutral-200">
          <Link
            href={`/dashboard/lessons/${nextLesson.id}`}
            className="block rounded-lg bg-primary-600 py-3 text-center font-medium text-white hover:bg-primary-700 transition-colors"
          >
            Next lesson
          </Link>
        </div>
      )}

      {/* Floating Action Button */}
      <FloatingActionButton 
        lessonId={lessonId}
        isLessonComplete={lesson.isCompleted}
      />

      {/* Notes Panel */}
      <LessonNotesPanel
        lessonId={lessonId}
        isOpen={isNotesPanelOpen}
        onClose={() => setIsNotesPanelOpen(false)}
        onToggle={() => setIsNotesPanelOpen(prev => !prev)}
      />

      {/* Floating Notes Button */}
      {!isNotesPanelOpen && (
        <button
          onClick={() => setIsNotesPanelOpen(true)}
          className="fixed bottom-20 right-6 sm:bottom-24 sm:right-8 z-30 p-4 bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 hover:bg-primary-700"
          aria-label="Open notes panel"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>
      )}
    </>
  )
}
