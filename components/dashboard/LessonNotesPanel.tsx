'use client'

import { useState, useEffect } from 'react'
import { useNotes } from '@/lib/hooks/useNotes'
import MarkdownEditor from '@/components/shared/MarkdownEditor'
import { getLessonById } from '@/lib/data/courseData'
import { exportNoteToPDF, downloadMarkdown, extractLessonReferences } from '@/lib/utils/noteUtils'
import Link from 'next/link'

interface LessonNotesPanelProps {
  lessonId: string
  isOpen: boolean
  onClose: () => void
  onToggle: () => void
}

export default function LessonNotesPanel({
  lessonId,
  isOpen,
  onClose,
  onToggle,
}: LessonNotesPanelProps) {
  const { saveNote, getCurrentNoteContent, deleteNote, isSaving, getAllTags, getNotesByTag } = useNotes()
  const [noteContent, setNoteContent] = useState('')
  const [isMinimized, setIsMinimized] = useState(false)
  const [showExportMenu, setShowExportMenu] = useState(false)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const lesson = getLessonById(lessonId)
  const lessonReferences = extractLessonReferences(noteContent)
  const tags = getAllTags()

  // Load note content
  useEffect(() => {
    const content = getCurrentNoteContent(lessonId)
    setNoteContent(content)
  }, [lessonId, getCurrentNoteContent])

  // Auto-save note
  useEffect(() => {
    if (noteContent === '') return
    const timeoutId = saveNote(lessonId, noteContent)
    return timeoutId
  }, [noteContent, lessonId, saveNote])

  const handleClear = () => {
    if (confirm('Are you sure you want to clear all notes for this lesson?')) {
      setNoteContent('')
      deleteNote(lessonId)
    }
  }

  const noteExists = noteContent.trim().length > 0

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Slide-out Panel */}
      <div
        className={`fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-white dark:bg-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${isMinimized ? 'h-32' : 'h-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="flex items-center gap-3">
            <svg
              className="h-5 w-5 text-primary-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <div>
              <h3 className="font-serif text-lg text-primary-900 dark:text-white">Notes</h3>
              {lesson && (
                <p className="font-sans text-xs text-gray-500 dark:text-gray-400 truncate max-w-xs">
                  {lesson.title}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Save Status */}
            {isSaving && (
              <span className="font-sans text-xs text-gray-500">Saving...</span>
            )}
            {!isSaving && noteExists && (
              <span className="font-sans text-xs text-green-600 flex items-center gap-1">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Saved
              </span>
            )}

            {/* Minimize/Maximize */}
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
              aria-label={isMinimized ? 'Maximize' : 'Minimize'}
            >
              <svg
                className="h-4 w-4 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMinimized ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                )}
              </svg>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
              aria-label="Close notes panel"
            >
              <svg
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        {!isMinimized && (
          <div className="flex flex-col h-[calc(100vh-73px)]">
            {/* Editor */}
            <div className="flex-1 overflow-hidden border-b border-gray-200 dark:border-gray-700">
              <MarkdownEditor
                value={noteContent}
                onChange={setNoteContent}
                placeholder={`Take notes for: ${lesson?.title || 'this lesson'}...\n\nUse Markdown formatting:\n- **Bold** for emphasis\n- *Italic* for highlights\n- \`code\` for snippets\n- #Tags for organization\n\nMention lesson IDs (e.g., "1-2") or titles to auto-link\n\nAuto-saves every 2 seconds`}
                minHeight="100%"
                showToolbar={true}
                splitView={false}
              />
            </div>

            {/* Smart Features Section */}
            {lessonReferences.length > 0 && (
              <div className="p-3 bg-blue-50 border-t border-blue-200">
                <p className="font-sans text-xs font-semibold text-blue-900 mb-2">Referenced Lessons:</p>
                <div className="flex flex-wrap gap-2">
                  {lessonReferences.map((ref) => (
                    <Link
                      key={ref.id}
                      href={`/dashboard/lessons/${ref.id}`}
                      className="px-2 py-1 text-xs font-sans bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                    >
                      {ref.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex-wrap gap-2">
              <div className="flex items-center gap-4 flex-wrap">
                <p className="font-sans text-xs text-gray-500 dark:text-gray-400">
                  {noteContent.length} characters • Auto-saved every 2s
                </p>
                {tags.length > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xs text-gray-500 dark:text-gray-400">Tags:</span>
                    <div className="flex flex-wrap gap-1">
                      {tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-sans bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                      {tags.length > 3 && (
                        <span className="px-2 py-0.5 text-xs font-sans text-gray-500 dark:text-gray-400">
                          +{tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                {/* Export Menu */}
                {noteExists && (
                  <div className="relative">
                    <button
                      onClick={() => setShowExportMenu(!showExportMenu)}
                      className="px-3 py-1.5 text-xs font-sans text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors flex items-center gap-1"
                    >
                      Export
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {showExportMenu && (
                      <div className="absolute bottom-full right-0 mb-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10">
                        <button
                          onClick={() => {
                            const currentNote = {
                              id: `${lessonId}-note`,
                              lessonId,
                              content: noteContent,
                              tags: [],
                              createdAt: new Date().toISOString(),
                              updatedAt: new Date().toISOString(),
                            }
                            if (lesson) {
                              exportNoteToPDF(currentNote, lesson.title)
                              setShowExportMenu(false)
                            }
                          }}
                          className="w-full text-left px-4 py-2 text-sm font-sans text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                          </svg>
                          Export as PDF
                        </button>
                        <button
                          onClick={() => {
                            const markdown = `# ${lesson?.title || 'Notes'}\n\n${noteContent}`
                            downloadMarkdown(markdown, `${lessonId}-notes.md`)
                            setShowExportMenu(false)
                          }}
                          className="w-full text-left px-4 py-2 text-sm font-sans text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2 border-t border-gray-200 dark:border-gray-700"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Export as Markdown
                        </button>
                      </div>
                    )}
                  </div>
                )}
                
                <button
                  onClick={handleClear}
                  disabled={!noteExists}
                  className="px-3 py-1.5 text-xs font-sans text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 disabled:text-gray-300 dark:disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}


