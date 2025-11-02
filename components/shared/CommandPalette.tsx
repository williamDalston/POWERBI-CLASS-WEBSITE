'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Command } from 'cmdk'
import { logger } from '@/lib/utils/logger'
import { 
  Home, 
  BookOpen, 
  Search, 
  BarChart3, 
  Keyboard, 
  StickyNote, 
  Settings, 
  ChevronRight,
  FileText,
  Video,
  Beaker,
  Award,
  TrendingUp,
  User,
  Calendar,
  Layers,
  Lightbulb,
  Hash,
  Clock
} from 'lucide-react'
import { fuzzySearchLessons } from '@/lib/utils/searchUtils'
import { getAllModules, getAllLessons } from '@/lib/data/courseData'

interface CommandPaletteProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export default function CommandPalette({ open: controlledOpen, onOpenChange }: CommandPaletteProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [recentActions, setRecentActions] = useState<string[]>([])
  
  const isOpen = controlledOpen !== undefined ? controlledOpen : open
  const setIsOpen = (newOpen: boolean) => {
    if (controlledOpen === undefined) {
      setOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }

  // Load recent actions from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const recent = localStorage.getItem('commandPaletteRecentActions')
        if (recent) {
          setRecentActions(JSON.parse(recent))
        }
      } catch (err) {
        logger.error(new Error('Failed to load recent actions'), { error: err })
      }
    }
  }, [])

  // Handle Ctrl+K / Cmd+K keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Check for Cmd+K (Mac) or Ctrl+K (Windows/Linux)
      if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        
        // Don't open if typing in an input or textarea
        const target = e.target as HTMLElement
        if (
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable
        ) {
          return
        }
        
        setIsOpen(true)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  // Save recent action
  const saveRecentAction = (action: string) => {
    if (typeof window === 'undefined') return
    
    try {
      const recent = localStorage.getItem('commandPaletteRecentActions')
      let actions = recent ? (JSON.parse(recent) as string[]) : []
      
      // Remove if exists and add to front
      actions = actions.filter(a => a !== action)
      actions.unshift(action)
      
      // Keep only last 10
      actions = actions.slice(0, 10)
      
      localStorage.setItem('commandPaletteRecentActions', JSON.stringify(actions))
      setRecentActions(actions)
    } catch (err) {
      logger.error(new Error('Failed to save recent action'), { error: err })
    }
  }

  // Handle command execution
  const handleSelect = (action: string, url: string) => {
    saveRecentAction(action)
    setIsOpen(false)
    setSearch('')
    
    if (url.startsWith('http')) {
      window.open(url, '_blank')
    } else {
      router.push(url)
    }
  }

  // Get lessons for search
  const lessons = getAllLessons()
  const modules = getAllModules()
  const searchResults = fuzzySearchLessons(search)

  // Group commands
  const commands = []

  // Always-available navigation commands
  const navigationCommands = []
  
  if (pathname !== '/dashboard') {
    navigationCommands.push({
      key: 'dashboard',
      label: 'Go to Dashboard',
      icon: Home,
      url: '/dashboard',
    })
  }
  
  if (pathname !== '/dashboard/capstones') {
    navigationCommands.push({
      key: 'capstones',
      label: 'View Capstones',
      icon: Award,
      url: '/dashboard/capstones',
    })
  }

  if (navigationCommands.length > 0 && !search) {
    commands.push(
      <Command.Group key="navigation" heading="Navigation">
        {navigationCommands.map((cmd) => (
          <Command.Item
            key={cmd.key}
            onSelect={() => handleSelect(cmd.label, cmd.url)}
            className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-neutral-50 transition-colors"
          >
            <cmd.icon className="h-5 w-5 text-gray-500" />
            <span className="flex-1">{cmd.label}</span>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </Command.Item>
        ))}
      </Command.Group>
    )
  }

  // Search results
  if (search) {
    if (searchResults.length > 0) {
      commands.push(
        <Command.Group key="search-results" heading="Search Results">
          {searchResults.slice(0, 10).map((result) => (
            <Command.Item
              key={result.id}
              onSelect={() => handleSelect(result.title, result.url)}
              className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-neutral-50 transition-colors"
            >
              <Search className="h-5 w-5 text-gray-500" />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-gray-900 truncate">{result.title}</div>
                {result.moduleTitle && (
                  <div className="text-sm text-gray-500 truncate">{result.moduleTitle}</div>
                )}
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </Command.Item>
          ))}
        </Command.Group>
      )
    }

    // Quick action commands (prefixed with >)
    const quickActions = [
      { 
        id: 'search-query', 
        label: `Search for "${search}"`, 
        icon: Search, 
        action: () => handleSelect(`Search: ${search}`, `/dashboard?search=${encodeURIComponent(search)}`)
      },
      { 
        id: 'lesson-search', 
        label: `Open lesson search`, 
        icon: BookOpen, 
        action: () => handleSelect('Open lesson search', '/dashboard?search=true')
      },
      { 
        id: 'analytics', 
        label: `View analytics dashboard`, 
        icon: BarChart3, 
        action: () => handleSelect('View analytics', '/dashboard')
      },
      { 
        id: 'shortcuts', 
        label: `View keyboard shortcuts`, 
        icon: Keyboard, 
        action: () => {
          setIsOpen(false)
          setTimeout(() => {
            window.dispatchEvent(new KeyboardEvent('keydown', { key: '?' }))
          }, 100)
        }
      },
    ]

    if (search.toLowerCase().startsWith('>') || !searchResults.length) {
      commands.push(
        <Command.Group key="quick-actions" heading="Quick Actions">
          {quickActions.map((action) => (
            <Command.Item
              key={action.id}
              onSelect={action.action}
              className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-neutral-50 transition-colors"
            >
              <action.icon className="h-5 w-5 text-gray-500" />
              <span className="flex-1">{action.label}</span>
            </Command.Item>
          ))}
        </Command.Group>
      )
    }
  }

  // Recent actions (when search is empty)
  if (!search && recentActions.length > 0) {
    commands.push(
      <Command.Group key="recent" heading="Recent">
        {recentActions.slice(0, 5).map((action, index) => (
          <Command.Item
            key={`recent-${index}`}
            onSelect={() => {
              // Try to find this action in lessons
              const lesson = lessons.find(l => l.title === action)
              const module = modules.find(m => m.title === action)
              const found = lesson || module
              if (found) {
                const url = lesson 
                  ? `/dashboard/lessons/${found.id}`
                  : `/dashboard?module=${found.id}`
                handleSelect(action, url)
              }
            }}
            className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-neutral-50 transition-colors"
          >
            <Clock className="h-5 w-5 text-gray-500" />
            <span className="flex-1">{action}</span>
          </Command.Item>
        ))}
      </Command.Group>
    )
  }

  // Empty state
  if (!search && recentActions.length === 0) {
    commands.push(
      <div key="empty" className="px-4 py-12 text-center">
        <Keyboard className="h-12 w-12 text-gray-300 mx-auto mb-4" />
        <p className="text-gray-600 font-medium mb-2">Start typing to search</p>
        <p className="text-sm text-gray-500">
          Try: lesson names, module titles, or commands
        </p>
      </div>
    )
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false)
        }
      }}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />
      
      {/* Dialog content */}
      <Command 
        className="relative w-full max-w-2xl rounded-lg border border-gray-200 shadow-2xl bg-white z-10 animate-in fade-in slide-in-from-top-[15%] duration-200"
        aria-label="Command palette"
      >
        <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-3">
          <Search className="h-5 w-5 text-gray-400" />
          <Command.Input
            placeholder="Search lessons, modules, or commands..."
            value={search}
            onValueChange={setSearch}
            className="flex-1 border-0 focus:outline-none focus:ring-0 placeholder-gray-400"
            autoFocus
          />
          <kbd className="hidden md:inline-flex px-2 py-1 bg-neutral-100 rounded text-xs font-mono">
            ESC
          </kbd>
        </div>

        <Command.List className="max-h-[50vh] overflow-y-auto p-2">
          <Command.Empty className="px-4 py-12 text-center">
            <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 font-medium mb-2">No results found</p>
            <p className="text-sm text-gray-500">
              Try a different search term or use a command
            </p>
          </Command.Empty>
          
          {commands}
        </Command.List>

        <div className="border-t border-gray-200 px-4 py-3 bg-neutral-50 rounded-b-lg">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white rounded border border-gray-300">↑↓</kbd>
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white rounded border border-gray-300">↵</kbd>
                <span>Select</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white rounded border border-gray-300">ESC</kbd>
                <span>Close</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-white rounded border border-gray-300">⌘K</kbd>
              <span>Toggle</span>
            </div>
          </div>
        </div>
      </Command>
    </div>
  )
}

