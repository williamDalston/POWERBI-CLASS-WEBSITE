'use client'

import { useRouter } from 'next/navigation'
import Container from '@/components/shared/Container'
import QuizComponent from '@/components/quiz/QuizComponent'
import QuizResults from '@/components/quiz/QuizResults'
import { getQuizById } from '@/lib/data/quizQuestions'
import { useQuizAttempts } from '@/lib/hooks/useQuizAttempts'
import { useState } from 'react'
import { QuizAttempt } from '@/lib/data/quizQuestions'
import Link from 'next/link'

export default function PL300MockExamPage() {
  const router = useRouter()
  const { saveAttempt, getAttemptsStats } = useQuizAttempts()
  
  const [mode, setMode] = useState<'start' | 'quiz' | 'results'>('start')
  const [attempt, setAttempt] = useState<QuizAttempt | null>(null)

  // Get PL-300 mock exam
  const quiz = getQuizById('pl300-mock-exam')

  if (!quiz) {
    return (
      <Container maxWidth="4xl" className="py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mock Exam Not Found</h2>
          <p className="text-gray-600 mb-6">
            The PL-300 mock exam is not available.
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
    <Container maxWidth="7xl" className="py-8">
      {mode === 'start' && (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header with certification badge */}
          <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-blue-900 text-white p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
            </div>
            <div className="relative z-10">
              <div className="mb-4">
                <svg className="h-24 w-24 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-4">PL-300 Mock Exam</h1>
              <p className="text-xl text-blue-100 mb-2">Microsoft Power BI Data Analyst</p>
              <p className="text-lg text-blue-200">Certification Practice Exam</p>
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Important Notice */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-yellow-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Exam Conditions</h3>
                  <p className="text-gray-700">
                    This mock exam simulates the real PL-300 certification exam. Complete it in one sitting 
                    to test your readiness. Results help identify areas for further study.
                  </p>
                </div>
              </div>
            </div>

            {/* Exam Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Exam Specifications</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-medium">Questions:</span>
                    <span className="text-gray-900 font-semibold">{quiz.questions.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Time Limit:</span>
                    <span className="text-gray-900 font-semibold">{quiz.timeLimit} minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Passing Score:</span>
                    <span className="text-gray-900 font-semibold">{quiz.passingScore}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Attempts:</span>
                    <span className="text-gray-900 font-semibold">{quiz.allowRetake ? 'Unlimited' : 'Once'}</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Topics Covered</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Prepare Data (Power Query)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Model Data (DAX, Star Schema)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Visualize Data (Reports, Storytelling)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Deploy & Maintain
                  </li>
                </ul>
              </div>
            </div>

            {/* Previous Attempts */}
            {stats.attempts > 0 && (
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 border-2 border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Your Performance</h3>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">{stats.attempts}</div>
                    <div className="text-sm text-gray-600">Attempts</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-1">{stats.bestScore}%</div>
                    <div className="text-sm text-gray-600">Best Score</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-1">{stats.avgScore}%</div>
                    <div className="text-sm text-gray-600">Average</div>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleStartQuiz}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
              >
                {stats.attempts > 0 ? 'Retake Mock Exam' : 'Start Mock Exam'}
              </button>
              <button
                onClick={handleBackToDashboard}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
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

