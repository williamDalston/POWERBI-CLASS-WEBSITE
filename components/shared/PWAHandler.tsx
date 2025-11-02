'use client'

import { useEffect } from 'react'
import { registerServiceWorker, setDeferredPrompt, type BeforeInstallPromptEvent } from '@/lib/utils/pwa'
import { logger } from '@/lib/utils/logger'

export default function PWAHandler() {
  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window === 'undefined') return

    // Register service worker
    if ('serviceWorker' in navigator) {
      registerServiceWorker().catch((error) => {
        logger.error(new Error('Failed to register service worker'), { error })
      })
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  return null // This component doesn't render anything
}


