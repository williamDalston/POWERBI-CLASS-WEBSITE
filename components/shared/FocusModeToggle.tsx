'use client'

import { useFocusMode } from '@/lib/hooks/useFocusMode'

interface FocusModeToggleProps {
  className?: string
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function FocusModeToggle({
  className = '',
  showLabel = false,
  size = 'md',
}: FocusModeToggleProps) {
  const { isFocusMode, toggleFocusMode } = useFocusMode()

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

  return (
    <button
      onClick={toggleFocusMode}
      className={`${className} ${sizeClasses[size]} inline-flex items-center justify-center gap-2 rounded-lg border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
        isFocusMode
          ? 'border-accent bg-accent bg-opacity-10 text-accent dark:bg-accent dark:bg-opacity-20'
          : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
      }`}
      aria-label={isFocusMode ? 'Disable focus mode' : 'Enable focus mode'}
      title={isFocusMode ? 'Focus mode: ON - Click to disable' : 'Focus mode: OFF - Click to enable'}
    >
      {isFocusMode ? (
        <svg className={iconSizes[size]} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ) : (
        <svg className={iconSizes[size]} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
        </svg>
      )}
      {showLabel && (
        <span className="font-sans text-sm whitespace-nowrap">
          {isFocusMode ? 'Focus' : 'Normal'}
        </span>
      )}
    </button>
  )
}

