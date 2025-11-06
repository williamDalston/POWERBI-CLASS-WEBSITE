'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setP(Math.min(100, Math.round((h.scrollTop / max) * 100)))
    }

    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-neutral-200">
      <div className="h-full bg-primary-600 transition-all duration-150" style={{ width: `${p}%` }} />
    </div>
  )
}




