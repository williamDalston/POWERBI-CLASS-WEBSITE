'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import {
  getAllLessonsWithPosition,
  calculateMilestones,
  LessonNode,
  Milestone,
} from '@/lib/utils/pathVisualizationUtils'
import { motion } from 'framer-motion'

interface LearningPathTimelineProps {
  className?: string
}

export default function LearningPathTimeline({
  className = '',
}: LearningPathTimelineProps) {
  const router = useRouter()
  const [lessons, setLessons] = useState<LessonNode[]>([])
  const [milestones, setMilestones] = useState<Milestone[]>([])
  const [viewMode, setViewMode] = useState<'horizontal' | 'vertical'>(
    'horizontal'
  )
  const [zoom, setZoom] = useState(1)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateData = () => {
      const allLessons = getAllLessonsWithPosition()
      const allMilestones = calculateMilestones(allLessons)
      setLessons(allLessons)
      setMilestones(allMilestones)
    }
    
    updateData()
    
    // Refresh periodically to catch localStorage updates
    const interval = setInterval(updateData, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleLessonClick = (lessonId: string) => {
    router.push(`/dashboard/lessons/${lessonId}`)
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 2))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5))
  }

  const handleResetZoom = () => {
    setZoom(1)
  }

  const completedCount = lessons.filter((l) => l.isCompleted).length
  const totalCount = lessons.length
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-serif text-2xl text-primary-900 mb-1">
            Learning Path Timeline
          </h3>
          <p className="font-sans text-sm text-gray-600">
            Visualize your journey through the course
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              setViewMode((prev) =>
                prev === 'horizontal' ? 'vertical' : 'horizontal'
              )
            }
            className="px-3 py-1.5 text-sm font-sans border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            title="Toggle view mode"
          >
            {viewMode === 'horizontal' ? '⬍ Vertical' : '➜ Horizontal'}
          </button>
          <div className="flex items-center gap-1 border border-gray-300 rounded-md">
            <button
              onClick={handleZoomOut}
              className="px-2 py-1.5 text-sm hover:bg-gray-50 transition-colors"
              title="Zoom out"
            >
              −
            </button>
            <button
              onClick={handleResetZoom}
              className="px-2 py-1.5 text-sm font-sans border-x border-gray-300 hover:bg-gray-50 transition-colors"
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              onClick={handleZoomIn}
              className="px-2 py-1.5 text-sm hover:bg-gray-50 transition-colors"
              title="Zoom in"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-sans text-sm font-medium text-gray-700">
            Overall Progress
          </span>
          <span className="font-sans text-sm font-semibold text-primary-900">
            {completedCount} / {totalCount} lessons
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <motion.div
            className="bg-gradient-to-r from-accent to-accent-dark h-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Timeline */}
      <div
        ref={timelineRef}
        className={`overflow-auto border border-gray-200 rounded-lg p-6 bg-gray-50 ${
          viewMode === 'horizontal' ? 'h-96' : 'h-[600px]'
        }`}
        style={{ transform: `scale(${zoom})`, transformOrigin: 'top left' }}
      >
        {viewMode === 'horizontal' ? (
          <HorizontalTimeline
            lessons={lessons}
            milestones={milestones}
            onLessonClick={handleLessonClick}
          />
        ) : (
          <VerticalTimeline
            lessons={lessons}
            milestones={milestones}
            onLessonClick={handleLessonClick}
          />
        )}
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-sans">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-accent rounded-full"></div>
          <span className="text-gray-700">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full border-2 border-gray-400"></div>
          <span className="text-gray-700">Not Started</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-400 rounded-full border-2 border-yellow-600"></div>
          <span className="text-gray-700">Milestone</span>
        </div>
      </div>
    </div>
  )
}

