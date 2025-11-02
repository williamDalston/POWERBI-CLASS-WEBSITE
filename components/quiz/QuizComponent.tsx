'use client'

import { useState, useEffect } from 'react'
import { Quiz, QuizQuestion, QuestionType, QuizAttempt } from '@/lib/data/quizQuestions'
import CTAButton from '@/components/shared/CTAButton'

interface QuizComponentProps {
  quiz: Quiz
  onComplete?: (attempt: QuizAttempt) => void
  showResults?: boolean
  initialAttempt?: QuizAttempt
}

export default function QuizComponent({
  quiz,
  onComplete,
  showResults = false,
  initialAttempt,
}: QuizComponentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [submitted, setSubmitted] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null)
  const [showExplanations, setShowExplanations] = useState(false)
  const [score, setScore] = useState(0)
  const [passed, setPassed] = useState(false)
  const [attempt, setAttempt] = useState<QuizAttempt | null>(null)

  const currentQuestion = quiz.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1

  // Initialize or use existing attempt
  useEffect(() => {
    if (initialAttempt) {
      setAnswers(initialAttempt.answers)
      setSubmitted(true)
      setScore(initialAttempt.score)
      setPassed(initialAttempt.passed)
      setShowExplanations(true)
      return
    }

    // Start timer if time limit exists
    if (quiz.timeLimit) {
      setTimeRemaining(quiz.timeLimit * 60) // Convert to seconds
    }
  }, [initialAttempt, quiz.timeLimit])

  // Timer countdown
  useEffect(() => {
    if (timeRemaining === null || timeRemaining <= 0 || submitted) return

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev === null || prev <= 1) {
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [timeRemaining, submitted])

  const handleAnswerChange = (value: string | string[]) => {
    if (submitted) return
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value,
    }))
  }

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const handleSubmit = () => {
    if (submitted) return

    // Calculate score
    let totalPoints = 0
    let earnedPoints = 0

    quiz.questions.forEach(question => {
      totalPoints += question.points
      const userAnswer = answers[question.id]
      const correctAnswer = question.correctAnswer

      if (userAnswer === undefined || userAnswer === null) {
        return // No points for unanswered
      }

      // Check if answer is correct
      const isCorrect = Array.isArray(correctAnswer)
        ? correctAnswer.includes(String(userAnswer))
        : String(userAnswer).toLowerCase() === String(correctAnswer).toLowerCase()

      if (isCorrect) {
        earnedPoints += question.points
      }
    })

    const finalScore = Math.round((earnedPoints / totalPoints) * 100)
    const hasPassed = quiz.passingScore ? finalScore >= quiz.passingScore : true

    setScore(finalScore)
    setPassed(hasPassed)
    setSubmitted(true)
    setShowExplanations(true)

    // Create attempt record
    const newAttempt: QuizAttempt = {
      quizId: quiz.id,
      startTime: Date.now() - (quiz.timeLimit ? (quiz.timeLimit * 60 - (timeRemaining || 0)) : 0),
      endTime: Date.now(),
      answers,
      score: finalScore,
      passed: hasPassed,
      completedAt: Date.now(),
    }

    setAttempt(newAttempt)
    onComplete?.(newAttempt)
  }

  const handleRetake = () => {
    setCurrentQuestionIndex(0)
    setAnswers({})
    setSubmitted(false)
    setScore(0)
    setPassed(false)
    setShowExplanations(false)
    setAttempt(null)
    if (quiz.timeLimit) {
      setTimeRemaining(quiz.timeLimit * 60)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getQuestionComponent = (question: QuizQuestion) => {
    const userAnswer = answers[question.id]
    const isAnswered = userAnswer !== undefined && userAnswer !== null
    const isCorrect =
      submitted &&
      (Array.isArray(question.correctAnswer)
        ? question.correctAnswer.includes(String(userAnswer))
        : String(userAnswer).toLowerCase() === String(question.correctAnswer).toLowerCase())

    switch (question.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-3">
            {question.options?.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswerChange(option)}
                disabled={submitted}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  isAnswered && userAnswer === option
                    ? submitted
                      ? isCorrect
                        ? 'border-green-500 bg-green-50'
                        : 'border-red-500 bg-red-50'
                      : 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                } ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isAnswered && userAnswer === option
                        ? submitted
                          ? isCorrect
                            ? 'border-green-500 bg-green-500'
                            : 'border-red-500 bg-red-500'
                          : 'border-blue-600 bg-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {isAnswered && userAnswer === option && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="flex-1">{option}</span>
                  {submitted && !isCorrect && option === question.correctAnswer && (
                    <span className="text-sm font-medium text-green-600">Correct</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )

      case 'true-false':
        return (
          <div className="space-y-3">
            {['true', 'false'].map(value => (
              <button
                key={value}
                onClick={() => handleAnswerChange(value)}
                disabled={submitted}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all capitalize ${
                  isAnswered && userAnswer === value
                    ? submitted
                      ? isCorrect
                        ? 'border-green-500 bg-green-50'
                        : 'border-red-500 bg-red-50'
                      : 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                } ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isAnswered && userAnswer === value
                        ? submitted
                          ? isCorrect
                            ? 'border-green-500 bg-green-500'
                            : 'border-red-500 bg-red-500'
                          : 'border-blue-600 bg-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {isAnswered && userAnswer === value && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-lg font-medium">{value}</span>
                  {submitted && !isCorrect && value === question.correctAnswer && (
                    <span className="text-sm font-medium text-green-600 ml-auto">Correct</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )

      case 'fill-blank':
        return (
          <div className="space-y-3">
            <textarea
              value={(userAnswer as string) || ''}
              onChange={e => handleAnswerChange(e.target.value)}
              disabled={submitted}
              placeholder={question.placeholder || 'Enter your answer...'}
              rows={4}
              className={`w-full p-4 rounded-lg border-2 resize-none ${
                submitted
                  ? isCorrect
                    ? 'border-green-500 bg-green-50'
                    : 'border-red-500 bg-red-50'
                  : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200'
              }`}
            />
          </div>
        )

      case 'scenario':
        return (
          <div className="space-y-4">
            {question.scenario && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="font-medium text-blue-900 mb-2">Scenario:</p>
                <p className="text-blue-800">{question.scenario}</p>
              </div>
            )}
            {question.options?.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswerChange(option)}
                disabled={submitted}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  isAnswered && userAnswer === option
                    ? submitted
                      ? isCorrect
                        ? 'border-green-500 bg-green-50'
                        : 'border-red-500 bg-red-50'
                      : 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                } ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isAnswered && userAnswer === option
                        ? submitted
                          ? isCorrect
                            ? 'border-green-500 bg-green-500'
                            : 'border-red-500 bg-red-500'
                          : 'border-blue-600 bg-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {isAnswered && userAnswer === option && (
                      <div className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="flex-1">{option}</span>
                  {submitted && !isCorrect && option === question.correctAnswer && (
                    <span className="text-sm font-medium text-green-600">Correct</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold mb-2">{quiz.title}</h2>
            <p className="text-blue-100">{quiz.description}</p>
          </div>
          {timeRemaining !== null && (
            <div
              className={`px-4 py-2 rounded-lg font-mono text-lg font-bold ${
                timeRemaining < 60 ? 'bg-red-500' : 'bg-black/20'
              }`}
            >
              {formatTime(timeRemaining)}
            </div>
          )}
        </div>
      </div>

      {/* Results Summary */}
      {submitted && showResults && (
        <div
          className={`p-6 border-b-4 ${
            passed ? 'bg-green-50 border-green-500' : 'bg-orange-50 border-orange-500'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-1">
                {passed ? '🎉 Congratulations!' : '📚 Keep Learning!'}
              </h3>
              <p className="text-gray-700">
                Your score: <span className="font-bold text-2xl">{score}%</span>
              </p>
              {quiz.passingScore && (
                <p className="text-sm text-gray-600 mt-1">
                  Passing score: {quiz.passingScore}%
                </p>
              )}
            </div>
            <div className="text-6xl">{passed ? '✅' : '📖'}</div>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="bg-gray-100 h-2">
        <div
          className="bg-gradient-to-r from-blue-600 to-purple-600 h-full transition-all duration-300"
          style={{
            width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%`,
          }}
        />
      </div>

      {/* Question */}
      <div className="p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </span>
            <span className="text-sm font-medium text-blue-600">
              {currentQuestion.points} point{currentQuestion.points !== 1 ? 's' : ''}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {currentQuestion.question}
          </h3>
        </div>

        {/* Answer Options */}
        {getQuestionComponent(currentQuestion)}

        {/* Explanation */}
        {submitted && showExplanations && currentQuestion.explanation && (
          <div
            className={`mt-6 p-4 rounded-lg border-l-4 ${
              String(answers[currentQuestion.id]).toLowerCase() ===
              String(currentQuestion.correctAnswer).toLowerCase()
                ? 'bg-green-50 border-green-500'
                : 'bg-orange-50 border-orange-500'
            }`}
          >
            <p className="font-medium mb-2">💡 Explanation:</p>
            <p className="text-gray-700">{currentQuestion.explanation}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            ← Previous
          </button>

          {!submitted && (
            <div className="flex gap-3">
              {isLastQuestion ? (
                <button
                  onClick={handleSubmit}
                  disabled={Object.keys(answers).length < quiz.questions.length}
                  className="px-8 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium transition-all hover:from-green-700 hover:to-green-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Quiz
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium transition-all hover:from-blue-700 hover:to-purple-700"
                >
                  Next →
                </button>
              )}
            </div>
          )}

          {submitted && quiz.allowRetake && !showResults && (
            <CTAButton onClick={handleRetake} variant="primary">
              Retake Quiz
            </CTAButton>
          )}
        </div>
      </div>

      {/* Question List (Desktop) */}
      <div className="bg-gray-50 p-4 border-t border-gray-200">
        <div className="flex flex-wrap gap-2">
          {quiz.questions.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => setCurrentQuestionIndex(idx)}
              disabled={submitted}
              className={`w-10 h-10 rounded-lg font-medium transition-all ${
                currentQuestionIndex === idx
                  ? 'bg-blue-600 text-white'
                  : answers[q.id]
                  ? submitted
                    ? String(answers[q.id]).toLowerCase() ===
                      String(q.correctAnswer).toLowerCase()
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : 'bg-blue-100 text-blue-700'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
              } ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

