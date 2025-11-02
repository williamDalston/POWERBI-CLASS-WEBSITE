'use client'

interface DifficultyBadgeProps {
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  size?: 'sm' | 'md'
}

export function DifficultyBadge({ difficulty, size = 'md' }: DifficultyBadgeProps) {
  const config = {
    beginner: {
      color: 'bg-green-100 text-green-800 border-green-200',
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      ),
      label: 'Beginner'
    },
    intermediate: {
      color: 'bg-amber-100 text-amber-800 border-amber-200',
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
        </svg>
      ),
      label: 'Intermediate'
    },
    advanced: {
      color: 'bg-red-100 text-red-800 border-red-200',
      icon: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
      ),
      label: 'Advanced'
    }
  }

  const { color, icon, label } = config[difficulty]
  const sizeClasses = size === 'sm' ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1.5'

  return (
    <div className={`inline-flex items-center gap-1.5 rounded-md border font-medium ${sizeClasses} ${color}`}>
      {icon}
      <span>{label}</span>
    </div>
  )
}

