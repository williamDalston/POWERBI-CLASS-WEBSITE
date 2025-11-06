import { Lesson } from '@/lib/data/courseData'

export type AchievementCategory = 
  | 'milestone' 
  | 'streak' 
  | 'module' 
  | 'topic' 
  | 'time' 
  | 'special'

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  category: AchievementCategory
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  unlockedAt?: string // ISO date string
  progress?: number // 0-100, for unlocked achievements this is 100
  criteria: {
    type: 
      | 'lesson_count'
      | 'module_complete'
      | 'topic_complete'
      | 'streak_days'
      | 'time_of_day'
      | 'week_complete'
      | 'tag_complete'
    value: number | string
    description: string
  }
}

export const ALL_ACHIEVEMENTS: Achievement[] = [
  // Milestone Achievements
  {
    id: 'first-lesson',
    title: 'First Steps',
    description: 'Completed your first lesson!',
    icon: '🎉',
    category: 'milestone',
    rarity: 'common',
    criteria: {
      type: 'lesson_count',
      value: 1,
      description: 'Complete 1 lesson'
    }
  },
  {
    id: 'week-1-complete',
    title: 'Week 1 Complete',
    description: 'Completed your first week of learning!',
    icon: '🚀',
    category: 'milestone',
    rarity: 'common',
    criteria: {
      type: 'week_complete',
      value: 1,
      description: 'Complete 7 days of lessons'
    }
  },
  {
    id: 'ten-lessons',
    title: 'Getting Started',
    description: 'Completed 10 lessons!',
    icon: '📚',
    category: 'milestone',
    rarity: 'common',
    criteria: {
      type: 'lesson_count',
      value: 10,
      description: 'Complete 10 lessons'
    }
  },
  {
    id: 'twenty-five-lessons',
    title: 'Making Progress',
    description: 'Completed 25 lessons!',
    icon: '📈',
    category: 'milestone',
    rarity: 'rare',
    criteria: {
      type: 'lesson_count',
      value: 25,
      description: 'Complete 25 lessons'
    }
  },
  {
    id: 'fifty-lessons',
    title: 'Halfway Hero',
    description: 'Completed 50 lessons!',
    icon: '🎯',
    category: 'milestone',
    rarity: 'epic',
    criteria: {
      type: 'lesson_count',
      value: 50,
      description: 'Complete 50 lessons'
    }
  },
  {
    id: 'all-lessons',
    title: 'Complete Master',
    description: 'Finished all lessons!',
    icon: '🏆',
    category: 'milestone',
    rarity: 'legendary',
    criteria: {
      type: 'lesson_count',
      value: 100,
      description: 'Complete all 100+ lessons'
    }
  },
  
  // Streak Achievements
  {
    id: 'perfect-week',
    title: 'Perfect Week',
    description: 'Maintained a 7-day study streak!',
    icon: '🔥',
    category: 'streak',
    rarity: 'rare',
    criteria: {
      type: 'streak_days',
      value: 7,
      description: 'Study 7 days in a row'
    }
  },
  {
    id: 'streak-two-weeks',
    title: 'Dedicated Learner',
    description: 'Maintained a 14-day study streak!',
    icon: '💪',
    category: 'streak',
    rarity: 'epic',
    criteria: {
      type: 'streak_days',
      value: 14,
      description: 'Study 14 days in a row'
    }
  },
  {
    id: 'streak-month',
    title: 'Unstoppable',
    description: 'Maintained a 30-day study streak!',
    icon: '⚡',
    category: 'streak',
    rarity: 'legendary',
    criteria: {
      type: 'streak_days',
      value: 30,
      description: 'Study 30 days in a row'
    }
  },
  
  // Module Achievements
  {
    id: 'module-master',
    title: 'Module Master',
    description: 'Completed an entire module!',
    icon: '🎓',
    category: 'module',
    rarity: 'common',
    criteria: {
      type: 'module_complete',
      value: 1,
      description: 'Complete any module'
    }
  },
  
  // Topic Achievements
  {
    id: 'dax-master',
    title: 'DAX Master',
    description: 'Completed all DAX lessons!',
    icon: '⚡',
    category: 'topic',
    rarity: 'epic',
    criteria: {
      type: 'tag_complete',
      value: 'DAX',
      description: 'Complete all lessons tagged with DAX'
    }
  },
  {
    id: 'power-query-pro',
    title: 'Power Query Pro',
    description: 'Completed all Power Query lessons!',
    icon: '🔧',
    category: 'topic',
    rarity: 'epic',
    criteria: {
      type: 'tag_complete',
      value: 'Power Query',
      description: 'Complete all lessons tagged with Power Query'
    }
  },
  {
    id: 'visualization-expert',
    title: 'Visualization Expert',
    description: 'Completed all visualization lessons!',
    icon: '📊',
    category: 'topic',
    rarity: 'rare',
    criteria: {
      type: 'tag_complete',
      value: 'Visualizations',
      description: 'Complete all lessons tagged with Visualizations'
    }
  },
  
  // Time-based Achievements
  {
    id: 'night-owl',
    title: 'Night Owl',
    description: 'Completed a lesson after 10 PM!',
    icon: '🦉',
    category: 'time',
    rarity: 'rare',
    criteria: {
      type: 'time_of_day',
      value: 22, // 10 PM in 24-hour format
      description: 'Complete a lesson after 10 PM'
    }
  },
  {
    id: 'early-bird',
    title: 'Early Bird',
    description: 'Completed a lesson before 6 AM!',
    icon: '🌅',
    category: 'time',
    rarity: 'rare',
    criteria: {
      type: 'time_of_day',
      value: 6, // 6 AM in 24-hour format
      description: 'Complete a lesson before 6 AM'
    }
  },
]

