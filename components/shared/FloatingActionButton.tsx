'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  CheckCircle2, 
  StickyNote, 
  BookOpen,
  ChevronRight,
  X
} from 'lucide-react'
import { useLessons } from '@/lib/hooks/useLessons'
import { getNextLesson, getLessonById } from '@/lib/data/courseData'
import Link from 'next/link'

interface FloatingActionButtonProps {
  lessonId?: string
  isLessonComplete?: boolean
}

export default function FloatingActionButton({ 
  lessonId, 
  isLessonComplete 
}: FloatingActionButtonProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { markLessonComplete } = useLessons()
  
  // Determine context based on pathname
  const isDashboard = pathname === '/dashboard'
  const isLessonPage = pathname?.startsWith('/dashboard/lessons/')
  const currentLesson = lessonId ? getLessonById(lessonId) : null
  const nextLesson = currentLesson ? getNextLesson(lessonId!) : null

  // Get appropriate action based on context
  const getAction = () => {
    if (isLessonPage && currentLesson) {
      if (isLessonComplete) {
        return {
          label: 'Next Lesson',
          icon: ChevronRight,
          action: () => {
            if (nextLesson) {
              router.push(`/dashboard/lessons/${nextLesson.id}`)
            } else {
              router.push('/dashboard')
            }
          },
          preview: nextLesson?.title || 'Back to Dashboard',
        }
      } else {
        return {
          label: 'Mark Complete',
          icon: CheckCircle2,
          action: async () => {
            if (lessonId) {
              await markLessonComplete(lessonId)
              setIsOpen(false)
            }
          },
          preview: 'Complete this lesson',
        }
      }
    } else if (isLessonPage) {
      return {
        label: 'Take Notes',
        icon: StickyNote,
        action: () => {
          // Open notes panel (triggered by event)
          window.dispatchEvent(new CustomEvent('toggleNotes'))
          setIsOpen(false)
        },
        preview: 'Add your notes',
      }
    } else if (isDashboard) {
      // Find first incomplete lesson
      if (typeof window !== 'undefined') {
        const completed = localStorage.getItem('completedLessons')
        const completedIds = completed ? (JSON.parse(completed) as string[]) : []
        // This would need to be enhanced to actually find next lesson
        return {
          label: 'Resume Learning',
          icon: Play,
          action: () => {
            router.push('/dashboard')
          },
          preview: 'Continue where you left off',
        }
      }
    }
    
    return null
  }

  const action = getAction()

  if (!action) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Preview Card */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              className="absolute right-20 bottom-0 mb-0 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-4 min-w-[200px] max-w-[280px]"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                    {action.label}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                    {action.preview}
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-shrink-0 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              </div>
              {nextLesson && isLessonComplete && (
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Next: {nextLesson.title.substring(0, 40)}...
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB Button */}
        <motion.button
          onClick={() => {
            if (isOpen) {
              action.action()
            } else {
              setIsOpen(true)
            }
          }}
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent hover:bg-accent-dark text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={action.label}
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <X className="h-6 w-6 md:h-7 md:w-7" />
            ) : (
              <action.icon className="h-6 w-6 md:h-7 md:w-7" />
            )}
          </motion.div>
          
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-white opacity-20"
            initial={{ scale: 0 }}
            animate={{ scale: isOpen ? 1.5 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Quick Action Button (when open) */}
        {isOpen && !isLessonComplete && isLessonPage && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => {
              window.dispatchEvent(new CustomEvent('toggleNotes'))
              setIsOpen(false)
            }}
            className="absolute right-20 bottom-20 md:right-24 md:bottom-24 w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 text-white shadow-lg flex items-center justify-center transition-colors"
            aria-label="Take Notes"
          >
            <StickyNote className="h-5 w-5" />
          </motion.button>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
