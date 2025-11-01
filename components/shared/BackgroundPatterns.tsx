'use client'

import { motion } from 'framer-motion'

interface BackgroundPatternsProps {
  variant?: 'dots' | 'grid' | 'waves' | 'organic'
  intensity?: 'subtle' | 'medium' | 'strong'
  className?: string
}

export default function BackgroundPatterns({
  variant = 'dots',
  intensity = 'subtle',
  className = '',
}: BackgroundPatternsProps) {
  const opacityMap = {
    subtle: 'opacity-20',
    medium: 'opacity-40',
    strong: 'opacity-60',
  }

  const baseClasses = `absolute inset-0 pointer-events-none ${opacityMap[intensity]} ${className}`

  if (variant === 'dots') {
    return (
      <div className={baseClasses} aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dots-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-primary-300" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots-pattern)" />
        </svg>
      </div>
    )
  }

  if (variant === 'grid') {
    return (
      <div className={baseClasses} aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary-200"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
    )
  }

  if (variant === 'waves') {
    return (
      <div className={baseClasses} aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,300 Q300,250 600,300 T1200,300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary-200"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
          <motion.path
            d="M0,400 Q300,350 600,400 T1200,400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-secondary-200"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    )
  }

  // Organic variant - flowing shapes
  return (
    <div className={baseClasses} aria-hidden="true">
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
    </div>
  )
}

