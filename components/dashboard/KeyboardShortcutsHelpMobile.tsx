'use client'

interface KeyboardShortcutsHelpMobileProps {
  isOpen: boolean
  onClose: () => void
}

export default function KeyboardShortcutsHelpMobile({
  isOpen,
  onClose,
}: KeyboardShortcutsHelpMobileProps) {
  if (!isOpen) return null

  const shortcuts = [
    { category: 'Navigation', items: [
      { keys: 'g d', description: 'Go to Dashboard' },
      { keys: 'g c', description: 'Go to Courses' },
      { keys: 'g p', description: 'Go to Progress' },
      { keys: '/', description: 'Focus Search' },
      { keys: '⌘K / Ctrl+K', description: 'Open Command Palette' },
    ]},
    { category: 'Lesson Navigation', items: [
      { keys: '←', description: 'Previous Lesson' },
      { keys: '→', description: 'Next Lesson' },
      { keys: 'n', description: 'Next Lesson' },
      { keys: 'p', description: 'Previous Lesson' },
      { keys: 'j', description: 'Scroll Down' },
      { keys: 'k', description: 'Scroll Up' },
      { keys: 'Esc', description: 'Back to Dashboard' },
    ]},
    { category: 'Video Controls', items: [
      { keys: 'Space', description: 'Play/Pause' },
      { keys: '←', description: 'Seek Back' },
      { keys: '→', description: 'Seek Forward' },
      { keys: 'F', description: 'Fullscreen' },
    ]},
    { category: 'General', items: [
      { keys: '?', description: 'Show Shortcuts (on lesson page)' },
    ]},
  ]

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Modal - Mobile optimized */}
      <div
        className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-t-2xl sm:rounded-lg shadow-2xl z-10 max-h-[85vh] overflow-hidden flex flex-col animate-slide-up sm:animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="font-serif text-xl text-primary-900 dark:text-white">Keyboard Shortcuts</h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors p-2 -mr-2 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close shortcuts"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <div className="space-y-6">
            {shortcuts.map((category) => (
              <div key={category.category}>
                <h3 className="font-sans font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.items.map((shortcut, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-gray-700 rounded-lg"
                    >
                      <span className="font-sans text-sm text-gray-700 dark:text-gray-300 flex-1">
                        {shortcut.description}
                      </span>
                      <kbd className="ml-4 px-2.5 py-1.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded font-mono text-xs font-medium text-gray-900 dark:text-gray-100 min-w-[60px] text-center">
                        {shortcut.keys}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-gray-700 px-6 py-4 bg-neutral-50 dark:bg-gray-800">
          <p className="font-sans text-xs text-gray-600 dark:text-gray-400 text-center">
            Tap outside or swipe down to close
          </p>
        </div>
      </div>
    </div>
  )
}

