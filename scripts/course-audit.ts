import { courseData } from '../lib/data/courseData'
import fs from 'fs'
import path from 'path'

interface AuditIssue {
  lessonId: string
  lessonTitle: string
  moduleNumber: number
  issueType: string
  severity: 'critical' | 'high' | 'medium' | 'low'
  message: string
  recommendation: string
}

interface LessonCompleteness {
  lessonId: string
  title: string
  moduleNumber: number
  hasConcept: boolean
  hasDiscussion: boolean
  discussionLength: number
  hasKeyPoints: boolean
  keyPointsCount: number
  hasLabs: boolean
  labsCount: number
  hasTables: boolean
  tablesCount: number
  hasInsiderTips: boolean
  insiderTipsCount: number
  hasExerciseMaterials: boolean
  exerciseMaterialsCount: number
  hasVideoUrl: boolean
  hasVideoChapters: boolean
  hasTags: boolean
  tagsCount: number
  hasDifficulty: boolean
  hasTopic: boolean
  hasDuration: boolean
  completenessScore: number
  issues: AuditIssue[]
}

interface AuditReport {
  summary: {
    totalLessons: number
    lessonsWithIssues: number
    criticalIssues: number
    highIssues: number
    mediumIssues: number
    lowIssues: number
    averageCompletenessScore: number
  }
  lessons: LessonCompleteness[]
  issuesByCategory: {
    [key: string]: AuditIssue[]
  }
  recommendations: string[]
}

