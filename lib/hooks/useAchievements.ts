'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { Lesson, getAllLessons } from '@/lib/data/courseData'
import {
  Achievement,
  ALL_ACHIEVEMENTS,
  checkAchievementCriteria,
  calculateAchievementProgress,
  getAchievementsByCategory,
  AchievementCategory,
} from '@/lib/utils/achievementUtils'
import { logger } from '@/lib/utils/logger'

export interface AchievementState extends Achievement {
  progress: number
}

export function useAchievements() {
  const [achievements, setAchievements] = useState<AchievementState[]>([])
  const [recentlyUnlocked, setRecentlyUnlocked] = useState<Achievement[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load all lessons - memoize to prevent unnecessary re-renders
  const lessons = useMemo(() => getAllLessons(), [])

  // Calculate current progress data
  const getProgressData = useCallback(() => {
    if (typeof window === 'undefined') {
      return {
        completedLessonIds: [],
        currentStreak: 0,
        lastCompletionTime: undefined,
      }
    }

    try {
      // Get completed lessons
      const completed = localStorage.getItem('completedLessons')
      const completedLessonIds = completed ? (JSON.parse(completed) as string[]) : []

      // Calculate streak from completion history
      const progressData = localStorage.getItem('lessonProgress')
      let currentStreak = 0
      let lastCompletionTime: Date | undefined

      if (progressData) {
        const progress = JSON.parse(progressData) as Record<string, {
          completionDate?: string
        }>

        const completionDates = completedLessonIds
          .map(id => {
            const data = progress[id]
            return data?.completionDate ? new Date(data.completionDate) : null
          })
          .filter((date): date is Date => date !== null)
          .sort((a, b) => b.getTime() - a.getTime())

        if (completionDates.length > 0) {
          lastCompletionTime = completionDates[0]
          
          // Calculate current streak
          const today = new Date()
          today.setHours(0, 0, 0, 0)
          
          let streakCount = 0
          let checkDate = new Date(today)
          
          for (const date of completionDates) {
            const dateStr = date.toISOString().split('T')[0]
            const checkStr = checkDate.toISOString().split('T')[0]
            
            if (dateStr === checkStr) {
              streakCount++
              checkDate.setDate(checkDate.getDate() - 1)
            } else if (dateStr < checkStr) {
              // Gap found, stop counting
              break
            }
          }
          
          currentStreak = streakCount
        }
      }

      return {
        completedLessonIds,
        currentStreak,
        lastCompletionTime,
      }
    } catch (err) {
      logger.error(new Error('Failed to load progress data'), { error: err })
      return {
        completedLessonIds: [],
        currentStreak: 0,
        lastCompletionTime: undefined,
      }
    }
  }, [])

  // Load achievements from localStorage
  const loadAchievements = useCallback(() => {
    if (typeof window === 'undefined') return

    try {
      const stored = localStorage.getItem('achievementData')
      const storedAchievements: Record<string, { unlockedAt?: string }> = stored
        ? JSON.parse(stored)
        : {}

      // Get current progress
      const { completedLessonIds, currentStreak, lastCompletionTime } = getProgressData()

      // Track newly unlocked achievements to batch the state update
      const newlyUnlocked: Achievement[] = []

      // Check each achievement
      const updatedAchievements: AchievementState[] = ALL_ACHIEVEMENTS.map(achievement => {
        const stored = storedAchievements[achievement.id] || {}
        const wasUnlocked = !!stored.unlockedAt
        const isUnlocked = checkAchievementCriteria(
          achievement,
          lessons,
          completedLessonIds,
          currentStreak,
          lastCompletionTime
        )

        // If newly unlocked, mark it
        if (isUnlocked && !wasUnlocked) {
          const unlockedAt = new Date().toISOString()
          storedAchievements[achievement.id] = { unlockedAt }
          newlyUnlocked.push({ ...achievement, unlockedAt })
        }

        const progress = calculateAchievementProgress(
          achievement,
          lessons,
          completedLessonIds,
          currentStreak
        )

        return {
          ...achievement,
          unlockedAt: stored.unlockedAt || (isUnlocked ? new Date().toISOString() : undefined),
          progress,
        }
      })

      // Save updated achievements
      localStorage.setItem('achievementData', JSON.stringify(storedAchievements))
      setAchievements(updatedAchievements)
      
      // Batch update recently unlocked (only if there are new achievements)
      if (newlyUnlocked.length > 0) {
        setRecentlyUnlocked(prev => {
          const existingIds = new Set(prev.map(a => a.id))
          const toAdd = newlyUnlocked.filter(a => !existingIds.has(a.id))
          return toAdd.length > 0 ? [...prev, ...toAdd] : prev
        })
      }
    } catch (err) {
      logger.error(new Error('Failed to load achievements'), { error: err })
    } finally {
      setIsLoading(false)
    }
  }, [lessons, getProgressData])

  // Check for new achievements (call after lesson completion)
  const checkForNewAchievements = useCallback(() => {
    loadAchievements()
  }, [loadAchievements])

  // Get achievement by ID
  const getAchievement = useCallback((id: string): AchievementState | undefined => {
    return achievements.find(a => a.id === id)
  }, [achievements])

  // Get unlocked achievements
  const getUnlockedAchievements = useCallback((): AchievementState[] => {
    return achievements.filter(a => a.unlockedAt)
  }, [achievements])

  // Get locked achievements
  const getLockedAchievements = useCallback((): AchievementState[] => {
    return achievements.filter(a => !a.unlockedAt)
  }, [achievements])

  // Get achievements by category
  const getCategoryAchievements = useCallback((
    category: AchievementCategory
  ): AchievementState[] => {
    return achievements.filter(a => a.category === category)
  }, [achievements])

  // Get total progress stats
  const getProgressStats = useCallback(() => {
    const total = achievements.length
    const unlocked = achievements.filter(a => a.unlockedAt).length
    const byCategory = achievements.reduce((acc, a) => {
      acc[a.category] = (acc[a.category] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const unlockedByCategory = achievements
      .filter(a => a.unlockedAt)
      .reduce((acc, a) => {
        acc[a.category] = (acc[a.category] || 0) + 1
        return acc
      }, {} as Record<string, number>)

    return {
      total,
      unlocked,
      locked: total - unlocked,
      percentage: total > 0 ? Math.round((unlocked / total) * 100) : 0,
      byCategory,
      unlockedByCategory,
    }
  }, [achievements])

  // Clear recently unlocked (after showing notification)
  const clearRecentlyUnlocked = useCallback(() => {
    setRecentlyUnlocked([])
  }, [])

  // Load on mount and when progress changes
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    loadAchievements()
    
    // Listen for storage changes
    const handleStorageChange = () => {
      loadAchievements()
    }
    
    // Listen for lesson completion events
    const handleLessonCompleted = () => {
      // Small delay to ensure localStorage is updated
      setTimeout(() => {
        loadAchievements()
      }, 100)
    }
    
    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('lesson-completed', handleLessonCompleted as EventListener)
    
    // Also check periodically for local changes (longer interval to prevent loops)
    const interval = setInterval(() => {
      loadAchievements()
    }, 5000) // Increased from 2000 to 5000ms to reduce frequency
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('lesson-completed', handleLessonCompleted as EventListener)
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Only run once on mount - loadAchievements is stable enough

  return {
    achievements,
    recentlyUnlocked,
    isLoading,
    getAchievement,
    getUnlockedAchievements,
    getLockedAchievements,
    getCategoryAchievements,
    getProgressStats,
    checkForNewAchievements,
    clearRecentlyUnlocked,
    reloadAchievements: loadAchievements,
  }
}

