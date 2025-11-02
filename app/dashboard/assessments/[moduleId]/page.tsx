'use client'

import { useParams, useRouter } from 'next/navigation'
import Container from '@/components/shared/Container'
import QuizComponent from '@/components/quiz/QuizComponent'
import QuizResults from '@/components/quiz/QuizResults'
import { getQuizById } from '@/lib/data/quizQuestions'
import { useQuizAttempts } from '@/lib/hooks/useQuizAttempts'
import { useState } from 'react'
import { QuizAttempt } from '@/lib/data/quizQuestions'
import Link from 'next/link'

export default function AssessmentPage() {
  const params = useParams()
  const router = useRouter()
  const moduleId = params?.moduleId as string
  const { saveAttempt, getAttemptsStats } = useQuizAttempts()
  
  const [mode, setMode] = useState<'start' | 'quiz' | 'results'>('start')
  const [attempt, setAttempt] = useState<QuizAttempt | null>(null)

  // Get quiz for this module
  // Try both possible formats for module ID
  const quiz = getQuizById(`module-${moduleId}-assessment`) || getQuizById(`${moduleId}-assessment`)

  if (!quiz) {
    return (
      <Container maxWidth="4xl" className="py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Assessment Not Found</h2>
          <p className="text-gray-600 mb-6">
            No assessment available for this module yet.
          </p>
          <Link
            href="/dashboard"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>
      </Container>
    )
  }

  const stats = getAttemptsStats(quiz.id)

  const handleStartQuiz = () => {
    setMode('quiz')
  }

  const handleQuizComplete = (newAttempt: QuizAttempt) => {
    saveAttempt(newAttempt)
    setAttempt(newAttempt)
    setMode('results')
  }

  const handleReviewAnswers = () => {
    if (attempt) {
      setMode('quiz')
    }
  }

  const handleRetake = () => {
    setMode('quiz')
    setAttempt(null)
  }

  const handleBackToDashboard = () => {
    router.push('/dashboard')
  }

  return (
    <Container maxWidth="4xl" className="py-8">
      {mode === 'start' && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
            <h1 className="text-3xl font-bold mb-4">{quiz.title}</h1>
            <p className="text-lg text-blue-100">{quiz.description}</p>
          </div>

          <div className="p-8 space-y-6">
            {/* Quiz Info */}
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="font-semibold text-gray-900 mb-4">Assessment Details</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Questions:</span>
                  <span>{quiz.questions.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Time Limit:</span>
                  <span>{quiz.timeLimit || 'No limit'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Passing Score:</span>
                  <span>{quiz.passingScore || 'N/A'}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Allowed Attempts:</span>
                  <span>{quiz.allowRetake ? 'Unlimited' : 'Once'}</span>
                </div>
              </div>
            </div>

            {/* Previous Attempts */}
            {stats.attempts > 0 && (
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Your Performance</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{stats.attempts}</div>
                    <div className="text-sm text-gray-600">Attempts</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{stats.bestScore}%</div>
                    <div className="text-sm text-gray-600">Best Score</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{stats.avgScore}%</div>
                    <div className="text-sm text-gray-600">Average</div>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={handleStartQuiz}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                {stats.attempts > 0 ? 'Retake Assessment' : 'Start Assessment'}
              </button>
              <button
                onClick={handleBackToDashboard}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}

      {mode === 'quiz' && (
        <QuizComponent
          quiz={quiz}
          onComplete={handleQuizComplete}
          showResults={false}
          initialAttempt={undefined}
        />
      )}

      {mode === 'results' && attempt && (
        <>
          <QuizResults
            attempt={attempt}
            totalQuestions={quiz.questions.length}
            passingScore={quiz.passingScore}
            onRetake={handleRetake}
            onReview={handleReviewAnswers}
          />
          
          <div className="mt-6 text-center">
            <Link
              href="/dashboard"
              className="inline-block px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all"
            >
              Back to Dashboard
            </Link>
          </div>
        </>
      )}
    </Container>
  )
}

