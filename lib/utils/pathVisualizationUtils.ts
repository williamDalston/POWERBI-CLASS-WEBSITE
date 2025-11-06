import { Lesson } from '@/lib/data/courseData'
import { courseData } from '@/lib/data/courseData'

export interface LessonNode {
  id: string
  title: string
  moduleNumber: number
  lessonNumber: number
  isCompleted: boolean
  duration?: number
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  topic?: string
  x?: number // For graph layout
  y?: number // For graph layout
}

export interface Milestone {
  id: string
  type: 'part' | 'module' | 'certification'
  title: string
  description: string
  position: number // Position in the course (0-100)
  isUnlocked: boolean
  isCompleted: boolean
  dateUnlocked?: string
  dateCompleted?: string
}

export interface HeatmapDay {
  date: string // YYYY-MM-DD
  count: number // Number of lessons completed that day
  lessons: string[] // Lesson IDs completed that day
}

/**
 * Get all lessons in a flat array with position information
 */
export function getAllLessonsWithPosition(): LessonNode[] {
  const lessons: LessonNode[] = []
  let position = 0

  courseData.forEach((part) => {
    part.modules.forEach((module) => {
      module.lessons.forEach((lesson) => {
        // Load completion status from localStorage
        let isCompleted = false
        if (typeof window !== 'undefined') {
          try {
            const completed = localStorage.getItem('completedLessons')
            if (completed) {
              const completedIds = JSON.parse(completed) as string[]
              isCompleted = completedIds.includes(lesson.id)
            }
          } catch (err) {
            console.error('Failed to load lesson completion:', err)
          }
        }

        lessons.push({
          id: lesson.id,
          title: lesson.title,
          moduleNumber: lesson.moduleNumber,
          lessonNumber: lesson.lessonNumber,
          isCompleted,
          duration: lesson.duration,
          difficulty: lesson.difficulty,
          topic: lesson.topic,
          x: position,
          y: lesson.moduleNumber,
        })
        position++
      })
    })
  })

  return lessons
}

/**
 * Calculate milestones based on progress
 */
export function calculateMilestones(lessons: LessonNode[]): Milestone[] {
  const milestones: Milestone[] = []
  const totalLessons = lessons.length
  let lessonIndex = 0
  let moduleCompletedCount: Record<number, number> = {}
  let moduleTotalCount: Record<number, number> = {}

  // Count lessons per module
  lessons.forEach((lesson) => {
    if (!moduleTotalCount[lesson.moduleNumber]) {
      moduleTotalCount[lesson.moduleNumber] = 0
      moduleCompletedCount[lesson.moduleNumber] = 0
    }
    moduleTotalCount[lesson.moduleNumber]++
    if (lesson.isCompleted) {
      moduleCompletedCount[lesson.moduleNumber]++
    }
  })

  // Part milestones
  courseData.forEach((part, partIndex) => {
    const partLessons = part.modules.flatMap((m) => m.lessons)
    const partStartIndex = lessonIndex
    const partCompleted = partLessons.every((l) => {
      const node = lessons.find((n) => n.id === l.id)
      return node?.isCompleted ?? false
    })

    milestones.push({
      id: `part-${part.id}`,
      type: 'part',
      title: `Complete ${part.title}`,
      description: `Finish all lessons in ${part.title}`,
      position: (partStartIndex / totalLessons) * 100,
      isUnlocked: partIndex === 0 || milestones[partIndex - 1]?.isCompleted,
      isCompleted: partCompleted,
    })

    // Module milestones within this part
    part.modules.forEach((module) => {
      const moduleCompleted =
        moduleCompletedCount[module.moduleNumber] ===
        moduleTotalCount[module.moduleNumber]
      const modulePosition =
        (lessons.findIndex((l) => l.moduleNumber === module.moduleNumber) /
          totalLessons) *
        100

      milestones.push({
        id: `module-${module.id}`,
        type: 'module',
        title: `Complete ${module.title}`,
        description: `Finish all lessons in Module ${module.moduleNumber}`,
        position: modulePosition,
        isUnlocked: true,
        isCompleted: moduleCompleted,
      })
    })

    lessonIndex += partLessons.length
  })

  // Certification milestone (100% complete)
  const allCompleted = lessons.every((l) => l.isCompleted)
  milestones.push({
    id: 'certification',
    type: 'certification',
    title: 'PL-300 Certification Ready',
    description: 'Complete all lessons and prepare for certification',
    position: 100,
    isUnlocked: true,
    isCompleted: allCompleted,
  })

  return milestones.sort((a, b) => a.position - b.position)
}

/**
 * Generate heatmap data for the last 365 days
 */
