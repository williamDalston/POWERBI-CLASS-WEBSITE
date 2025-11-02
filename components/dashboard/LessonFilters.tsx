'use client'

import { useState } from 'react'
import { getAllModules } from '@/lib/data/courseData'
import { getAllTags, getAllTopics } from '@/lib/utils/lessonSearch'

interface LessonFiltersProps {
  onFilterChange: (filters: FilterOptions) => void
  className?: string
}

export interface FilterOptions {
  moduleNumber?: number
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  tags?: string[]
  topic?: string
  completed?: boolean
}

export default function LessonFilters({ onFilterChange, className = '' }: LessonFiltersProps) {
  const [filters, setFilters] = useState<FilterOptions>({})
  const modules = getAllModules()
  const tags = getAllTags()
  const topics = getAllTopics()

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    const newFilters = { ...filters, [key]: value === '' ? undefined : value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const clearFilters = () => {
    const emptyFilters: FilterOptions = {}
    setFilters(emptyFilters)
    onFilterChange(emptyFilters)
  }

  const hasActiveFilters = Object.values(filters).some(
    (value) => value !== undefined && value !== ''
  )

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-4 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-sans font-semibold text-gray-900">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-accent hover:text-accent-dark font-sans"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-4">
        {/* Module Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
            Module
          </label>
          <select
            value={filters.moduleNumber || ''}
            onChange={(e) =>
              handleFilterChange(
                'moduleNumber',
                e.target.value ? parseInt(e.target.value) : undefined
              )
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent font-sans"
          >
            <option value="">All Modules</option>
            {modules.map((module) => (
              <option key={module.id} value={module.moduleNumber}>
                Module {module.moduleNumber}: {module.title}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
            Difficulty
          </label>
          <select
            value={filters.difficulty || ''}
            onChange={(e) =>
              handleFilterChange(
                'difficulty',
                e.target.value || undefined
              )
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent font-sans"
          >
            <option value="">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        {/* Tags Filter */}
        {tags.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
              Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 10).map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    const currentTags = filters.tags || []
                    const newTags = currentTags.includes(tag)
                      ? currentTags.filter((t) => t !== tag)
                      : [...currentTags, tag]
                    handleFilterChange('tags', newTags.length > 0 ? newTags : undefined)
                  }}
                  className={`px-3 py-1 rounded-full text-sm font-sans transition-colors ${
                    filters.tags?.includes(tag)
                      ? 'bg-accent text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Topic Filter */}
        {topics.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
              Topic
            </label>
            <select
              value={filters.topic || ''}
              onChange={(e) => handleFilterChange('topic', e.target.value || undefined)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent font-sans"
            >
              <option value="">All Topics</option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Completion Status Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
            Status
          </label>
          <select
            value={
              filters.completed === undefined
                ? ''
                : filters.completed
                ? 'completed'
                : 'incomplete'
            }
            onChange={(e) =>
              handleFilterChange(
                'completed',
                e.target.value === ''
                  ? undefined
                  : e.target.value === 'completed'
              )
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent font-sans"
          >
            <option value="">All Lessons</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </div>
    </div>
  )
}


