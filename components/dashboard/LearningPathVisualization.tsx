'use client'

import { useState, useEffect } from 'react'
import LearningPathTimeline from './LearningPathTimeline'
import LearningPathGraph from './LearningPathGraph'
import ProgressHeatmap from './ProgressHeatmap'
import { calculateMilestones, getAllLessonsWithPosition, Milestone } from '@/lib/utils/pathVisualizationUtils'
import { motion, AnimatePresence } from 'framer-motion'

interface LearningPathVisualizationProps {
  className?: string
}

type ViewType = 'timeline' | 'graph' | 'heatmap' | 'milestones'

export default function LearningPathVisualization({
  className = '',
}: LearningPathVisualizationProps) {
  const [activeView, setActiveView] = useState<ViewType>('timeline')
  const [milestones, setMilestones] = useState<Milestone[]>([])

  // Load milestones on mount and update when lessons change
  useEffect(() => {
    const updateMilestones = () => {
      const lessons = getAllLessonsWithPosition()
      const allMilestones = calculateMilestones(lessons)
      setMilestones(allMilestones)
    }
    
    updateMilestones()
    
    // Refresh periodically to catch localStorage updates
    // Note: storage event only fires for changes in OTHER tabs
    if (typeof window !== 'undefined') {
      const interval = setInterval(updateMilestones, 3000) // Check every 3 seconds
      return () => clearInterval(interval)
    }
  }, [])

  const completedMilestones = milestones.filter((m) => m.isCompleted).length
  const totalMilestones = milestones.length

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-serif text-3xl text-primary-900 mb-2">
              Interactive Learning Path
            </h2>
            <p className="font-sans text-gray-600">
              Explore your journey through the Power BI Mastery course
            </p>
          </div>
          {totalMilestones > 0 && (
            <div className="text-right">
              <div className="font-serif text-2xl font-bold text-accent">
                {completedMilestones}/{totalMilestones}
              </div>
              <div className="font-sans text-sm text-gray-600">Milestones</div>
            </div>
          )}
        </div>

        {/* View Tabs */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'timeline', label: '📅 Timeline', description: 'Linear view of your progress' },
            { id: 'graph', label: '🕸️ Graph', description: 'Interactive node network' },
            { id: 'heatmap', label: '🔥 Heatmap', description: 'Daily activity calendar' },
            { id: 'milestones', label: '🏆 Milestones', description: 'Achievements & goals' },
          ].map((view) => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id as ViewType)}
              className={`px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all ${
                activeView === view.id
                  ? 'bg-primary-900 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              title={view.description}
            >
              {view.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeView === 'timeline' && <LearningPathTimeline />}
          {activeView === 'graph' && <LearningPathGraph />}
          {activeView === 'heatmap' && <ProgressHeatmap />}
          {activeView === 'milestones' && (
            <MilestonesView milestones={milestones} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function MilestonesView({ milestones }: { milestones: Milestone[] }) {
  if (milestones.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-12">
        <div className="text-center">
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="font-serif text-2xl text-primary-900 mb-2">
            No Milestones Yet
          </h3>
          <p className="font-sans text-gray-600">
            Start your learning journey to unlock milestones!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="font-serif text-2xl text-primary-900 mb-6">
        Course Milestones
      </h3>

      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-6 rounded-lg border-2 ${
              milestone.isCompleted
                ? 'bg-accent bg-opacity-10 border-accent'
                : milestone.isUnlocked
                ? 'bg-white border-gray-300'
                : 'bg-gray-50 border-gray-200 opacity-60'
            }`}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div
                className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                  milestone.isCompleted
                    ? 'bg-accent text-white'
                    : milestone.isUnlocked
                    ? 'bg-gray-300 text-gray-600'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {milestone.type === 'part' ? '📚' : milestone.type === 'module' ? '📖' : '⭐'}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-serif text-xl text-primary-900">
                    {milestone.title}
                  </h4>
                  {milestone.isCompleted && (
                    <span className="px-2 py-1 bg-accent text-white text-xs font-sans rounded">
                      Completed
                    </span>
                  )}
                  {!milestone.isUnlocked && (
                    <span className="px-2 py-1 bg-gray-300 text-gray-600 text-xs font-sans rounded">
                      Locked
                    </span>
                  )}
                </div>
                <p className="font-sans text-gray-600 mb-3">
                  {milestone.description}
                </p>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-full ${
                      milestone.isCompleted ? 'bg-accent' : 'bg-gray-400'
                    }`}
                    initial={{ width: 0 }}
                    animate={{
                      width: milestone.isCompleted ? '100%' : milestone.isUnlocked ? '50%' : '0%',
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                </div>

                {/* Dates */}
                {(milestone.dateUnlocked || milestone.dateCompleted) && (
                  <div className="mt-3 flex flex-wrap gap-4 text-xs font-sans text-gray-500">
                    {milestone.dateUnlocked && (
                      <span>
                        Unlocked:{' '}
                        {new Date(milestone.dateUnlocked).toLocaleDateString()}
                      </span>
                    )}
                    {milestone.dateCompleted && (
                      <span>
                        Completed:{' '}
                        {new Date(milestone.dateCompleted).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Position indicator */}
              <div className="flex-shrink-0 text-right">
                <div className="font-serif text-2xl font-bold text-gray-300">
                  {Math.round(milestone.position)}%
                </div>
                <div className="font-sans text-xs text-gray-500">course</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 p-6 bg-primary-50 border border-primary-200 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="font-serif text-3xl font-bold text-primary-900">
              {milestones.filter((m) => m.isCompleted).length}
            </div>
            <div className="font-sans text-sm text-gray-600 mt-1">
              Completed
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-accent">
              {milestones.filter((m) => m.isUnlocked && !m.isCompleted).length}
            </div>
            <div className="font-sans text-sm text-gray-600 mt-1">
              In Progress
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-gray-400">
              {milestones.filter((m) => !m.isUnlocked).length}
            </div>
            <div className="font-sans text-sm text-gray-600 mt-1">Locked</div>
          </div>
        </div>
      </div>
    </div>
  )
}
