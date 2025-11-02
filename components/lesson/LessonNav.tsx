import Link from 'next/link'

interface LessonNavProps {
  prev?: { href: string; label: string }
  next?: { href: string; label: string }
}

export function LessonNav({ prev, next }: LessonNavProps) {
  return (
    <nav className="mt-8 flex items-center justify-between border-t border-neutral-200 pt-8">
      <Link
        href={prev?.href ?? '#'}
        className={`text-sm text-neutral-500 hover:text-neutral-800 transition-colors ${
          prev ? '' : 'invisible'
        }`}
      >
        ← {prev?.label}
      </Link>
      {next && (
        <Link
          href={next.href}
          className="inline-flex items-center rounded-lg bg-primary-600 px-4 py-2 text-white hover:bg-primary-700 transition-colors"
        >
          Next: {next.label} →
        </Link>
      )}
    </nav>
  )
}

