'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface StreakCalendarProps {
  className?: string
  days?: number // Number of days to show (default 30)
  streakData?: Array<{ date: string; active: boolean }>
}

export default function StreakCalendar({
  className = '',
  days = 30,
  streakData,
}: StreakCalendarProps) {
  // Generate calendar data from streak data or create empty calendar
  const calendarDays = useMemo(() => {
    if (streakData && streakData.length > 0) {
      return streakData.slice(-days)
    }

    // Generate empty calendar for last N days
    const today = new Date()
    const result: Array<{ date: string; active: boolean; day: number }> = []

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]
      result.push({
        date: dateStr,
        active: false,
        day: date.getDate(),
      })
    }

    return result
  }, [streakData, days])

  // Calculate streak stats
  const stats = useMemo(() => {
    const activeDays = calendarDays.filter(d => d.active).length
    const currentStreak = calculateCurrentStreak(calendarDays)
    const longestStreak = calculateLongestStreak(calendarDays)

    return {
      activeDays,
      currentStreak,
      longestStreak,
      percentage: Math.round((activeDays / days) * 100),
    }
  }, [calendarDays, days])

  // Calculate current consecutive streak
  function calculateCurrentStreak(
    days: Array<{ active: boolean }>
  ): number {
    let streak = 0
    for (let i = days.length - 1; i >= 0; i--) {
      if (days[i].active) {
        streak++
      } else {
        break
      }
    }
    return streak
  }

  // Calculate longest streak
  function calculateLongestStreak(
    days: Array<{ active: boolean }>
  ): number {
    let maxStreak = 0
    let currentStreak = 0

    for (const day of days) {
      if (day.active) {
        currentStreak++
        maxStreak = Math.max(maxStreak, currentStreak)
      } else {
        currentStreak = 0
      }
    }

    return maxStreak
  }

  // Get intensity class based on activity
  const getIntensityClass = (active: boolean, index: number) => {
    if (!active) return 'bg-gray-100'
    
    // Vary intensity based on position (recent = brighter)
    const intensity = Math.min(1, (days - index) / 7)
    if (intensity > 0.8) return 'bg-green-500'
    if (intensity > 0.6) return 'bg-green-400'
    if (intensity > 0.4) return 'bg-green-300'
    return 'bg-green-200'
  }

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-4 ${className}`}>
      <div className="mb-4">
        <h3 className="font-sans font-semibold text-gray-900 mb-2">Study Streak</h3>
        <div className="flex items-center gap-4 text-sm">
          <div>
            <span className="text-gray-500 font-sans">Current:</span>
            <span className="font-bold text-accent ml-2 font-sans">
              {stats.currentStreak} {stats.currentStreak === 1 ? 'day' : 'days'} 🔥
            </span>
          </div>
          <div>
            <span className="text-gray-500 font-sans">Longest:</span>
            <span className="font-semibold text-gray-700 ml-2 font-sans">
              {stats.longestStreak} {stats.longestStreak === 1 ? 'day' : 'days'}
            </span>
          </div>
          <div>
            <span className="text-gray-500 font-sans">Active:</span>
            <span className="font-semibold text-gray-700 ml-2 font-sans">
              {stats.activeDays}/{days}
            </span>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="mb-4">
        <div className="grid grid-cols-7 gap-1 sm:gap-2">
          {calendarDays.map((day, index) => {
            const isToday =
              day.date === new Date().toISOString().split('T')[0]
            const dateObj = new Date(day.date)
            const dayLabel = dateObj.getDate()

            return (
              <motion.div
                key={day.date}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.01 }}
                className={`aspect-square rounded flex flex-col items-center justify-center relative group cursor-pointer ${
                  getIntensityClass(day.active, index)
                } ${isToday ? 'ring-2 ring-accent ring-offset-2' : ''}`}
                title={`${dateObj.toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                })} - ${day.active ? 'Active' : 'No activity'}`}
              >
                <span
                  className={`text-xs font-sans ${
                    day.active ? 'text-white font-semibold' : 'text-gray-400'
                  }`}
                >
                  {dayLabel}
                </span>
                {isToday && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full" />
                )}

                {/* Tooltip on hover */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                  <div className="bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap font-sans">
                    {dateObj.toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                    })}
                    <br />
                    {day.active ? '✅ Studied' : '⭕ No activity'}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between mt-3 text-xs text-gray-500 font-sans">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-gray-100" />
            <span>Less</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-green-200" />
              <span>1 day</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-green-400" />
              <span>1 week</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-green-500" />
              <span>Recent</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>More</span>
            <div className="w-3 h-3 rounded bg-green-500" />
          </div>
        </div>
      </div>

      {/* Streak Motivation */}
      {stats.currentStreak > 0 && stats.currentStreak < 7 && (
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 text-center">
          <p className="text-sm font-sans text-gray-700">
            {stats.currentStreak === 1
              ? "Great start! Keep it going! 🔥"
              : `You're on a ${stats.currentStreak}-day streak! ${7 - stats.currentStreak} more days until a Perfect Week! 💪`}
          </p>
        </div>
      )}

      {stats.currentStreak >= 7 && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
          <p className="text-sm font-semibold font-sans text-green-800">
            🎉 Perfect Week Achieved! You're unstoppable! 🔥
          </p>
        </div>
      )}

      {stats.currentStreak === 0 && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
          <p className="text-sm font-sans text-gray-600">
            Start your streak today! Complete a lesson to begin. 🏆
          </p>
        </div>
      )}
    </div>
  )
}





