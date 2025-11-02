import * as fs from 'fs'
import * as path from 'path'

// Read the courseData file
const courseDataPath = path.join(__dirname, '../lib/data/courseData.ts')
const fileContent = fs.readFileSync(courseDataPath, 'utf-8')

// Extract lessons using regex to find lesson objects
// Note: Using [\s\S] instead of /s flag for ES2017 compatibility
const lessonPattern = /(\{[^}]*id:\s*"[0-9]+-[0-9]+"[^}]*\})/g

interface LessonAnalysis {
  id: string
  title: string
  moduleNumber: number
  hasConcept: boolean
  conceptLength: number
  hasDiscussion: boolean
  discussionLength: number
  hasKeyPoints: boolean
  keyPointsCount: number
  hasInsiderTips: boolean
  insiderTipsCount: number
  hasLabs: boolean
  labsCount: number
  hasContent: boolean
  contentScore: number
  issues: string[]
}

const lessons: LessonAnalysis[] = []

// Find all lessons
const lessonMatches = fileContent.matchAll(/id:\s*"([0-9]+-[0-9]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?moduleNumber:\s*(\d+)/g)

let currentPos = 0
for (const match of lessonMatches) {
  const lessonId = match[1]
  const title = match[2]
  const moduleNumber = parseInt(match[3])
  const matchStart = match.index!
  const matchEnd = matchStart + match[0].length
  
  // Find the content section for this lesson
  const lessonContent = fileContent.substring(matchStart)
  const nextLessonMatch = lessonContent.match(/^\s*\{[\s\S]*?content:\s*\{/m)
  
  // Extract content section
  const contentSection = lessonContent.match(/content:\s*\{[\s\S]*?\}\s*[,}]/)?.[0] || ''
  
  const analysis: LessonAnalysis = {
    id: lessonId,
    title,
    moduleNumber,
    hasConcept: /concept:\s*"[^"]+"/.test(contentSection),
    conceptLength: (contentSection.match(/concept:\s*"([^"]+)"/)?.[1] || '').length,
    hasDiscussion: /discussion:\s*"[^"]+"/.test(contentSection) || /discussion:\s*`[^`]+`/.test(contentSection),
    discussionLength: (contentSection.match(/discussion:\s*"([^"]+)"/)?.[1] || contentSection.match(/discussion:\s*`([^`]+)`/)?.[1] || '').length,
    hasKeyPoints: /keyPoints:\s*\[/.test(contentSection),
    keyPointsCount: (contentSection.match(/keyPoints:\s*\[([^\]]+)\]/)?.[1] || '').split('"').filter(s => s.trim().length > 0).length / 2,
    hasInsiderTips: /insiderTips:\s*\[/.test(contentSection),
    insiderTipsCount: (contentSection.match(/insiderTips:\s*\[([^\]]+)\]/)?.[1] || '').split('"').filter(s => s.trim().length > 0).length / 2,
    hasLabs: /labs:\s*\[/.test(contentSection),
    labsCount: (contentSection.match(/labs:\s*\[([^\]]+)\]/)?.[1] || '').split('"').filter(s => s.trim().length > 0).length / 2,
    hasContent: /content:\s*\{/.test(contentSection),
    contentScore: 0,
    issues: []
  }
  
  // Calculate content score
  if (!analysis.hasConcept || analysis.conceptLength < 200) {
    analysis.issues.push(`Concept is missing or too short (${analysis.conceptLength} chars, need 200+)`)
  }
  
  if (!analysis.hasDiscussion || analysis.discussionLength < 500) {
    analysis.issues.push(`Discussion is missing or too short (${analysis.discussionLength} chars, need 500+)`)
  }
  
  if (!analysis.hasKeyPoints || analysis.keyPointsCount < 3) {
    analysis.issues.push(`Key points missing or insufficient (${analysis.keyPointsCount} items, need 3+)`)
  }
  
  if (analysis.hasLabs && (!analysis.hasLabs || analysis.labsCount < 3)) {
    analysis.issues.push(`Labs section present but incomplete (${analysis.labsCount} steps, need 3+)`)
  }
  
  analysis.contentScore = 
    (analysis.hasConcept && analysis.conceptLength >= 200 ? 20 : 0) +
    (analysis.hasDiscussion && analysis.discussionLength >= 500 ? 40 : 0) +
    (analysis.hasKeyPoints && analysis.keyPointsCount >= 3 ? 20 : 0) +
    (analysis.hasInsiderTips && analysis.insiderTipsCount >= 2 ? 10 : 0) +
    (analysis.hasLabs ? (analysis.labsCount >= 3 ? 10 : 0) : 10)
  
  lessons.push(analysis)
}

// Generate report
console.log('=== LESSON CONTENT COMPLETENESS ANALYSIS ===\n')
console.log(`Total Lessons Analyzed: ${lessons.length}\n`)

const incompleteLessons = lessons.filter(l => l.issues.length > 0 || l.contentScore < 80)
console.log(`Lessons Needing Enhancement: ${incompleteLessons.length}\n`)

if (incompleteLessons.length > 0) {
  console.log('LESSONS REQUIRING ATTENTION:\n')
  incompleteLessons.forEach(lesson => {
    console.log(`\n[${lesson.id}] ${lesson.title}`)
    console.log(`  Module: ${lesson.moduleNumber}`)
    console.log(`  Content Score: ${lesson.contentScore}/100`)
    console.log(`  Issues:`)
    lesson.issues.forEach(issue => console.log(`    - ${issue}`))
    console.log(`  Status:`)
    console.log(`    Concept: ${lesson.hasConcept ? '✓' : '✗'} (${lesson.conceptLength} chars)`)
    console.log(`    Discussion: ${lesson.hasDiscussion ? '✓' : '✗'} (${lesson.discussionLength} chars)`)
    console.log(`    Key Points: ${lesson.hasKeyPoints ? '✓' : '✗'} (${lesson.keyPointsCount} items)`)
    console.log(`    Insider Tips: ${lesson.hasInsiderTips ? '✓' : '✗'} (${lesson.insiderTipsCount} items)`)
    console.log(`    Labs: ${lesson.hasLabs ? '✓' : '✗'} (${lesson.labsCount} items)`)
  })
}

const completeLessons = lessons.filter(l => l.issues.length === 0 && l.contentScore >= 80)
console.log(`\n\nComplete Lessons: ${completeLessons.length}`)

// Export results to JSON for easier processing
fs.writeFileSync(
  path.join(__dirname, '../lesson-analysis.json'),
  JSON.stringify({ lessons, incomplete: incompleteLessons, complete: completeLessons }, null, 2)
)

console.log('\nAnalysis complete! Results saved to lesson-analysis.json')

