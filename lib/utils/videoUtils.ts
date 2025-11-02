/**
 * Video URL parsing and embedding utilities
 * Supports YouTube, Vimeo, Wistia, and direct video URLs
 */

export type VideoPlatform = 'youtube' | 'vimeo' | 'wistia' | 'direct' | 'unknown'

export interface VideoInfo {
  platform: VideoPlatform
  videoId: string
  embedUrl: string
  originalUrl: string
}

export interface VideoChapter {
  title: string
  timestamp: number // in seconds
}

/**
 * Parse YouTube URL and extract video ID
 */
function parseYouTubeUrl(url: string): VideoInfo | null {
  // YouTube URL patterns:
  // https://www.youtube.com/watch?v=VIDEO_ID
  // https://youtu.be/VIDEO_ID
  // https://www.youtube.com/embed/VIDEO_ID
  
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/,
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      const videoId = match[1]
      return {
        platform: 'youtube',
        videoId,
        embedUrl: `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`,
        originalUrl: url,
      }
    }
  }
  
  return null
}

/**
 * Parse Vimeo URL and extract video ID
 */
function parseVimeoUrl(url: string): VideoInfo | null {
  // Vimeo URL patterns:
  // https://vimeo.com/VIDEO_ID
  // https://player.vimeo.com/video/VIDEO_ID
  
  const patterns = [
    /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/,
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      const videoId = match[1]
      return {
        platform: 'vimeo',
        videoId,
        embedUrl: `https://player.vimeo.com/video/${videoId}?api=1`,
        originalUrl: url,
      }
    }
  }
  
  return null
}

/**
 * Parse Wistia URL and extract video ID
 */
function parseWistiaUrl(url: string): VideoInfo | null {
  // Wistia URL patterns:
  // https://company.wistia.com/medias/VIDEO_ID
  // https://fast.wistia.net/embed/iframe/VIDEO_ID
  
  const patterns = [
    /wistia\.(?:com|net).*?\/(?:medias|embed\/iframe)\/([a-zA-Z0-9]+)/,
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      const videoId = match[1]
      return {
        platform: 'wistia',
        videoId,
        embedUrl: `https://fast.wistia.net/embed/iframe/${videoId}`,
        originalUrl: url,
      }
    }
  }
  
  return null
}

/**
 * Check if URL is a direct video file
 */
function isDirectVideo(url: string): boolean {
  const videoExtensions = /\.(mp4|webm|ogg|mov|avi|wmv|flv|mkv)(\?.*)?$/i
  return videoExtensions.test(url)
}

/**
 * Parse video URL and return platform information
 */
export function parseVideoUrl(url: string): VideoInfo | null {
  if (!url) return null
  
  // Try YouTube first (most common)
  const youtube = parseYouTubeUrl(url)
  if (youtube) return youtube
  
  // Try Vimeo
  const vimeo = parseVimeoUrl(url)
  if (vimeo) return vimeo
  
  // Try Wistia
  const wistia = parseWistiaUrl(url)
  if (wistia) return wistia
  
  // Check if direct video
  if (isDirectVideo(url)) {
    return {
      platform: 'direct',
      videoId: url,
      embedUrl: url,
      originalUrl: url,
    }
  }
  
  return null
}

/**
 * Build YouTube embed URL with additional parameters
 */
export function buildYouTubeEmbedUrl(
  videoId: string,
  options: {
    autoplay?: boolean
    start?: number
    controls?: boolean
    modestbranding?: boolean
    rel?: boolean
    speed?: number
  } = {}
): string {
  const params = new URLSearchParams()
  
  params.set('enablejsapi', '1')
  params.set('origin', typeof window !== 'undefined' ? window.location.origin : '')
  
  if (options.autoplay) params.set('autoplay', '1')
  if (options.start) params.set('start', options.start.toString())
  if (options.controls !== undefined) params.set('controls', options.controls ? '1' : '0')
  if (options.modestbranding) params.set('modestbranding', '1')
  if (options.rel === false) params.set('rel', '0')
  
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`
}

/**
 * Build Vimeo embed URL with additional parameters
 */
export function buildVimeoEmbedUrl(
  videoId: string,
  options: {
    autoplay?: boolean
    start?: number
    speed?: number
  } = {}
): string {
  const params = new URLSearchParams()
  
  params.set('api', '1')
  
  if (options.autoplay) params.set('autoplay', '1')
  if (options.start) params.set('#t', options.start.toString())
  
  return `https://player.vimeo.com/video/${videoId}?${params.toString()}`
}

/**
 * Format timestamp (seconds) to HH:MM:SS or MM:SS
 */
export function formatTimestamp(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = Math.floor(seconds % 60)
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }
  
  return `${minutes}:${secs.toString().padStart(2, '0')}`
}

/**
 * Parse timestamp string (MM:SS or HH:MM:SS) to seconds
 */
export function parseTimestamp(timestamp: string): number {
  const parts = timestamp.split(':').map(Number).reverse()
  let seconds = 0
  
  if (parts[0] !== undefined) seconds += parts[0]
  if (parts[1] !== undefined) seconds += parts[1] * 60
  if (parts[2] !== undefined) seconds += parts[2] * 3600
  
  return seconds
}


