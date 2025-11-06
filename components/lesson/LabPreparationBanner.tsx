'use client'

import { Lesson } from '@/lib/data/courseData'
import { lessonNeedsPreparationMaterials } from '@/lib/utils/lessonContentUtils'
import { useState } from 'react'

interface LabPreparationBannerProps {
  lesson: Lesson
}

export function LabPreparationBanner({ lesson }: LabPreparationBannerProps) {
  const needsMaterials = lessonNeedsPreparationMaterials(lesson)
  
  if (!needsMaterials && lesson.exerciseMaterials && lesson.exerciseMaterials.length > 0) {
    return (
      <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
        <div className="flex items-start gap-3">
          <svg className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div className="flex-1">
            <h3 className="font-semibold text-blue-900 mb-1">📦 Download Exercise Files First</h3>
            <p className="text-sm text-blue-800 mb-3">
              Before starting the lab, download the required files from the <strong>Downloadable Resources</strong> section below.
            </p>
            <div className="flex flex-wrap gap-2">
              {lesson.exerciseMaterials?.map((material, idx) => (
                <div key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md border border-blue-200 text-sm">
                  {material.type === 'pdf' && (
                    <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  )}
                  {material.type === 'dataset' && (
                    <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  )}
                  <span className="font-medium">{material.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (needsMaterials) {
    return (
      <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
        <div className="flex items-start gap-3">
          <svg className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div className="flex-1">
            <h3 className="font-semibold text-amber-900 mb-1">⚠️ Exercise Materials Missing</h3>
            <p className="text-sm text-amber-800">
              This lab requires exercise files that are not yet available. Please contact the course administrator or check back later.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return null
}




