/**
 * Utilities for analyzing and scoring lesson content completeness
 */

import { Lesson } from '@/lib/data/courseData'

/**
 * Calculate content completeness score for a lesson
 * Scores range from 0-10 based on available content fields
 */
export function getContentCompletenessScore(lesson: Lesson): number {
  if (!lesson.content) return 0

  let score = 0
  const { concept, discussion, labs, keyPoints, insiderTips, tables } = lesson.content

  // Core content (required for text-only learning)
  if (concept && concept.trim().length > 20) score += 2
  if (discussion && discussion.trim().length > 50) score += 2
  
  // Supplementary content
  if (keyPoints && keyPoints.length > 0) score += 1.5
  if (insiderTips && insiderTips.length > 0) score += 1.5
  if (tables && tables.length > 0) score += 1
  if (labs && labs.length > 0) score += 2

  // Bonus for exercise materials
  if (lesson.exerciseMaterials && lesson.exerciseMaterials.length > 0) score += 0.5

  return Math.min(score, 10)
}

/**
 * Determine if a lesson is complete enough to learn without video
 */
export function isLessonTextComplete(lesson: Lesson): boolean {
  const score = getContentCompletenessScore(lesson)
  return score >= 5 // Threshold: need at least concept + discussion + one other element
}

/**
 * Get a content completeness level label
 */
export function getContentCompletenessLevel(lesson: Lesson): 'complete' | 'partial' | 'minimal' {
  const score = getContentCompletenessScore(lesson)
  
  if (score >= 7) return 'complete'
  if (score >= 4) return 'partial'
  return 'minimal'
}

/**
 * Get content completeness description for display
 */
export function getContentCompletenessDescription(lesson: Lesson): string {
  const level = getContentCompletenessLevel(lesson)
  
  switch (level) {
    case 'complete':
      return 'Full content available. You can learn everything from this lesson without watching the video.'
    case 'partial':
      return 'Most content available. The video is recommended for complete coverage.'
    case 'minimal':
      return 'Limited content. Watching the video is highly recommended.'
  }
}

/**
 * Get content completeness badge color
 */
export function getContentCompletenessBadgeColor(level: 'complete' | 'partial' | 'minimal'): string {
  switch (level) {
    case 'complete':
      return 'bg-green-100 text-green-800 border-green-200'
    case 'partial':
      return 'bg-amber-100 text-amber-800 border-amber-200'
    case 'minimal':
      return 'bg-red-100 text-red-800 border-red-200'
  }
}

/**
 * Get content completeness badge icon name
 */
export function getContentCompletenessBadgeIconName(level: 'complete' | 'partial' | 'minimal'): 'check' | 'play' | 'warning' {
  switch (level) {
    case 'complete':
      return 'check'
    case 'partial':
      return 'play'
    case 'minimal':
      return 'warning'
  }
}

/**
 * Check if a lesson has labs that need preparation materials
 */
export function lessonNeedsPreparationMaterials(lesson: Lesson): boolean {
  return !!(lesson.content?.labs && lesson.content.labs.length > 0 && 
           (!lesson.exerciseMaterials || lesson.exerciseMaterials.length === 0))
}

/**
 * Get missing content elements for a lesson
 */
export function getMissingContentElements(lesson: Lesson): string[] {
  if (!lesson.content) return ['concept', 'discussion', 'labs', 'keyPoints', 'insiderTips']
  
  const missing: string[] = []
  
  if (!lesson.content.concept || lesson.content.concept.trim().length < 20) missing.push('concept')
  if (!lesson.content.discussion || lesson.content.discussion.trim().length < 50) missing.push('discussion')
  if (!lesson.content.keyPoints || lesson.content.keyPoints.length === 0) missing.push('key points')
  if (!lesson.content.labs || lesson.content.labs.length === 0) {
    if (lesson.title.toLowerCase().includes('lab') || lesson.title.toLowerCase().includes('hands-on')) {
      missing.push('lab instructions')
    }
  }
  if (!lesson.content.insiderTips || lesson.content.insiderTips.length === 0) missing.push('insider tips')
  
  // Check for exercise materials if labs exist
  if (lesson.content.labs && lesson.content.labs.length > 0) {
    if (!lesson.exerciseMaterials || lesson.exerciseMaterials.length === 0) {
      missing.push('exercise materials')
    }
  }
  
  return missing
}

