'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import WelcomeModal from '@/components/dashboard/WelcomeModal'
import ContinueYourPath from '@/components/dashboard/ContinueYourPath'
import ProgressTracker from '@/components/dashboard/ProgressTracker'
import DiscoverMore from '@/components/dashboard/DiscoverMore'
import SkeletonLoader from '@/components/dashboard/SkeletonLoader'
import DashboardSearch from '@/components/dashboard/DashboardSearch'
import { useKeyboardShortcuts, KeyboardShortcutsHelp } from '@/components/dashboard/KeyboardShortcuts'
import { useToast } from '@/lib/hooks/useToast'
import { useProgress } from '@/lib/hooks/useProgress'
import { useLessons } from '@/lib/hooks/useLessons'
import { useAchievements } from '@/lib/hooks/useAchievements'
import CourseOutline from '@/components/dashboard/CourseOutline'
import AdvancedAnalytics from '@/components/dashboard/AdvancedAnalytics'
import AchievementsDisplay from '@/components/dashboard/AchievementsDisplay'
import StreakCalendar from '@/components/dashboard/StreakCalendar'
import CelebrationAnimation from '@/components/shared/CelebrationAnimation'
import { calculateAnalytics } from '@/lib/utils/analytics'
import LearningPathVisualization from '@/components/dashboard/LearningPathVisualization'
import FloatingActionButton from '@/components/shared/FloatingActionButton'
import { courseData } from '@/lib/data/courseData'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import CTAButton from '@/components/shared/CTAButton'

