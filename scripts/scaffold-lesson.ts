#!/usr/bin/env ts-node

/**
 * Lesson Scaffolding Tool
 * 
 * Generates a new lesson object following the course data structure.
 * This ensures consistency and speeds up lesson creation.
 * 
 * Usage:
 *   npm run scaffold-lesson
 *   or
 *   ts-node scripts/scaffold-lesson.ts
 */

import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import * as readline from 'readline'

interface LessonTemplate {
  id: string
  moduleNumber: number
  lessonNumber: number
  title: string
  description: string
  duration?: number
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  tags?: string[]
  topic?: string
  videoUrl?: string
  videoChapters?: Array<{ title: string; timestamp: number }>
  content?: {
    concept?: string
    discussion?: string
    tables?: Array<{
      title: string
      headers: string[]
      rows: string[][]
    }>
    labs?: string[]
    keyPoints?: string[]
    insiderTips?: string[]
  }
  exerciseMaterials?: Array<{
    name: string
    url: string
    type?: 'pdf' | 'dataset' | 'code' | 'cheatsheet' | 'pbix' | 'other'
  }>
}

/**
 * Interactive prompt to gather lesson information
 */
function prompt(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise((resolve) => {
    rl.question(question, (answer: string) => {
      rl.close()
      resolve(answer.trim())
    })
  })
}

/**
 * Generate a lesson template based on user input
 */
async function generateLessonTemplate(): Promise<LessonTemplate> {
  console.log('\n📝 Lesson Scaffolding Tool\n')
  console.log('This tool will help you create a new lesson following the course structure.\n')

  // Get module and lesson number
  const moduleNumberStr = await prompt('Module number (e.g., 1, 2, 3): ')
  const moduleNumber = parseInt(moduleNumberStr, 10)
  
  const lessonNumberStr = await prompt('Lesson number in module (e.g., 1, 2, 3): ')
  const lessonNumber = parseInt(lessonNumberStr, 10)

  // Generate ID
  const id = `${moduleNumber}-${lessonNumber}`

  // Get basic info
  const title = await prompt('Lesson title: ')
  const description = await prompt('Lesson description (1-2 sentences): ')
  
  const durationStr = await prompt('Duration in minutes (optional, press Enter to skip): ')
  const duration = durationStr ? parseInt(durationStr, 10) : undefined

  // Get difficulty
  console.log('\nDifficulty options: beginner, intermediate, advanced')
  const difficultyInput = await prompt('Difficulty (default: beginner): ')
  const difficulty = (difficultyInput || 'beginner') as 'beginner' | 'intermediate' | 'advanced'

  // Get tags
  const tagsInput = await prompt('Tags (comma-separated, e.g., "DAX, Measures, Power Query"): ')
  const tags = tagsInput
    ? tagsInput.split(',').map(tag => tag.trim()).filter(Boolean)
    : []

  // Get topic
  const topic = await prompt('Topic (e.g., "DAX", "Data Modeling", "Visualizations"): ')

  // Get video URL (optional)
  const videoUrl = await prompt('Video URL (optional, press Enter to skip): ') || undefined

  // Get content sections
  console.log('\n--- Content Sections (optional) ---\n')
  const concept = await prompt('Concept (key concept explanation, press Enter to skip): ') || undefined
  const discussion = await prompt('Discussion (detailed explanation, press Enter to skip): ') || undefined
  
  // Build the lesson object
  const lesson: LessonTemplate = {
    id,
    moduleNumber,
    lessonNumber,
    title,
    description,
    duration,
    difficulty,
    tags: tags.length > 0 ? tags : undefined,
    topic: topic || undefined,
    videoUrl,
  }

  // Add content if provided
  if (concept || discussion) {
    lesson.content = {}
    if (concept) lesson.content.concept = concept
    if (discussion) lesson.content.discussion = discussion
  }

  return lesson
}

/**
 * Format lesson as TypeScript code
 */
