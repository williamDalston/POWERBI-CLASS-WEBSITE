/**
 * Playlists and Bookmarks Management
 */

export interface Playlist {
  id: string
  name: string
  description?: string
  lessonIds: string[]
  createdAt: string
  updatedAt: string
}

const PLAYLISTS_KEY = 'userPlaylists'
const BOOKMARKS_KEY = 'bookmarkedLessons'

/**
 * Get all playlists
 */
export function getAllPlaylists(): Playlist[] {
  if (typeof window === 'undefined') return []
  
  try {
    const playlists = localStorage.getItem(PLAYLISTS_KEY)
    return playlists ? JSON.parse(playlists) as Playlist[] : []
  } catch (err) {
    console.error('Failed to load playlists:', err)
    return []
  }
}

/**
 * Create a new playlist
 */
export function createPlaylist(name: string, description?: string): Playlist {
  const playlist: Playlist = {
    id: `playlist-${Date.now()}`,
    name,
    description,
    lessonIds: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  const playlists = getAllPlaylists()
  playlists.push(playlist)
  savePlaylists(playlists)

  return playlist
}

/**
 * Update a playlist
 */
export function updatePlaylist(
  playlistId: string,
  updates: Partial<Pick<Playlist, 'name' | 'description' | 'lessonIds'>>
): Playlist | null {
  const playlists = getAllPlaylists()
  const index = playlists.findIndex(p => p.id === playlistId)
  
  if (index === -1) return null

  playlists[index] = {
    ...playlists[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  }

  savePlaylists(playlists)
  return playlists[index]
}

/**
 * Delete a playlist
 */
export function deletePlaylist(playlistId: string): boolean {
  const playlists = getAllPlaylists()
  const filtered = playlists.filter(p => p.id !== playlistId)
  
  if (filtered.length === playlists.length) return false

  savePlaylists(filtered)
  return true
}

/**
 * Add lesson to playlist
 */
export function addLessonToPlaylist(playlistId: string, lessonId: string): boolean {
  const playlists = getAllPlaylists()
  const playlist = playlists.find(p => p.id === playlistId)
  
  if (!playlist) return false

  if (!playlist.lessonIds.includes(lessonId)) {
    playlist.lessonIds.push(lessonId)
    playlist.updatedAt = new Date().toISOString()
    savePlaylists(playlists)
  }

  return true
}

/**
 * Remove lesson from playlist
 */
export function removeLessonFromPlaylist(playlistId: string, lessonId: string): boolean {
  const playlists = getAllPlaylists()
  const playlist = playlists.find(p => p.id === playlistId)
  
  if (!playlist) return false

  playlist.lessonIds = playlist.lessonIds.filter(id => id !== lessonId)
  playlist.updatedAt = new Date().toISOString()
  savePlaylists(playlists)

  return true
}

/**
 * Get bookmarked lessons
 */
export function getBookmarks(): string[] {
  if (typeof window === 'undefined') return []
  
  try {
    const bookmarks = localStorage.getItem(BOOKMARKS_KEY)
    return bookmarks ? JSON.parse(bookmarks) as string[] : []
  } catch (err) {
    console.error('Failed to load bookmarks:', err)
    return []
  }
}

/**
 * Add bookmark
 */
export function addBookmark(lessonId: string): void {
  const bookmarks = getBookmarks()
  if (!bookmarks.includes(lessonId)) {
    bookmarks.push(lessonId)
    saveBookmarks(bookmarks)
  }
}

/**
 * Remove bookmark
 */
export function removeBookmark(lessonId: string): void {
  const bookmarks = getBookmarks().filter(id => id !== lessonId)
  saveBookmarks(bookmarks)
}

/**
 * Check if lesson is bookmarked
 */
export function isBookmarked(lessonId: string): boolean {
  return getBookmarks().includes(lessonId)
}

/**
 * Toggle bookmark
 */
export function toggleBookmark(lessonId: string): boolean {
  if (isBookmarked(lessonId)) {
    removeBookmark(lessonId)
    return false
  } else {
    addBookmark(lessonId)
    return true
  }
}

/**
 * Save playlists to localStorage
 */
function savePlaylists(playlists: Playlist[]): void {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(PLAYLISTS_KEY, JSON.stringify(playlists))
  } catch (err) {
    console.error('Failed to save playlists:', err)
  }
}

/**
 * Save bookmarks to localStorage
 */
function saveBookmarks(bookmarks: string[]): void {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks))
  } catch (err) {
    console.error('Failed to save bookmarks:', err)
  }
}

