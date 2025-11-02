'use client'

import { useDarkMode } from '@/lib/hooks/useDarkMode'

interface DarkModeToggleProps {
  className?: string
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function DarkModeToggle({
  className = '',
  showLabel = false,
  size = 'md',
}: DarkModeToggleProps) {
  const { theme, isDark, toggleTheme, mounted } = useDarkMode()

  if (!mounted) {
    // Prevent hydration mismatch by showing placeholder
    return (
      <button
        className={`${className} inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50`}
        disabled
        aria-label="Theme toggle"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        {showLabel && <span className="font-sans text-sm">Theme</span>}
      </button>
    )
  }

  const sizeClasses = {
    sm: 'h-8 w-8 p-1.5',
    md: 'h-10 w-10 p-2',
    lg: 'h-12 w-12 p-2.5',
  }

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  }

  const getThemeIcon = () => {
    if (theme === 'system') {
      return (
        <svg className={iconSizes[size]} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
    
    if (isDark) {
      return (
        <svg className={iconSizes[size]} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )
    }
    
    return (
      <svg className={iconSizes[size]} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }

  const getThemeLabel = () => {
    if (theme === 'system') return 'System'
    if (isDark) return 'Dark'
    return 'Light'
  }

  return (
    <button
      onClick={toggleTheme}
      className={`${className} ${sizeClasses[size]} inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Current: ${getThemeLabel()} - Click to toggle`}
    >
      {getThemeIcon()}
      {showLabel && (
        <span className="font-sans text-sm whitespace-nowrap">
          {getThemeLabel()}
        </span>
      )}
    </button>
  )
}


