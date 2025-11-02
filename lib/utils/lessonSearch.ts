import { getAllLessons, getAllModules, Lesson, Module } from '@/lib/data/courseData'

export interface SearchResult {
  id: string
  type: 'lesson' | 'module'
  title: string
  description?: string
  url: string
  moduleTitle?: string
  moduleNumber?: number
  difficulty?: string
  tags?: string[]
}

export interface FilterOptions {
  moduleId?: string
  moduleNumber?: number
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  tags?: string[]
  topic?: string
  completed?: boolean
  searchQuery?: string
}

/**
 * Search lessons by keyword
 */
export function searchLessons(query: string): SearchResult[] {
  if (!query || query.trim().length === 0) return []

  const searchTerm = query.toLowerCase().trim()
  const lessons = getAllLessons()
  const modules = getAllModules()
  
  // Create a map of module info for quick lookup
  const moduleMap = new Map<string, Module>()
  modules.forEach(mod => {
    mod.lessons.forEach(lesson => {
      moduleMap.set(lesson.id, mod)
    })
  })

  const results: SearchResult[] = []

  // Search in lessons
  lessons.forEach(lesson => {
    const module = moduleMap.get(lesson.id)
    const matchesTitle = lesson.title.toLowerCase().includes(searchTerm)
    const matchesDescription = lesson.description?.toLowerCase().includes(searchTerm)
    const matchesConcept = lesson.content?.concept?.toLowerCase().includes(searchTerm)
    const matchesDiscussion = lesson.content?.discussion?.toLowerCase().includes(searchTerm)
    const matchesTags = lesson.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
    
    if (matchesTitle || matchesDescription || matchesConcept || matchesDiscussion || matchesTags) {
      results.push({
        id: lesson.id,
        type: 'lesson',
        title: lesson.title,
        description: lesson.description,
        url: `/dashboard/lessons/${lesson.id}`,
        moduleTitle: module?.title,
        moduleNumber: lesson.moduleNumber,
        difficulty: lesson.difficulty,
        tags: lesson.tags,
      })
    }
  })

  // Search in modules
  modules.forEach(module => {
    const matchesTitle = module.title.toLowerCase().includes(searchTerm)
    const matchesDescription = module.description?.toLowerCase().includes(searchTerm)
    
    if (matchesTitle || matchesDescription) {
      results.push({
        id: module.id,
        type: 'module',
        title: module.title,
        description: module.description,
        url: `/dashboard?module=${module.id}`,
        moduleTitle: module.title,
        moduleNumber: module.moduleNumber,
      })
    }
  })

  // Sort by relevance (title matches first)
  return results.sort((a, b) => {
    const aTitleMatch = a.title.toLowerCase().includes(searchTerm)
    const bTitleMatch = b.title.toLowerCase().includes(searchTerm)
    if (aTitleMatch && !bTitleMatch) return -1
    if (!aTitleMatch && bTitleMatch) return 1
    return 0
  })
}

/**
 * Filter lessons based on criteria
 */
export function filterLessons(options: FilterOptions): Lesson[] {
  let lessons = getAllLessons()

  // Load completed status from localStorage
  if (typeof window !== 'undefined') {
    try {
      const completed = localStorage.getItem('completedLessons')
      const completedIds = completed ? (JSON.parse(completed) as string[]) : []
      lessons = lessons.map(lesson => ({
        ...lesson,
        isCompleted: completedIds.includes(lesson.id),
      }))
    } catch (err) {
      console.error('Failed to load completed lessons:', err)
    }
  }

  // Filter by module
  if (options.moduleNumber !== undefined) {
    lessons = lessons.filter(lesson => lesson.moduleNumber === options.moduleNumber)
  }

  // Filter by difficulty
  if (options.difficulty) {
    lessons = lessons.filter(lesson => lesson.difficulty === options.difficulty)
  }

  // Filter by tags
  if (options.tags && options.tags.length > 0) {
    lessons = lessons.filter(lesson => 
      lesson.tags?.some(tag => options.tags!.includes(tag))
    )
  }

  // Filter by topic
  if (options.topic) {
    lessons = lessons.filter(lesson => lesson.topic === options.topic)
  }

  // Filter by completion status
  if (options.completed !== undefined) {
    lessons = lessons.filter(lesson => lesson.isCompleted === options.completed)
  }

  // Apply search query if provided
  if (options.searchQuery && options.searchQuery.trim().length > 0) {
    const searchTerm = options.searchQuery.toLowerCase().trim()
    lessons = lessons.filter(lesson => {
      const matchesTitle = lesson.title.toLowerCase().includes(searchTerm)
      const matchesDescription = lesson.description?.toLowerCase().includes(searchTerm)
      const matchesConcept = lesson.content?.concept?.toLowerCase().includes(searchTerm)
      const matchesTags = lesson.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
      return matchesTitle || matchesDescription || matchesConcept || matchesTags
    })
  }

  return lessons
}

/**
 * Get all unique tags from lessons
 */
export function getAllTags(): string[] {
  const lessons = getAllLessons()
  const tagSet = new Set<string>()
  
  lessons.forEach(lesson => {
    lesson.tags?.forEach(tag => tagSet.add(tag))
  })
  
  return Array.from(tagSet).sort()
}

/**
 * Get all unique topics from lessons
 */
export function getAllTopics(): string[] {
  const lessons = getAllLessons()
  const topicSet = new Set<string>()
  
  lessons.forEach(lesson => {
    if (lesson.topic) {
      topicSet.add(lesson.topic)
    }
  })
  
  return Array.from(topicSet).sort()
}

/**
 * Get suggested next lessons based on completion
 */
export function getSuggestedNextLessons(limit: number = 5): Lesson[] {
  const lessons = getAllLessons()
  
  // Load completed status
  if (typeof window !== 'undefined') {
    try {
      const completed = localStorage.getItem('completedLessons')
      const completedIds = completed ? (JSON.parse(completed) as string[]) : []
      lessons.forEach(lesson => {
        lesson.isCompleted = completedIds.includes(lesson.id)
      })
    } catch (err) {
      console.error('Failed to load completed lessons:', err)
    }
  }

  // Find first incomplete lesson and return next few
  const firstIncompleteIndex = lessons.findIndex(lesson => !lesson.isCompleted)
  if (firstIncompleteIndex === -1) return []

  return lessons.slice(firstIncompleteIndex, firstIncompleteIndex + limit)
}

