'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef } from 'react'
import { getNextLesson, getPreviousLesson } from '@/lib/data/courseData'

interface UseSwipeNavigationOptions {
  enabled?: boolean
  disableOnScroll?: boolean
  threshold?: number
  velocity?: number
}

export function useSwipeNavigation(options: UseSwipeNavigationOptions = {}) {
  const router = useRouter()
  const pathname = usePathname()
  const isScrolling = useRef(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)
  const touchStart = useRef<{ x: number; y: number; time: number } | null>(null)

  const {
    enabled = true,
    disableOnScroll = true,
    threshold = 50,
    velocity = 0.3,
  } = options

  // Detect if user is scrolling
  useEffect(() => {
    if (!disableOnScroll || !enabled) return

    const handleScroll = () => {
      isScrolling.current = true
      
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
      
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false
      }, 150)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [enabled, disableOnScroll])

  const handleSwipeLeft = useCallback(() => {
    if (!enabled || isScrolling.current) return
    
    const isLessonPage = pathname?.startsWith('/dashboard/lessons/')
    if (!isLessonPage) return

    const lessonId = pathname.split('/').pop()
    if (!lessonId) return

    const nextLesson = getNextLesson(lessonId)
    if (nextLesson) {
      router.push(`/dashboard/lessons/${nextLesson.id}`)
    }
  }, [enabled, pathname, router])

  const handleSwipeRight = useCallback(() => {
    if (!enabled || isScrolling.current) return
    
    const isLessonPage = pathname?.startsWith('/dashboard/lessons/')
    if (!isLessonPage) return

    const lessonId = pathname.split('/').pop()
    if (!lessonId) return

    const previousLesson = getPreviousLesson(lessonId)
    if (previousLesson) {
      router.push(`/dashboard/lessons/${previousLesson.id}`)
    }
  }, [enabled, pathname, router])

  const handleSwipeDown = useCallback(() => {
    if (!enabled || isScrolling.current) return
    
    const isLessonPage = pathname?.startsWith('/dashboard/lessons/')
    if (isLessonPage) {
      router.push('/dashboard')
    }
  }, [enabled, pathname, router])

  // Attach touch handlers
  useEffect(() => {
    if (!enabled) return

    const handleTouchStart = (e: TouchEvent) => {
      if (isScrolling.current) return
      const touch = e.touches[0]
      touchStart.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStart.current || isScrolling.current) return

      const touch = e.changedTouches[0]
      const deltaX = touch.clientX - touchStart.current.x
      const deltaY = touch.clientY - touchStart.current.y
      const deltaTime = Date.now() - touchStart.current.time
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      const speed = distance / deltaTime

      if (distance > threshold && speed > velocity) {
        const absX = Math.abs(deltaX)
        const absY = Math.abs(deltaY)

        if (absX > absY) {
          // Horizontal swipe
          if (deltaX > 0) {
            handleSwipeRight()
          } else {
            handleSwipeLeft()
          }
        } else {
          // Vertical swipe
          if (deltaY > 0) {
            handleSwipeDown()
          }
        }
      }

      touchStart.current = null
    }

    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [enabled, threshold, velocity, handleSwipeLeft, handleSwipeRight, handleSwipeDown])

  return {
    canSwipeLeft: enabled && pathname?.startsWith('/dashboard/lessons/'),
    canSwipeRight: enabled && pathname?.startsWith('/dashboard/lessons/'),
    canSwipeDown: enabled && pathname?.startsWith('/dashboard/lessons/'),
  }
}

