import { getAllLessons, Lesson } from '@/lib/data/courseData'
import { getAllVideoAnalytics, VideoWatchProgress } from '@/lib/hooks/useVideoAnalytics'
import { logger } from './logger'

export interface Recommendation {
  lesson: Lesson
  reason: string
  priority: 'high' | 'medium' | 'low'
  score: number
}

export interface RecommendationContext {
  currentLessonId?: string
  completedLessonIds?: string[]
  videoAnalytics?: Record<string, VideoWatchProgress>
  quizScores?: Record<string, number>
  timeSpent?: Record<string, number>
}

/**
 * Get smart recommendations based on user progress and behavior
 */
export function getSmartRecommendations(
  context?: RecommendationContext,
  limit: number = 5
): Recommendation[] {
  const allLessons = getAllLessons()
  const recommendations: Recommendation[] = []

  // Load data if not provided
  let completedIds: string[] = []
  let videoAnalytics: Record<string, VideoWatchProgress> = {}
  let timeSpent: Record<string, number> = {}
  
  if (typeof window !== 'undefined') {
    try {
      const completed = localStorage.getItem('completedLessons')
      completedIds = completed ? (JSON.parse(completed) as string[]) : []
      
      // Load video analytics
      videoAnalytics = getAllVideoAnalytics()
      
      // Load time spent data
      const progressData = localStorage.getItem('lessonProgress')
      if (progressData) {
        const progress = JSON.parse(progressData) as Record<string, any>
        Object.keys(progress).forEach(lessonId => {
          timeSpent[lessonId] = progress[lessonId].timeSpent || 0
        })
      }
    } catch (err) {
      logger.error(new Error('Failed to load user data'), { error: err })
    }
  }

  // Use provided context or fallback to loaded data
  const actualCompletedIds = context?.completedLessonIds || completedIds
  const actualVideoAnalytics = context?.videoAnalytics || videoAnalytics
  const actualTimeSpent = context?.timeSpent || timeSpent

  // Strategy 1: Next lesson in sequence (highest priority)
  const incompleteLessons = allLessons.filter(lesson => !actualCompletedIds.includes(lesson.id))
  if (incompleteLessons.length > 0) {
    const nextLesson = incompleteLessons[0]
    recommendations.push({
      lesson: nextLesson,
      reason: 'Continue your learning path with the next lesson',
      priority: 'high',
      score: 100,
    })
  }

  // Strategy 2: Lessons with low completion (needs review)
  Object.entries(actualVideoAnalytics).forEach(([lessonId, analytics]) => {
    const lesson = allLessons.find(l => l.id === lessonId)
    if (lesson && analytics.completionPercentage < 50 && analytics.completionPercentage > 0) {
      recommendations.push({
        lesson,
        reason: `You've watched ${Math.round(analytics.completionPercentage)}% - finish this lesson to complete it`,
        priority: 'high',
        score: 90 - analytics.completionPercentage,
      })
    }
  })

  // Strategy 3: Related lessons by tags/topic
  if (context?.currentLessonId) {
    const currentLesson = allLessons.find(l => l.id === context.currentLessonId)
    if (currentLesson) {
      const relatedLessons = allLessons.filter(lesson => {
        if (lesson.id === context.currentLessonId) return false
        if (actualCompletedIds.includes(lesson.id)) return false
        
        // Match by tags
        const hasCommonTag = currentLesson.tags?.some(tag =>
          lesson.tags?.includes(tag)
        )
        
        // Match by topic
        const hasSameTopic = currentLesson.topic && lesson.topic === currentLesson.topic
        
        // Match by module proximity
        const isSameModule = lesson.moduleNumber === currentLesson.moduleNumber
        
        return (hasCommonTag || hasSameTopic || isSameModule) && 
               !recommendations.some(r => r.lesson.id === lesson.id)
      })
      
      relatedLessons.slice(0, 3).forEach(lesson => {
        const reason = lesson.moduleNumber === currentLesson.moduleNumber
          ? `Next lesson in "${currentLesson.tags?.[0] || 'this module'}"`
          : `Related to "${currentLesson.topic || currentLesson.tags?.[0] || 'what you are learning'}"`
        
        recommendations.push({
          lesson,
          reason,
          priority: 'medium',
          score: 70,
        })
      })
    }
  }

  // Strategy 4: Prerequisites for struggling areas
  // If user spent too much time on advanced lessons, suggest fundamentals
  const advancedLessons = allLessons.filter(l => l.difficulty === 'advanced')
  const timeOnAdvanced = advancedLessons.reduce((sum, lesson) => {
    return sum + (actualTimeSpent[lesson.id] || 0)
  }, 0)
  
  if (timeOnAdvanced > 60) { // More than 60 minutes on advanced
    const beginnerLessons = allLessons
      .filter(l => l.difficulty === 'beginner' && !actualCompletedIds.includes(l.id))
      .slice(0, 2)
    
    beginnerLessons.forEach(lesson => {
      if (!recommendations.some(r => r.lesson.id === lesson.id)) {
        recommendations.push({
          lesson,
          reason: 'Strengthen your foundation with core concepts',
          priority: 'medium',
          score: 60,
        })
      }
    })
  }

  // Strategy 5: Labs/practical exercises if user completed many concepts
  const completedLessons = allLessons.filter(l => actualCompletedIds.includes(l.id))
  const completedWithLabs = completedLessons.filter(l => (l.content?.labs?.length || 0) > 0).length
  const totalCompleted = completedLessons.length
  
  if (totalCompleted > 5 && completedWithLabs / totalCompleted < 0.3) {
    const labLessons = allLessons
      .filter(l => 
        (l.content?.labs?.length || 0) > 0 && 
        !actualCompletedIds.includes(l.id)
      )
      .slice(0, 2)
    
    labLessons.forEach(lesson => {
      if (!recommendations.some(r => r.lesson.id === lesson.id)) {
        recommendations.push({
          lesson,
          reason: 'Practice what you have learned with hands-on labs',
          priority: 'medium',
          score: 65,
        })
      }
    })
  }

  // Strategy 6: Time Intelligence lessons if DAX lessons completed
  const completedDAXLessons = completedLessons.filter(l =>
    l.tags?.some(tag => tag.toLowerCase().includes('dax')) ||
    l.title.toLowerCase().includes('dax')
  )
  
  if (completedDAXLessons.length >= 3) {
    const timeIntelligenceLessons = allLessons
      .filter(l =>
        (l.tags?.some(tag => tag.toLowerCase().includes('time')) ||
         l.title.toLowerCase().includes('time intelligence')) &&
        !actualCompletedIds.includes(l.id)
      )
      .slice(0, 2)
    
    timeIntelligenceLessons.forEach(lesson => {
      if (!recommendations.some(r => r.lesson.id === lesson.id)) {
        recommendations.push({
          lesson,
          reason: 'Master Time Intelligence after learning DAX basics',
          priority: 'high',
          score: 85,
        })
      }
    })
  }

  // Remove duplicates and sort by score
  const uniqueRecommendations = recommendations.reduce((acc, rec) => {
    const existing = acc.find(r => r.lesson.id === rec.lesson.id)
    if (!existing) {
      acc.push(rec)
    } else if (rec.score > existing.score) {
      // Replace with higher score
      const index = acc.indexOf(existing)
      acc[index] = rec
    }
    return acc
  }, [] as Recommendation[])

  // Sort by priority and score
  const priorityOrder = { high: 3, medium: 2, low: 1 }
  uniqueRecommendations.sort((a, b) => {
    const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority]
    if (priorityDiff !== 0) return priorityDiff
    return b.score - a.score
  })

  return uniqueRecommendations.slice(0, limit)
}