export function generateHeatmapData(lessons: LessonNode[]): HeatmapDay[] {
  const heatmap: Map<string, HeatmapDay> = new Map()
  const today = new Date()
  const oneYearAgo = new Date(today)
  oneYearAgo.setDate(oneYearAgo.getDate() - 365)

  // Initialize all days in the last year with 0 count
  for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0]
    heatmap.set(dateStr, {
      date: dateStr,
      count: 0,
      lessons: [],
    })
  }

  // Load completion history from localStorage
  if (typeof window !== 'undefined') {
    try {
      const progressData = localStorage.getItem('lessonProgress')
      if (progressData) {
        const progress = JSON.parse(progressData) as Record<
          string,
          { completionDate?: string }
        >

        Object.entries(progress).forEach(([lessonId, data]) => {
          if (data.completionDate) {
            const completionDate = new Date(data.completionDate)
            if (completionDate >= oneYearAgo && completionDate <= today) {
              const dateStr = completionDate.toISOString().split('T')[0]
              const day = heatmap.get(dateStr)
              if (day) {
                day.count++
                day.lessons.push(lessonId)
              }
            }
          }
        })
      }
    } catch (err) {
      console.error('Failed to load completion history:', err)
    }
  }

  return Array.from(heatmap.values())
}

/**
 * Calculate graph layout for nodes (simple grid layout)
 */
export function calculateGraphLayout(
  lessons: LessonNode[]
): { nodes: LessonNode[]; edges: Array<{ from: string; to: string }> } {
  // Group by module
  const modules = new Map<number, LessonNode[]>()
  lessons.forEach((lesson) => {
    if (!modules.has(lesson.moduleNumber)) {
      modules.set(lesson.moduleNumber, [])
    }
    modules.get(lesson.moduleNumber)!.push(lesson)
  })

  // Calculate positions (simple grid)
  const nodes: LessonNode[] = []
  const edges: Array<{ from: string; to: string }> = []
  let moduleY = 0
  const spacingX = 150
  const spacingY = 120

  Array.from(modules.entries())
    .sort((a, b) => a[0] - b[0])
    .forEach(([moduleNum, moduleLessons]) => {
      const sortedLessons = moduleLessons.sort(
        (a, b) => a.lessonNumber - b.lessonNumber
      )
      const moduleWidth = sortedLessons.length * spacingX
      const startX = -moduleWidth / 2

      sortedLessons.forEach((lesson, index) => {
        const node: LessonNode = {
          ...lesson,
          x: startX + index * spacingX,
          y: moduleY,
        }
        nodes.push(node)

        // Create edge to next lesson in module
        if (index < sortedLessons.length - 1) {
          edges.push({
            from: lesson.id,
            to: sortedLessons[index + 1].id,
          })
        }
      })

      moduleY += spacingY
    })

  return { nodes, edges }
}

/**
 * Get activity data for a specific date range
 */
export function getActivityForDateRange(
  startDate: Date,
  endDate: Date
): { date: string; count: number; lessons: string[] }[] {
  const activity: Map<string, { count: number; lessons: string[] }> = new Map()

  if (typeof window !== 'undefined') {
    try {
      const progressData = localStorage.getItem('lessonProgress')
      if (progressData) {
        const progress = JSON.parse(progressData) as Record<
          string,
          { completionDate?: string }
        >

        Object.entries(progress).forEach(([lessonId, data]) => {
          if (data.completionDate) {
            const completionDate = new Date(data.completionDate)
            if (completionDate >= startDate && completionDate <= endDate) {
              const dateStr = completionDate.toISOString().split('T')[0]
              if (!activity.has(dateStr)) {
                activity.set(dateStr, { count: 0, lessons: [] })
              }
              const day = activity.get(dateStr)!
              day.count++
              day.lessons.push(lessonId)
            }
          }
        })
      }
    } catch (err) {
      console.error('Failed to load activity data:', err)
    }
  }

  return Array.from(activity.entries()).map(([date, data]) => ({
    date,
    ...data,
  }))
}

/**
 * Calculate current streak
 */
export function calculateStreak(): number {
  if (typeof window === 'undefined') return 0

  try {
    const progressData = localStorage.getItem('lessonProgress')
    if (!progressData) return 0

    const progress = JSON.parse(progressData) as Record<
      string,
      { completionDate?: string }
    >

    const completionDates = Object.values(progress)
      .map((p) => p.completionDate)
      .filter((d): d is string => !!d)
      .map((d) => new Date(d).toISOString().split('T')[0])
      .sort()
      .reverse() // Most recent first

    if (completionDates.length === 0) return 0

    let streak = 0
    const today = new Date().toISOString().split('T')[0]
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayStr = yesterday.toISOString().split('T')[0]

    // Check if there's activity today or yesterday
    if (
      completionDates[0] === today ||
      completionDates[0] === yesterdayStr
    ) {
      streak = 1
      let currentDate = completionDates[0] === today ? today : yesterdayStr

      for (let i = 1; i < completionDates.length; i++) {
        const prevDate = new Date(currentDate)
        prevDate.setDate(prevDate.getDate() - 1)
        const prevDateStr = prevDate.toISOString().split('T')[0]

        if (completionDates[i] === prevDateStr) {
          streak++
          currentDate = prevDateStr
        } else {
          break
        }
      }
    }

    return streak
  } catch (err) {
    console.error('Failed to calculate streak:', err)
    return 0
  }
}




