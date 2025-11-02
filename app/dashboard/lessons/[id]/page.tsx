'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useCallback, useState } from 'react'
import Link from 'next/link'
import LessonPlayer from '@/components/dashboard/LessonPlayer'
import LessonNavigationBar from '@/components/dashboard/LessonNavigationBar'
import LessonNotesPanel from '@/components/dashboard/LessonNotesPanel'
import LessonRecommendations from '@/components/dashboard/LessonRecommendations'
import RelatedLessons from '@/components/dashboard/RelatedLessons'
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
  const [isNotesPanelOpen, setIsNotesPanelOpen] = useState(false)
  
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

      // Cmd+E / Ctrl+E to toggle notes panel
      if ((e.metaKey || e.ctrlKey) && e.key === 'e') {
        e.preventDefault()
        setIsNotesPanelOpen(prev => !prev)
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

  return (
    <>
      <Container maxWidth="4xl" className="py-8 pb-32">
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
                  {moduleInfo.part.title}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Next/Previous Lesson Navigation Preview - Enhanced */}
      {(nextLesson || previousLesson) && (
        <div className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {previousLesson ? (
              <Link
                href={`/dashboard/lessons/${previousLesson.id}`}
                className="p-5 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg hover:border-accent hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-gray-100 rounded-lg group-hover:bg-accent group-hover:bg-opacity-10 transition-colors">
                    <svg className="h-6 w-6 text-gray-600 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-sans font-semibold text-gray-500 uppercase tracking-wide mb-2">Previous Lesson</p>
                    <p className="font-sans text-base font-semibold text-gray-900 group-hover:text-accent transition-colors line-clamp-2">
                      {previousLesson.title}
                    </p>
                    {previousLesson.duration && (
                      <p className="font-sans text-xs text-gray-500 mt-2">
                        {previousLesson.duration} min
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ) : (
              <div className="p-5 bg-gray-50 border-2 border-gray-200 rounded-lg opacity-50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-sans font-semibold text-gray-400 uppercase">Previous Lesson</p>
                    <p className="font-sans text-sm text-gray-400 mt-1">No previous lesson</p>
                  </div>
                </div>
              </div>
            )}
            
            {nextLesson ? (
              <Link
                href={`/dashboard/lessons/${nextLesson.id}`}
                className="p-5 bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/30 rounded-lg hover:border-accent hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0 text-left">
                    <p className="text-xs font-sans font-semibold text-accent uppercase tracking-wide mb-2">Next Lesson</p>
                    <p className="font-sans text-base font-semibold text-gray-900 group-hover:text-accent transition-colors line-clamp-2">
                      {nextLesson.title}
                    </p>
                    {nextLesson.duration && (
                      <p className="font-sans text-xs text-gray-500 mt-2">
                        {nextLesson.duration} min
                      </p>
                    )}
                  </div>
                  <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="p-5 bg-green-50 border-2 border-green-200 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-xs font-sans font-semibold text-green-700 uppercase mb-2">🎉 Congratulations!</p>
                    <p className="font-sans text-sm font-semibold text-green-900">You've completed this module</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
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

        {/* Smart Recommendations */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <LessonRecommendations currentLessonId={lessonId} limit={5} />
        </div>

        {/* Related Lessons */}
        {lessonData && (
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <RelatedLessons lessonId={lessonId} limit={4} />
          </div>
        )}
      </Container>

      {/* Sticky Bottom Navigation Bar */}
      <LessonNavigationBar
        currentLessonId={lesson.id}
        currentLessonTitle={lesson.title}
        nextLesson={nextLesson}
        previousLesson={previousLesson}
        onNext={handleNext}
        onPrevious={handlePrevious}
        moduleTitle={moduleInfo?.module.title}
        lessonPosition={lessonPosition}
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
          className="fixed bottom-20 right-6 sm:bottom-24 sm:right-8 z-30 p-4 bg-accent text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 hover:bg-accent/90"
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

