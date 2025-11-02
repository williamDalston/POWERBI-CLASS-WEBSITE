import Fuse from 'fuse.js'
import { getAllLessons, getAllModules, Lesson, Module } from '@/lib/data/courseData'
import { SearchResult } from './lessonSearch'

export interface SearchFilters {
  moduleNumber?: number
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  contentType?: 'video' | 'lab' | 'concept'
  completed?: boolean
  duration?: {
    min?: number
    max?: number
  }
  tags?: string[]
  topic?: string
}

export interface SearchSuggestion {
  text: string
  type: 'recent' | 'popular' | 'autocomplete'
}

/**
 * Fuzzy search using Fuse.js for better search results
 */
export function fuzzySearchLessons(query: string, filters?: SearchFilters): SearchResult[] {
  if (!query || query.trim().length === 0) return []

  const lessons = getAllLessons()
  const modules = getAllModules()
  
  // Create a map of module info for quick lookup
  const moduleMap = new Map<string, Module>()
  modules.forEach(mod => {
    mod.lessons.forEach(lesson => {
      moduleMap.set(lesson.id, mod)
    })
  })

  // Load completion status
  let completedIds: string[] = []
  if (typeof window !== 'undefined') {
    try {
      const completed = localStorage.getItem('completedLessons')
      completedIds = completed ? (JSON.parse(completed) as string[]) : []
    } catch (err) {
      console.error('Failed to load completed lessons:', err)
    }
  }

  // Prepare data for Fuse.js
  const searchableData = lessons.map(lesson => {
    const module = moduleMap.get(lesson.id)
    return {
      ...lesson,
      moduleTitle: module?.title || '',
      moduleNumber: lesson.moduleNumber,
      isCompleted: completedIds.includes(lesson.id),
      searchableText: [
        lesson.title,
        lesson.description || '',
        lesson.content?.concept || '',
        lesson.content?.discussion || '',
        ...(lesson.tags || []),
        lesson.topic || '',
      ].join(' ').toLowerCase(),
    }
  })

  // Apply filters before search
  let filteredData = searchableData
  
  if (filters) {
    if (filters.moduleNumber !== undefined) {
      filteredData = filteredData.filter(item => item.moduleNumber === filters.moduleNumber)
    }
    
    if (filters.difficulty) {
      filteredData = filteredData.filter(item => item.difficulty === filters.difficulty)
    }
    
    if (filters.contentType) {
      if (filters.contentType === 'video') {
        filteredData = filteredData.filter(item => !!item.videoUrl)
      } else if (filters.contentType === 'lab') {
        filteredData = filteredData.filter(item => (item.content?.labs?.length || 0) > 0)
      } else if (filters.contentType === 'concept') {
        filteredData = filteredData.filter(item => !!item.content?.concept)
      }
    }
    
    if (filters.completed !== undefined) {
      filteredData = filteredData.filter(item => item.isCompleted === filters.completed)
    }
    
    if (filters.duration) {
      if (filters.duration.min !== undefined) {
        filteredData = filteredData.filter(item => (item.duration || 0) >= filters.duration!.min!)
      }
      if (filters.duration.max !== undefined) {
        filteredData = filteredData.filter(item => (item.duration || 0) <= filters.duration!.max!)
      }
    }
    
    if (filters.tags && filters.tags.length > 0) {
      filteredData = filteredData.filter(item =>
        item.tags?.some(tag => filters.tags!.includes(tag))
      )
    }
    
    if (filters.topic) {
      filteredData = filteredData.filter(item => item.topic === filters.topic)
    }
  }

  // Configure Fuse.js for better search
  type SearchableLesson = typeof searchableData[0]
  const fuse = new Fuse<SearchableLesson>(filteredData, {
    keys: [
      { name: 'title', weight: 0.7 },
      { name: 'description', weight: 0.4 },
      { name: 'tags', weight: 0.5 },
      { name: 'topic', weight: 0.3 },
      { name: 'searchableText', weight: 0.2 },
    ],
    threshold: 0.4, // Lower = more strict matching
    includeScore: true,
    minMatchCharLength: 2,
  })

  const searchResults = fuse.search(query)
  
  const results: SearchResult[] = searchResults.map(result => {
    const lesson = result.item
    const module = moduleMap.get(lesson.id)
    
    return {
      id: lesson.id,
      type: 'lesson',
      title: lesson.title,
      description: lesson.description,
      url: `/dashboard/lessons/${lesson.id}`,
      moduleTitle: module?.title,
      moduleNumber: lesson.moduleNumber,
      difficulty: lesson.difficulty,
      tags: lesson.tags,
    }
  })

  return results
}

