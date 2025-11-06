// Weakness Analysis Utilities
// Identifies learning gaps from quiz performance

import { QuizAttempt, QuizQuestion } from '@/lib/data/quizQuestions'
import { getQuizById } from '@/lib/data/quizQuestions'

export interface WeaknessAnalysis {
  questionId: string
  moduleId?: string
  lessonId?: string
  tags: string[]
  timesAttempted: number
  timesCorrect: number
  successRate: number
  averageTime: number
  lastAttempted?: number
  recommendedLessons?: string[]
}

export interface ModuleWeakness {
  moduleId: string
  moduleTitle: string
  weaknessCount: number
  averageSuccessRate: number
  weaknesses: WeaknessAnalysis[]
}

export interface TagWeakness {
  tag: string
  totalAttempts: number
  totalCorrect: number
  successRate: number
  relatedQuestions: string[]
}

/**
 * Analyze quiz attempts to identify learning weaknesses
 */
export function analyzeWeaknesses(attempts: QuizAttempt[]): WeaknessAnalysis[] {
  const questionStats: Record<string, {
    attempts: number
    correct: number
    totalTime: number
    timeCount: number
    tags: Set<string>
    moduleId?: string
    lessonId?: string
  }> = {}

  // Aggregate data from all attempts
  attempts.forEach(attempt => {
    const quiz = getQuizById(attempt.quizId)
    if (!quiz) return

    quiz.questions.forEach(question => {
      if (!questionStats[question.id]) {
        questionStats[question.id] = {
          attempts: 0,
          correct: 0,
          totalTime: 0,
          timeCount: 0,
          tags: new Set(question.tags || []),
          moduleId: question.moduleId,
          lessonId: question.lessonId,
        }
      }

      const stats = questionStats[question.id]
      stats.attempts += 1

      // Check if answered correctly
      const userAnswer = attempt.answers[question.id]
      const correctAnswer = question.correctAnswer
      const isCorrect = Array.isArray(correctAnswer)
        ? correctAnswer.includes(String(userAnswer))
        : String(userAnswer).toLowerCase() === String(correctAnswer).toLowerCase()

      if (isCorrect) {
        stats.correct += 1
      }

      // Track time spent
      if (attempt.questionTimes && attempt.questionTimes[question.id]) {
        stats.totalTime += attempt.questionTimes[question.id]
        stats.timeCount += 1
      }
    })
  })

  // Convert to WeaknessAnalysis format
  const weaknesses: WeaknessAnalysis[] = Object.entries(questionStats).map(([questionId, stats]) => {
    const successRate = stats.attempts > 0 ? (stats.correct / stats.attempts) * 100 : 0
    const averageTime = stats.timeCount > 0 ? stats.totalTime / stats.timeCount : 0

    return {
      questionId,
      moduleId: stats.moduleId,
      lessonId: stats.lessonId,
      tags: Array.from(stats.tags),
      timesAttempted: stats.attempts,
      timesCorrect: stats.correct,
      successRate,
      averageTime,
    }
  })

  // Sort by weakest first (lowest success rate)
  return weaknesses.sort((a, b) => a.successRate - b.successRate)
}

/**
 * Identify weaknesses by module
 */
export function analyzeModuleWeaknesses(attempts: QuizAttempt[]): ModuleWeakness[] {
  const weaknesses = analyzeWeaknesses(attempts)
  const moduleMap: Record<string, WeaknessAnalysis[]> = {}

  // Group by module
  weaknesses.forEach(weakness => {
    if (!weakness.moduleId) return
    if (!moduleMap[weakness.moduleId]) {
      moduleMap[weakness.moduleId] = []
    }
    moduleMap[weakness.moduleId].push(weakness)
  })

  // Calculate module-level stats
  const moduleWeaknesses: ModuleWeakness[] = Object.entries(moduleMap).map(([moduleId, moduleWeaknessList]) => {
    const averageSuccessRate = moduleWeaknessList.reduce((sum, w) => sum + w.successRate, 0) / moduleWeaknessList.length
    const weakCount = moduleWeaknessList.filter(w => w.successRate < 70).length

    // Get module title
    const quiz = getQuizById(`module-${moduleId}-assessment`)
    const moduleTitle = quiz?.title || `Module ${moduleId}`

    return {
      moduleId,
      moduleTitle,
      weaknessCount: weakCount,
      averageSuccessRate,
      weaknesses: moduleWeaknessList.filter(w => w.successRate < 70), // Only return weak areas
    }
  })

  // Sort by weakness count (most weaknesses first)
  return moduleWeaknesses.sort((a, b) => b.weaknessCount - a.weaknessCount)
}

