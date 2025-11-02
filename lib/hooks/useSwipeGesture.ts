// Custom hook for swipe gestures
import { useState, useRef, useCallback } from 'react'

export interface SwipeHandlers {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
}

export interface SwipeConfig {
  threshold?: number // Minimum distance for a swipe (default: 50px)
  velocity?: number // Minimum velocity for a swipe (default: 0.3)
}

export function useSwipeGesture(
  handlers: SwipeHandlers,
  config: SwipeConfig = {}
) {
  const {
    threshold = 50,
    velocity = 0.3,
  } = config

  const touchStart = useRef<{ x: number; y: number; time: number } | null>(null)
  const [isSwiping, setIsSwiping] = useState(false)

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0]
    touchStart.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    }
  }, [])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (touchStart.current) {
      setIsSwiping(true)
    }
  }, [])

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!touchStart.current) return

    const touch = e.changedTouches[0]
    const deltaX = touch.clientX - touchStart.current.x
    const deltaY = touch.clientY - touchStart.current.y
    const deltaTime = Date.now() - touchStart.current.time
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    const speed = distance / deltaTime

    // Determine if this is a swipe
    if (distance > threshold && speed > velocity) {
      const absX = Math.abs(deltaX)
      const absY = Math.abs(deltaY)

      // Determine swipe direction
      if (absX > absY) {
        // Horizontal swipe
        if (deltaX > 0) {
          handlers.onSwipeRight?.()
        } else {
          handlers.onSwipeLeft?.()
        }
      } else {
        // Vertical swipe
        if (deltaY > 0) {
          handlers.onSwipeDown?.()
        } else {
          handlers.onSwipeUp?.()
        }
      }
    }

    touchStart.current = null
    setIsSwiping(false)
  }, [threshold, velocity, handlers])

  return {
    isSwiping,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    },
  }
}