function auditLesson(lesson: any): LessonCompleteness {
  const issues: AuditIssue[] = []
  let score = 0
  let maxScore = 0

  // Required fields check
  maxScore += 10
  if (lesson.id && lesson.title && lesson.description && lesson.moduleNumber !== undefined && lesson.lessonNumber !== undefined) {
    score += 10
  } else {
    issues.push({
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      moduleNumber: lesson.moduleNumber,
      issueType: 'missing_required_fields',
      severity: 'critical',
      message: 'Missing required fields (id, title, description, moduleNumber, lessonNumber)',
      recommendation: 'Add all required fields'
    })
  }

  // Concept check
  const hasConcept = !!lesson.content?.concept
  maxScore += 10
  if (hasConcept && lesson.content.concept.length >= 100) {
    score += 10
  } else if (hasConcept) {
    score += 5
    issues.push({
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      moduleNumber: lesson.moduleNumber,
      issueType: 'short_concept',
      severity: 'medium',
      message: `Concept is too short (${lesson.content?.concept?.length || 0} chars, need 100+)`,
      recommendation: 'Expand concept to at least 100 characters with clear explanation'
    })
  } else {
    issues.push({
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      moduleNumber: lesson.moduleNumber,
      issueType: 'missing_concept',
      severity: 'high',
      message: 'Missing concept field',
      recommendation: 'Add concept explaining the key learning objective'
    })
  }

  // Discussion check
  const hasDiscussion = !!lesson.content?.discussion
  const discussionLength = lesson.content?.discussion?.length || 0
  maxScore += 15
  if (hasDiscussion && discussionLength >= 500) {
    score += 15
  } else if (hasDiscussion && discussionLength >= 250) {
    score += 10
    issues.push({
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      moduleNumber: lesson.moduleNumber,
      issueType: 'short_discussion',
      severity: 'high',
      message: `Discussion too short (${discussionLength} chars, need 500+ for effective learning)`,
      recommendation: 'Expand discussion with detailed explanation, examples, and use cases'
    })
  } else if (hasDiscussion) {
    score += 5
    issues.push({
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      moduleNumber: lesson.moduleNumber,
      issueType: 'very_short_discussion',
      severity: 'critical',
      message: `Discussion very short (${discussionLength} chars, need 250+)`,
      recommendation: 'Add comprehensive discussion explaining the concept in detail'
    })
  } else {
    issues.push({
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      moduleNumber: lesson.moduleNumber,
      issueType: 'missing_discussion',
      severity: 'critical',
      message: 'Missing discussion field - students cannot learn without detailed explanation',
      recommendation: 'Add discussion with at least 500 characters explaining the concept thoroughly'
    })
  }

  // Key Points check
  const hasKeyPoints = !!lesson.content?.keyPoints && lesson.content.keyPoints.length > 0
  const keyPointsCount = lesson.content?.keyPoints?.length || 0
  maxScore += 10
  if (hasKeyPoints && keyPointsCount >= 3) {
    score += 10
  } else if (hasKeyPoints) {
    score += 5
    issues.push({
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      moduleNumber: lesson.moduleNumber,
      issueType: 'insufficient_key_points',
      severity: 'medium',
      message: `Only ${keyPointsCount} key points (need 3+ for effective learning)`,
      recommendation: 'Add at least 3 key points summarizing main takeaways'
    })
  } else {
    issues.push({
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      moduleNumber: lesson.moduleNumber,
      issueType: 'missing_key_points',
      severity: 'high',
      message: 'Missing key points array',
      recommendation: 'Add 3-5 key points summarizing the main takeaways'
    })
  }

  // Labs check (for lab lessons)
  const isLabLesson = lesson.title.toLowerCase().includes('lab') || lesson.title.toLowerCase().includes('hands-on')
  const hasLabs = !!lesson.content?.labs && lesson.content.labs.length > 0
  const labsCount = lesson.content?.labs?.length || 0
  maxScore += 10
  if (isLabLesson) {
    if (hasLabs && labsCount >= 5) {
      score += 10
    } else if (hasLabs) {
      score += 5
      issues.push({
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        moduleNumber: lesson.moduleNumber,
        issueType: 'insufficient_lab_steps',
        severity: 'high',
        message: `Lab lesson has only ${labsCount} steps (need 5+ for complete instructions)`,
        recommendation: 'Add detailed step-by-step lab instructions (5+ steps)'
      })
    } else {
      issues.push({
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        moduleNumber: lesson.moduleNumber,
        issueType: 'missing_lab_instructions',
        severity: 'critical',
        message: 'Lab lesson missing lab instructions',
        recommendation: 'Add step-by-step lab instructions array'
      })
    }
  } else if (hasLabs) {
    score += 10 // Bonus for having labs in non-lab lessons
  }

  // Tables check
  const hasTables = !!lesson.content?.tables && lesson.content.tables.length > 0
  const tablesCount = lesson.content?.tables?.length || 0
  maxScore += 5
  if (hasTables) {
    score += 5
  }

  // Insider Tips check
  const hasInsiderTips = !!lesson.content?.insiderTips && lesson.content.insiderTips.length > 0
  const insiderTipsCount = lesson.content?.insiderTips?.length || 0
  maxScore += 5
  if (hasInsiderTips && insiderTipsCount >= 2) {
    score += 5
  } else if (hasInsiderTips) {
    score += 3
    issues.push({
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      moduleNumber: lesson.moduleNumber,
      issueType: 'insufficient_insider_tips',
      severity: 'low',
      message: `Only ${insiderTipsCount} insider tip (recommended: 2+)`,
      recommendation: 'Add more insider tips for best practices'
    })
  }

  // Exercise Materials check
  const hasExerciseMaterials = !!lesson.exerciseMaterials && lesson.exerciseMaterials.length > 0
  const exerciseMaterialsCount = lesson.exerciseMaterials?.length || 0
  maxScore += 5
  if (isLabLesson && hasExerciseMaterials) {
    score += 5
  } else if (isLabLesson) {
    issues.push({
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      moduleNumber: lesson.moduleNumber,
      issueType: 'missing_exercise_materials',
      severity: 'high',
      message: 'Lab lesson should have exercise materials (datasets, starter files)',
      recommendation: 'Add exercise materials (datasets, .pbix files, code templates)'
    })
  } else if (hasExerciseMaterials) {
    score += 5
  }

  // Video check
  const hasVideoUrl = !!lesson.videoUrl
  const hasVideoChapters = !!lesson.videoChapters && lesson.videoChapters.length > 0
  maxScore += 5
  if (hasVideoUrl) {
    score += 3
    if (hasVideoChapters) {
      score += 2
    }
  }

  // Metadata checks
  const hasTags = !!lesson.tags && lesson.tags.length >= 2
  const tagsCount = lesson.tags?.length || 0
  maxScore += 5
  if (hasTags) {
    score += 5
  } else {
    issues.push({
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      moduleNumber: lesson.moduleNumber,
      issueType: 'missing_or_insufficient_tags',
      severity: 'medium',
      message: `Missing tags or insufficient tags (${tagsCount}, need 2+)`,
      recommendation: 'Add at least 2 tags for searchability'
    })
  }

  const hasDifficulty = !!lesson.difficulty
  maxScore += 5
  if (hasDifficulty) {
    score += 5
  } else {
    issues.push({
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      moduleNumber: lesson.moduleNumber,
      issueType: 'missing_difficulty',
      severity: 'medium',
      message: 'Missing difficulty level',
      recommendation: 'Add difficulty: beginner, intermediate, or advanced'
    })
  }

  const hasTopic = !!lesson.topic
  maxScore += 5
  if (hasTopic) {
    score += 5
  }

  const hasDuration = !!lesson.duration
  maxScore += 5
  if (hasDuration) {
    score += 5
  }

  const completenessScore = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0

  return {
    lessonId: lesson.id,
    title: lesson.title,
    moduleNumber: lesson.moduleNumber,
    hasConcept,
    hasDiscussion,
    discussionLength,
    hasKeyPoints,
    keyPointsCount,
    hasLabs,
    labsCount,
    hasTables,
    tablesCount,
    hasInsiderTips,
    insiderTipsCount,
    hasExerciseMaterials,
    exerciseMaterialsCount,
    hasVideoUrl,
    hasVideoChapters,
    hasTags,
    tagsCount,
    hasDifficulty,
    hasTopic,
    hasDuration,
    completenessScore,
    issues
  }
}

