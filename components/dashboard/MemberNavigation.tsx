'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import DarkModeToggle from '@/components/shared/DarkModeToggle'
import FocusModeToggle from '@/components/shared/FocusModeToggle'
import KeyboardShortcutsHelpMobile from './KeyboardShortcutsHelpMobile'

interface NavItem {
  label: string
  href: string
  icon?: React.ReactNode
}

interface MemberNavigationProps {
  className?: string
  isMobile?: boolean
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    label: 'My Courses',
    href: '/dashboard/courses',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    label: 'Search',
    href: '/dashboard',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    label: 'Progress',
    href: '/dashboard/progress',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    label: 'Capstones',
    href: '/dashboard/capstones',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
]

export default function MemberNavigation({
  className = '',
  isMobile = false,
}: MemberNavigationProps) {
  const pathname = usePathname()
  const [showShortcuts, setShowShortcuts] = useState(false)

  if (isMobile) {
    return (
      <nav className={`fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-40 pb-safe ${className}`}>
        <div className="flex justify-around items-center h-16 px-2 gap-1">
          {navItems.slice(0, 4).map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
            const isSearch = item.label === 'Search'
            
            // Special handling for search - trigger command palette or focus search on dashboard
            if (isSearch) {
              return (
                <button
                  key={item.href}
                  onClick={() => {
                    // Trigger Cmd+K / Ctrl+K to open command palette
                    window.dispatchEvent(new KeyboardEvent('keydown', {
                      key: 'k',
                      metaKey: true,
                      ctrlKey: true,
                    }))
                    // Also scroll to search on dashboard if we're there
                    if (pathname === '/dashboard') {
                      const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement
                      if (searchInput) {
                        setTimeout(() => searchInput.focus(), 100)
                      }
                    }
                  }}
                  className="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 touch-manipulation text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-white active:scale-95"
                  aria-label="Search lessons"
                >
                  <span className="transition-transform duration-200">
                    {item.icon}
                  </span>
                  <span className="font-sans text-xs font-medium">{item.label}</span>
                </button>
              )
            }
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 touch-manipulation ${
                  isActive
                    ? 'text-accent scale-110'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-white active:scale-95'
                }`}
              >
                <span className={`transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}>
                  {item.icon}
                </span>
                <span className="font-sans text-xs font-medium">{item.label}</span>
              </Link>
            )
          })}
          
          {/* Keyboard Shortcuts Help Button (Mobile) */}
          <button
            onClick={() => setShowShortcuts(true)}
            className="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 touch-manipulation text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-white active:scale-95"
            aria-label="Keyboard shortcuts help"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-sans text-xs font-medium">Help</span>
          </button>
        </div>
        
        {/* Mobile Keyboard Shortcuts Modal */}
        {showShortcuts && (
          <KeyboardShortcutsHelpMobile 
            isOpen={showShortcuts} 
            onClose={() => setShowShortcuts(false)} 
          />
        )}
      </nav>
    )
  }

  return (
    <nav className={`${className}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <h3 className="font-serif text-lg text-primary-900 dark:text-white mb-4 px-2">
          Navigation
        </h3>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg font-sans transition-all duration-200 ${
                    isActive
                      ? 'bg-accent bg-opacity-10 text-accent font-semibold shadow-sm dark:bg-accent dark:bg-opacity-20'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-neutral-100 dark:hover:bg-gray-700 hover:translate-x-1'
                  }`}
                >
                  <span className={`transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* User Profile Link & Settings */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/dashboard/profile"
            className="flex items-center gap-3 px-3 py-2 rounded-lg font-sans text-gray-700 dark:text-gray-300 hover:bg-neutral-100 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Profile</span>
          </Link>
          <Link
            href="/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-lg font-sans text-gray-700 dark:text-gray-300 hover:bg-neutral-100 dark:hover:bg-gray-700 transition-colors mt-1"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Settings</span>
          </Link>
          
          {/* Quick Toggles */}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col gap-2">
            <div className="flex items-center justify-between px-3">
              <span className="font-sans text-sm text-gray-600 dark:text-gray-400">Theme</span>
              <div className="flex-shrink-0">
                <DarkModeToggle size="sm" />
              </div>
            </div>
            <div className="flex items-center justify-between px-3">
              <span className="font-sans text-sm text-gray-600 dark:text-gray-400">Focus Mode</span>
              <div className="flex-shrink-0">
                <FocusModeToggle size="sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

