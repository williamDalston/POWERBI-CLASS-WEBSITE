import { Lesson } from '@/lib/hooks/useLessons'

// Map module numbers to topics for better analytics
const MODULE_TO_TOPIC_MAP: Record<number, string> = {
  0: 'Introduction',
  1: 'Power BI Ecosystem',
  2: 'Data Acquisition',
  3: 'Power Query',
  4: 'Visualization',
  5: 'Data Modeling',
  6: 'DAX Fundamentals',
  7: 'Intermediate DAX',
  8: 'Advanced DAX',
  9: 'Time Intelligence',
  10: 'Report Design',
  11: 'AI Visuals',
  12: 'Power BI Service',
  13: 'Performance Tuning',
  14: 'Security & Governance',
  15: 'Advanced Modeling',
  16: 'Enterprise Deployment',
  17: 'Microsoft Fabric',
  18: 'Certification',
}

/**
 * Get topic for a lesson based on module number
 */
function getTopicForLesson(lesson: Lesson): string {
  if (lesson.topic) return lesson.topic
  if (lesson.moduleNumber !== undefined && MODULE_TO_TOPIC_MAP[lesson.moduleNumber]) {
    return MODULE_TO_TOPIC_MAP[lesson.moduleNumber]
  }
  return 'Other'
}

export interface AnalyticsData {
  completedOverTime: Array<{ date: string; completed: number; cumulative: number }>
  timeSpentPerModule: Array<{ module: string; minutes: number; lessonsCompleted: number }>
  moduleDifficulty: Array<{ module: string; avgTimePerLesson: number; completionRate: number }>
  topicMastery: Array<{ topic: string; mastery: number; lessonsCount: number }>
  studyStreaks: Array<{ date: string; active: boolean }>
  mostChallengingLessons: Array<{ lesson: string; revisits: number; avgTime: number }>
}

export interface WeeklyActivity {
  week: string
  lessonsCompleted: number
  timeSpent: number // in minutes
  activeDays: number
}

export interface PersonalizationInsight {
  type: 'milestone' | 'warning' | 'recommendation' | 'achievement'
  message: string
  priority: 'high' | 'medium' | 'low'
  action?: {
    label: string
    href: string
  }
}

/**
 * Calculate analytics data from lesson progress
 */
export function calculateAnalytics(lessons: Lesson[]): AnalyticsData {
  // Get completion history from localStorage
  const completionHistory: Array<{ date: string; lessonId: string }> = []
  
  if (typeof window !== 'undefined') {
    try {
      const progressData = localStorage.getItem('lessonProgress')
      if (progressData) {
        const progress = JSON.parse(progressData) as Record<string, {
          completionDate?: string
        }>
        
        Object.entries(progress).forEach(([lessonId, data]) => {
          if (data.completionDate) {
            completionHistory.push({
              date: data.completionDate,
              lessonId
            })
          }
        })
      }
    } catch (err) {
      console.error('Failed to load completion history:', err)
    }
  }

  // Calculate completed over time
  const completedOverTime = calculateCompletedOverTime(completionHistory)
  
  // Calculate time spent per module
  const timeSpentPerModule = calculateTimePerModule(lessons)
  
  // Calculate module difficulty
  const moduleDifficulty = calculateModuleDifficulty(lessons, completionHistory)
  
  // Calculate topic mastery
  const topicMastery = calculateTopicMastery(lessons)
  
  // Calculate study streaks
  const studyStreaks = calculateStudyStreaks(completionHistory)
  
  // Find most challenging lessons
  const mostChallengingLessons = findMostChallengingLessons(lessons)

  return {
    completedOverTime,
    timeSpentPerModule,
    moduleDifficulty,
    topicMastery,
    studyStreaks,
    mostChallengingLessons,
  }
}

/**
 * Calculate cumulative completion over time
 */
function calculateCompletedOverTime(
  completionHistory: Array<{ date: string; lessonId: string }>
): Array<{ date: string; completed: number; cumulative: number }> {
  // Sort by date
  const sorted = completionHistory.sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  )

  const result: Array<{ date: string; completed: number; cumulative: number }> = []
  let cumulative = 0

  // Group by date
  const groupedByDate: Record<string, number> = {}
  sorted.forEach(({ date }) => {
    const day = date.split('T')[0]
    groupedByDate[day] = (groupedByDate[day] || 0) + 1
  })

  Object.entries(groupedByDate).forEach(([date, completed]) => {
    cumulative += completed
    result.push({ date, completed, cumulative })
  })

  return result
}

/**
 * Calculate time spent and progress per module
 */