function generateReport(): AuditReport {
  const allLessons: LessonCompleteness[] = []
  let totalCritical = 0
  let totalHigh = 0
  let totalMedium = 0
  let totalLow = 0

  const issuesByCategory: { [key: string]: AuditIssue[] } = {}

  courseData.forEach(part => {
    part.modules.forEach(module => {
      module.lessons.forEach(lesson => {
        const audit = auditLesson(lesson)
        allLessons.push(audit)

        audit.issues.forEach(issue => {
          if (!issuesByCategory[issue.issueType]) {
            issuesByCategory[issue.issueType] = []
          }
          issuesByCategory[issue.issueType].push(issue)

          if (issue.severity === 'critical') totalCritical++
          else if (issue.severity === 'high') totalHigh++
          else if (issue.severity === 'medium') totalMedium++
          else if (issue.severity === 'low') totalLow++
        })
      })
    })
  })

  const lessonsWithIssues = allLessons.filter(l => l.issues.length > 0).length
  const averageCompletenessScore = Math.round(
    allLessons.reduce((sum, l) => sum + l.completenessScore, 0) / allLessons.length
  )

  // Generate recommendations
  const recommendations: string[] = []

  if (totalCritical > 0) {
    recommendations.push(`CRITICAL: ${totalCritical} critical issues found. These prevent effective learning and must be fixed immediately.`)
  }

  const missingDiscussionCount = issuesByCategory['missing_discussion']?.length || 0
  if (missingDiscussionCount > 0) {
    recommendations.push(`Add discussion fields to ${missingDiscussionCount} lessons - this is essential for video-independent learning.`)
  }

  const shortDiscussionCount = (issuesByCategory['short_discussion']?.length || 0) + (issuesByCategory['very_short_discussion']?.length || 0)
  if (shortDiscussionCount > 0) {
    recommendations.push(`Expand discussion content in ${shortDiscussionCount} lessons to at least 500 characters for comprehensive learning.`)
  }

  const missingKeyPointsCount = issuesByCategory['missing_key_points']?.length || 0
  if (missingKeyPointsCount > 0) {
    recommendations.push(`Add key points arrays to ${missingKeyPointsCount} lessons to help students identify main takeaways.`)
  }

  const missingLabInstructionsCount = issuesByCategory['missing_lab_instructions']?.length || 0
  if (missingLabInstructionsCount > 0) {
    recommendations.push(`Add detailed lab instructions to ${missingLabInstructionsCount} lab lessons for hands-on practice.`)
  }

  const lessonsNeedingContent = allLessons.filter(l => l.completenessScore < 60).length
  if (lessonsNeedingContent > 0) {
    recommendations.push(`${lessonsNeedingContent} lessons have completeness scores below 60% and need significant content enhancement.`)
  }

  const lowScoreLessons = allLessons.filter(l => l.completenessScore < 50)
  if (lowScoreLessons.length > 0) {
    recommendations.push(`PRIORITY: ${lowScoreLessons.length} lessons have completeness scores below 50% - focus on these first.`)
  }

  return {
    summary: {
      totalLessons: allLessons.length,
      lessonsWithIssues,
      criticalIssues: totalCritical,
      highIssues: totalHigh,
      mediumIssues: totalMedium,
      lowIssues: totalLow,
      averageCompletenessScore
    },
    lessons: allLessons,
    issuesByCategory,
    recommendations
  }
}

// Generate and save report
const report = generateReport()

