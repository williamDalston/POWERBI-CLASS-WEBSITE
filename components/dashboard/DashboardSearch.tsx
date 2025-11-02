'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { SearchResult } from '@/lib/utils/lessonSearch'
import {
  fuzzySearchLessons,
  getSearchSuggestions,
  getRecentSearches,
  getPopularSearches,
  saveRecentSearch,
  highlightMatches,
  getContextSnippet,
  SearchFilters,
  SearchSuggestion,
} from '@/lib/utils/searchUtils'
import { getAllModules, getAllTags, getAllTopics } from '@/lib/utils/lessonSearch'

interface DashboardSearchProps {
  onSearch?: (query: string) => void
  placeholder?: string
  className?: string
}

export default function DashboardSearch({
  onSearch,
  placeholder = 'Search lessons, resources...',
  className = '',
}: DashboardSearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isSearching, setIsSearching] = useState(false)
  const [filters, setFilters] = useState<SearchFilters>({})
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const modules = getAllModules()
  const allTags = getAllTags()
  const allTopics = getAllTopics()

  // Load recent searches on focus
  useEffect(() => {
    if (isOpen && !query && !showFilters) {
      const recent = getRecentSearches(5)
      const popular = getPopularSearches(5)
      setSuggestions([
        ...recent.map(text => ({ text, type: 'recent' as const })),
        ...popular.map(text => ({ text, type: 'popular' as const })),
      ])
    }
  }, [isOpen, query, showFilters])

  // Perform search
  useEffect(() => {
    if (query.trim().length > 0) {
      setIsSearching(true)
      const timeoutId = setTimeout(() => {
        const searchResults = fuzzySearchLessons(query, filters)
        setResults(searchResults)
        setIsOpen(true)
        setIsSearching(false)

        // Show autocomplete suggestions while typing
        if (query.length >= 2) {
          const autocomplete = getSearchSuggestions(query, 5)
          setSuggestions(autocomplete)
        }
      }, 300)

      return () => {
        clearTimeout(timeoutId)
        setIsSearching(false)
      }
    } else {
      setResults([])
      if (isOpen) {
        const recent = getRecentSearches(5)
        const popular = getPopularSearches(5)
        setSuggestions([
          ...recent.map(text => ({ text, type: 'recent' as const })),
          ...popular.map(text => ({ text, type: 'popular' as const })),
        ])
      } else {
        setSuggestions([])
      }
    }
  }, [query, filters, isOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setShowFilters(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        setShowFilters(false)
        inputRef.current?.blur()
      } else if (event.key === 'ArrowDown') {
        event.preventDefault()
        const maxIndex = Math.max(results.length - 1, suggestions.length - 1)
        setSelectedIndex((prev) => (prev < maxIndex ? prev + 1 : prev))
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        setSelectedIndex((prev) => (prev > -1 ? prev - 1 : -1))
      } else if (event.key === 'Enter' && selectedIndex >= 0) {
        event.preventDefault()
        if (selectedIndex < suggestions.length && suggestions[selectedIndex]) {
          const suggestion = suggestions[selectedIndex]
          handleSuggestionClick(suggestion.text)
        } else if (selectedIndex >= suggestions.length && results[selectedIndex - suggestions.length]) {
          const selected = results[selectedIndex - suggestions.length]
          if (selected) {
            saveRecentSearch(query)
            window.location.href = selected.url
          }
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [results, suggestions, selectedIndex, query])

  const handleSearch = (value: string) => {
    setQuery(value)
    onSearch?.(value)
    setSelectedIndex(-1)
    if (value.length > 0) {
      setIsOpen(true)
    }
  }

  const handleSuggestionClick = (suggestionText: string) => {
    setQuery(suggestionText)
    setSelectedIndex(-1)
    inputRef.current?.focus()
  }

  const handleResultClick = (result: SearchResult) => {
    saveRecentSearch(query)
    setIsOpen(false)
  }

  const clearFilters = () => {
    setFilters({})
  }

  const hasActiveFilters = Object.keys(filters).length > 0 ||
    filters.moduleNumber !== undefined ||
    filters.difficulty !== undefined ||
    filters.contentType !== undefined ||
    filters.completed !== undefined ||
    (filters.tags && filters.tags.length > 0) ||
    filters.topic !== undefined

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'lesson':
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )
      case 'module':
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-20 py-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {isSearching ? (
            <svg
              className="h-5 w-5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-label="Searching"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          )}
        </div>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-2 py-1 text-xs font-sans text-gray-600 hover:text-gray-900 bg-gray-100 rounded"
              title="Clear filters"
            >
              Clear filters
            </button>
          )}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="p-1.5 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100"
            title="Toggle filters"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </button>
          {query && (
            <button
              onClick={() => {
                setQuery('')
                setIsOpen(false)
                inputRef.current?.focus()
              }}
              className="p-1.5 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 z-50">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Module Filter */}
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Module
                </label>
                <select
                  value={filters.moduleNumber || ''}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      moduleNumber: e.target.value ? Number(e.target.value) : undefined,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-sans dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">All Modules</option>
                  {modules.map((mod) => (
                    <option key={mod.id} value={mod.moduleNumber}>
                      Module {mod.moduleNumber}: {mod.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Difficulty
                </label>
                <select
                  value={filters.difficulty || ''}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      difficulty: e.target.value as any || undefined,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-sans dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              {/* Content Type Filter */}
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Content Type
                </label>
                <select
                  value={filters.contentType || ''}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      contentType: e.target.value as any || undefined,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-sans dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">All Types</option>
                  <option value="video">With Video</option>
                  <option value="lab">With Labs</option>
                  <option value="concept">Concepts</option>
                </select>
              </div>

              {/* Completion Status */}
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Status
                </label>
                <select
                  value={filters.completed !== undefined ? String(filters.completed) : ''}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      completed: e.target.value === '' ? undefined : e.target.value === 'true',
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-sans dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">All</option>
                  <option value="false">Not Completed</option>
                  <option value="true">Completed</option>
                </select>
              </div>
            </div>

            {/* Topic Filter */}
            {allTopics.length > 0 && (
              <div>
                <label className="block text-sm font-sans font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Topic
                </label>
                <select
                  value={filters.topic || ''}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      topic: e.target.value || undefined,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm font-sans dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">All Topics</option>
                  {allTopics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Suggestions / Results Dropdown */}
      {isOpen && !isSearching && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto z-50">
          {/* Suggestions (when no query or no results) */}
          {query.length === 0 && suggestions.length > 0 && (
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-sans font-semibold text-gray-500 uppercase tracking-wide">
                Recent Searches
              </div>
              {suggestions
                .filter((s) => s.type === 'recent')
                .map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion.text)}
                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-neutral-50 dark:hover:bg-gray-700 transition-colors text-left"
                  >
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-sans text-sm text-gray-700 dark:text-gray-300">{suggestion.text}</span>
                  </button>
                ))}
              <div className="px-4 py-2 text-xs font-sans font-semibold text-gray-500 uppercase tracking-wide mt-2">
                Popular
              </div>
              {suggestions
                .filter((s) => s.type === 'popular')
                .map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion.text)}
                    className="w-full flex items-center gap-3 px-4 py-2 hover:bg-neutral-50 dark:hover:bg-gray-700 transition-colors text-left"
                  >
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="font-sans text-sm text-gray-700 dark:text-gray-300">{suggestion.text}</span>
                  </button>
                ))}
            </div>
          )}

          {/* Autocomplete Suggestions */}
          {query.length >= 2 && suggestions.length > 0 && results.length === 0 && (
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-sans font-semibold text-gray-500 uppercase tracking-wide">
                Suggestions
              </div>
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion.text)}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-gray-700 transition-colors text-left ${
                    index === selectedIndex ? 'bg-neutral-100 dark:bg-gray-700' : ''
                  }`}
                >
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span
                    className="font-sans text-sm text-gray-700 dark:text-gray-300"
                    dangerouslySetInnerHTML={{
                      __html: highlightMatches(suggestion.text, query),
                    }}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Search Results */}
          {results.length > 0 && (
            <div className="py-2">
              <div className="px-4 py-2 text-xs font-sans font-semibold text-gray-500 uppercase tracking-wide">
                Results ({results.length})
              </div>
              {results.map((result, index) => {
                const actualIndex = suggestions.length + index
                return (
                  <Link
                    key={result.id}
                    href={result.url}
                    onClick={() => handleResultClick(result)}
                    className={`flex items-start gap-3 px-4 py-3 hover:bg-neutral-50 dark:hover:bg-gray-700 transition-colors ${
                      actualIndex === selectedIndex ? 'bg-neutral-100 dark:bg-gray-700' : ''
                    }`}
                    onMouseEnter={() => setSelectedIndex(actualIndex)}
                  >
                    <div className="flex-shrink-0 mt-0.5 text-gray-400">
                      {getTypeIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-sans font-medium text-gray-900 dark:text-white truncate"
                        dangerouslySetInnerHTML={{
                          __html: highlightMatches(result.title, query),
                        }}
                      />
                      {result.description && (
                        <p
                          className="font-sans text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2"
                          dangerouslySetInnerHTML={{
                            __html: highlightMatches(getContextSnippet(result.description, query), query),
                          }}
                        />
                      )}
                      <div className="flex items-center gap-2 mt-1">
                        {result.moduleTitle && (
                          <p className="font-sans text-xs text-gray-500 dark:text-gray-500">
                            {result.moduleTitle}
                          </p>
                        )}
                        {result.difficulty && (
                          <span className="px-2 py-0.5 text-xs font-sans rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                            {result.difficulty}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}

          {/* No Results */}
          {query.length > 0 && results.length === 0 && suggestions.length === 0 && (
            <div className="p-6 text-center">
              <svg
                className="h-12 w-12 text-gray-400 mx-auto mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <p className="font-sans font-semibold text-gray-900 dark:text-white mb-1">
                No results found for "{query}"
              </p>
              <p className="font-sans text-sm text-gray-600 dark:text-gray-400 mb-4">
                Try different keywords or check your spelling
              </p>
              <button
                onClick={() => {
                  setQuery('')
                  setIsOpen(false)
                  inputRef.current?.focus()
                }}
                className="text-sm font-sans text-accent hover:text-accent-dark font-medium underline-offset-4 hover:underline transition-colors"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
