'use client'

import { useState, useEffect } from 'react'
import { 
  isInstallable, 
  promptInstall, 
  getPWACapabilities,
  type BeforeInstallPromptEvent 
} from '@/lib/utils/pwa'
import { X, Download, Smartphone } from 'lucide-react'

export default function PWAInstallPrompt() {
  const [show, setShow] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalling, setIsInstalling] = useState(false)

  useEffect(() => {
    // Check if installable
    if (!isInstallable()) {
      return
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShow(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // Show prompt after a delay if not dismissed
    const timer = setTimeout(() => {
      if (isInstallable()) {
        setShow(true)
      }
    }, 3000) // Show after 3 seconds

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      clearTimeout(timer)
    }
  }, [])

  const handleInstall = async () => {
    setIsInstalling(true)
    
    try {
      if (deferredPrompt) {
        const accepted = await promptInstall()
        if (accepted) {
          setShow(false)
          console.log('PWA installed successfully')
        }
      } else {
        console.log('No install prompt available. Opening fallback instructions.')
        // Fallback for iOS
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
          alert('To install this app: Tap Share > Add to Home Screen')
        } else {
          alert('Installation not available. Please use your browser menu.')
        }
      }
    } catch (error) {
      console.error('Installation failed:', error)
    } finally {
      setIsInstalling(false)
    }
  }

  const handleDismiss = () => {
    setShow(false)
    localStorage.setItem('pwa-install-dismissed', 'true')
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-primary-900 rounded-2xl shadow-2xl border border-primary-800/50 backdrop-blur-xl overflow-hidden">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Install Power BI Course
                  </h3>
                  <p className="text-sm text-primary-300">
                    Learn anytime, anywhere
                  </p>
                </div>
              </div>
              <button
                onClick={handleDismiss}
                className="text-primary-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-primary-800"
                aria-label="Dismiss"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Benefits */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-primary-200 text-sm">
                  Access lessons offline
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-primary-200 text-sm">
                  Faster loading times
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-primary-200 text-sm">
                  Home screen quick access
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleInstall}
                disabled={isInstalling}
                className="flex-1 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-accent-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isInstalling ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Installing...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    <span>Install App</span>
                  </>
                )}
              </button>
              <button
                onClick={handleDismiss}
                className="px-6 py-3 text-primary-300 hover:text-white font-semibold rounded-xl transition-colors duration-200 border border-primary-700 hover:border-primary-600"
              >
                Not Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Standalone install button component for settings/dashboard
export function PWAInstallButton() {
  const [isInstalling, setIsInstalling] = useState(false)
  const [canInstall, setCanInstall] = useState(false)

  useEffect(() => {
    setCanInstall(isInstallable())
  }, [])

  const handleInstall = async () => {
    setIsInstalling(true)
    
    try {
      const accepted = await promptInstall()
      if (accepted) {
        setCanInstall(false)
        console.log('PWA installed successfully')
      }
    } catch (error) {
      console.error('Installation failed:', error)
    } finally {
      setIsInstalling(false)
    }
  }

  if (!canInstall) return null

  const capabilities = getPWACapabilities()

  return (
    <div className="bg-primary-900/50 border border-primary-800 rounded-xl p-6">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center flex-shrink-0">
          <Smartphone className="w-6 h-6 text-accent-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2">
            Install Power BI Course App
          </h3>
          <p className="text-sm text-primary-300 mb-4">
            Get a native app experience with offline access and faster performance
          </p>
          <button
            onClick={handleInstall}
            disabled={isInstalling}
            className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {isInstalling ? (
              <>
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Installing...</span>
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                <span>Install Now</span>
              </>
            )}
          </button>
        </div>
      </div>
      
      {/* Capabilities */}
      {Object.entries(capabilities).some(([, value]) => value) && (
        <div className="mt-4 pt-4 border-t border-primary-800">
          <p className="text-xs text-primary-400 mb-2">Available features:</p>
          <div className="flex flex-wrap gap-2">
            {capabilities.offline && (
              <span className="px-3 py-1 bg-primary-800/50 text-primary-300 rounded-full text-xs">
                Offline Mode
              </span>
            )}
            {capabilities.notifications && (
              <span className="px-3 py-1 bg-primary-800/50 text-primary-300 rounded-full text-xs">
                Notifications
              </span>
            )}
            {capabilities.backgroundSync && (
              <span className="px-3 py-1 bg-primary-800/50 text-primary-300 rounded-full text-xs">
                Background Sync
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}