function calculateTimePerModule(
  lessons: Lesson[]
): Array<{ module: string; minutes: number; lessonsCompleted: number }> {
  const moduleMap = new Map<string, { minutes: number; completed: number }>()

  lessons.forEach((lesson) => {
    const module = lesson.moduleNumber?.toString() || '0'
    const current = moduleMap.get(module) || { minutes: 0, completed: 0 }
    
    moduleMap.set(module, {
      minutes: current.minutes + (lesson.timeSpent || 0),
      completed: current.completed + (lesson.isCompleted ? 1 : 0),
    })
  })

  return Array.from(moduleMap.entries())
    .map(([module, data]) => ({
      module: `Module ${module}`,
      minutes: data.minutes,
      lessonsCompleted: data.completed,
    }))
    .sort((a, b) => parseInt(a.module.split(' ')[1]) - parseInt(b.module.split(' ')[1]))
}

/**
 * Calculate module difficulty based on time spent and completion rate
 */
function calculateModuleDifficulty(
  lessons: Lesson[],
  completionHistory: Array<{ date: string; lessonId: string }>
): Array<{ module: string; avgTimePerLesson: number; completionRate: number }> {
  const moduleMap = new Map<string, { totalTime: number; completed: number; total: number }>()

  lessons.forEach((lesson) => {
    const module = lesson.moduleNumber?.toString() || '0'
    const current = moduleMap.get(module) || { totalTime: 0, completed: 0, total: 0 }
    
    moduleMap.set(module, {
      totalTime: current.totalTime + (lesson.timeSpent || 0),
      completed: current.completed + (lesson.isCompleted ? 1 : 0),
      total: current.total + 1,
    })
  })

  return Array.from(moduleMap.entries())
    .map(([module, data]) => ({
      module: `Module ${module}`,
      avgTimePerLesson: data.completed > 0 ? Math.round(data.totalTime / data.completed) : 0,
      completionRate: data.total > 0 ? (data.completed / data.total) * 100 : 0,
    }))
    .sort((a, b) => parseInt(a.module.split(' ')[1]) - parseInt(b.module.split(' ')[1]))
}

/**
 * Calculate topic mastery based on completed lessons
 */
function calculateTopicMastery(
  lessons: Lesson[]
): Array<{ topic: string; mastery: number; lessonsCount: number }> {
  const topicMap = new Map<string, { completed: number; total: number }>()

  lessons.forEach((lesson) => {
    const topic = getTopicForLesson(lesson)
    const current = topicMap.get(topic) || { completed: 0, total: 0 }
    
    topicMap.set(topic, {
      completed: current.completed + (lesson.isCompleted ? 1 : 0),
      total: current.total + 1,
    })
  })

  return Array.from(topicMap.entries())
    .map(([topic, data]) => ({
      topic,
      mastery: data.total > 0 ? Math.round((data.completed / data.total) * 100) : 0,
      lessonsCount: data.total,
    }))
    .sort((a, b) => b.mastery - a.mastery)
}

/**
 * Calculate study activity streaks
 */
function calculateStudyStreaks(
  completionHistory: Array<{ date: string; lessonId: string }>
): Array<{ date: string; active: boolean }> {
  const activeDays = new Set<string>()
  
  completionHistory.forEach(({ date }) => {
    activeDays.add(date.split('T')[0])
  })

  // Get last 30 days
  const result: Array<{ date: string; active: boolean }> = []
  const today = new Date()
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    const dateStr = date.toISOString().split('T')[0]
    
    result.push({
      date: dateStr,
      active: activeDays.has(dateStr),
    })
  }

  return result
}

/**
 * Find most challenging lessons based on revisits and time spent
 */
function findMostChallengingLessons(
  lessons: Lesson[]
): Array<{ lesson: string; revisits: number; avgTime: number }> {
  return lessons
    .filter((lesson) => lesson.timeSpent && lesson.timeSpent > 0)
    .map((lesson) => ({
      lesson: lesson.title,
      revisits: lesson.lastAccessed ? 1 : 0, // Simplified revisit counting
      avgTime: lesson.timeSpent || 0,
    }))
    .sort((a, b) => {
      // Sort by avgTime descending, then revisits
      if (b.avgTime !== a.avgTime) return b.avgTime - a.avgTime
      return b.revisits - a.revisits
    })
    .slice(0, 5) // Top 5 most challenging
}

/**
 * Get weekly activity summary
 */
export function getWeeklyActivity(lessons: Lesson[]): WeeklyActivity[] {
  const weeks: Map<string, { lessonsCompleted: number; timeSpent: number; activeDays: Set<string> }> = new Map()

  lessons.forEach((lesson) => {
    if (lesson.isCompleted && lesson.completionDate) {
      const date = new Date(lesson.completionDate)
      const weekStart = getWeekStart(date)
      const weekStr = weekStart.toISOString().split('T')[0]
      
      const weekData = weeks.get(weekStr) || {
        lessonsCompleted: 0,
        timeSpent: 0,
        activeDays: new Set<string>(),
      }
      
      weekData.lessonsCompleted += 1
      weekData.timeSpent += lesson.timeSpent || 0
      weekData.activeDays.add(date.toISOString().split('T')[0])
      weeks.set(weekStr, weekData)
    }
  })

  return Array.from(weeks.entries())
    .map(([week, data]) => ({
      week,
      lessonsCompleted: data.lessonsCompleted,
      timeSpent: data.timeSpent,
      activeDays: data.activeDays.size,
    }))
    .sort((a, b) => a.week.localeCompare(b.week))
}

