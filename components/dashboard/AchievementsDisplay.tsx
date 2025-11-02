'use client'

import { useState } from 'react'
import { useAchievements } from '@/lib/hooks/useAchievements'
import AchievementBadge from './AchievementBadge'
import { AchievementCategory } from '@/lib/utils/achievementUtils'

interface AchievementsDisplayProps {
  className?: string
  showProgress?: boolean
  viewMode?: 'compact' | 'gallery' | 'detailed'
  category?: AchievementCategory
  maxDisplay?: number
}

export default function AchievementsDisplay({
  className = '',
  showProgress = true,
  viewMode = 'compact',
  category,
  maxDisplay,
}: AchievementsDisplayProps) {
  const {
    achievements,
    isLoading,
    getUnlockedAchievements,
    getLockedAchievements,
    getCategoryAchievements,
    getProgressStats,
  } = useAchievements()

  const [selectedCategory, setSelectedCategory] = useState<AchievementCategory | 'all'>(category || 'all')
  const [viewFilter, setViewFilter] = useState<'all' | 'unlocked' | 'locked'>('all')
  const [isExpanded, setIsExpanded] = useState(viewMode !== 'compact')

  const categories: Array<AchievementCategory | 'all'> = [
    'all',
    'milestone',
    'streak',
    'module',
    'topic',
    'time',
    'special',
  ]

  // Filter achievements
  let displayedAchievements = achievements

  if (selectedCategory !== 'all') {
    displayedAchievements = getCategoryAchievements(selectedCategory)
  }

  if (viewFilter === 'unlocked') {
    displayedAchievements = displayedAchievements.filter(a => a.unlockedAt)
  } else if (viewFilter === 'locked') {
    displayedAchievements = displayedAchievements.filter(a => !a.unlockedAt)
  }

  if (maxDisplay && !isExpanded) {
    displayedAchievements = displayedAchievements.slice(0, maxDisplay)
  }

  const stats = getProgressStats()

  if (isLoading) {
    return (
      <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-4 ${className}`}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-2">
            <div className="h-16 bg-gray-100 rounded"></div>
            <div className="h-16 bg-gray-100 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  const unlockedCount = stats.unlocked
  const totalCount = stats.total

  if (viewMode === 'compact') {
    return (
      <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-4 ${className}`}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-sans font-semibold text-gray-900">
              Achievements
            </h3>
            <p className="text-xs text-gray-500 font-sans mt-1">
              {unlockedCount} of {totalCount} unlocked
            </p>
          </div>
          {displayedAchievements.length > 3 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm text-accent hover:text-accent-dark font-sans"
            >
              {isExpanded ? 'Show Less' : 'Show All'}
            </button>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-500"
              style={{ width: `${stats.percentage}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1 font-sans">
            {stats.percentage}% Complete
          </p>
        </div>

        {/* Achievement List */}
        {displayedAchievements.length === 0 ? (
          <p className="text-sm text-gray-500 font-sans text-center py-4">
            {viewFilter === 'unlocked'
              ? 'No achievements unlocked yet. Keep learning! 🏆'
              : viewFilter === 'locked'
              ? 'All achievements unlocked! 🎉'
              : 'Complete lessons to unlock achievements! 🏆'}
          </p>
        ) : (
          <div className="space-y-2">
            {displayedAchievements.map((achievement) => (
              <AchievementBadge
                key={achievement.id}
                achievement={achievement}
                progress={achievement.progress}
                showProgress={showProgress}
                size="sm"
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  // Gallery or Detailed view
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}>
      {/* Header */}
      <div className="mb-6">
        <h3 className="font-sans font-bold text-xl text-gray-900 mb-2">Achievements</h3>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>{unlockedCount} of {totalCount} unlocked</span>
          <span>•</span>
          <span>{stats.percentage}% Complete</span>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 space-y-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
            Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-sm font-sans transition-colors ${
                  selectedCategory === cat
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* View Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 font-sans">
            View
          </label>
          <div className="flex gap-2">
            {(['all', 'unlocked', 'locked'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setViewFilter(filter)}
                className={`px-3 py-1.5 rounded-full text-sm font-sans transition-colors ${
                  viewFilter === filter
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Achievement Grid */}
      {displayedAchievements.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🏆</div>
          <p className="text-gray-500 font-sans">
            {viewFilter === 'unlocked'
              ? 'No achievements unlocked yet. Keep learning!'
              : viewFilter === 'locked'
              ? 'All achievements unlocked! 🎉'
              : 'No achievements found in this category.'}
          </p>
        </div>
      ) : (
        <div
          className={`grid gap-4 ${
            viewMode === 'gallery'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1'
          }`}
        >
          {displayedAchievements.map((achievement) => (
            <AchievementBadge
              key={achievement.id}
              achievement={achievement}
              progress={achievement.progress}
              showProgress={showProgress}
              size={viewMode === 'gallery' ? 'md' : 'lg'}
            />
          ))}
        </div>
      )}
    </div>
  )
}

