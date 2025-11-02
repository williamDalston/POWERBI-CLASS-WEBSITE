'use client'

import { useState, useEffect } from 'react'
import ProgressCharts from './ProgressCharts'
import MasteryChart from './MasteryChart'
import { calculateAnalytics, getWeeklyActivity, predictCompletionDate, generatePersonalizedInsights } from '@/lib/utils/analytics'
import { useLessons } from '@/lib/hooks/useLessons'
import { AnalyticsData, PersonalizationInsight } from '@/lib/utils/analytics'

export default function AdvancedAnalytics() {
  const { lessons } = useLessons()
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [weeklyActivity, setWeeklyActivity] = useState<any[]>([])
  const [predictedCompletion, setPredictedCompletion] = useState<string>('')
  const [insights, setInsights] = useState<PersonalizationInsight[]>([])
  const [activeTab, setActiveTab] = useState<'overview' | 'mastery' | 'insights'>('overview')

  useEffect(() => {
    if (lessons.length > 0) {
      const analytics = calculateAnalytics(lessons)
      setAnalyticsData(analytics)
      
      const weekly = getWeeklyActivity(lessons)
      setWeeklyActivity(weekly)
      
      const completion = predictCompletionDate(lessons)
      setPredictedCompletion(completion)
      
      const personalizedInsights = generatePersonalizedInsights(lessons)
      setInsights(personalizedInsights)
    }
  }, [lessons])

  if (!analyticsData) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-12 border border-gray-200">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-900 mx-auto mb-4"></div>
          <p className="text-gray-600 font-sans">Loading your analytics...</p>
        </div>
      </div>
    )
  }

  const completedCount = lessons.filter((l) => l.isCompleted).length
  const totalCount = lessons.length
  const progressPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="font-serif text-3xl text-primary-900 mb-2">
          Your Learning Analytics
        </h2>
        <p className="font-sans text-gray-600">
          Track your progress, identify areas for improvement, and stay motivated
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-sans text-sm text-gray-600 mb-1">Progress</p>
              <p className="font-serif text-2xl font-bold text-primary-900">
                {progressPercentage}%
              </p>
            </div>
            <div className="p-3 bg-primary-100 rounded-lg">
              <svg className="h-6 w-6 text-primary-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-sans text-sm text-gray-600 mb-1">Lessons Completed</p>
              <p className="font-serif text-2xl font-bold text-accent">
                {completedCount}/{totalCount}
              </p>
            </div>
            <div className="p-3 bg-accent bg-opacity-20 rounded-lg">
              <svg className="h-6 w-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-sans text-sm text-gray-600 mb-1">Estimated Finish</p>
              <p className="font-serif text-lg font-bold text-secondary-900">
                {predictedCompletion || 'N/A'}
              </p>
            </div>
            <div className="p-3 bg-secondary-100 rounded-lg">
              <svg className="h-6 w-6 text-secondary-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-sans text-sm text-gray-600 mb-1">Active Insights</p>
              <p className="font-serif text-2xl font-bold text-purple-600">
                {insights.length}
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <svg className="h-6 w-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {[
              { id: 'overview', label: 'Overview', icon: '📊' },
              { id: 'mastery', label: 'Mastery', icon: '🎯' },
              { id: 'insights', label: 'Insights', icon: '💡' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`${
                  activeTab === tab.id
                    ? 'border-accent text-accent'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-sans font-medium text-sm flex items-center gap-2`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && analyticsData && (
            <ProgressCharts 
              analyticsData={analyticsData} 
              weeklyActivity={weeklyActivity} 
            />
          )}
          
          {activeTab === 'mastery' && analyticsData && (
            <MasteryChart analyticsData={analyticsData} />
          )}
          
          {activeTab === 'insights' && insights.length > 0 && (
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${
                    insight.type === 'achievement'
                      ? 'bg-green-50 border-green-500'
                      : insight.type === 'warning'
                      ? 'bg-yellow-50 border-yellow-500'
                      : insight.type === 'milestone'
                      ? 'bg-blue-50 border-blue-500'
                      : 'bg-purple-50 border-purple-500'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <p className="font-sans text-gray-900">{insight.message}</p>
                    {insight.action && (
                      <a
                        href={insight.action.href}
                        className="ml-4 flex-shrink-0 text-sm font-medium text-primary-900 hover:text-primary-700"
                      >
                        {insight.action.label} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'insights' && insights.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 font-sans">
                No insights at this time. Keep learning to unlock personalized recommendations!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Most Challenging Lessons */}
      {analyticsData.mostChallengingLessons.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="font-serif text-xl text-primary-900 mb-4">
            Most Challenging Lessons
          </h3>
          <div className="space-y-3">
            {analyticsData.mostChallengingLessons.map((lesson, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-1">
                  <p className="font-sans font-medium text-gray-900">
                    {lesson.lesson}
                  </p>
                  <p className="font-sans text-sm text-gray-600 mt-1">
                    Average time: {Math.round(lesson.avgTime)} minutes
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-2xl font-bold text-primary-900">
                    {index + 1}
                  </p>
                  <p className="font-sans text-xs text-gray-500">rank</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
