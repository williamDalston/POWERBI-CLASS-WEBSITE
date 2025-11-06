import { ReactNode } from 'react'

interface CalloutProps {
  children: ReactNode
  variant?: 'info' | 'tip' | 'caution'
  title?: string
}

export function Callout({ children, variant = 'info', title }: CalloutProps) {
  const map = {
    info: 'border-blue-200 bg-blue-50 text-blue-900',
    tip: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    caution: 'border-amber-200 bg-amber-50 text-amber-900',
  }

  return (
    <div className={`not-prose my-4 rounded-xl border px-4 py-3 ${map[variant]}`}>
      {title && <div className="mb-1 text-sm font-semibold">{title}</div>}
      <div className="text-[15px] leading-7">{children}</div>
    </div>
  )
}




