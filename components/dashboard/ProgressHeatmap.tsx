'use client'

import { useEffect, useState } from 'react'
import { generateHeatmapData, calculateStreak, HeatmapDay } from '@/lib/utils/pathVisualizationUtils'
import { LessonNode, getAllLessonsWithPosition } from '@/lib/utils/pathVisualizationUtils'

interface ProgressHeatmapProps {
  className?: string
}

export default function ProgressHeatmap({ className = '' }: ProgressHeatmapProps) {
  const [heatmapData, setHeatmapData] = useState<HeatmapDay[]>([])
  const [streak, setStreak] = useState(0)
  const [hoveredDay, setHoveredDay] = useState<HeatmapDay | null>(null)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const updateData = () => {
      const lessons = getAllLessonsWithPosition()
      const data = generateHeatmapData(lessons)
      setHeatmapData(data)
      setStreak(calculateStreak())
    }
    
    updateData()
    
    // Refresh periodically to catch localStorage updates
    const interval = setInterval(updateData, 3000)
    return () => clearInterval(interval)
  }, [])

  // Get intensity color based on count
  const getIntensityColor = (count: number): string => {
    if (count === 0) return 'bg-gray-100'
    if (count === 1) return 'bg-accent bg-opacity-40'
    if (count === 2) return 'bg-accent bg-opacity-60'
    if (count >= 3 && count < 5) return 'bg-accent bg-opacity-80'
    return 'bg-accent'
  }

  // Filter data for selected year
  const filteredData = heatmapData.filter((day) => {
    const year = new Date(day.date).getFullYear()
    return year === selectedYear
  })

  // Group by week for rendering
  const weeks: HeatmapDay[][] = []
  let currentWeek: HeatmapDay[] = []
  let lastWeekday = -1

  filteredData.forEach((day) => {
    const date = new Date(day.date)
    const weekday = date.getDay()

    // Start new week if needed
    if (weekday < lastWeekday || (lastWeekday === 6 && weekday === 0)) {
      if (currentWeek.length > 0) {
        weeks.push(currentWeek)
        currentWeek = []
      }
    }

    // Fill in missing days at start of week
    if (currentWeek.length === 0 && weekday > 0) {
      for (let i = 0; i < weekday; i++) {
        currentWeek.push({
          date: '',
          count: 0,
          lessons: [],
        })
      }
    }

    currentWeek.push(day)
    lastWeekday = weekday
  })

  if (currentWeek.length > 0) {
    weeks.push(currentWeek)
  }

  const maxCount = Math.max(...filteredData.map((d) => d.count), 1)

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-serif text-2xl text-primary-900 mb-1">
            Activity Heatmap
          </h3>
          <p className="font-sans text-sm text-gray-600">
            Track your daily learning activity
          </p>
        </div>
        <div className="text-right">
          <div className="font-serif text-3xl font-bold text-accent">
            {streak}
          </div>
          <div className="font-sans text-xs text-gray-600">
            day{streak !== 1 ? 's' : ''} streak 🔥
          </div>
        </div>
      </div>

      {/* Year selector */}
      <div className="mb-4 flex items-center gap-2">
        <label className="font-sans text-sm text-gray-700">Year:</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        >
          {Array.from({ length: 3 }, (_, i) => {
            const year = new Date().getFullYear() - i
            return (
              <option key={year} value={year}>
                {year}
              </option>
            )
          })}
        </select>
      </div>

      {/* Heatmap */}
      <div className="overflow-x-auto">
        <div className="flex gap-1 min-w-max">
          {/* Week labels */}
          <div className="flex flex-col gap-1 mr-2">
            <div className="h-3"></div>
            {['Mon', 'Wed', 'Fri'].map((day) => (
              <div
                key={day}
                className="h-3 font-sans text-xs text-gray-500 flex items-center"
                style={{ height: '12px' }}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="flex gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => {
                  if (day.date === '') {
                    return (
                      <div
                        key={`empty-${dayIndex}`}
                        className="w-3 h-3 bg-transparent"
                        style={{ width: '12px', height: '12px' }}
                      />
                    )
                  }

                  const date = new Date(day.date)
                  const isToday =
                    date.toDateString() === new Date().toDateString()

                  return (
                    <div
                      key={day.date}
                      className={`w-3 h-3 rounded-sm cursor-pointer transition-all hover:scale-125 hover:ring-2 hover:ring-accent ${
                        isToday ? 'ring-2 ring-primary-900' : ''
                      } ${getIntensityColor(day.count)}`}
                      style={{ width: '12px', height: '12px' }}
                      onMouseEnter={() => setHoveredDay(day)}
                      onMouseLeave={() => setHoveredDay(null)}
                      title={`${date.toLocaleDateString()}: ${day.count} lesson${
                        day.count !== 1 ? 's' : ''
                      } completed`}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <span className="font-sans text-xs text-gray-600">Less:</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-gray-100 rounded-sm"></div>
            <div className="w-3 h-3 bg-accent bg-opacity-40 rounded-sm"></div>
            <div className="w-3 h-3 bg-accent bg-opacity-60 rounded-sm"></div>
            <div className="w-3 h-3 bg-accent bg-opacity-80 rounded-sm"></div>
            <div className="w-3 h-3 bg-accent rounded-sm"></div>
          </div>
          <span className="font-sans text-xs text-gray-600">More</span>
        </div>

        {hoveredDay && (
          <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-sans">
            <div className="font-semibold">
              {new Date(hoveredDay.date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <div className="text-gray-300">
              {hoveredDay.count} lesson{hoveredDay.count !== 1 ? 's' : ''}{' '}
              completed
            </div>
          </div>
        )}
      </div>

      {/* Stats summary */}
      <div className="mt-6 grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
        <div className="text-center">
          <div className="font-serif text-2xl font-bold text-primary-900">
            {filteredData.reduce((sum, day) => sum + day.count, 0)}
          </div>
          <div className="font-sans text-xs text-gray-600">
            Lessons this year
          </div>
        </div>
        <div className="text-center">
          <div className="font-serif text-2xl font-bold text-accent">
            {filteredData.filter((day) => day.count > 0).length}
          </div>
          <div className="font-sans text-xs text-gray-600">Active days</div>
        </div>
        <div className="text-center">
          <div className="font-serif text-2xl font-bold text-secondary-900">
            {maxCount}
          </div>
          <div className="font-sans text-xs text-gray-600">
            Max per day
          </div>
        </div>
      </div>
    </div>
  )
}