/**
 * Check if an achievement should be unlocked based on criteria
 */
export function checkAchievementCriteria(
  achievement: Achievement,
  lessons: Lesson[],
  completedLessonIds: string[],
  currentStreak: number,
  lastCompletionTime?: Date
): boolean {
  const { criteria } = achievement
  
  switch (criteria.type) {
    case 'lesson_count':
      return completedLessonIds.length >= (criteria.value as number)
    
    case 'streak_days':
      return currentStreak >= (criteria.value as number)
    
    case 'module_complete': {
      // Check if any module is fully completed
      const modules = new Map<number, { total: number; completed: number }>()
      
      lessons.forEach(lesson => {
        if (!modules.has(lesson.moduleNumber)) {
          modules.set(lesson.moduleNumber, { total: 0, completed: 0 })
        }
        const module = modules.get(lesson.moduleNumber)!
        module.total++
        if (completedLessonIds.includes(lesson.id)) {
          module.completed++
        }
      })
      
      return Array.from(modules.values()).some(m => m.completed === m.total && m.total > 0)
    }
    
    case 'tag_complete': {
      const tag = criteria.value as string
      const lessonsWithTag = lessons.filter(l => l.tags?.includes(tag))
      const completedWithTag = lessonsWithTag.filter(l => 
        completedLessonIds.includes(l.id)
      )
      return lessonsWithTag.length > 0 && completedWithTag.length === lessonsWithTag.length
    }
    
    case 'time_of_day': {
      if (!lastCompletionTime) return false
      const hour = lastCompletionTime.getHours()
      const targetHour = criteria.value as number
      
      if (targetHour >= 22) {
        // Night owl: after 10 PM (22:00) or before 2 AM (02:00)
        return hour >= 22 || hour < 2
      } else {
        // Early bird: before 6 AM
        return hour < targetHour
      }
    }
    
    case 'week_complete': {
      // Check if completed lessons span 7 consecutive days
      if (!completedLessonIds.length) return false
      
      const progressData = typeof window !== 'undefined' 
        ? localStorage.getItem('lessonProgress')
        : null
      
      if (!progressData) return false
      
      try {
        const progress = JSON.parse(progressData) as Record<string, {
          completionDate?: string
        }>
        
        const completionDates = completedLessonIds
          .map(id => progress[id]?.completionDate)
          .filter(Boolean)
          .map(date => new Date(date!))
          .sort((a, b) => a.getTime() - b.getTime())
        
        if (completionDates.length < 7) return false
        
        // Check for 7 consecutive days
        const uniqueDates = new Set(
          completionDates.map(d => d.toISOString().split('T')[0])
        )
        
        const sortedDates = Array.from(uniqueDates).sort()
        if (sortedDates.length < 7) return false
        
        // Find longest consecutive streak
        let maxStreak = 1
        let currentStreak = 1
        
        for (let i = 1; i < sortedDates.length; i++) {
          const prev = new Date(sortedDates[i - 1])
          const curr = new Date(sortedDates[i])
          const diffDays = Math.round(
            (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24)
          )
          
          if (diffDays === 1) {
            currentStreak++
            maxStreak = Math.max(maxStreak, currentStreak)
          } else {
            currentStreak = 1
          }
        }
        
        return maxStreak >= 7
      } catch {
        return false
      }
    }
    
    default:
      return false
  }
}

