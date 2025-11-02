'use client'

import { useState, useEffect } from 'react'

interface AchievementsDisplayProps {
  className?: string
}

export default function AchievementsDisplay({ className = '' }: AchievementsDisplayProps) {
  const [achievements, setAchievements] = useState<string[]>([])
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    loadAchievements()
    
    // Listen for storage changes to update achievements in real-time
    const handleStorageChange = () => {
      loadAchievements()
    }
    window.addEventListener('storage', handleStorageChange)
    
    // Also check periodically for local changes
    const interval = setInterval(loadAchievements, 1000)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(interval)
    }
  }, [])

  const loadAchievements = () => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('achievements')
        const achievementsList = stored ? JSON.parse(stored) as string[] : []
        setAchievements(achievementsList)
      } catch (err) {
        console.error('Failed to load achievements:', err)
      }
    }
  }

  if (achievements.length === 0) {
    return (
      <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-4 ${className}`}>
        <h3 className="font-sans font-semibold text-gray-900 mb-2">Achievements</h3>
        <p className="text-sm text-gray-500 font-sans">
          Complete lessons to unlock achievements! 🏆
        </p>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-4 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-sans font-semibold text-gray-900">
          Achievements ({achievements.length})
        </h3>
        {achievements.length > 3 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-accent hover:text-accent-dark font-sans"
          >
            {isExpanded ? 'Show Less' : 'Show All'}
          </button>
        )}
      </div>

      <div className="space-y-2">
        {(isExpanded ? achievements : achievements.slice(0, 3)).map((achievement, index) => (
          <div
            key={index}
            className="flex items-start gap-2 p-2 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/20"
          >
            <svg
              className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-sans text-sm text-gray-900">{achievement}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