/**
 * Get search autocomplete suggestions
 */
export function getSearchSuggestions(query: string, limit: number = 5): SearchSuggestion[] {
  if (!query || query.trim().length < 2) return []

  const lessons = getAllLessons()
  const queryLower = query.toLowerCase().trim()
  
  const suggestions: SearchSuggestion[] = []
  const seen = new Set<string>()

  // Match in titles
  lessons.forEach(lesson => {
    if (lesson.title.toLowerCase().includes(queryLower) && suggestions.length < limit) {
      const suggestion = lesson.title.substring(0, 60)
      if (!seen.has(suggestion)) {
        suggestions.push({ text: suggestion, type: 'autocomplete' })
        seen.add(suggestion)
      }
    }
  })

  // Match in tags
  lessons.forEach(lesson => {
    lesson.tags?.forEach(tag => {
      if (tag.toLowerCase().includes(queryLower) && suggestions.length < limit) {
        if (!seen.has(tag)) {
          suggestions.push({ text: tag, type: 'autocomplete' })
          seen.add(tag)
        }
      }
    })
  })

  return suggestions.slice(0, limit)
}

/**
 * Get recent searches from localStorage
 */
export function getRecentSearches(limit: number = 5): string[] {
  if (typeof window === 'undefined') return []
  
  try {
    const recent = localStorage.getItem('recentSearches')
    if (recent) {
      const searches = JSON.parse(recent) as string[]
      return searches.slice(0, limit)
    }
  } catch (err) {
    console.error('Failed to load recent searches:', err)
  }
  
  return []
}

/**
 * Save a search to recent searches
 */
export function saveRecentSearch(query: string): void {
  if (typeof window === 'undefined' || !query || query.trim().length === 0) return
  
  try {
    const recent = localStorage.getItem('recentSearches')
    let searches: string[] = recent ? (JSON.parse(recent) as string[]) : []
    
    // Remove if already exists and add to front
    searches = searches.filter(s => s.toLowerCase() !== query.toLowerCase())
    searches.unshift(query.trim())
    
    // Keep only last 10
    searches = searches.slice(0, 10)
    
    localStorage.setItem('recentSearches', JSON.stringify(searches))
  } catch (err) {
    console.error('Failed to save recent search:', err)
  }
}

/**
 * Get popular searches (based on lesson titles and common terms)
 */
export function getPopularSearches(limit: number = 5): string[] {
  return [
    'DAX',
    'Power Query',
    'Data Modeling',
    'Visualizations',
    'Reports',
    'Time Intelligence',
    'CALCULATE',
    'Star Schema',
    'Row-Level Security',
    'Performance',
  ].slice(0, limit)
}

/**
 * Highlight matching terms in text
 */
export function highlightMatches(text: string, query: string): string {
  if (!query || !text) return text
  
  const queryLower = query.toLowerCase()
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  
  return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-900 px-0.5 rounded">$1</mark>')
}

/**
 * Extract context snippet from text with highlighted query
 */
export function getContextSnippet(text: string, query: string, contextLength: number = 100): string {
  if (!text || !query) return text.substring(0, contextLength)
  
  const queryLower = query.toLowerCase()
  const textLower = text.toLowerCase()
  const index = textLower.indexOf(queryLower)
  
  if (index === -1) {
    return text.substring(0, contextLength) + (text.length > contextLength ? '...' : '')
  }
  
  const start = Math.max(0, index - contextLength / 2)
  const end = Math.min(text.length, index + query.length + contextLength / 2)
  
  let snippet = text.substring(start, end)
  if (start > 0) snippet = '...' + snippet
  if (end < text.length) snippet = snippet + '...'
  
  return snippet
}

