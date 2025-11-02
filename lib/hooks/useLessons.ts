'use client'

import { useState, useEffect } from 'react'
import { getAllLessons, Lesson as CourseLesson } from '@/lib/data/courseData'

export interface Lesson {
  id: string
  title: string
  description: string
  moduleNumber?: number
  lessonNumber?: number
  duration?: number
  videoUrl?: string
  exerciseMaterials?: {
    name: string
    url: string
  }[]
  isCompleted?: boolean
  tags?: string[]
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  topic?: string
  timeSpent?: number // in minutes
  lastAccessed?: string // ISO date string
  completionDate?: string // ISO date string
}

export function useLessons() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null)

  // Load lessons from course data
  useEffect(() => {
    const loadLessons = async () => {
      setIsLoading(true)
      setError(null)

      try {
        // Simulate API call for loading state
        await new Promise((resolve) => setTimeout(resolve, 300))

        // Get all lessons from course data
        const allLessons = getAllLessons()

        // Load enhanced progress data from localStorage
        if (typeof window !== 'undefined') {
          try {
            // Load completed lessons
            const completed = localStorage.getItem('completedLessons')
            if (completed) {
              const completedIds = JSON.parse(completed) as string[]
              allLessons.forEach((lesson) => {
                if (completedIds.includes(lesson.id)) {
                  lesson.isCompleted = true
                }
              })
            }

            // Load time spent and access data
            const progressData = localStorage.getItem('lessonProgress')
            if (progressData) {
              const progress = JSON.parse(progressData) as Record<string, {
                timeSpent?: number
                lastAccessed?: string
                completionDate?: string
              }>
              allLessons.forEach((lesson) => {
                const lessonProgress = progress[lesson.id]
                if (lessonProgress) {
                  lesson.timeSpent = lessonProgress.timeSpent || 0
                  lesson.lastAccessed = lessonProgress.lastAccessed
                  lesson.completionDate = lessonProgress.completionDate
                }
              })
            }
          } catch (err) {
            console.error('Failed to load lesson progress:', err)
          }
        }

        setLessons(allLessons)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load lessons')
      } finally {
        setIsLoading(false)
      }
    }

    loadLessons()
  }, [])

  const getNextLesson = (): Lesson | undefined => {
    return lessons.find((lesson) => !lesson.isCompleted)
  }

  const getLessonById = (id: string): Lesson | undefined => {
    return lessons.find((lesson) => lesson.id === id)
  }

  const markLessonComplete = async (lessonId: string) => {
    const completionDate = new Date().toISOString()
    
    setLessons((prev) =>
      prev.map((lesson) =>
        lesson.id === lessonId 
          ? { ...lesson, isCompleted: true, completionDate } 
          : lesson
      )
    )

    // Save to localStorage
    if (typeof window !== 'undefined') {
      try {
        // Update completed lessons list
        const completed = localStorage.getItem('completedLessons')
        const completedIds = completed ? (JSON.parse(completed) as string[]) : []
        if (!completedIds.includes(lessonId)) {
          completedIds.push(lessonId)
          localStorage.setItem('completedLessons', JSON.stringify(completedIds))
        }

        // Update progress data
        const progressData = localStorage.getItem('lessonProgress')
        const progress = progressData ? JSON.parse(progressData) : {}
        if (!progress[lessonId]) {
          progress[lessonId] = {}
        }
        progress[lessonId].completionDate = completionDate
        localStorage.setItem('lessonProgress', JSON.stringify(progress))

        // Check for achievements
        checkAchievements(completedIds.length)
      } catch (err) {
        console.error('Failed to save completed lesson:', err)
      }
    }
  }

  const trackTimeSpent = (lessonId: string, minutes: number) => {
    setLessons((prev) =>
      prev.map((lesson) =>
        lesson.id === lessonId
          ? { 
              ...lesson, 
              timeSpent: (lesson.timeSpent || 0) + minutes,
              lastAccessed: new Date().toISOString()
            }
          : lesson
      )
    )

    // Save to localStorage
    if (typeof window !== 'undefined') {
      try {
        const progressData = localStorage.getItem('lessonProgress')
        const progress = progressData ? JSON.parse(progressData) : {}
        if (!progress[lessonId]) {
          progress[lessonId] = {}
        }
        progress[lessonId].timeSpent = (progress[lessonId].timeSpent || 0) + minutes
        progress[lessonId].lastAccessed = new Date().toISOString()
        localStorage.setItem('lessonProgress', JSON.stringify(progress))
      } catch (err) {
        console.error('Failed to save time spent:', err)
      }
    }
  }

  const checkAchievements = (completedCount: number) => {
    const achievements: string[] = []
    
    if (completedCount === 1) {
      achievements.push('First Steps: Completed your first lesson! 🎉')
    }
    if (completedCount === 10) {
      achievements.push('Getting Started: Completed 10 lessons! 🚀')
    }
    if (completedCount === 25) {
      achievements.push('Making Progress: Completed 25 lessons! 📈')
    }
    if (completedCount === 50) {
      achievements.push('Halfway Hero: Completed 50 lessons! 🎯')
    }
    if (completedCount === 100) {
      achievements.push('Complete Master: Finished all lessons! 🏆')
    }

    // Store achievements
    if (achievements.length > 0 && typeof window !== 'undefined') {
      try {
        const existingAchievements = localStorage.getItem('achievements')
        const allAchievements = existingAchievements 
          ? JSON.parse(existingAchievements) as string[]
          : []
        
        achievements.forEach(achievement => {
          if (!allAchievements.includes(achievement)) {
            allAchievements.push(achievement)
          }
        })
        
        localStorage.setItem('achievements', JSON.stringify(allAchievements))
        
        // You could trigger a toast notification here
        console.log('New achievements:', achievements)
      } catch (err) {
        console.error('Failed to save achievements:', err)
      }
    }
  }

  const getProgressStats = () => {
    const completed = lessons.filter((l) => l.isCompleted).length
    const total = lessons.length
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0
    
    // Calculate total time spent
    const totalTimeSpent = lessons.reduce((sum, lesson) => sum + (lesson.timeSpent || 0), 0)
    
    // Calculate average time per lesson
    const avgTimePerLesson = completed > 0 ? Math.round(totalTimeSpent / completed) : 0

    return {
      completed,
      total,
      percentage,
      totalTimeSpent,
      avgTimePerLesson,
    }
  }

  const getAchievements = (): string[] => {
    if (typeof window !== 'undefined') {
      try {
        const achievements = localStorage.getItem('achievements')
        return achievements ? JSON.parse(achievements) as string[] : []
      } catch (err) {
        console.error('Failed to load achievements:', err)
        return []
      }
    }
    return []
  }

  return {
    lessons,
    isLoading,
    error,
    currentLessonId,
    setCurrentLessonId,
    getNextLesson,
    getLessonById,
    markLessonComplete,
    trackTimeSpent,
    getProgressStats,
    getAchievements,
  }
}

