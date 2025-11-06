'use client'

import { useFocusMode } from '@/lib/hooks/useFocusMode'
import DarkModeToggle from './DarkModeToggle'
import FocusModeToggle from './FocusModeToggle'

/**
 * Floating toggle buttons for when in focus mode
 * Positioned in top-right corner for easy access
 */
export default function FloatingModeToggle() {
  const { isFocusMode } = useFocusMode()

  if (!isFocusMode) return null

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-2 flex gap-2">
        <DarkModeToggle size="sm" />
        <FocusModeToggle size="sm" />
      </div>
    </div>
  )
}





