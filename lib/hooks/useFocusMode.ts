'use client'

import { useState, useEffect } from 'react'

const FOCUS_MODE_KEY = 'powerbi_focus_mode'
const FOCUS_MODE_DEFAULT_KEY = 'powerbi_focus_mode_default'

export function useFocusMode() {
  const [isFocusMode, setIsFocusMode] = useState(false)
  const [isDefaultFocusMode, setIsDefaultFocusMode] = useState(false)

  // Load preferences on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(FOCUS_MODE_KEY)
        const savedDefault = localStorage.getItem(FOCUS_MODE_DEFAULT_KEY)
        
        if (saved !== null) {
          setIsFocusMode(JSON.parse(saved))
        }
        
        if (savedDefault !== null) {
          setIsDefaultFocusMode(JSON.parse(savedDefault))
          // Apply default on mount if set
          if (JSON.parse(savedDefault)) {
            setIsFocusMode(true)
          }
        }
      } catch (error) {
        console.error('Failed to load focus mode preference:', error)
      }
    }
  }, [])

  const toggleFocusMode = () => {
    const newValue = !isFocusMode
    setIsFocusMode(newValue)
    
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(FOCUS_MODE_KEY, JSON.stringify(newValue))
      } catch (error) {
        console.error('Failed to save focus mode preference:', error)
      }
    }
  }

  const setFocusMode = (enabled: boolean) => {
    setIsFocusMode(enabled)
    
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(FOCUS_MODE_KEY, JSON.stringify(enabled))
      } catch (error) {
        console.error('Failed to save focus mode preference:', error)
      }
    }
  }

  const setDefaultFocusMode = (enabled: boolean) => {
    setIsDefaultFocusMode(enabled)
    
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(FOCUS_MODE_DEFAULT_KEY, JSON.stringify(enabled))
        // Apply immediately if enabling
        if (enabled) {
          setIsFocusMode(true)
        }
      } catch (error) {
        console.error('Failed to save default focus mode preference:', error)
      }
    }
  }

  return {
    isFocusMode,
    isDefaultFocusMode,
    toggleFocusMode,
    setFocusMode,
    setDefaultFocusMode,
  }
}


