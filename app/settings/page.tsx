'use client'

import { useState } from 'react'
import { useDarkMode } from '@/lib/hooks/useDarkMode'
import { useFocusMode } from '@/lib/hooks/useFocusMode'
import DarkModeToggle from '@/components/shared/DarkModeToggle'
import FocusModeToggle from '@/components/shared/FocusModeToggle'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import Link from 'next/link'

export default function SettingsPage() {
  const { theme, setLightTheme, setDarkTheme, setSystemTheme } = useDarkMode()
  const { isFocusMode, isDefaultFocusMode, setDefaultFocusMode } = useFocusMode()
  const [textSize, setTextSize] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('powerbi_text_size')
      return saved || 'normal'
    }
    return 'normal'
  })

  const handleTextSizeChange = (size: string) => {
    setTextSize(size)
    if (typeof window !== 'undefined') {
      localStorage.setItem('powerbi_text_size', size)
      // Apply text size class to html element
      document.documentElement.classList.remove('text-sm', 'text-base', 'text-lg')
      if (size !== 'normal') {
        document.documentElement.classList.add(`text-${size}`)
      }
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-gray-900">
      <div className="container-custom py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Settings', href: '/settings' },
          ]}
        />

        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="font-serif text-3xl sm:text-4xl text-primary-900 dark:text-white mb-2">
            Settings & Preferences
          </h1>
          <p className="font-sans text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Customize your learning experience
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {/* Appearance Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="font-serif text-xl text-primary-900 dark:text-white mb-4 flex items-center gap-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              Appearance
            </h2>

            <div className="space-y-6">
              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-sans font-semibold text-gray-900 dark:text-white mb-1">
                    Theme
                  </h3>
                  <p className="font-sans text-sm text-gray-600 dark:text-gray-400">
                    Choose between light, dark, or system preference
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <DarkModeToggle size="md" />
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <label className="font-sans font-semibold text-gray-900 dark:text-white mb-3 block">
                  Theme Preference
                </label>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={setLightTheme}
                    className={`px-4 py-2 rounded-lg border font-sans text-sm transition-all ${
                      theme === 'light'
                        ? 'border-accent bg-accent bg-opacity-10 text-accent dark:bg-accent dark:bg-opacity-20'
                        : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                  >
                    Light
                  </button>
                  <button
                    onClick={setDarkTheme}
                    className={`px-4 py-2 rounded-lg border font-sans text-sm transition-all ${
                      theme === 'dark'
                        ? 'border-accent bg-accent bg-opacity-10 text-accent dark:bg-accent dark:bg-opacity-20'
                        : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                  >
                    Dark
                  </button>
                  <button
                    onClick={setSystemTheme}
                    className={`px-4 py-2 rounded-lg border font-sans text-sm transition-all ${
                      theme === 'system'
                        ? 'border-accent bg-accent bg-opacity-10 text-accent dark:bg-accent dark:bg-opacity-20'
                        : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                  >
                    System
                  </button>
                </div>
              </div>

              {/* Text Size */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <label className="font-sans font-semibold text-gray-900 dark:text-white mb-3 block">
                  Text Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {[
                    { value: 'sm', label: 'Small' },
                    { value: 'normal', label: 'Normal' },
                    { value: 'lg', label: 'Large' },
                  ].map((size) => (
                    <button
                      key={size.value}
                      onClick={() => handleTextSizeChange(size.value)}
                      className={`px-4 py-2 rounded-lg border font-sans text-sm transition-all ${
                        textSize === size.value
                          ? 'border-accent bg-accent bg-opacity-10 text-accent dark:bg-accent dark:bg-opacity-20'
                          : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Study Mode Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="font-serif text-xl text-primary-900 dark:text-white mb-4 flex items-center gap-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Study Mode
            </h2>

            <div className="space-y-6">
              {/* Focus Mode */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-sans font-semibold text-gray-900 dark:text-white mb-1">
                    Focus Mode
                  </h3>
                  <p className="font-sans text-sm text-gray-600 dark:text-gray-400">
                    Hide navigation and distractions for focused learning
                  </p>
                </div>
                <FocusModeToggle size="md" />
              </div>

              {/* Default Focus Mode */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-sans font-semibold text-gray-900 dark:text-white mb-1">
                      Enable Focus Mode by Default
                    </h3>
                    <p className="font-sans text-sm text-gray-600 dark:text-gray-400">
                      Automatically enable focus mode when you start learning
                    </p>
                  </div>
                  <button
                    onClick={() => setDefaultFocusMode(!isDefaultFocusMode)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                      isDefaultFocusMode ? 'bg-accent' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    role="switch"
                    aria-checked={isDefaultFocusMode}
                    aria-label="Enable focus mode by default"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        isDefaultFocusMode ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Notifications Section (Placeholder) */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="font-serif text-xl text-primary-900 dark:text-white mb-4 flex items-center gap-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              Notifications
            </h2>
            <p className="font-sans text-gray-600 dark:text-gray-400">
              Notification preferences coming soon
            </p>
          </div>
        </div>

        {/* Back to Dashboard */}
        <div className="mt-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-sans"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

