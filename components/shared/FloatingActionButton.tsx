'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, 
  CheckCircle2, 
  BookOpen, 
  ChevronRight,
  X,
  StickyNote,
  ArrowRight,
  ArrowLeft
} from 'lucide-react'
import { getNextLesson, getLessonById } from '@/lib/data/courseData'
import { useLessons } from '@/lib/hooks/useLessons'

interface FloatingActionButtonProps {
  className?: string
}

export default function FloatingActionButton({ className = '' }: FloatingActionButtonProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { markLessonComplete } = useLessons()

  const isDashboard = pathname === '/dashboard'
  const isLessonPage = pathname?.startsWith('/dashboard/lessons/')
  const lessonId = isLessonPage ? pathname.split('/').pop() : undefined
  const currentLesson = lessonId ? getLessonById(lessonId) : undefined
  const nextLesson = lessonId ? getNextLesson(lessonId) : undefined

  // Hide/show FAB based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show when scrolling up, hide when scrolling down (after threshold)
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Determine action based on context
  const getAction = () => {
    if (isDashboard) {
      return {
        label: 'Start Next Lesson',
        icon: Play,
        onClick: () => {
          // Find first incomplete lesson
          // This would need to check completion status
          router.push('/dashboard')
        },
        color: 'bg-accent hover:bg-accent-dark',
      }
    }

    if (isLessonPage && currentLesson) {
      if (currentLesson.isCompleted) {
        return {
          label: nextLesson ? 'Next Lesson' : 'Back to Dashboard',
          icon: nextLesson ? ChevronRight : BookOpen,
          onClick: () => {
            if (nextLesson) {
              router.push(`/dashboard/lessons/${nextLesson.id}`)
            } else {
              router.push('/dashboard')
            }
          },
          color: 'bg-green-500 hover:bg-green-600',
        }
      } else {
        return {
          label: 'Mark Complete',
          icon: CheckCircle2,
          onClick: async () => {
            if (lessonId) {
              await markLessonComplete(lessonId)
            }
          },
          color: 'bg-accent hover:bg-accent-dark',
        }
      }
    }

    return null
  }

  const action = getAction()

  if (!action) return null

  const Icon = action.icon

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8 ${className}`}
        >
          <div className="relative">
            {/* Mobile: Center positioning */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={action.onClick}
                className={`${action.color} text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow flex items-center gap-3 min-w-[200px]`}
                aria-label={action.label}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                <span className="font-sans font-medium text-sm">{action.label}</span>
              </motion.button>
            </div>

            {/* Desktop: FAB with optional expanded action */}
            <div className="hidden md:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={action.onClick}
                className={`${action.color} text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow`}
                aria-label={action.label}
                title={action.label}
              >
                <Icon className="h-6 w-6" />
              </motion.button>
            </div>

            {/* Label tooltip for desktop on hover */}
            <div className="hidden md:block absolute right-full mr-4 top-1/2 transform -translate-y-1/2 pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
              <div className="bg-gray-900 text-white text-sm font-sans px-3 py-2 rounded-lg whitespace-nowrap">
                {action.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2">
                  <div className="border-4 border-transparent border-l-gray-900"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

