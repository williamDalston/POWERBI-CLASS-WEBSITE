'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  getAllPlaylists,
  createPlaylist,
  deletePlaylist,
  addLessonToPlaylist,
  removeLessonFromPlaylist,
  getBookmarks,
  toggleBookmark,
  isBookmarked,
  type Playlist,
} from '@/lib/utils/playlists'
import { getLessonById } from '@/lib/data/courseData'

interface PlaylistsPanelProps {
  lessonId?: string
  className?: string
}

export default function PlaylistsPanel({ lessonId, className = '' }: PlaylistsPanelProps) {
  const [playlists, setPlaylists] = useState<Playlist[]>([])
  const [bookmarks, setBookmarks] = useState<string[]>([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newPlaylistName, setNewPlaylistName] = useState('')
  const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null)

  useEffect(() => {
    loadPlaylists()
    loadBookmarks()
  }, [])

  const loadPlaylists = () => {
    setPlaylists(getAllPlaylists())
  }

  const loadBookmarks = () => {
    setBookmarks(getBookmarks())
  }

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim()) {
      createPlaylist(newPlaylistName.trim())
      setNewPlaylistName('')
      setShowCreateForm(false)
      loadPlaylists()
    }
  }

  const handleDeletePlaylist = (playlistId: string) => {
    if (confirm('Are you sure you want to delete this playlist?')) {
      deletePlaylist(playlistId)
      loadPlaylists()
    }
  }

  const handleToggleBookmark = () => {
    if (lessonId) {
      toggleBookmark(lessonId)
      loadBookmarks()
    }
  }

  const handleAddToPlaylist = (playlistId: string) => {
    if (lessonId) {
      addLessonToPlaylist(playlistId, lessonId)
      loadPlaylists()
    }
  }

  const handleRemoveFromPlaylist = (playlistId: string, lessonId: string) => {
    removeLessonFromPlaylist(playlistId, lessonId)
    loadPlaylists()
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Bookmarks Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-sans font-semibold text-gray-900">Bookmarks</h3>
          {lessonId && (
            <button
              onClick={handleToggleBookmark}
              className={`p-2 rounded-lg transition-colors ${
                isBookmarked(lessonId)
                  ? 'bg-accent text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              title={isBookmarked(lessonId) ? 'Remove bookmark' : 'Add bookmark'}
            >
              <svg
                className="h-5 w-5"
                fill={isBookmarked(lessonId) ? 'currentColor' : 'none'}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          )}
        </div>

        {bookmarks.length === 0 ? (
          <p className="text-sm text-gray-500 font-sans">
            No bookmarked lessons yet. Click the bookmark icon on any lesson to save it.
          </p>
        ) : (
          <div className="space-y-2">
            {bookmarks.slice(0, 5).map((bookmarkId) => {
              const lesson = getLessonById(bookmarkId)
              if (!lesson) return null
              return (
                <Link
                  key={bookmarkId}
                  href={`/dashboard/lessons/${bookmarkId}`}
                  className="block p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <p className="font-sans text-sm font-medium text-gray-900 truncate">
                    {lesson.title}
                  </p>
                  <p className="font-sans text-xs text-gray-500">
                    Module {lesson.moduleNumber}, Lesson {lesson.lessonNumber}
                  </p>
                </Link>
              )
            })}
            {bookmarks.length > 5 && (
              <p className="text-xs text-gray-500 font-sans">
                +{bookmarks.length - 5} more bookmarks
              </p>
            )}
          </div>
        )}
      </div>

      {/* Playlists Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-sans font-semibold text-gray-900">Playlists</h3>
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="text-sm text-accent hover:text-accent-dark font-sans font-medium"
          >
            {showCreateForm ? 'Cancel' : '+ New Playlist'}
          </button>
        </div>

        {showCreateForm && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <input
              type="text"
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
              placeholder="Playlist name..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent font-sans mb-2"
              onKeyPress={(e) => e.key === 'Enter' && handleCreatePlaylist()}
            />
            <button
              onClick={handleCreatePlaylist}
              className="w-full px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-dark transition-colors font-sans"
            >
              Create Playlist
            </button>
          </div>
        )}

        {playlists.length === 0 ? (
          <p className="text-sm text-gray-500 font-sans">
            No playlists yet. Create a custom learning path!
          </p>
        ) : (
          <div className="space-y-3">
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="border border-gray-200 rounded-lg p-3"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-sans font-medium text-gray-900">
                    {playlist.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    {lessonId && (
                      <button
                        onClick={() => handleAddToPlaylist(playlist.id)}
                        className="text-xs text-accent hover:text-accent-dark font-sans"
                        title="Add current lesson to playlist"
                      >
                        + Add
                      </button>
                    )}
                    <button
                      onClick={() => handleDeletePlaylist(playlist.id)}
                      className="text-xs text-red-600 hover:text-red-700 font-sans"
                      title="Delete playlist"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {playlist.description && (
                  <p className="text-xs text-gray-500 font-sans mb-2">
                    {playlist.description}
                  </p>
                )}

                <p className="text-xs text-gray-500 font-sans mb-2">
                  {playlist.lessonIds.length} lessons
                </p>

                {playlist.lessonIds.length > 0 && (
                  <div className="space-y-1 max-h-32 overflow-y-auto">
                    {playlist.lessonIds.slice(0, 5).map((lid) => {
                      const lesson = getLessonById(lid)
                      if (!lesson) return null
                      return (
                        <div
                          key={lid}
                          className="flex items-center justify-between p-1 hover:bg-gray-50 rounded"
                        >
                          <Link
                            href={`/dashboard/lessons/${lid}`}
                            className="flex-1 font-sans text-xs text-gray-700 truncate"
                          >
                            {lesson.title}
                          </Link>
                          <button
                            onClick={() => handleRemoveFromPlaylist(playlist.id, lid)}
                            className="text-xs text-red-600 hover:text-red-700 ml-2"
                            title="Remove from playlist"
                          >
                            ×
                          </button>
                        </div>
                      )
                    })}
                    {playlist.lessonIds.length > 5 && (
                      <p className="text-xs text-gray-400 font-sans">
                        +{playlist.lessonIds.length - 5} more
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