function getWeekStart(date: Date): Date {
  const result = new Date(date)
  const day = result.getDay()
  const diff = result.getDate() - day + (day === 0 ? -6 : 1) // Monday as start
  result.setDate(diff)
  result.setHours(0, 0, 0, 0)
  return result
}

/**
 * Generate personalized insights based on progress
 */
export function generatePersonalizedInsights(lessons: Lesson[]): PersonalizationInsight[] {
  const insights: PersonalizationInsight[] = []
  const completed = lessons.filter((l) => l.isCompleted).length
  const total = lessons.length
  const progress = total > 0 ? (completed / total) * 100 : 0

  // Milestone insights
  if (completed === 1) {
    insights.push({
      type: 'milestone',
      message: '🎉 Congratulations! You completed your first lesson!',
      priority: 'high',
    })
  } else if (completed === 10) {
    insights.push({
      type: 'achievement',
      message: '🚀 Awesome! You\'ve completed 10 lessons. Keep up the momentum!',
      priority: 'high',
    })
  } else if (completed === 25) {
    insights.push({
      type: 'achievement',
      message: '📈 Great progress! You\'re a quarter through the course!',
      priority: 'high',
    })
  } else if (completed === 50) {
    insights.push({
      type: 'achievement',
      message: '🎯 Halfway there! You\'ve mastered the fundamentals.',
      priority: 'high',
    })
  } else if (progress >= 75) {
    insights.push({
      type: 'milestone',
      message: '🏆 Almost there! You\'re in the advanced stages of mastery.',
      priority: 'high',
    })
  }

  // Warning insights
  const recentActivity = getRecentActivity(lessons)
  if (!recentActivity.visitedLast7Days) {
    insights.push({
      type: 'warning',
      message: '⚠️ It\'s been a while since you last studied. Pick up where you left off!',
      priority: 'high',
      action: {
        label: 'Continue Learning',
        href: '/dashboard',
      },
    })
  }

  // Recommendation insights
  if (completed > 0 && progress < 50) {
    const nextLesson = lessons.find((l) => !l.isCompleted)
    if (nextLesson) {
      insights.push({
        type: 'recommendation',
        message: `💡 Ready for your next challenge? "${nextLesson.title}" is waiting for you.`,
        priority: 'medium',
        action: {
          label: 'Start Next Lesson',
          href: `/dashboard/lessons/${nextLesson.id}`,
        },
      })
    }
  }

  // Study pattern insights
  const weeklyData = getWeeklyActivity(lessons)
  if (weeklyData.length >= 2) {
    const recent = weeklyData.slice(-2)
    const avgLessons = recent.reduce((sum, w) => sum + w.lessonsCompleted, 0) / recent.length
    const recentLessons = recent[recent.length - 1].lessonsCompleted
    
    if (recentLessons < avgLessons * 0.5 && recentLessons > 0) {
      insights.push({
        type: 'recommendation',
        message: '📊 Your recent activity is lower than usual. Let\'s get back on track!',
        priority: 'medium',
      })
    }
  }

  return insights
}

function getRecentActivity(lessons: Lesson[]): { visitedLast7Days: boolean } {
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
  
  const recentlyAccessed = lessons.some((lesson) => {
    if (!lesson.lastAccessed) return false
    return new Date(lesson.lastAccessed) > sevenDaysAgo
  })

  return { visitedLast7Days: recentlyAccessed }
}

/**
 * Predict course completion date based on learning velocity
 */
export function predictCompletionDate(lessons: Lesson[]): string {
  const completed = lessons.filter((l) => l.isCompleted).length
  const total = lessons.length
  
  if (completed === 0 || completed === total) {
    return 'N/A'
  }

  const weeklyData = getWeeklyActivity(lessons)
  if (weeklyData.length === 0) {
    return 'N/A'
  }

  const avgLessonsPerWeek = weeklyData.reduce((sum, w) => sum + w.lessonsCompleted, 0) / weeklyData.length
  const remainingLessons = total - completed
  const weeksRemaining = avgLessonsPerWeek > 0 ? Math.ceil(remainingLessons / avgLessonsPerWeek) : 999
  
  const completionDate = new Date()
  completionDate.setDate(completionDate.getDate() + (weeksRemaining * 7))
  
  return completionDate.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
