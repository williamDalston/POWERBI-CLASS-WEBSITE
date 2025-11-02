'use client'

import { useState, useEffect } from 'react'
import { QuizAttempt } from '@/lib/data/quizQuestions'

const STORAGE_KEY = 'powerbi_quiz_attempts'

export function useQuizAttempts() {
  const [attempts, setAttempts] = useState<QuizAttempt[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load from localStorage
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setAttempts(JSON.parse(stored))
      }
    } catch (error) {
      console.error('Error loading quiz attempts:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  const saveAttempt = (attempt: QuizAttempt) => {
    try {
      const updated = [...attempts, attempt]
      setAttempts(updated)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    } catch (error) {
      console.error('Error saving quiz attempt:', error)
    }
  }

  const getAttemptsForQuiz = (quizId: string): QuizAttempt[] => {
    return attempts.filter(attempt => attempt.quizId === quizId)
  }

  const getBestAttempt = (quizId: string): QuizAttempt | undefined => {
    const quizAttempts = getAttemptsForQuiz(quizId)
    if (quizAttempts.length === 0) return undefined
    return quizAttempts.reduce((best, current) =>
      current.score > best.score ? current : best
    )
  }

  const getAttemptsStats = (quizId: string) => {
    const quizAttempts = getAttemptsForQuiz(quizId)
    if (quizAttempts.length === 0) return { attempts: 0, bestScore: 0, avgScore: 0 }

    const scores = quizAttempts.map(a => a.score)
    const bestScore = Math.max(...scores)
    const avgScore = scores.reduce((sum, score) => sum + score, 0) / scores.length

    return {
      attempts: quizAttempts.length,
      bestScore,
      avgScore: Math.round(avgScore),
      lastAttempt: quizAttempts[quizAttempts.length - 1],
    }
  }

  const clearAttempts = () => {
    setAttempts([])
    localStorage.removeItem(STORAGE_KEY)
  }

  const clearQuizAttempts = (quizId: string) => {
    const filtered = attempts.filter(attempt => attempt.quizId !== quizId)
    setAttempts(filtered)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
  }

  return {
    attempts,
    loading,
    saveAttempt,
    getAttemptsForQuiz,
    getBestAttempt,
    getAttemptsStats,
    clearAttempts,
    clearQuizAttempts,
  }
}


