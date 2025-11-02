import { QuizAttempt, Quiz } from '@/lib/data/quizQuestions'

export interface QuizAnalytics {
  totalAttempts: number
  averageScore: number
  bestScore: number
  passingRate: number
  timeSpent: number // in minutes
  improvementTrend: Array<{ date: string; score: number }>
  weakestTopics: Array<{ topic: string; avgScore: number; attempts: number }>
  strongestTopics: Array<{ topic: string; avgScore: number; attempts: number }>
}

export interface QuizComparison {
  quizId: string
  quizTitle: string
  attempts: number
  bestScore: number
  averageScore: number
  lastAttempt: Date | null
  passingRate: number
}

/**
 * Calculate comprehensive analytics from quiz attempts
 */
export function calculateQuizAnalytics(attempts: QuizAttempt[]): QuizAnalytics {
  if (attempts.length === 0) {
    return {
      totalAttempts: 0,
      averageScore: 0,
      bestScore: 0,
      passingRate: 0,
      timeSpent: 0,
      improvementTrend: [],
      weakestTopics: [],
      strongestTopics: [],
    }
  }

  const scores = attempts.map(a => a.score)
  const averageScore = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length)
  const bestScore = Math.max(...scores)
  const passedAttempts = attempts.filter(a => a.passed).length
  const passingRate = Math.round((passedAttempts / attempts.length) * 100)

  // Calculate time spent (in minutes)
  const timeSpent = attempts.reduce((total, attempt) => {
    if (attempt.endTime && attempt.startTime) {
      const duration = (attempt.endTime - attempt.startTime) / 1000 / 60 // Convert to minutes
      return total + duration
    }
    return total
  }, 0)

  // Improvement trend (last 10 attempts)
  const recentAttempts = attempts.slice(-10).map((attempt, index) => ({
    date: new Date(attempt.completedAt).toISOString().split('T')[0],
    score: attempt.score,
  }))

  // For topic analysis, we'd need to map quiz IDs to topics
  // This is a placeholder - would need quiz metadata
  const weakestTopics: Array<{ topic: string; avgScore: number; attempts: number }> = []
  const strongestTopics: Array<{ topic: string; avgScore: number; attempts: number }> = []

  return {
    totalAttempts: attempts.length,
    averageScore,
    bestScore,
    passingRate,
    timeSpent: Math.round(timeSpent),
    improvementTrend: recentAttempts,
    weakestTopics,
    strongestTopics,
  }
}

/**
 * Compare multiple quizzes
 */
export function compareQuizzes(
  attempts: QuizAttempt[],
  quizzes: Quiz[]
): QuizComparison[] {
  const quizMap = new Map<string, Quiz>()
  quizzes.forEach(q => quizMap.set(q.id, q))

  const quizGroups = new Map<string, QuizAttempt[]>()
  attempts.forEach(attempt => {
    const existing = quizGroups.get(attempt.quizId) || []
    quizGroups.set(attempt.quizId, [...existing, attempt])
  })

  const comparisons: QuizComparison[] = []

  quizGroups.forEach((quizAttempts, quizId) => {
    const quiz = quizMap.get(quizId)
    if (!quiz) return

    const scores = quizAttempts.map(a => a.score)
    const averageScore = Math.round(
      scores.reduce((sum, score) => sum + score, 0) / scores.length
    )
    const bestScore = Math.max(...scores)
    const passedAttempts = quizAttempts.filter(a => a.passed).length
    const passingRate = quiz.passingScore
      ? Math.round((passedAttempts / quizAttempts.length) * 100)
      : 100

    const lastAttempt = quizAttempts.length > 0
      ? new Date(quizAttempts[quizAttempts.length - 1].completedAt)
      : null

    comparisons.push({
      quizId,
      quizTitle: quiz.title,
      attempts: quizAttempts.length,
      bestScore,
      averageScore,
      lastAttempt,
      passingRate,
    })
  })

  // Sort by last attempt date (most recent first)
  return comparisons.sort((a, b) => {
    if (!a.lastAttempt) return 1
    if (!b.lastAttempt) return -1
    return b.lastAttempt.getTime() - a.lastAttempt.getTime()
  })
}

/**
 * Get performance summary for dashboard
 */
export function getQuizPerformanceSummary(attempts: QuizAttempt[]): {
  totalQuizzes: number
  totalAttempts: number
  averageScore: number
  completionRate: number
  streak: number
} {
  if (attempts.length === 0) {
    return {
      totalQuizzes: 0,
      totalAttempts: 0,
      averageScore: 0,
      completionRate: 0,
      streak: 0,
    }
  }

  const uniqueQuizzes = new Set(attempts.map(a => a.quizId)).size
  const averageScore = Math.round(
    attempts.reduce((sum, a) => sum + a.score, 0) / attempts.length
  )
  const completedQuizzes = attempts.filter(a => a.passed).length
  const completionRate = Math.round((completedQuizzes / attempts.length) * 100)

  // Calculate streak (consecutive passing attempts)
  let streak = 0
  for (let i = attempts.length - 1; i >= 0; i--) {
    if (attempts[i].passed) {
      streak++
    } else {
      break
    }
  }

  return {
    totalQuizzes: uniqueQuizzes,
    totalAttempts: attempts.length,
    averageScore,
    completionRate,
    streak,
  }
}

