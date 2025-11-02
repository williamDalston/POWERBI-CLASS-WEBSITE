'use client'

import { useState, useEffect, useRef } from 'react'
import { logger } from '@/lib/utils/logger'

interface ProgressData {
  daysPracticed: number
  totalTime: number // in minutes
  currentStreak: number
  totalLessons: number
  completedLessons: number
}

export function useProgress(initialData?: ProgressData) {
  // Use ref to track if we've initialized to prevent overwriting with initialData after mount
  const hasInitialized = useRef(false)
  
  const [progress, setProgress] = useState<ProgressData>(() => {
    // Initialize state with initialData only on first render
    const base = {
      daysPracticed: 0,
      totalTime: 0,
      currentStreak: 0,
      totalLessons: 12,
      completedLessons: 0,
    }
    if (initialData) {
      return { ...base, ...initialData }
    }
    return base
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Keep initialData ref updated but don't update state from it after mount
  const initialDataRef = useRef(initialData)
  useEffect(() => {
    initialDataRef.current = initialData
  }, [initialData])

  // Load progress from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && !hasInitialized.current) {
      try {
        const saved = localStorage.getItem('userProgress')
        if (saved) {
          const parsed = JSON.parse(saved)
          setProgress((prev) => ({ ...prev, ...parsed }))
        } else if (initialDataRef.current) {
          // If no saved data and we have initialData, use it
          setProgress((prev) => ({ ...prev, ...initialDataRef.current }))
        }
        hasInitialized.current = true
      } catch (err) {
        logger.error(new Error('Failed to load progress'), { error: err })
      }
    }
  }, [])

  // Save progress to localStorage whenever it changes (only after initialization)
  useEffect(() => {
    if (typeof window !== 'undefined' && hasInitialized.current) {
      try {
        localStorage.setItem('userProgress', JSON.stringify(progress))
      } catch (err) {
        logger.error(new Error('Failed to save progress'), { error: err })
      }
    }
  }, [progress])

  const updateProgress = async (updates: Partial<ProgressData>) => {
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 300))

      setProgress((prev) => ({ ...prev, ...updates }))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update progress')
    } finally {
      setIsLoading(false)
    }
  }

  const markLessonComplete = async () => {
    await updateProgress({
      completedLessons: progress.completedLessons + 1,
      daysPracticed: progress.daysPracticed + 1,
      currentStreak: progress.currentStreak + 1,
      totalTime: progress.totalTime + 18, // Assuming 18 min average lesson
    })
  }

  const resetProgress = () => {
    setProgress({
      daysPracticed: 0,
      totalTime: 0,
      currentStreak: 0,
      totalLessons: 12,
      completedLessons: 0,
    })
    if (typeof window !== 'undefined') {
      localStorage.removeItem('userProgress')
    }
  }

  const progressPercentage =
    progress.totalLessons > 0
      ? Math.round((progress.completedLessons / progress.totalLessons) * 100)
      : 0

  return {
    progress,
    isLoading,
    error,
    updateProgress,
    markLessonComplete,
    resetProgress,
    progressPercentage,
  }
}