function HorizontalTimeline({
  lessons,
  milestones,
  onLessonClick,
}: {
  lessons: LessonNode[]
  milestones: Milestone[]
  onLessonClick: (id: string) => void
}) {
  return (
    <div className="relative" style={{ width: `${lessons.length * 80}px` }}>
      {/* Timeline line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2"></div>

      {/* Milestones */}
      {milestones.map((milestone, index) => {
        const position = (milestone.position / 100) * (lessons.length * 80)
        return (
          <div
            key={milestone.id}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
            style={{ left: `${position}px` }}
          >
            <div
              className={`w-8 h-8 rounded-full border-4 ${
                milestone.isCompleted
                  ? 'bg-yellow-400 border-yellow-600'
                  : milestone.isUnlocked
                  ? 'bg-yellow-200 border-yellow-400'
                  : 'bg-gray-200 border-gray-400'
              } flex items-center justify-center cursor-pointer hover:scale-125 transition-transform`}
              title={`${milestone.title}: ${milestone.description}`}
            >
              <span className="text-xs font-bold">
                {milestone.type === 'part' ? 'P' : milestone.type === 'module' ? 'M' : '★'}
              </span>
            </div>
          </div>
        )
      })}

      {/* Lessons */}
      {lessons.map((lesson, index) => {
        const position = index * 80
        const nextLesson = lessons[index + 1]
        const isLast = index === lessons.length - 1

        return (
          <div
            key={lesson.id}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 group"
            style={{ left: `${position}px` }}
          >
            <motion.div
              className={`w-6 h-6 rounded-full cursor-pointer transition-all ${
                lesson.isCompleted
                  ? 'bg-accent ring-4 ring-accent ring-opacity-30'
                  : 'bg-gray-300 ring-4 ring-gray-300 ring-opacity-30'
              } hover:scale-150 hover:ring-opacity-50`}
              whileHover={{ scale: 1.5 }}
              onClick={() => onLessonClick(lesson.id)}
              title={`${lesson.title} - Module ${lesson.moduleNumber}, Lesson ${lesson.lessonNumber}`}
            />

            {/* Lesson label on hover */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              <div className="bg-gray-900 text-white px-2 py-1 rounded text-xs font-sans whitespace-nowrap max-w-[200px] truncate">
                {lesson.title}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function VerticalTimeline({
  lessons,
  milestones,
  onLessonClick,
}: {
  lessons: LessonNode[]
  milestones: Milestone[]
  onLessonClick: (id: string) => void
}) {
  // Group lessons by module
  const lessonsByModule = new Map<number, LessonNode[]>()
  lessons.forEach((lesson) => {
    if (!lessonsByModule.has(lesson.moduleNumber)) {
      lessonsByModule.set(lesson.moduleNumber, [])
    }
    lessonsByModule.get(lesson.moduleNumber)!.push(lesson)
  })

  return (
    <div className="max-w-4xl mx-auto">
      {Array.from(lessonsByModule.entries())
        .sort((a, b) => a[0] - b[0])
        .map(([moduleNum, moduleLessons]) => (
          <div key={moduleNum} className="mb-8">
            {/* Module header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-900 text-white rounded-full flex items-center justify-center font-serif font-bold">
                {moduleNum}
              </div>
              <div className="flex-1 h-px bg-gray-300"></div>
              <h4 className="font-serif text-lg text-primary-900">
                Module {moduleNum}
              </h4>
            </div>

            {/* Lessons */}
            <div className="relative ml-4 pl-8 border-l-2 border-gray-300">
              {moduleLessons.map((lesson, index) => (
                <motion.div
                  key={lesson.id}
                  className="relative mb-6 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[33px] top-1">
                    <motion.div
                      className={`w-6 h-6 rounded-full cursor-pointer transition-all ${
                        lesson.isCompleted
                          ? 'bg-accent ring-4 ring-accent ring-opacity-30'
                          : 'bg-gray-300 ring-4 ring-gray-300 ring-opacity-30'
                      } hover:scale-125 hover:ring-opacity-50`}
                      whileHover={{ scale: 1.25 }}
                      onClick={() => onLessonClick(lesson.id)}
                    />
                  </div>

                  {/* Lesson card */}
                  <div
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      lesson.isCompleted
                        ? 'bg-accent bg-opacity-10 border-accent'
                        : 'bg-white border-gray-200 hover:border-gray-400'
                    }`}
                    onClick={() => onLessonClick(lesson.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-sans text-xs text-gray-500">
                            Lesson {lesson.lessonNumber}
                          </span>
                          {lesson.difficulty && (
                            <span
                              className={`px-2 py-0.5 text-xs font-sans rounded ${
                                lesson.difficulty === 'beginner'
                                  ? 'bg-green-100 text-green-800'
                                  : lesson.difficulty === 'intermediate'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {lesson.difficulty}
                            </span>
                          )}
                        </div>
                        <h5 className="font-serif text-base text-primary-900">
                          {lesson.title}
                        </h5>
                        {lesson.duration && (
                          <p className="font-sans text-xs text-gray-600 mt-1">
                            {lesson.duration} min
                          </p>
                        )}
                      </div>
                      {lesson.isCompleted && (
                        <div className="flex-shrink-0 ml-2">
                          <svg
                            className="w-5 h-5 text-accent"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
    </div>
  )
}
