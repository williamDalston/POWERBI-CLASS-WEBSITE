'use client'

import { useState } from 'react'
import { useQuizAttempts } from '@/lib/hooks/useQuizAttempts'
import {
  analyzeWeaknesses,
  analyzeModuleWeaknesses,
  analyzeTagWeaknesses,
  getRecommendedReview,
  checkCertificationReadiness,
  WeaknessAnalysis,
  ModuleWeakness,
  TagWeakness,
} from '@/lib/utils/weaknessAnalysis'
import Link from 'next/link'

export default function WeaknessDashboard() {
  const { getAllAttempts } = useQuizAttempts()
  const [activeTab, setActiveTab] = useState<'overview' | 'modules' | 'topics'>('overview')

  const allAttempts = getAllAttempts()
  const weaknesses = analyzeWeaknesses(allAttempts)
  const moduleWeaknesses = analyzeModuleWeaknesses(allAttempts)
  const tagWeaknesses = analyzeTagWeaknesses(allAttempts)
  const recommendations = getRecommendedReview(weaknesses, 5)
  const certificationReadiness = checkCertificationReadiness(allAttempts)

  if (allAttempts.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">📊</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">No Quiz Data Yet</h2>
        <p className="text-gray-600 mb-6">
          Complete some quizzes to see your learning analytics and identify areas for improvement.
        </p>
        <Link
          href="/dashboard"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go to Dashboard
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Analytics</h1>
        <p className="text-gray-600">
          Identify your strengths and weaknesses to focus your study efforts
        </p>
      </div>

      {/* Certification Readiness */}
      {certificationReadiness.score > 0 && (
        <div
          className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${
            certificationReadiness.ready
              ? 'border-green-500 bg-green-50'
              : 'border-orange-500 bg-orange-50'
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">PL-300 Certification Readiness</h2>
              <p className="text-gray-700 mb-2">{certificationReadiness.recommendation}</p>
              <p className="text-sm font-medium text-gray-600">
                Best Mock Exam Score: <span className="text-2xl font-bold">{certificationReadiness.score}%</span>
              </p>
              {certificationReadiness.weakAreas.length > 0 && (
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700 mb-1">Focus on:</p>
                  <div className="flex flex-wrap gap-2">
                    {certificationReadiness.weakAreas.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="text-5xl">{certificationReadiness.ready ? '✅' : '📚'}</div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-lg">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'overview'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('modules')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'modules'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              By Module
            </button>
            <button
              onClick={() => setActiveTab('topics')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'topics'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              By Topic
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="text-sm text-gray-600 mb-1">Total Questions Attempted</div>
                  <div className="text-3xl font-bold text-blue-900">
                    {weaknesses.reduce((sum, w) => sum + w.timesAttempted, 0)}
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <div className="text-sm text-gray-600 mb-1">Overall Success Rate</div>
                  <div className="text-3xl font-bold text-green-900">
                    {weaknesses.length > 0
                      ? Math.round(
                          weaknesses.reduce((sum, w) => sum + w.successRate, 0) / weaknesses.length
                        )
                      : 0}
                    %
                  </div>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                  <div className="text-sm text-gray-600 mb-1">Areas Needing Review</div>
                  <div className="text-3xl font-bold text-red-900">
                    {weaknesses.filter(w => w.successRate < 70).length}
                  </div>
                </div>
              </div>

              {/* Recommended Review */}
              {recommendations.length > 0 && (
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">📚 Recommended Review</h3>
                  <div className="space-y-3">
                    {recommendations.map((weakness, idx) => (
                      <div
                        key={weakness.questionId}
                        className="bg-white rounded-lg p-4 border border-orange-200"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-medium text-gray-600">#{idx + 1}</span>
                              {weakness.tags.length > 0 && (
                                <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">
                                  {weakness.tags[0]}
                                </span>
                              )}
                              {weakness.moduleId && (
                                <Link
                                  href={`/dashboard/assessments/${weakness.moduleId}`}
                                  className="text-xs text-blue-600 hover:underline"
                                >
                                  Module {weakness.moduleId}
                                </Link>
                              )}
                            </div>
                            <div className="text-sm text-gray-600">
                              Success Rate: <span className="font-bold text-red-600">{Math.round(weakness.successRate)}%</span>
                              {' • '}
                              Attempted: <span className="font-medium">{weakness.timesAttempted}x</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Modules Tab */}
          {activeTab === 'modules' && (
            <div className="space-y-4">
              {moduleWeaknesses.length > 0 ? (
                moduleWeaknesses.map(moduleWeakness => (
                  <div
                    key={moduleWeakness.moduleId}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">{moduleWeakness.moduleTitle}</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {moduleWeakness.weaknessCount} area{moduleWeakness.weaknessCount !== 1 ? 's' : ''} needing review
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          {Math.round(moduleWeakness.averageSuccessRate)}%
                        </div>
                        <div className="text-xs text-gray-600">Avg. Success</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-3 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          moduleWeakness.averageSuccessRate >= 80
                            ? 'bg-green-500'
                            : moduleWeakness.averageSuccessRate >= 70
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                        }`}
                        style={{ width: `${moduleWeakness.averageSuccessRate}%` }}
                      />
                    </div>

                    {moduleWeakness.weaknesses.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-xs font-medium text-gray-600 mb-2">Weak Areas:</p>
                        <div className="flex flex-wrap gap-2">
                          {moduleWeakness.weaknesses.slice(0, 5).map(weakness => (
                            <span
                              key={weakness.questionId}
                              className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs"
                            >
                              {weakness.tags[0] || 'General'} ({Math.round(weakness.successRate)}%)
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-4">
                      <Link
                        href={`/dashboard/assessments/${moduleWeakness.moduleId}`}
                        className="text-sm text-blue-600 hover:underline font-medium"
                      >
                        Retake Assessment →
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 text-center py-8">No module weaknesses detected. Great job! 🎉</p>
              )}
            </div>
          )}

          {/* Topics Tab */}
          {activeTab === 'topics' && (
            <div className="space-y-4">
              {tagWeaknesses.filter(t => t.successRate < 80).map(tagWeakness => (
                <div
                  key={tagWeakness.tag}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">{tagWeakness.tag}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {tagWeakness.totalAttempts} attempt{tagWeakness.totalAttempts !== 1 ? 's' : ''}
                      </p>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-2xl font-bold ${
                          tagWeakness.successRate >= 80
                            ? 'text-green-600'
                            : tagWeakness.successRate >= 70
                            ? 'text-yellow-600'
                            : 'text-red-600'
                        }`}
                      >
                        {Math.round(tagWeakness.successRate)}%
                      </div>
                      <div className="text-xs text-gray-600">Success Rate</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        tagWeakness.successRate >= 80
                          ? 'bg-green-500'
                          : tagWeakness.successRate >= 70
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${tagWeakness.successRate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
