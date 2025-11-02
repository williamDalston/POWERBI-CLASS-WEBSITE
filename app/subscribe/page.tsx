'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SubscribePage() {
  const router = useRouter()

  useEffect(() => {
    // Automatically redirect to dashboard
    router.push('/dashboard')
  }, [router])

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg font-sans text-gray-700">Redirecting to class...</p>
      </div>
    </div>
  )
}