export default function DashboardPage() {
  const router = useRouter()
  const [isFirstVisit, setIsFirstVisit] = useState(false)
  const { lessons, getNextLesson, isLoading: lessonsLoading } = useLessons()
  const { ToastContainer, showToast } = useToast()
  const {
    recentlyUnlocked,
    checkForNewAchievements,
    clearRecentlyUnlocked,
  } = useAchievements()
  const [showCelebration, setShowCelebration] = useState(false)
  const [currentAchievement, setCurrentAchievement] = useState(recentlyUnlocked[0])

  // Enable keyboard shortcuts
  useKeyboardShortcuts()

  const nextLesson = getNextLesson()
  
  // Calculate real progress from lessons
  const completedLessons = lessons.filter((l) => l.isCompleted).length
  const totalLessons = lessons.length
  
  const { progress, isLoading: progressLoading } = useProgress({
    daysPracticed: Math.max(completedLessons / 7, 0), // Rough estimate
    totalTime: lessons.reduce((sum, l) => sum + (l.duration || 20), 0),
    currentStreak: Math.min(completedLessons, 7), // Simple streak calculation
    totalLessons,
    completedLessons,
  })
  
  // Convert course data to module format for CourseOutline component
  const modules = courseData.flatMap((part) => 
    part.modules.map((module) => ({
      id: module.id,
      title: module.title,
      description: module.description,
      lessons: module.lessons.map((lesson) => ({
        id: lesson.id,
        title: lesson.title,
        duration: lesson.duration,
        isCompleted: lesson.isCompleted,
        isLocked: false,
      })),
    }))
  )

  useEffect(() => {
    // Check if this is the user's first visit
    if (typeof window !== 'undefined') {
      const hasSeenWelcome = localStorage.getItem('hasSeenWelcome')
      setIsFirstVisit(!hasSeenWelcome)
    }
    
    // Check for new achievements on mount
    checkForNewAchievements()
  }, [checkForNewAchievements])

  // Handle newly unlocked achievements
  useEffect(() => {
    if (recentlyUnlocked.length > 0) {
      const achievement = recentlyUnlocked[0]
      setCurrentAchievement(achievement)
      setShowCelebration(true)
      showToast(`Achievement Unlocked: ${achievement.title}!`, 'success', 3000)
    }
  }, [recentlyUnlocked, showToast])

  const handleStartLesson = () => {
    if (nextLesson) {
      router.push(`/dashboard/lessons/${nextLesson.id}`)
    }
  }

  const handleTakeTour = () => {
    // Show tour/modal (can be implemented later)
    console.log('Take tour clicked')
    // Could implement a tour modal here
  }

  const isLoading = progressLoading || lessonsLoading

  if (isLoading) {
    return (
      <>
        <SkeletonLoader type="dashboard" />
      </>
    )
  }

  return (
    <>
      {/* Welcome Modal for First Visit */}
      {isFirstVisit && (
        <WelcomeModal
          onStartLesson={handleStartLesson}
          onTakeTour={handleTakeTour}
          isFirstVisit={isFirstVisit}
        />
      )}

      {/* Toast Container */}
      <ToastContainer />

      {/* Achievement Celebration */}
      {currentAchievement && (
        <CelebrationAnimation
          achievement={currentAchievement}
          show={showCelebration}
          enableConfetti={true}
          enableSound={false}
          onComplete={() => {
            setShowCelebration(false)
            clearRecentlyUnlocked()
          }}
        />
      )}

      {/* Keyboard Shortcuts Help */}
      <KeyboardShortcutsHelp />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Dashboard', href: '/dashboard' }]} />

      {/* Dashboard Header */}
      <div className="mb-8 animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div className="flex-1">
            <h1 className="font-serif text-3xl sm:text-4xl text-primary-900 dark:text-white mb-2">
              Welcome Back
            </h1>
            <p className="font-sans text-base sm:text-lg text-gray-600 dark:text-gray-400">
              Continue your Power BI learning journey
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Start/Continue Learning Button - Prominent */}
            {nextLesson && (
              <Link href={`/dashboard/lessons/${nextLesson.id}`}>
                <CTAButton className="whitespace-nowrap">
                  {completedLessons > 0 ? (
                    <>
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Continue Learning
                    </>
                  ) : (
                    <>
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Start Learning
                    </>
                  )}
                </CTAButton>
              </Link>
            )}
            
            {/* Search Bar */}
            <div className="w-full sm:w-80">
              <DashboardSearch
                onSearch={(query) => {
                  if (query) {
                    showToast(`Searching for "${query}"...`, 'info', 2000)
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* PL-300 Mock Exam Banner */}
      <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.05s' }}>
        <Link
          href="/dashboard/assessments/pl300-mock"
          className="block bg-gradient-to-r from-blue-700 via-purple-700 to-blue-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all group"
        >
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-lg">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">PL-300 Certification Mock Exam</h3>
                <p className="text-blue-100">Test your readiness with 20 comprehensive questions</p>
              </div>
            </div>
            <svg
              className="h-6 w-6 text-white group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Dashboard Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Continue Your Path (spans 2 columns on desktop) */}
        <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <ContinueYourPath nextLesson={nextLesson} />
        </div>

        {/* Sidebar - Progress Tracker & Achievements */}
        <div className="lg:col-span-1 space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <ProgressTracker
            daysPracticed={progress.daysPracticed}
            totalTime={progress.totalTime}
            currentStreak={progress.currentStreak}
            totalLessons={progress.totalLessons}
            completedLessons={progress.completedLessons}
          />
          
          {/* Achievements Display */}
          <AchievementsDisplay 
            viewMode="compact" 
            showProgress={true}
            maxDisplay={5}
          />
          
          {/* Streak Calendar */}
          <StreakCalendar 
            streakData={calculateAnalytics(lessons).studyStreaks}
          />
        </div>

        {/* Advanced Analytics Section - Full Width */}
        <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <AdvancedAnalytics />
        </div>

        {/* Course Outline Section - Full Width */}
        <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CourseOutline 
            modules={modules} 
            nextLessonId={nextLesson?.id}
          />
        </div>

        {/* Learning Path Visualization - Full Width */}
        <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <LearningPathVisualization />
        </div>
      </div>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </>
  )
}

