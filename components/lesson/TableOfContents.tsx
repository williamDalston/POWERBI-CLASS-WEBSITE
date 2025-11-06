'use client'

import { useEffect, useState } from 'react'

interface TOCItem {
  id: string
  label: string
  level: number
}

interface TableOfContentsProps {
  contentId?: string
}

export function TableOfContents({ contentId = 'lesson-content' }: TableOfContentsProps) {
  const [items, setItems] = useState<TOCItem[]>([])

  useEffect(() => {
    const content = document.getElementById(contentId)
    if (!content) return

    const headings = content.querySelectorAll('h2, h3')
    const tocItems: TOCItem[] = []

    headings.forEach((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || ''
      if (!id) return

      // Ensure heading has an ID
      if (!heading.id) {
        heading.id = id
      }

      tocItems.push({
        id,
        label: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1)),
      })
    })

    setItems(tocItems)
  }, [contentId])

  if (items.length === 0) return null

  return (
    <aside className="sticky top-24 hidden self-start md:block">
      <div className="rounded-lg border bg-white p-3 text-sm">
        <div className="mb-2 text-xs font-medium uppercase text-neutral-500">On this page</div>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className={item.level === 3 ? 'ml-4' : ''}>
              <a
                href={`#${item.id}`}
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}




