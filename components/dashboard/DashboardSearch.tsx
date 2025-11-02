'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { searchLessons, SearchResult } from '@/lib/utils/lessonSearch'

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
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isSearching, setIsSearching] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (query.trim().length > 0) {
      setIsSearching(true)
      // Debounce search for better performance
      const timeoutId = setTimeout(() => {
        // Real search against course data
        const searchResults = searchLessons(query)
        setResults(searchResults)
        setIsOpen(true)
        setIsSearching(false)
      }, 300)

      return () => {
        clearTimeout(timeoutId)
        setIsSearching(false)
      }
    } else {
      setResults([])
      setIsOpen(false)
      setIsSearching(false)
    }
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        inputRef.current?.blur()
      } else if (event.key === 'ArrowDown') {
        event.preventDefault()
        setSelectedIndex((prev) =>
          prev < results.length - 1 ? prev + 1 : prev
        )
      } else if (event.key === 'ArrowUp') {
        event.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
      } else if (event.key === 'Enter' && selectedIndex >= 0) {
        event.preventDefault()
        const selected = results[selectedIndex]
        if (selected) {
          window.location.href = selected.url
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [results, selectedIndex])

  const handleSearch = (value: string) => {
    setQuery(value)
    onSearch?.(value)
    setSelectedIndex(-1)
  }

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
      case 'resource':
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
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
          onFocus={() => query && setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg font-sans focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
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
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setIsOpen(false)
              inputRef.current?.focus()
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Loading State */}
      {isOpen && isSearching && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-6 z-50">
          <div className="flex items-center justify-center gap-3">
            <svg
              className="h-5 w-5 animate-spin text-accent"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span className="font-sans text-sm text-gray-600">Searching...</span>
          </div>
        </div>
      )}

      {/* Search Results Dropdown */}
      {isOpen && !isSearching && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-50">
          <div className="py-2">
            {results.map((result, index) => (
              <Link
                key={result.id}
                href={result.url}
                className={`flex items-start gap-3 px-4 py-3 hover:bg-neutral-50 transition-colors ${
                  index === selectedIndex ? 'bg-neutral-100' : ''
                }`}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <div className="flex-shrink-0 mt-0.5 text-gray-400">
                  {getTypeIcon(result.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans font-medium text-gray-900 truncate">
                    {result.title}
                  </p>
                  {result.description && (
                    <p className="font-sans text-sm text-gray-600 mt-1 line-clamp-2">
                      {result.description}
                    </p>
                  )}
                  {result.moduleTitle && (
                    <p className="font-sans text-xs text-gray-500 mt-1">
                      {result.moduleTitle}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* No Results - Enhanced Empty State */}
      {isOpen && query && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-6 z-50">
          <div className="text-center">
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
            <p className="font-sans font-semibold text-gray-900 mb-1">
              No results found for "{query}"
            </p>
            <p className="font-sans text-sm text-gray-600 mb-4">
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
        </div>
      )}
    </div>
  )
}

