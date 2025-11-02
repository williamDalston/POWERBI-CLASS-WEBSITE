import { Note, exportNoteToMarkdown, exportAllNotesToMarkdown } from '@/lib/hooks/useNotes'
import { getAllLessons } from '@/lib/data/courseData'

/**
 * Export note to PDF using browser's print functionality
 */
export function exportNoteToPDF(note: Note, lessonTitle: string): void {
  const markdown = exportNoteToMarkdown(note, lessonTitle)
  
  // Create a temporary window with formatted content
  const printWindow = window.open('', '_blank')
  if (!printWindow) {
    alert('Please allow popups to export notes to PDF')
    return
  }

  // Convert markdown to HTML for printing
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${lessonTitle} - Notes</title>
      <style>
        body {
          font-family: system-ui, -apple-system, sans-serif;
          max-width: 800px;
          margin: 40px auto;
          padding: 20px;
          line-height: 1.6;
          color: #333;
        }
        h1 { color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px; }
        h2 { color: #1e40af; margin-top: 30px; }
        code {
          background: #f3f4f6;
          padding: 2px 6px;
          border-radius: 3px;
          font-family: 'Courier New', monospace;
        }
        pre {
          background: #1f2937;
          color: #f9fafb;
          padding: 15px;
          border-radius: 5px;
          overflow-x: auto;
        }
        blockquote {
          border-left: 4px solid #2563eb;
          padding-left: 15px;
          margin-left: 0;
          color: #4b5563;
        }
        @media print {
          body { margin: 0; }
          @page { margin: 1cm; }
        }
      </style>
    </head>
    <body>
      ${markdownToHTML(markdown)}
    </body>
    </html>
  `

  printWindow.document.write(html)
  printWindow.document.close()
  
  // Wait for content to load, then print
  setTimeout(() => {
    printWindow.print()
    // Close window after print dialog
    setTimeout(() => printWindow.close(), 1000)
  }, 500)
}

/**
 * Export all notes to a single markdown file
 */
export function exportAllNotes(notes: Note[]): string {
  const lessons = getAllLessons()
  const lessonTitles: Record<string, string> = {}
  
  lessons.forEach(lesson => {
    lessonTitles[lesson.id] = lesson.title
  })

  return exportAllNotesToMarkdown(notes, lessonTitles)
}

/**
 * Download markdown file
 */
export function downloadMarkdown(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

/**
 * Simple markdown to HTML converter for print
 */
function markdownToHTML(markdown: string): string {
  let html = markdown
    // Headers
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    // Bold
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    // Code blocks
    .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^\)]+)\)/gim, '<a href="$2">$1</a>')
    // Lists
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    // Blockquotes
    .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
    // Line breaks
    .replace(/\n\n/gim, '</p><p>')
    .replace(/\n/gim, '<br>')

  // Wrap lists
  html = html.replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>')

  return `<p>${html}</p>`
}

/**
 * Auto-link lesson IDs mentioned in notes
 */
export function autoLinkLessons(content: string): string {
  const lessons = getAllLessons()
  let linkedContent = content

  lessons.forEach(lesson => {
    // Match lesson IDs like "1-2", "5-3", etc. or lesson titles
    const lessonIdPattern = new RegExp(`\\b${lesson.id}\\b`, 'gi')
    const lessonTitlePattern = new RegExp(`\\b${lesson.title}\\b`, 'gi')
    
    linkedContent = linkedContent.replace(
      lessonIdPattern,
      `[${lesson.id}](/dashboard/lessons/${lesson.id})`
    )
    
    linkedContent = linkedContent.replace(
      lessonTitlePattern,
      `[${lesson.title}](/dashboard/lessons/${lesson.id})`
    )
  })

  return linkedContent
}

/**
 * Extract lesson IDs and titles from content
 */
export function extractLessonReferences(content: string): Array<{ id: string; title: string }> {
  const lessons = getAllLessons()
  const references: Array<{ id: string; title: string }> = []

  lessons.forEach(lesson => {
    if (content.includes(lesson.id) || content.includes(lesson.title)) {
      references.push({ id: lesson.id, title: lesson.title })
    }
  })

  return references
}

