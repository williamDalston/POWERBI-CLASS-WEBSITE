'use client'

import { useState, useEffect, useRef } from 'react'
import CTAButton from '@/components/shared/CTAButton'
import LessonControls from './LessonControls'
import LessonNotes from './LessonNotes'
import { parseVideoUrl, buildYouTubeEmbedUrl, buildVimeoEmbedUrl, formatTimestamp, VideoInfo } from '@/lib/utils/videoUtils'
import { useVideoAnalytics } from '@/lib/hooks/useVideoAnalytics'
import { logger } from '@/lib/utils/logger'

interface VideoChapter {
  title: string
  timestamp: number // in seconds
}

interface Lesson {
  id: string
  title: string
  description: string
  videoUrl?: string
  duration?: number // in minutes
  videoChapters?: VideoChapter[]
  exerciseMaterials?: {
    name: string
    url: string
    type?: 'pdf' | 'dataset' | 'code' | 'cheatsheet' | 'pbix' | 'other'
  }[]
  content?: {
    concept?: string
    discussion?: string
    tables?: Array<{
      title: string
      headers: string[]
      rows: string[][]
    }>
    labs?: string[]
    keyPoints?: string[]
    insiderTips?: string[]
  }
  isCompleted?: boolean
}

interface LessonPlayerProps {
  lesson: Lesson
  onComplete?: (lessonId: string) => void
  onNext?: () => void
  onPrevious?: () => void
  nextLesson?: Lesson
  previousLesson?: Lesson
  isLoading?: boolean
}