/**
 * Calculate progress toward an achievement (0-100)
 */
export function calculateAchievementProgress(
  achievement: Achievement,
  lessons: Lesson[],
  completedLessonIds: string[],
  currentStreak: number
): number {
  if (achievement.unlockedAt) return 100
  
  const { criteria } = achievement
  
  switch (criteria.type) {
    case 'lesson_count': {
      const target = criteria.value as number
      return Math.min(100, Math.round((completedLessonIds.length / target) * 100))
    }
    
    case 'streak_days': {
      const target = criteria.value as number
      return Math.min(100, Math.round((currentStreak / target) * 100))
    }
    
    case 'module_complete': {
      const modules = new Map<number, { total: number; completed: number }>()
      
      lessons.forEach(lesson => {
        if (!modules.has(lesson.moduleNumber)) {
          modules.set(lesson.moduleNumber, { total: 0, completed: 0 })
        }
        const module = modules.get(lesson.moduleNumber)!
        module.total++
        if (completedLessonIds.includes(lesson.id)) {
          module.completed++
        }
      })
      
      const moduleProgresses = Array.from(modules.values())
        .filter(m => m.total > 0)
        .map(m => (m.completed / m.total) * 100)
      
      return moduleProgresses.length > 0 
        ? Math.max(...moduleProgresses)
        : 0
    }
    
    case 'tag_complete': {
      const tag = criteria.value as string
      const lessonsWithTag = lessons.filter(l => l.tags?.includes(tag))
      if (lessonsWithTag.length === 0) return 0
      const completedWithTag = lessonsWithTag.filter(l => 
        completedLessonIds.includes(l.id)
      )
      return Math.round((completedWithTag.length / lessonsWithTag.length) * 100)
    }
    
    default:
      return 0
  }
}

/**
 * Get achievements by category
 */
export function getAchievementsByCategory(
  achievements: Achievement[],
  category?: AchievementCategory
): Achievement[] {
  if (!category) return achievements
  return achievements.filter(a => a.category === category)
}

/**
 * Get rarity color for achievement
 */
export function getRarityColor(rarity: Achievement['rarity']): string {
  switch (rarity) {
    case 'common':
      return 'text-gray-600'
    case 'rare':
      return 'text-blue-600'
    case 'epic':
      return 'text-purple-600'
    case 'legendary':
      return 'text-yellow-600'
    default:
      return 'text-gray-600'
  }
}

/**
 * Get rarity border color
 */
export function getRarityBorderColor(rarity: Achievement['rarity']): string {
  switch (rarity) {
    case 'common':
      return 'border-gray-300'
    case 'rare':
      return 'border-blue-400'
    case 'epic':
      return 'border-purple-400'
    case 'legendary':
      return 'border-yellow-400'
    default:
      return 'border-gray-300'
  }
}