// Save detailed JSON report
const reportPath = path.join(process.cwd(), 'COURSE-AUDIT-REPORT.json')
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))

// Generate markdown report
let markdown = `# Complete Course Audit Report - Information Transmission Effectiveness\n\n`
markdown += `**Generated:** ${new Date().toISOString()}\n\n`

markdown += `## Executive Summary\n\n`
markdown += `| Metric | Value |\n`
markdown += `|--------|-------|\n`
markdown += `| Total Lessons | ${report.summary.totalLessons} |\n`
markdown += `| Lessons with Issues | ${report.summary.lessonsWithIssues} (${Math.round(report.summary.lessonsWithIssues / report.summary.totalLessons * 100)}%) |\n`
markdown += `| Average Completeness Score | ${report.summary.averageCompletenessScore}% |\n`
markdown += `| Critical Issues | ${report.summary.criticalIssues} |\n`
markdown += `| High Priority Issues | ${report.summary.highIssues} |\n`
markdown += `| Medium Priority Issues | ${report.summary.mediumIssues} |\n`
markdown += `| Low Priority Issues | ${report.summary.lowIssues} |\n\n`

// Completeness Distribution
const excellent = report.lessons.filter(l => l.completenessScore >= 80).length
const good = report.lessons.filter(l => l.completenessScore >= 60 && l.completenessScore < 80).length
const fair = report.lessons.filter(l => l.completenessScore >= 40 && l.completenessScore < 60).length
const poor = report.lessons.filter(l => l.completenessScore < 40).length

markdown += `## Completeness Distribution\n\n`
markdown += `| Score Range | Count | Percentage | Status |\n`
markdown += `|-------------|-------|------------|--------|\n`
markdown += `| 80-100% (Excellent) | ${excellent} | ${Math.round(excellent / report.summary.totalLessons * 100)}% | ✅ |\n`
markdown += `| 60-79% (Good) | ${good} | ${Math.round(good / report.summary.totalLessons * 100)}% | ⚠️ |\n`
markdown += `| 40-59% (Fair) | ${fair} | ${Math.round(fair / report.summary.totalLessons * 100)}% | 🔴 |\n`
markdown += `| 0-39% (Poor) | ${poor} | ${Math.round(poor / report.summary.totalLessons * 100)}% | 🔴 |\n\n`

// Content Coverage Analysis
markdown += `## Content Coverage Analysis\n\n`
const hasConcept = report.lessons.filter(l => l.hasConcept).length
const hasDiscussion = report.lessons.filter(l => l.hasDiscussion && l.discussionLength >= 500).length
const hasKeyPoints = report.lessons.filter(l => l.hasKeyPoints && l.keyPointsCount >= 3).length
const hasLabs = report.lessons.filter(l => l.hasLabs && l.labsCount >= 5).length
const hasInsiderTips = report.lessons.filter(l => l.hasInsiderTips && l.insiderTipsCount >= 2).length
const hasExerciseMaterials = report.lessons.filter(l => l.hasExerciseMaterials).length

markdown += `| Content Type | Lessons with Complete Content | Percentage |\n`
markdown += `|-------------|------------------------------|------------|\n`
markdown += `| Concept (100+ chars) | ${hasConcept} | ${Math.round(hasConcept / report.summary.totalLessons * 100)}% |\n`
markdown += `| Discussion (500+ chars) | ${hasDiscussion} | ${Math.round(hasDiscussion / report.summary.totalLessons * 100)}% |\n`
markdown += `| Key Points (3+) | ${hasKeyPoints} | ${Math.round(hasKeyPoints / report.summary.totalLessons * 100)}% |\n`
markdown += `| Lab Instructions (5+ steps) | ${hasLabs} | ${Math.round(hasLabs / report.summary.totalLessons * 100)}% |\n`
markdown += `| Insider Tips (2+) | ${hasInsiderTips} | ${Math.round(hasInsiderTips / report.summary.totalLessons * 100)}% |\n`
markdown += `| Exercise Materials | ${hasExerciseMaterials} | ${Math.round(hasExerciseMaterials / report.summary.totalLessons * 100)}% |\n\n`

// Critical Issues by Category
markdown += `## Issues by Category\n\n`
Object.keys(report.issuesByCategory).sort().forEach(category => {
  const issues = report.issuesByCategory[category]
  const critical = issues.filter(i => i.severity === 'critical').length
  const high = issues.filter(i => i.severity === 'high').length
  const medium = issues.filter(i => i.severity === 'medium').length
  const low = issues.filter(i => i.severity === 'low').length
  
  markdown += `### ${category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}\n\n`
  markdown += `- **Total:** ${issues.length} issues\n`
  markdown += `- **Critical:** ${critical}, **High:** ${high}, **Medium:** ${medium}, **Low:** ${low}\n\n`
})