function formatLessonAsCode(lesson: LessonTemplate): string {
  const lines: string[] = []
  
  lines.push('          {')
  lines.push(`            id: '${lesson.id}',`)
  lines.push(`            moduleNumber: ${lesson.moduleNumber},`)
  lines.push(`            lessonNumber: ${lesson.lessonNumber},`)
  lines.push(`            title: '${lesson.title.replace(/'/g, "\\'")}',`)
  lines.push(`            description: '${lesson.description.replace(/'/g, "\\'")}',`)
  
  if (lesson.duration) {
    lines.push(`            duration: ${lesson.duration},`)
  }
  
  if (lesson.difficulty) {
    lines.push(`            difficulty: '${lesson.difficulty}',`)
  }
  
  if (lesson.tags && lesson.tags.length > 0) {
    lines.push(`            tags: [${lesson.tags.map(tag => `'${tag.replace(/'/g, "\\'")}'`).join(', ')}],`)
  }
  
  if (lesson.topic) {
    lines.push(`            topic: '${lesson.topic.replace(/'/g, "\\'")}',`)
  }
  
  if (lesson.videoUrl) {
    lines.push(`            videoUrl: '${lesson.videoUrl}',`)
  }
  
  if (lesson.videoChapters && lesson.videoChapters.length > 0) {
    lines.push('            videoChapters: [')
    lesson.videoChapters.forEach((chapter, index) => {
      const comma = index < lesson.videoChapters!.length - 1 ? ',' : ''
      lines.push(`              { title: '${chapter.title}', timestamp: ${chapter.timestamp} }${comma}`)
    })
    lines.push('            ],')
  }
  
  if (lesson.content) {
    lines.push('            content: {')
    if (lesson.content.concept) {
      lines.push(`              concept: '${lesson.content.concept.replace(/'/g, "\\'")}',`)
    }
    if (lesson.content.discussion) {
      lines.push(`              discussion: '${lesson.content.discussion.replace(/'/g, "\\'")}',`)
    }
    if (lesson.content.keyPoints && lesson.content.keyPoints.length > 0) {
      lines.push('              keyPoints: [')
      lesson.content.keyPoints.forEach((point, index) => {
        const comma = index < lesson.content!.keyPoints!.length - 1 ? ',' : ''
        lines.push(`                '${point.replace(/'/g, "\\'")}'${comma}`)
      })
      lines.push('              ],')
    }
    if (lesson.content.labs && lesson.content.labs.length > 0) {
      lines.push('              labs: [')
      lesson.content.labs.forEach((lab, index) => {
        const comma = index < lesson.content!.labs!.length - 1 ? ',' : ''
        lines.push(`                '${lab.replace(/'/g, "\\'")}'${comma}`)
      })
      lines.push('              ],')
    }
    if (lesson.content.insiderTips && lesson.content.insiderTips.length > 0) {
      lines.push('              insiderTips: [')
      lesson.content.insiderTips.forEach((tip, index) => {
        const comma = index < lesson.content!.insiderTips!.length - 1 ? ',' : ''
        lines.push(`                '${tip.replace(/'/g, "\\'")}'${comma}`)
      })
      lines.push('              ],')
    }
    if (lesson.content.tables && lesson.content.tables.length > 0) {
      lines.push('              tables: [')
      lesson.content.tables.forEach((table, tableIndex) => {
        lines.push('                {')
        lines.push(`                  title: '${table.title.replace(/'/g, "\\'")}',`)
        lines.push(`                  headers: [${table.headers.map(h => `'${h.replace(/'/g, "\\'")}'`).join(', ')}],`)
        lines.push('                  rows: [')
        table.rows.forEach((row, rowIndex) => {
          const comma = rowIndex < table.rows.length - 1 ? ',' : ''
          lines.push(`                    [${row.map(cell => `'${cell.replace(/'/g, "\\'")}'`).join(', ')}]${comma}`)
        })
        lines.push('                  ],')
        lines.push(`                }${tableIndex < lesson.content!.tables!.length - 1 ? ',' : ''}`)
      })
      lines.push('              ],')
    }
    lines.push('            },')
  }
  
  if (lesson.exerciseMaterials && lesson.exerciseMaterials.length > 0) {
    lines.push('            exerciseMaterials: [')
    lesson.exerciseMaterials.forEach((material, index) => {
      const comma = index < lesson.exerciseMaterials!.length - 1 ? ',' : ''
      lines.push('              {')
      lines.push(`                name: '${material.name.replace(/'/g, "\\'")}',`)
      lines.push(`                url: '${material.url}',`)
      if (material.type) {
        lines.push(`                type: '${material.type}' as const,`)
      }
      lines.push(`              }${comma}`)
    })
    lines.push('            ],')
  }
  
  lines.push('          },')
  
  return lines.join('\n')
}

/**
 * Main function
 */
async function main() {
  try {
    const lesson = await generateLessonTemplate()
    
    console.log('\n' + '='.repeat(80))
    console.log('✅ Lesson Template Generated!\n')
    console.log('='.repeat(80) + '\n')
    
    const code = formatLessonAsCode(lesson)
    
    console.log('Copy this code into the appropriate module in lib/data/courseData.ts:\n')
    console.log(code)
    console.log('\n' + '='.repeat(80))
    
    // Optionally save to a file
    const save = await prompt('\nSave to file? (y/n): ')
    if (save.toLowerCase() === 'y') {
      const filename = `lesson-${lesson.id}-template.txt`
      const filepath = join(process.cwd(), filename)
      writeFileSync(filepath, code, 'utf-8')
      console.log(`\n✅ Saved to ${filename}`)
      console.log(`   You can copy the contents and paste into courseData.ts`)
    }
    
    console.log('\n💡 Next steps:')
    console.log('   1. Copy the code above')
    console.log('   2. Open lib/data/courseData.ts')
    console.log('   3. Find the correct module (module-' + lesson.moduleNumber + ')')
    console.log('   4. Paste the lesson into the lessons array')
    console.log('   5. Run: npm run validate-course-data')
    console.log('\n')
    
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

// Run if executed directly
if (require.main === module) {
  main()
}

export { generateLessonTemplate, formatLessonAsCode }

