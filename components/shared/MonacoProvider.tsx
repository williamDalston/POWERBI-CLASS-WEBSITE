'use client'

import { useEffect } from 'react'
import { configureMonacoLanguages } from '@/lib/utils/monacoConfig'

/**
 * MonacoProvider initializes Monaco Editor with custom languages
 * This should be mounted once at the root of the app
 */
export default function MonacoProvider() {
  useEffect(() => {
    // Configure Monaco languages when component mounts
    configureMonacoLanguages()
  }, [])

  // This component doesn't render anything
  return null
}




