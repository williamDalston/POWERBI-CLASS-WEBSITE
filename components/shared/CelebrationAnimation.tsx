'use client'

import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import { Achievement } from '@/lib/utils/achievementUtils'
import { motion, AnimatePresence } from 'framer-motion'

interface CelebrationAnimationProps {
  achievement?: Achievement
  show?: boolean
  onComplete?: () => void
  enableConfetti?: boolean
  enableSound?: boolean
}

export default function CelebrationAnimation({
  achievement,
  show = false,
  onComplete,
  enableConfetti = true,
  enableSound = false,
}: CelebrationAnimationProps) {
  const confettiInstance = useRef<confetti.CreateTypes | null>(null)
  const hasPlayed = useRef(false)

  useEffect(() => {
    if (!show || !achievement || hasPlayed.current) return

    hasPlayed.current = true

    // Confetti animation
    if (enableConfetti) {
      const duration = 3000
      const animationEnd = Date.now() + duration
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 }

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min
      }

      const interval: NodeJS.Timeout = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)

        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      }, 250)
    }

    // Sound effect (optional)
    if (enableSound && typeof window !== 'undefined') {
      // Simple beep sound using Web Audio API
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.frequency.value = 800
        oscillator.type = 'sine'

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)

        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.5)
      } catch (err) {
        // Browser doesn't support Web Audio API, silently fail
        console.debug('Web Audio API not supported')
      }
    }

    // Auto-dismiss after animation
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete()
      }
      hasPlayed.current = false
    }, 4000)

    return () => {
      clearTimeout(timer)
      hasPlayed.current = false
    }
  }, [show, achievement, enableConfetti, enableSound, onComplete])

  return (
    <AnimatePresence>
      {show && achievement && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black bg-opacity-50 p-4 pointer-events-none"
          aria-live="polite"
          aria-atomic="true"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center pointer-events-auto relative overflow-hidden"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent opacity-50" />
            
            <div className="relative z-10">
              {/* Achievement Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="text-7xl mb-4"
              >
                {achievement.icon}
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-3xl text-primary-900 mb-2 font-bold"
              >
                Achievement Unlocked!
              </motion.h3>

              {/* Achievement Title */}
              <motion.h4
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="font-serif text-2xl text-primary-900 mb-2 font-semibold"
              >
                {achievement.title}
              </motion.h4>

              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="font-sans text-gray-600 mb-4"
              >
                {achievement.description}
              </motion.p>

              {/* Rarity Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: 'spring' }}
                className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
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
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/**
 * Simple confetti burst animation (for smaller celebrations)
 */
export function triggerConfettiBurst(options?: {
  particleCount?: number
  spread?: number
  origin?: { x: number; y: number }
}) {
  const {
    particleCount = 100,
    spread = 70,
    origin = { x: 0.5, y: 0.5 },
  } = options || {}

  confetti({
    particleCount,
    spread,
    origin,
    zIndex: 9999,
  })
}


