'use client'

import { ReactNode } from 'react'
import MemberNavigation from '@/components/dashboard/MemberNavigation'
import Container from '@/components/shared/Container'
import { useKeyboardShortcuts } from '@/components/dashboard/KeyboardShortcuts'
import { useFocusMode } from '@/lib/hooks/useFocusMode'
import FloatingModeToggle from '@/components/shared/FloatingModeToggle'

export default function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  // Enable keyboard shortcuts globally for dashboard
  useKeyboardShortcuts()
  const { isFocusMode } = useFocusMode()

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-gray-900">
      {/* Floating Mode Toggles - Only visible in focus mode */}
      <FloatingModeToggle />
      
      {/* Mobile Navigation (Bottom Bar) - Hidden in focus mode */}
      {!isFocusMode && <MemberNavigation isMobile={true} />}

      {/* Desktop Layout */}
      <div className={`container-custom py-8 ${isFocusMode ? 'max-w-full px-4' : ''}`}>
        <div className={`grid grid-cols-1 gap-8 ${isFocusMode ? 'grid-cols-1' : 'lg:grid-cols-12'}`}>
          {/* Desktop Sidebar Navigation - Hidden in focus mode */}
          {!isFocusMode && (
            <aside className="hidden lg:block lg:col-span-3">
              <MemberNavigation />
            </aside>
          )}

          {/* Main Content - Full width in focus mode */}
          <main className={`pb-20 lg:pb-8 pb-safe ${isFocusMode ? 'w-full' : 'lg:col-span-9'}`}>
            <div className="animate-fade-in">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