/**
 * Identify weaknesses by tag/topic
 */
export function analyzeTagWeaknesses(attempts: QuizAttempt[]): TagWeakness[] {
  const weaknesses = analyzeWeaknesses(attempts)
  const tagMap: Record<string, {
    attempts: number
    correct: number
    questions: Set<string>
  }> = {}

  // Aggregate by tag
  weaknesses.forEach(weakness => {
    weakness.tags.forEach(tag => {
      if (!tagMap[tag]) {
        tagMap[tag] = {
          attempts: 0,
          correct: 0,
          questions: new Set(),
        }
      }

      tagMap[tag].attempts += weakness.timesAttempted
      tagMap[tag].correct += weakness.timesCorrect
      tagMap[tag].questions.add(weakness.questionId)
    })
  })

  // Convert to TagWeakness format
  const tagWeaknesses: TagWeakness[] = Object.entries(tagMap).map(([tag, stats]) => {
    const successRate = stats.attempts > 0 ? (stats.correct / stats.attempts) * 100 : 0

    return {
      tag,
      totalAttempts: stats.attempts,
      totalCorrect: stats.correct,
      successRate,
      relatedQuestions: Array.from(stats.questions),
    }
  })

  // Sort by weakest first
  return tagWeaknesses.sort((a, b) => a.successRate - b.successRate)
}

/**
 * Get recommended review lessons based on weaknesses
 */
export function getRecommendedReview(weaknesses: WeaknessAnalysis[], limit: number = 5): WeaknessAnalysis[] {
  // Filter for weak areas (success rate < 70%)
  const weakAreas = weaknesses.filter(w => w.successRate < 70)
  
  // Sort by success rate (weakest first) and prioritize frequently attempted questions
  return weakAreas
    .sort((a, b) => {
      // Primary: success rate
      if (Math.abs(a.successRate - b.successRate) > 5) {
        return a.successRate - b.successRate
      }
      // Secondary: times attempted (more attempts = more important to review)
      return b.timesAttempted - a.timesAttempted
    })
    .slice(0, limit)
}

/**
 * Check if a user is ready for certification based on quiz performance
 */
export function checkCertificationReadiness(attempts: QuizAttempt[]): {
  ready: boolean
  score: number
  recommendation: string
  weakAreas: string[]
} {
  // Get PL-300 mock exam attempts
  const pl300Attempts = attempts.filter(a => a.quizId === 'pl300-mock-exam')
  
  if (pl300Attempts.length === 0) {
    return {
      ready: false,
      score: 0,
      recommendation: 'Take the PL-300 mock exam to assess your readiness.',
      weakAreas: [],
    }
  }

  // Get best score
  const bestAttempt = pl300Attempts.reduce((best, current) => 
    current.score > best.score ? current : best
  )

  // Analyze weaknesses
  const weaknesses = analyzeWeaknesses(pl300Attempts)
  const weakAreas = weaknesses
    .filter(w => w.successRate < 70)
    .map(w => w.tags[0])
    .filter((tag, idx, arr) => arr.indexOf(tag) === idx) // Unique tags

  const score = bestAttempt.score
  let ready = false
  let recommendation = ''

  if (score >= 85) {
    ready = true
    recommendation = 'Excellent! You are well-prepared for the PL-300 exam.'
  } else if (score >= 75) {
    ready = true
    recommendation = 'You are ready for the exam. Consider reviewing weak areas for a higher score.'
  } else if (score >= 70) {
    ready = false
    recommendation = 'You are close! Review your weak areas and retake the exam.'
  } else {
    ready = false
    recommendation = 'Continue studying and focus on your weak areas before taking the exam.'
  }

  return {
    ready,
    score,
    recommendation,
    weakAreas,
  }
}



