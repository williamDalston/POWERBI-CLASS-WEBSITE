'use client'

import { QuizAttempt } from '@/lib/data/quizQuestions'
import CTAButton from '@/components/shared/CTAButton'

interface QuizResultsProps {
  attempt: QuizAttempt
  totalQuestions: number
  passingScore?: number
  onRetake?: () => void
  onReview?: () => void
}

export default function QuizResults({
  attempt,
  totalQuestions,
  passingScore,
  onRetake,
  onReview,
}: QuizResultsProps) {
  const formatTime = (startTime: number, endTime: number) => {
    const seconds = Math.floor((endTime - startTime) / 1000)
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`
  }

  const getPerformanceMessage = () => {
    if (!passingScore) return 'Quiz completed!'
    if (attempt.score >= passingScore)
      return 'Excellent work! You passed the assessment.'
    if (attempt.score >= passingScore - 10)
      return 'Almost there! Review the material and try again.'
    return 'Keep practicing! Review the lessons and try again.'
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div
        className={`p-8 text-center border-b-4 ${
          attempt.passed ? 'bg-green-50 border-green-500' : 'bg-orange-50 border-orange-500'
        }`}
      >
        <div className="text-7xl mb-4">{attempt.passed ? '🎉' : '📚'}</div>
        <h2 className="text-3xl font-bold mb-2">
          {attempt.passed ? 'Quiz Passed!' : 'Quiz Completed'}
        </h2>
        <p className="text-lg text-gray-700 mb-6">{getPerformanceMessage()}</p>
        
        <div className="flex items-center justify-center gap-8 mb-6">
          <div>
            <div className="text-4xl font-bold text-blue-600">{attempt.score}%</div>
            <div className="text-sm text-gray-600">Your Score</div>
          </div>
          {passingScore && (
            <>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <div className="text-4xl font-bold text-gray-600">{passingScore}%</div>
                <div className="text-sm text-gray-600">Passing Score</div>
              </div>
            </>
          )}
        </div>

        {/* Visual Score Bar */}
        <div className="w-full max-w-md mx-auto">
          <div className="relative h-8 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`absolute left-0 top-0 h-full transition-all duration-1000 ${
                attempt.passed
                  ? 'bg-gradient-to-r from-green-500 to-green-600'
                  : 'bg-gradient-to-r from-orange-500 to-orange-600'
              }`}
              style={{ width: `${attempt.score}%` }}
            />
            {passingScore && (
              <div
                className="absolute top-0 h-full w-1 bg-gray-600"
                style={{ left: `${passingScore}%` }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="p-6 bg-gray-50">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">{totalQuestions}</div>
            <div className="text-sm text-gray-600">Questions</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">
              {attempt.endTime
                ? formatTime(attempt.startTime, attempt.endTime)
                : 'N/A'}
            </div>
            <div className="text-sm text-gray-600">Time Taken</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">
              {new Date(attempt.completedAt).toLocaleDateString()}
            </div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-6">
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {onReview && (
            <CTAButton onClick={onReview} variant="secondary" className="w-full sm:w-auto">
              Review Answers
            </CTAButton>
          )}
          {onRetake && (
            <CTAButton onClick={onRetake} variant="primary" className="w-full sm:w-auto">
              Retake Quiz
            </CTAButton>
          )}
        </div>
      </div>
    </div>
  )
}