export default function LessonPlayer({
  lesson,
  onComplete,
  onNext,
  onPrevious,
  nextLesson,
  previousLesson,
  isLoading = false,
}: LessonPlayerProps) {
  const [isCompleted, setIsCompleted] = useState(lesson.isCompleted || false)
  const [showCompletion, setShowCompletion] = useState(false)
  const [videoLoading, setVideoLoading] = useState(true)
  const [videoError, setVideoError] = useState(false)
  const [isCompleting, setIsCompleting] = useState(false)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [quality, setQuality] = useState('auto')
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null)
  const [embedUrl, setEmbedUrl] = useState<string>('')
  const [showChapters, setShowChapters] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const videoDurationSeconds = lesson.duration ? lesson.duration * 60 : undefined
  
  // Video analytics tracking
  const { watchProgress, startTracking, stopTracking, updateCurrentTime } = useVideoAnalytics(
    lesson.id,
    videoDurationSeconds
  )
  
  // Parse video URL and set up embed URL
  useEffect(() => {
    if (lesson.videoUrl) {
      const parsed = parseVideoUrl(lesson.videoUrl)
      if (parsed) {
        setVideoInfo(parsed)
        
        // Build embed URL with options
        if (parsed.platform === 'youtube') {
          const savedProgress = watchProgress?.lastPosition || 0
          setEmbedUrl(buildYouTubeEmbedUrl(parsed.videoId, {
            autoplay: false,
            start: savedProgress > 0 ? Math.floor(savedProgress) : undefined,
            controls: true,
            modestbranding: true,
          }))
        } else if (parsed.platform === 'vimeo') {
          const savedProgress = watchProgress?.lastPosition || 0
          setEmbedUrl(buildVimeoEmbedUrl(parsed.videoId, {
            autoplay: false,
            start: savedProgress > 0 ? Math.floor(savedProgress) : undefined,
          }))
        } else {
          setEmbedUrl(parsed.embedUrl)
        }
      } else {
        setVideoError(true)
      }
    }
  }, [lesson.videoUrl, watchProgress?.lastPosition])
  
  // Update embed URL when playback speed or quality changes
  useEffect(() => {
    if (videoInfo && videoInfo.platform === 'youtube') {
      // Note: YouTube API doesn't directly support speed in embed URL
      // Speed control would need YouTube IFrame API
      setEmbedUrl(buildYouTubeEmbedUrl(videoInfo.videoId, {
        autoplay: false,
        controls: true,
        modestbranding: true,
      }))
    }
  }, [playbackSpeed, quality, videoInfo])

  const handleMarkComplete = async () => {
    setIsCompleting(true)
    stopTracking()
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    setIsCompleted(true)
    setShowCompletion(true)
    setIsCompleting(false)
    onComplete?.(lesson.id)
    
    // Hide celebration after 4 seconds
    setTimeout(() => {
      setShowCompletion(false)
    }, 4000)
  }
  
  const handleAutoComplete = async () => {
    if (isCompleted) return
    
    setIsCompleted(true)
    setShowCompletion(true)
    onComplete?.(lesson.id)
    
    setTimeout(() => {
      setShowCompletion(false)
    }, 4000)
  }
  
  // Auto-complete lesson when video is 90%+ watched
  useEffect(() => {
    if (watchProgress?.completed && !isCompleted) {
      handleAutoComplete()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchProgress?.completed, isCompleted])
  
  const handleChapterClick = (timestamp: number) => {
    if (!videoInfo || !iframeRef.current) return
    
    // For YouTube, we need to use the YouTube IFrame API to seek
    // For now, rebuild the embed URL with start time
    if (videoInfo.platform === 'youtube') {
      setEmbedUrl(buildYouTubeEmbedUrl(videoInfo.videoId, {
        autoplay: true,
        start: Math.floor(timestamp),
        controls: true,
        modestbranding: true,
      }))
    } else if (videoInfo.platform === 'vimeo') {
      setEmbedUrl(buildVimeoEmbedUrl(videoInfo.videoId, {
        autoplay: true,
        start: Math.floor(timestamp),
      }))
    }
    
    setShowChapters(false)
  }
  
  const handlePictureInPicture = () => {
    // Picture-in-picture is not supported for iframes, use native video element if available
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture().catch((err) => {
        logger.error(new Error('Exit picture-in-picture failed'), { error: err })
      })
    } else if (iframeRef.current) {
      logger.warn('Picture-in-picture is not supported for iframe video players')
    }
  }
  
  const getResourceIcon = (type?: string) => {
    switch (type) {
      case 'pdf':
        return (
          <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        )
      case 'dataset':
        return (
          <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
        )
      case 'code':
        return (
          <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )
      case 'cheatsheet':
        return (
          <svg className="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>
        )
      default:
        return (
          <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
    }
  }

  const handleVideoLoad = () => {
    setVideoLoading(false)
    setVideoError(false)
  }

  const handleVideoError = () => {
    setVideoLoading(false)
    setVideoError(true)
  }

  const formatDuration = (minutes?: number) => {
    if (!minutes) return ''
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
        <div className="aspect-video bg-gray-200" />
        <div className="p-6 space-y-4">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-10 bg-gray-200 rounded w-1/2" />
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in">
      {/* Video Player Section */}
      <div className="relative bg-black aspect-video group">
        {embedUrl && !videoError ? (
          <>
            {videoLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p className="font-sans text-white text-sm">Loading video...</p>
                </div>
              </div>
            )}
            <iframe
              ref={iframeRef}
              src={embedUrl}
              className={`w-full h-full ${videoLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title={lesson.title}
              onLoad={() => {
                handleVideoLoad()
                startTracking()
              }}
              onError={handleVideoError}
            />
            
            {/* Video Controls Overlay */}
            {videoInfo && (
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                {/* Chapters Button */}
                {lesson.videoChapters && lesson.videoChapters.length > 0 && (
                  <button
                    onClick={() => setShowChapters(!showChapters)}
                    className="px-3 py-2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-lg font-sans text-sm transition-colors flex items-center gap-2"
                    title="Chapters"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    Chapters
                  </button>
                )}
                
                {/* Picture-in-Picture Button */}
                {document.pictureInPictureEnabled && (
                  <button
                    onClick={handlePictureInPicture}
                    className="px-3 py-2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-lg font-sans text-sm transition-colors"
                    title="Picture-in-Picture"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </button>
                )}
              </div>
            )}
            
            {/* Watch Progress Indicator */}
            {watchProgress && watchProgress.completionPercentage > 0 && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                <div
                  className="h-full bg-accent transition-all duration-300"
                  style={{ width: `${watchProgress.completionPercentage}%` }}
                />
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-white">
            <div className="text-center p-8">
              {videoError ? (
                <>
                  <svg
                    className="h-16 w-16 mx-auto mb-4 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="font-sans text-red-400 mb-2">Video failed to load</p>
                  <button
                    onClick={() => {
                      setVideoError(false)
                      setVideoLoading(true)
                    }}
                    className="font-sans text-sm text-white underline hover:text-gray-300"
                  >
                    Try again
                  </button>
                </>
              ) : (
                <>
                  <svg
                    className="h-16 w-16 mx-auto mb-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="font-sans text-gray-400">Video Player</p>
                  {lesson.duration && (
                    <p className="font-sans text-sm text-gray-500 mt-2">
                      Duration: {formatDuration(lesson.duration)}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Lesson Info */}
      <div className="p-6">
        {/* Title and Duration */}
        <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
          <h2 className="font-serif text-2xl text-primary-900 pr-4 flex-1 min-w-0">
            {lesson.title}
          </h2>
          <div className="flex items-center gap-4 flex-wrap">
            {lesson.duration && (
              <span className="font-sans text-sm text-gray-500 whitespace-nowrap">
                {formatDuration(lesson.duration)}
              </span>
            )}
            {watchProgress && watchProgress.completionPercentage > 0 && (
              <span className="font-sans text-sm text-gray-500 whitespace-nowrap">
                {Math.round(watchProgress.completionPercentage)}% watched
              </span>
            )}
            <LessonControls
              currentSpeed={playbackSpeed}
              currentQuality={quality}
              onSpeedChange={setPlaybackSpeed}
              onQualityChange={setQuality}
            />
          </div>
        </div>
        
        {/* Video Chapters Menu */}
        {showChapters && lesson.videoChapters && lesson.videoChapters.length > 0 && (
          <div className="mb-4 p-4 bg-neutral-50 rounded-lg border border-gray-200">
            <h3 className="font-sans font-semibold text-gray-900 mb-3">Video Chapters</h3>
            <ul className="space-y-2">
              {lesson.videoChapters.map((chapter, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleChapterClick(chapter.timestamp)}
                    className="w-full text-left px-3 py-2 rounded hover:bg-white transition-colors flex items-center justify-between group"
                  >
                    <span className="font-sans text-sm text-gray-700 group-hover:text-accent">
                      {chapter.title}
                    </span>
                    <span className="font-sans text-xs text-gray-500">
                      {formatTimestamp(chapter.timestamp)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Description */}
        <p className="font-sans text-gray-700 mb-6 leading-relaxed">
          {lesson.description}
        </p>

        {/* Rich Content */}
        {lesson.content && (
          <div className="space-y-6 mb-6">
            {/* Concept */}
            {lesson.content.concept && (
              <div className="p-5 bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-r-lg shadow-sm">
                <h3 className="font-sans font-semibold text-blue-900 mb-3 flex items-center gap-2 text-lg">
                  <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Key Concept
                </h3>
                <p className="font-sans text-blue-800 leading-relaxed text-base">{lesson.content.concept}</p>
              </div>
            )}

            {/* Discussion */}
            {lesson.content.discussion && (
              <div className="p-5 bg-neutral-50 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-sans font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Discussion
                </h3>
                <p className="font-sans text-gray-700 leading-relaxed whitespace-pre-wrap text-base">{lesson.content.discussion}</p>
              </div>
            )}

            {/* Tables */}
            {lesson.content.tables && lesson.content.tables.length > 0 && (
              <div className="space-y-4">
                {lesson.content.tables.map((table, idx) => (
                  <div key={idx} className="overflow-x-auto rounded-lg border border-gray-200">
                    <h3 className="font-sans font-semibold text-gray-900 px-4 py-3 border-b border-gray-200 bg-neutral-50">
                      {table.title}
                    </h3>
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                        <tr>
                          {table.headers.map((header, hIdx) => (
                            <th key={hIdx} className="px-4 py-3 text-left font-sans text-xs font-semibold text-gray-900 uppercase tracking-wider">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-blue-50 transition-colors duration-150">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="px-4 py-3 font-sans text-sm text-gray-700">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            )}

            {/* Labs */}
            {lesson.content.labs && lesson.content.labs.length > 0 && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-sans font-semibold text-green-900 mb-3 flex items-center gap-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  Hands-On Lab
                </h3>
                <ol className="space-y-2">
                  {lesson.content.labs.map((lab, idx) => (
                    <li key={idx} className="font-sans text-green-800 flex items-start gap-2">
                      <span className="font-semibold text-green-700 mt-0.5">{idx + 1}.</span>
                      <span>{lab}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Key Points */}
            {lesson.content.keyPoints && lesson.content.keyPoints.length > 0 && (
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <h3 className="font-sans font-semibold text-purple-900 mb-3 flex items-center gap-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Key Points
                </h3>
                <ul className="space-y-2">
                  {lesson.content.keyPoints.map((point, idx) => (
                    <li key={idx} className="font-sans text-purple-800 flex items-start gap-2">
                      <svg className="h-5 w-5 flex-shrink-0 text-purple-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Insider Tips */}
            {lesson.content.insiderTips && lesson.content.insiderTips.length > 0 && (
              <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg shadow-sm">
                <h3 className="font-sans font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  💡 Industry Insider Tips
                </h3>
                <ul className="space-y-3">
                  {lesson.content.insiderTips.map((tip, idx) => (
                    <li key={idx} className="font-sans text-amber-900 flex items-start gap-3 p-3 bg-white/60 rounded-lg backdrop-blur-sm hover:bg-white transition-colors">
                      <svg className="h-5 w-5 flex-shrink-0 text-amber-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Exercise Materials / Downloadable Resources */}
        {lesson.exerciseMaterials && lesson.exerciseMaterials.length > 0 && (
          <div className="mb-6 p-4 bg-neutral-50 rounded-lg border border-gray-200">
            <h3 className="font-sans font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Downloadable Resources
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {lesson.exerciseMaterials.map((material, index) => (
                <a
                  key={index}
                  href={material.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-accent hover:shadow-md transition-all group"
                  download
                >
                  <div className="flex-shrink-0">
                    {getResourceIcon(material.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-sm font-medium text-gray-900 group-hover:text-accent truncate">
                      {material.name}
                    </p>
                    {material.type && (
                      <p className="font-sans text-xs text-gray-500 capitalize">
                        {material.type === 'pbix' ? 'Power BI File' : material.type}
                      </p>
                    )}
                  </div>
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {!isCompleted ? (
            <CTAButton
              onClick={handleMarkComplete}
              className="flex-1"
              disabled={isCompleting}
            >
              {isCompleting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Completing...
                </span>
              ) : (
                'Mark as Complete'
              )}
            </CTAButton>
          ) : (
            <div className="flex-1 flex items-center justify-center gap-2 p-3 bg-green-50 text-green-800 rounded-lg font-sans font-semibold border border-green-200">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Completed
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Previous Button - Always visible if handler exists */}
            {onPrevious && (
              <button
                onClick={onPrevious}
                disabled={!previousLesson}
                className={`flex items-center justify-center gap-2 px-4 py-2.5 border rounded-lg font-sans font-medium transition-all ${
                  previousLesson
                    ? 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-accent hover:text-accent'
                    : 'border-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                }`}
                title={previousLesson ? previousLesson.title : 'No previous lesson'}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Previous</span>
                {previousLesson && (
                  <span className="hidden sm:inline text-xs text-gray-500 truncate max-w-[120px]">
                    {previousLesson.title}
                  </span>
                )}
              </button>
            )}
            
            {/* Next Button */}
            {onNext && (
              <CTAButton
                onClick={onNext}
                variant="secondary"
                className="flex-1 flex items-center justify-center gap-2"
                disabled={!nextLesson}
              >
                <span>Next Lesson</span>
                {nextLesson && (
                  <span className="hidden sm:inline text-xs opacity-90 truncate max-w-[120px]">
                    {nextLesson.title}
                  </span>
                )}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </CTAButton>
            )}
          </div>
          
          {/* Keyboard Shortcut Hint */}
          <p className="text-xs font-sans text-gray-500 text-center mt-2">
            Use <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">←</kbd> / <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">→</kbd> arrow keys or <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-xs">Esc</kbd> to return to dashboard
          </p>
        </div>

        {/* Completion Celebration */}
        {showCompletion && (
          <div className="mt-4 p-4 bg-accent bg-opacity-10 border border-accent border-opacity-30 rounded-lg animate-fade-in">
            <p className="font-sans text-center text-accent font-semibold flex items-center justify-center gap-2">
              <span className="text-2xl animate-bounce">🎉</span>
              <span>Great job! You've completed this lesson. Keep going!</span>
            </p>
          </div>
        )}
      </div>

      {/* Lesson Notes */}
      <div className="mt-6">
        <LessonNotes lessonId={lesson.id} />
      </div>
    </div>
  )
}

