'use client'

import { Lesson } from '@/lib/data/courseData'
import { 
  getContentCompletenessLevel, 
  getContentCompletenessDescription,
  getContentCompletenessBadgeColor,
  getContentCompletenessBadgeIconName
} from '@/lib/utils/lessonContentUtils'

interface ContentCompletenessBadgeProps {
  lesson: Lesson
  showDescription?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function ContentCompletenessBadge({ 
  lesson, 
  showDescription = true,
  size = 'md' 
}: ContentCompletenessBadgeProps) {
  const level = getContentCompletenessLevel(lesson)
  const description = getContentCompletenessDescription(lesson)
  const color = getContentCompletenessBadgeColor(level)
  const iconName = getContentCompletenessBadgeIconName(level)

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  }

  const levelLabels = {
    complete: 'Complete Content',
    partial: 'Partial Content',
    minimal: 'Limited Content'
  }

  const renderIcon = () => {
    switch (iconName) {
      case 'check':
        return (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )
      case 'play':
        return (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )
      case 'warning':
        return (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        )
    }
  }

  return (
    <div className="flex items-start gap-3">
      <div className={`inline-flex items-center gap-2 rounded-lg border font-medium ${sizeClasses[size]} ${color}`}>
        {renderIcon()}
        <span>{levelLabels[level]}</span>
      </div>
      {showDescription && (
        <p className="flex-1 text-sm text-neutral-600 leading-relaxed pt-0.5">
          {description}
        </p>
      )}
    </div>
  )
}