// Priority Recommendations
markdown += `## Priority Recommendations\n\n`
report.recommendations.forEach((rec, idx) => {
  markdown += `${idx + 1}. ${rec}\n`
})
markdown += `\n`

// Lessons Needing Immediate Attention
const criticalLessons = report.lessons.filter(l => l.issues.some(i => i.severity === 'critical'))
if (criticalLessons.length > 0) {
  markdown += `## Lessons Requiring Immediate Attention (Critical Issues)\n\n`
  markdown += `| Lesson ID | Title | Module | Issues | Completeness |\n`
  markdown += `|-----------|-------|--------|--------|--------------|\n`
  criticalLessons.slice(0, 20).forEach(lesson => {
    const criticalCount = lesson.issues.filter(i => i.severity === 'critical').length
    markdown += `| ${lesson.lessonId} | ${lesson.title} | ${lesson.moduleNumber} | ${criticalCount} critical | ${lesson.completenessScore}% |\n`
  })
  if (criticalLessons.length > 20) {
    markdown += `\n*... and ${criticalLessons.length - 20} more lessons with critical issues*\n`
  }
  markdown += `\n`
}

// Lessons by Completeness Score (worst first)
markdown += `## Lessons by Completeness (Lowest Scores First)\n\n`
markdown += `| Rank | Lesson ID | Title | Module | Score | Critical Issues |\n`
markdown += `|------|-----------|-------|--------|-------|-----------------|\n`
const sortedByScore = [...report.lessons].sort((a, b) => a.completenessScore - b.completenessScore)
sortedByScore.slice(0, 30).forEach((lesson, idx) => {
  const criticalCount = lesson.issues.filter(i => i.severity === 'critical').length
  markdown += `| ${idx + 1} | ${lesson.lessonId} | ${lesson.title} | ${lesson.moduleNumber} | ${lesson.completenessScore}% | ${criticalCount} |\n`
})
markdown += `\n`

// Module-by-Module Analysis
markdown += `## Module-by-Module Analysis\n\n`
const moduleStats: { [key: number]: { total: number, avgScore: number, critical: number, high: number } } = {}
report.lessons.forEach(lesson => {
  if (!moduleStats[lesson.moduleNumber]) {
    moduleStats[lesson.moduleNumber] = { total: 0, avgScore: 0, critical: 0, high: 0 }
  }
  moduleStats[lesson.moduleNumber].total++
  moduleStats[lesson.moduleNumber].avgScore += lesson.completenessScore
  moduleStats[lesson.moduleNumber].critical += lesson.issues.filter(i => i.severity === 'critical').length
  moduleStats[lesson.moduleNumber].high += lesson.issues.filter(i => i.severity === 'high').length
})

Object.keys(moduleStats).sort((a, b) => parseInt(a) - parseInt(b)).forEach(moduleNum => {
  const stats = moduleStats[parseInt(moduleNum)]
  const avgScore = Math.round(stats.avgScore / stats.total)
  markdown += `### Module ${moduleNum}\n\n`
  markdown += `- **Lessons:** ${stats.total}\n`
  markdown += `- **Average Completeness:** ${avgScore}%\n`
  markdown += `- **Critical Issues:** ${stats.critical}\n`
  markdown += `- **High Priority Issues:** ${stats.high}\n\n`
})

markdown += `\n---\n\n`
markdown += `*For detailed JSON data, see COURSE-AUDIT-REPORT.json*\n`

// Save markdown report
const markdownPath = path.join(process.cwd(), 'COURSE-AUDIT-REPORT.md')
fs.writeFileSync(markdownPath, markdown)

console.log(`\n✅ Course audit complete!\n`)
console.log(`📊 Summary:`)
console.log(`   - Total lessons: ${report.summary.totalLessons}`)
console.log(`   - Average completeness: ${report.summary.averageCompletenessScore}%`)
console.log(`   - Critical issues: ${report.summary.criticalIssues}`)
console.log(`   - High priority issues: ${report.summary.highIssues}`)
console.log(`\n📁 Reports generated:`)
console.log(`   - COURSE-AUDIT-REPORT.md (Markdown)`)
console.log(`   - COURSE-AUDIT-REPORT.json (Detailed data)\n`)

