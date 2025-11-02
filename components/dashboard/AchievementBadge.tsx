'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Achievement, getRarityColor, getRarityBorderColor } from '@/lib/utils/achievementUtils'

interface AchievementBadgeProps {
  achievement: Achievement
  progress?: number // 0-100
  showProgress?: boolean
  onUnlock?: (id: string) => void
  size?: 'sm' | 'md' | 'lg'
}

export default function AchievementBadge({
  achievement,
  progress = 0,
  showProgress = false,
  onUnlock,
  size = 'md',
}: AchievementBadgeProps) {
  const [isUnlocked, setIsUnlocked] = useState(!!achievement.unlockedAt)
  const [isHovered, setIsHovered] = useState(false)
  const displayProgress = progress || (achievement.unlockedAt ? 100 : achievement.progress || 0)

  useEffect(() => {
    if (achievement.unlockedAt && !isUnlocked) {
      setIsUnlocked(true)
      onUnlock?.(achievement.id)
    }
  }, [achievement.unlockedAt, isUnlocked, achievement.id, onUnlock])

  const sizeClasses = {
    sm: 'p-2 text-base',
    md: 'p-4 text-lg',
    lg: 'p-6 text-xl',
  }

  const iconSizes = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
  }

  const rarityBorder = getRarityBorderColor(achievement.rarity)
  const rarityText = getRarityColor(achievement.rarity)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: isUnlocked ? 1.02 : 1, y: -2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative rounded-lg border-2 transition-all duration-300 cursor-pointer ${
        sizeClasses[size]
      } ${
        isUnlocked
          ? `${rarityBorder} bg-gradient-to-br from-white to-accent/5 shadow-md`
          : 'bg-neutral-50 border-gray-200 opacity-70'
      }`}
      title={achievement.description}
    >
      {/* Rarity glow effect */}
      {isUnlocked && isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          className={`absolute inset-0 rounded-lg ${
            achievement.rarity === 'legendary'
              ? 'bg-yellow-400'
              : achievement.rarity === 'epic'
              ? 'bg-purple-400'
              : achievement.rarity === 'rare'
              ? 'bg-blue-400'
              : 'bg-gray-400'
          } blur-xl -z-10`}
        />
      )}

      {/* Progress bar (for locked achievements) */}
      {!isUnlocked && showProgress && displayProgress > 0 && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-t-lg overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${displayProgress}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-accent"
          />
        </div>
      )}

      <div className="flex items-start gap-3">
        {/* Icon */}
        <motion.div
          animate={isUnlocked && isHovered ? { rotate: [0, -10, 10, -10, 0] } : {}}
          transition={{ duration: 0.5 }}
          className={`${iconSizes[size]} flex-shrink-0 ${
            isUnlocked ? '' : 'grayscale opacity-50'
          }`}
        >
          {achievement.icon}
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <h4
                className={`font-serif font-semibold ${
                  isUnlocked ? 'text-primary-900' : 'text-gray-500'
                } ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-lg' : 'text-sm'}`}
              >
                {achievement.title}
              </h4>
              <p
                className={`font-sans mt-1 ${
                  isUnlocked ? 'text-gray-600' : 'text-gray-400'
                } ${size === 'sm' ? 'text-xs' : 'text-xs'}`}
              >
                {achievement.description}
              </p>
            </div>

            {/* Unlock indicator */}
            {isUnlocked && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex-shrink-0"
              >
                <svg
                  className={`${size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'} text-accent`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
            )}
          </div>

          {/* Metadata */}
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            {achievement.unlockedAt && (
              <p className="font-sans text-xs text-gray-500">
                Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
              </p>
            )}
            {!isUnlocked && showProgress && displayProgress > 0 && (
              <span className="font-sans text-xs text-gray-500">
                {displayProgress}% complete
              </span>
            )}
            <span
              className={`font-sans text-xs font-semibold px-2 py-0.5 rounded-full ${
                achievement.rarity === 'legendary'
                  ? 'bg-yellow-100 text-yellow-800'
                  : achievement.rarity === 'epic'
                  ? 'bg-purple-100 text-purple-800'
                  : achievement.rarity === 'rare'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {achievement.rarity.charAt(0).toUpperCase() + achievement.rarity.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Legacy Achievement Celebration Modal (kept for backwards compatibility)
export function AchievementCelebration({ achievement }: { achievement?: Achievement }) {
  if (!achievement) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 pointer-events-none">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md text-center animate-fade-in pointer-events-auto">
        <div className="text-6xl mb-4 animate-bounce">🎉</div>
        <h3 className="font-serif text-2xl text-primary-900 mb-2">Achievement Unlocked!</h3>
        <div className="text-4xl mb-4">{achievement.icon}</div>
        <h4 className="font-serif text-xl text-primary-900 mb-2">{achievement.title}</h4>
        <p className="font-sans text-gray-600">{achievement.description}</p>
      </div>
    </div>
  )
}

