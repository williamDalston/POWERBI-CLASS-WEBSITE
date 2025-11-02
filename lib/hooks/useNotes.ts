import { useState, useEffect, useCallback } from 'react'
import { logger } from '@/lib/utils/logger'

export interface Note {
  id: string
  lessonId: string
  content: string
  tags: string[]
  createdAt: string
  updatedAt: string
}

export interface NotesStats {
  totalNotes: number
  totalCharacters: number
  lastUpdated: string | null
}

const NOTES_STORAGE_KEY = 'powerbi-lesson-notes'
const AUTO_SAVE_DELAY = 2000 // 2 seconds

export function useNotes(lessonId?: string) {
  const [notes, setNotes] = useState<Note[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [stats, setStats] = useState<NotesStats>({
    totalNotes: 0,
    totalCharacters: 0,
    lastUpdated: null,
  })

  // Helper to update stats - defined early so it can be used in useEffect
  const updateStats = useCallback((notesList: Note[]) => {
    const totalCharacters = notesList.reduce((sum, note) => sum + note.content.length, 0)
    const lastUpdated = notesList.length > 0 
      ? notesList.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())[0].updatedAt
      : null
    
    setStats({
      totalNotes: notesList.length,
      totalCharacters,
      lastUpdated,
    })
  }, [])

  // Load all notes from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(NOTES_STORAGE_KEY)
        if (stored) {
          const parsedNotes = JSON.parse(stored)
          setNotes(parsedNotes)
          setIsLoading(false)
          updateStats(parsedNotes)
        } else {
          setIsLoading(false)
        }
      } catch (error) {
        logger.error(new Error('Error loading notes'), { error })
        setIsLoading(false)
      }
    }
  }, [updateStats])

  // Get current lesson's note
  const getCurrentNote = useCallback((lessonId: string): Note | undefined => {
    return notes.find(note => note.lessonId === lessonId)
  }, [notes])

  // Get current lesson's note content
  const getCurrentNoteContent = useCallback((lessonId: string): string => {
    const note = getCurrentNote(lessonId)
    return note?.content || ''
  }, [getCurrentNote])

  // Save note for a lesson (auto-save with debounce)
  const saveNote = useCallback((lessonId: string, content: string) => {
    if (typeof window === 'undefined') return

    setIsSaving(true)

    // Debounce the actual save
    const timeoutId = setTimeout(() => {
      const note: Note = {
        id: `${lessonId}-note`,
        lessonId,
        content,
        tags: extractTags(content),
        createdAt: getCurrentNote(lessonId)?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      // Update notes array
      const updatedNotes = [...notes]
      const existingIndex = updatedNotes.findIndex(n => n.lessonId === lessonId)
      
      if (existingIndex >= 0) {
        updatedNotes[existingIndex] = note
      } else {
        updatedNotes.push(note)
      }

      setNotes(updatedNotes)
      updateStats(updatedNotes)

      // Persist to localStorage
      try {
        localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(updatedNotes))
      } catch (error) {
        logger.error(new Error('Error saving notes'), { error })
      }

      setIsSaving(false)
    }, AUTO_SAVE_DELAY)

    return () => clearTimeout(timeoutId)
  }, [notes, getCurrentNote, updateStats])

  // Delete note for a lesson
  const deleteNote = useCallback((lessonId: string) => {
    if (typeof window === 'undefined') return

    const updatedNotes = notes.filter(note => note.lessonId !== lessonId)
    setNotes(updatedNotes)
    updateStats(updatedNotes)

    try {
      localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(updatedNotes))
    } catch (error) {
      logger.error(new Error('Error deleting note'), { error })
    }
  }, [notes, updateStats])

  // Search notes
  const searchNotes = useCallback((query: string): Note[] => {
    if (!query.trim()) return notes

    const lowerQuery = query.toLowerCase()
    return notes.filter(note => 
      note.content.toLowerCase().includes(lowerQuery) ||
      note.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    )
  }, [notes])

  // Get notes by tag
  const getNotesByTag = useCallback((tag: string): Note[] => {
    return notes.filter(note => note.tags.includes(tag))
  }, [notes])

  // Get all unique tags
  const getAllTags = useCallback((): string[] => {
    const tagSet = new Set<string>()
    notes.forEach(note => note.tags.forEach(tag => tagSet.add(tag)))
    return Array.from(tagSet).sort()
  }, [notes])

  // Get notes for a specific lesson
  const getNotesForLesson = lessonId ? getCurrentNote(lessonId) : undefined

  return {
    notes,
    currentNote: getNotesForLesson,
    isLoading,
    isSaving,
    stats,
    getCurrentNote,
    getCurrentNoteContent,
    saveNote,
    deleteNote,
    searchNotes,
    getNotesByTag,
    getAllTags,
  }
}

// Helper function to extract tags from content (e.g., #tag)
function extractTags(content: string): string[] {
  const tagRegex = /#(\w+)/g
  const matches = content.match(tagRegex)
  return matches ? matches.map(match => match.substring(1)) : []
}

// Export note to markdown
export function exportNoteToMarkdown(note: Note, lessonTitle: string): string {
  const created = new Date(note.createdAt).toLocaleDateString()
  const updated = new Date(note.updatedAt).toLocaleDateString()
  
  return `# ${lessonTitle}

Created: ${created}  
Updated: ${updated}  
Tags: ${note.tags.map(t => `#${t}`).join(', ')}

---

${note.content}
`
}

// Export all notes to markdown
export function exportAllNotesToMarkdown(notes: Note[], lessonTitles: Record<string, string>): string {
  return notes.map(note => {
    const title = lessonTitles[note.lessonId] || `Lesson ${note.lessonId}`
    return exportNoteToMarkdown(note, title)
  }).join('\n\n---\n\n')
}


