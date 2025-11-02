'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const pathname = usePathname()

  if (items.length === 0) return null

  return (
    <nav
      aria-label="Breadcrumb navigation"
      className={`mb-6 ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm font-sans">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const isCurrentPage = pathname === item.href

          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && (
                <svg
                  className="h-4 w-4 text-gray-400 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
              {isLast || isCurrentPage ? (
                <span
                  className={`${
                    isLast
                      ? 'text-primary-900 font-semibold'
                      : 'text-gray-700'
                  }`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-accent transition-colors underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}


