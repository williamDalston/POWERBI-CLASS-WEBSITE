'use client'

import { useState, useEffect } from 'react'
import { useNotes } from '@/lib/hooks/useNotes'
import MarkdownEditor from '@/components/shared/MarkdownEditor'
import { getLessonById } from '@/lib/data/courseData'

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
  const { saveNote, getCurrentNoteContent, deleteNote, isSaving } = useNotes()
  const [noteContent, setNoteContent] = useState('')
  const [isMinimized, setIsMinimized] = useState(false)
  const lesson = getLessonById(lessonId)

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
        className={`fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${isMinimized ? 'h-32' : 'h-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
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
              <h3 className="font-serif text-lg text-primary-900">Notes</h3>
              {lesson && (
                <p className="font-sans text-xs text-gray-500 truncate max-w-xs">
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
              className="p-2 hover:bg-gray-100 rounded transition-colors"
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
              className="p-2 hover:bg-gray-100 rounded transition-colors"
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
            <div className="flex-1 overflow-hidden border-b border-gray-200">
              <MarkdownEditor
                value={noteContent}
                onChange={setNoteContent}
                placeholder={`Take notes for: ${lesson?.title || 'this lesson'}...\n\nUse Markdown formatting:\n- **Bold** for emphasis\n- *Italic* for highlights\n- \`code\` for snippets\n- #Tags for organization\n\nAuto-saves every 2 seconds`}
                minHeight="100%"
                showToolbar={true}
                splitView={false}
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between p-3 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <p className="font-sans text-xs text-gray-500">
                  {noteContent.length} characters • Auto-saved every 2s
                </p>
              </div>
              
              <button
                onClick={handleClear}
                disabled={!noteExists}
                className="font-sans text-xs text-red-600 hover:text-red-700 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Clear notes
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

