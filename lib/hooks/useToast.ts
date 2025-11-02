'use client'

import { useCallback, useMemo } from 'react'
import type { ToastType } from '@/components/dashboard/Toast'

// Simplified version of useToast hook
export function useToast() {
  const showToast = useCallback((message: string, type?: ToastType, duration?: number) => {
    // Simple implementation - can be enhanced later
    // Using logger would be better but keeping console.log for now since it's a simple implementation
    if (process.env.NODE_ENV === 'development') {
      console.log('Toast:', { message, type, duration })
    }
  }, [])
  
  const ToastContainer = useMemo(() => () => null, [])
  
  return { showToast, ToastContainer }
}
