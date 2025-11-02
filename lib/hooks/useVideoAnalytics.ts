'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

export interface VideoWatchProgress {
  lessonId: string
  watchTime: number // total seconds watched
  lastPosition: number // last watched position in seconds
  completionPercentage: number // 0-100
  completed: boolean
  lastWatched: Date
  replayCount: number
}

const COMPLETION_THRESHOLD = 90 // 90% watched = completed

/**
 * Hook to track video watching analytics
 * Tracks watch time, completion, and replay count
 */
export function useVideoAnalytics(lessonId: string, videoDuration?: number) {
  const [watchProgress, setWatchProgress] = useState<VideoWatchProgress | null>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const watchIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const lastSaveTimeRef = useRef<number>(0)
  const isPlayingRef = useRef(false)
  
  // Load existing progress from localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    try {
      const saved = localStorage.getItem(`videoProgress_${lessonId}`)
      if (saved) {
        const progress = JSON.parse(saved) as VideoWatchProgress
        // Parse date string back to Date object
        progress.lastWatched = new Date(progress.lastWatched)
        setWatchProgress(progress)
        setCurrentTime(progress.lastPosition)
      } else {
        // Initialize new progress
        const newProgress: VideoWatchProgress = {
          lessonId,
          watchTime: 0,
          lastPosition: 0,
          completionPercentage: 0,
          completed: false,
          lastWatched: new Date(),
          replayCount: 0,
        }
        setWatchProgress(newProgress)
      }
    } catch (err) {
      // Initialize new progress on error
      const newProgress: VideoWatchProgress = {
        lessonId,
        watchTime: 0,
        lastPosition: 0,
        completionPercentage: 0,
        completed: false,
        lastWatched: new Date(),
        replayCount: 0,
      }
      setWatchProgress(newProgress)
    }
  }, [lessonId])
  
  // Save progress to localStorage (throttled)
  const saveProgress = useCallback((progress: VideoWatchProgress) => {
    if (typeof window === 'undefined') return
    
    const now = Date.now()
    // Only save every 5 seconds to avoid excessive localStorage writes
    if (now - lastSaveTimeRef.current < 5000 && !progress.completed) {
      return
    }
    
    try {
      localStorage.setItem(`videoProgress_${lessonId}`, JSON.stringify(progress))
      lastSaveTimeRef.current = now
    } catch (err) {
      // Silently fail - progress will be saved on next successful update
    }
  }, [lessonId])
  
  // Update current time from video player
  const updateCurrentTime = useCallback((time: number) => {
    setCurrentTime(time)
    
    setWatchProgress(prev => {
      if (!prev || !videoDuration) return prev
      
      // Check if this is a replay (time went backwards significantly)
      if (time < prev.lastPosition - 10 && time > 0) {
        return {
          ...prev,
          replayCount: prev.replayCount + 1,
          lastPosition: time,
          lastWatched: new Date(),
        }
      }
      
      // Update progress
      const newProgress: VideoWatchProgress = {
        ...prev,
        lastPosition: time,
        lastWatched: new Date(),
      }
      
      // Calculate completion percentage
      if (videoDuration > 0) {
        newProgress.completionPercentage = Math.min(100, (time / videoDuration) * 100)
        
        // Mark as completed if threshold reached
        if (!newProgress.completed && newProgress.completionPercentage >= COMPLETION_THRESHOLD) {
          newProgress.completed = true
        }
      }
      
      return newProgress
    })
  }, [videoDuration])
  
  // Start tracking watch time
  const startTracking = useCallback(() => {
    if (isPlayingRef.current) return
    isPlayingRef.current = true
    
    // Track watch time every second
    watchIntervalRef.current = setInterval(() => {
      if (isPlayingRef.current) {
        setWatchProgress(prev => {
          if (!prev) return prev
          
          const newProgress: VideoWatchProgress = {
            ...prev,
            watchTime: prev.watchTime + 1,
            lastWatched: new Date(),
          }
          
          // Update completion if we have duration
          if (videoDuration && videoDuration > 0) {
            newProgress.completionPercentage = Math.min(
              100,
              ((newProgress.watchTime + 1) / videoDuration) * 100
            )
            
            if (!newProgress.completed && newProgress.completionPercentage >= COMPLETION_THRESHOLD) {
              newProgress.completed = true
            }
          }
          
          saveProgress(newProgress)
          return newProgress
        })
      }
    }, 1000)
  }, [videoDuration, saveProgress])
  
  // Stop tracking watch time
  const stopTracking = useCallback(() => {
    isPlayingRef.current = false
    if (watchIntervalRef.current) {
      clearInterval(watchIntervalRef.current)
      watchIntervalRef.current = null
    }
    
    // Save final progress
    setWatchProgress(prev => {
      if (prev) {
        saveProgress(prev)
      }
      return prev
    })
  }, [saveProgress])
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (watchIntervalRef.current) {
        clearInterval(watchIntervalRef.current)
      }
      // Save final progress
      setWatchProgress(prev => {
        if (prev) {
          saveProgress(prev)
        }
        return prev
      })
    }
  }, [saveProgress])
  
  // Save progress whenever it changes significantly
  useEffect(() => {
    if (watchProgress) {
      saveProgress(watchProgress)
    }
  }, [watchProgress?.completed, watchProgress?.completionPercentage]) // Only save on important changes
  
  return {
    watchProgress,
    currentTime,
    updateCurrentTime,
    startTracking,
    stopTracking,
    isTracking: isPlayingRef.current,
  }
}

/**
 * Get all video analytics for a user
 */
export function getAllVideoAnalytics(): Record<string, VideoWatchProgress> {
  if (typeof window === 'undefined') return {}
  
  const analytics: Record<string, VideoWatchProgress> = {}
  
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key?.startsWith('videoProgress_')) {
        const lessonId = key.replace('videoProgress_', '')
        const data = localStorage.getItem(key)
        if (data) {
          analytics[lessonId] = JSON.parse(data) as VideoWatchProgress
        }
      }
    }
  } catch (err) {
    // Return empty object on error
  }
  
  return analytics
}