/**
 * Get related lessons based on tags, topic, or module
 */
export function getRelatedLessons(lessonId: string, limit: number = 4): Lesson[] {
  const allLessons = getAllLessons()
  const currentLesson = allLessons.find(l => l.id === lessonId)
  
  if (!currentLesson) return []

  // Find related lessons
  const related = allLessons.filter(lesson => {
    if (lesson.id === lessonId) return false
    
    // Same module
    if (lesson.moduleNumber === currentLesson.moduleNumber) return true
    
    // Same topic
    if (currentLesson.topic && lesson.topic === currentLesson.topic) return true
    
    // Common tags
    if (currentLesson.tags && lesson.tags) {
      const commonTags = currentLesson.tags.filter(tag => lesson.tags!.includes(tag))
      if (commonTags.length > 0) return true
    }
    
    return false
  })

  // Prioritize: same module > same topic > common tags
  related.sort((a, b) => {
    if (a.moduleNumber === currentLesson.moduleNumber && b.moduleNumber !== currentLesson.moduleNumber) return -1
    if (a.moduleNumber !== currentLesson.moduleNumber && b.moduleNumber === currentLesson.moduleNumber) return 1
    
    if (a.topic === currentLesson.topic && b.topic !== currentLesson.topic) return -1
    if (a.topic !== currentLesson.topic && b.topic === currentLesson.topic) return 1
    
    return 0
  })

  return related.slice(0, limit)
}

/**
 * Get recommendations based on quiz performance
 */
export function getRecommendationsFromQuizPerformance(
  failedTopics: string[],
  limit: number = 3
): Recommendation[] {
  const allLessons = getAllLessons()
  const recommendations: Recommendation[] = []

  failedTopics.forEach(topic => {
    const lessons = allLessons
      .filter(l =>
        (l.topic === topic || l.tags?.some(tag => tag.toLowerCase().includes(topic.toLowerCase()))) &&
        (l.difficulty === 'beginner' || l.difficulty === 'intermediate')
      )
      .slice(0, 1)
    
    lessons.forEach(lesson => {
      recommendations.push({
        lesson,
        reason: `Review "${topic}" to improve your understanding`,
        priority: 'high',
        score: 95,
      })
    })
  })

  return recommendations.slice(0, limit)
}

