'use client'

import { useState, useEffect } from 'react'
import { parseVideoUrl, buildYouTubeEmbedUrl, buildVimeoEmbedUrl } from '@/lib/utils/videoUtils'

interface VideoSectionProps {
  videoUrl?: string
  hasVideo?: boolean
}

export default function VideoSection({ videoUrl, hasVideo = false }: VideoSectionProps) {
  const [open, setOpen] = useState(false)
  const [embedUrl, setEmbedUrl] = useState<string>('')

  // Parse video URL when component mounts and video is available
  useEffect(() => {
    if (videoUrl && hasVideo) {
      const parsed = parseVideoUrl(videoUrl)
      if (parsed) {
        if (parsed.platform === 'youtube') {
          setEmbedUrl(buildYouTubeEmbedUrl(parsed.videoId, {
            autoplay: false,
            controls: true,
            modestbranding: true,
          }))
        } else if (parsed.platform === 'vimeo') {
          setEmbedUrl(buildVimeoEmbedUrl(parsed.videoId, {
            autoplay: false,
          }))
        } else {
          setEmbedUrl(parsed.embedUrl)
        }
      }
    }
  }, [videoUrl, hasVideo])

  if (!hasVideo || !videoUrl) {
    return (
      <div className="rounded-xl border bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
        <strong className="font-medium">Video coming soon.</strong> All content below is complete—start reading now.
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <button
        onClick={() => setOpen(v => !v)}
        className="rounded-lg border border-neutral-300 px-3 py-2 text-sm hover:bg-neutral-50 transition-colors"
      >
        {open ? 'Hide video' : 'Show video'}
      </button>
      {open && embedUrl && (
        <div className="aspect-video w-full overflow-hidden rounded-xl bg-black/5">
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="Lesson video"
          />
        </div>
      )}
    </div>
  )
}

