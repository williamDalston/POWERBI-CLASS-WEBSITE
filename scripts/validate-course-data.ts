#!/usr/bin/env ts-node

/**
 * Agent D: Data Validation & Quality Assurance
 * 
 * This script validates the course data structure and ensures:
 * - All lessons have required metadata (difficulty, tags, topic)
 * - Lab lessons have labs arrays
 * - No missing IDs or broken references
 * - Tag consistency across modules
 * - Difficulty progression makes sense
 * - Table structures are valid
 * - No duplicate lesson IDs
 * - Module numbers match lesson module numbers
 */

import { courseData, Lesson, Module, Part } from '../lib/data/courseData'

interface ValidationError {
  type: 'error' | 'warning'
  category: string
  message: string
  lessonId?: string
  moduleId?: string
  details?: any
}

interface ValidationReport {
  errors: ValidationError[]
  warnings: ValidationError[]
  summary: {
    totalLessons: number
    totalModules: number
    lessonsWithIssues: number
    modulesWithIssues: number
  }
  tagStatistics: {
    allTags: Set<string>
    tagFrequency: Map<string, number>
    inconsistentTags: string[]
  }
  difficultyProgression: {
    moduleNumber: number
    difficulties: string[]
    issues: string[]
  }[]
}

const errors: ValidationError[] = []
const warnings: ValidationError[] = []
const allLessonIds = new Set<string>()
const allTags = new Set<string>()
const tagFrequency = new Map<string, number>()

/**
 * Main validation function
 */
function validateCourseData(): ValidationReport {
  console.log('🔍 Starting Course Data Validation...\n')
  
  let totalLessons = 0
  const lessonsWithIssues = new Set<string>()
  const modulesWithIssues = new Set<string>()

  // Collect all lessons and modules
  courseData.forEach((part: Part) => {
    part.modules.forEach((module: Module) => {
      validateModule(module, part, lessonsWithIssues, modulesWithIssues)
      totalLessons += module.lessons.length
    })
  })

  // Validate cross-module concerns
  validateTagConsistency()
  validateDifficultyProgression()

  // Generate tag statistics
  const tagStats = generateTagStatistics()

  // Generate difficulty progression report
  const difficultyProgression = generateDifficultyProgression()

  console.log(`\n✅ Validation Complete!\n`)
  console.log(`📊 Summary:`)
  console.log(`   Total Lessons: ${totalLessons}`)
  console.log(`   Total Modules: ${courseData.reduce((sum, p) => sum + p.modules.length, 0)}`)
  console.log(`   Errors Found: ${errors.length}`)
  console.log(`   Warnings Found: ${warnings.length}`)
  console.log(`   Lessons with Issues: ${lessonsWithIssues.size}`)
  console.log(`   Modules with Issues: ${modulesWithIssues.size}\n`)

  return {
    errors,
    warnings,
    summary: {
      totalLessons,
      totalModules: courseData.reduce((sum, p) => sum + p.modules.length, 0),
      lessonsWithIssues: lessonsWithIssues.size,
      modulesWithIssues: modulesWithIssues.size,
    },
    tagStatistics: tagStats,
    difficultyProgression,
  }
}

/**
 * Validate a single module
 */
function validateModule(
  module: Module,
  part: Part,
  lessonsWithIssues: Set<string>,
  modulesWithIssues: Set<string>
) {
  // Check module structure
  if (!module.id || !module.title || !module.description) {
    errors.push({
      type: 'error',
      category: 'Module Structure',
      message: `Module ${module.moduleNumber} is missing required fields (id, title, or description)`,
      moduleId: module.id,
    })
    modulesWithIssues.add(module.id || `module-${module.moduleNumber}`)
  }

  // Validate each lesson
  module.lessons.forEach((lesson: Lesson) => {
    const hasIssues = validateLesson(lesson, module, part)
    if (hasIssues) {
      lessonsWithIssues.add(lesson.id)
    }
  })
}

/**
 * Validate a single lesson
 */
function validateLesson(lesson: Lesson, module: Module, part: Part): boolean {
  let hasIssues = false

  // Check for duplicate IDs
  if (allLessonIds.has(lesson.id)) {
    errors.push({
      type: 'error',
      category: 'Duplicate ID',
      message: `Duplicate lesson ID found: ${lesson.id}`,
      lessonId: lesson.id,
      moduleId: module.id,
    })
    hasIssues = true
  } else {
    allLessonIds.add(lesson.id)
  }

  // Validate lesson structure
  if (!lesson.id || !lesson.title || !lesson.description) {
    errors.push({
      type: 'error',
      category: 'Lesson Structure',
      message: `Lesson ${lesson.id} is missing required fields (id, title, or description)`,
      lessonId: lesson.id,
      moduleId: module.id,
    })
    hasIssues = true
  }

  // Check module number consistency
  if (lesson.moduleNumber !== module.moduleNumber) {
    errors.push({
      type: 'error',
      category: 'Module Number Mismatch',
      message: `Lesson ${lesson.id} has moduleNumber ${lesson.moduleNumber} but belongs to module ${module.moduleNumber}`,
      lessonId: lesson.id,
      moduleId: module.id,
    })
    hasIssues = true
  }

  // Check required metadata: difficulty
  if (!lesson.difficulty) {
    errors.push({
      type: 'error',
      category: 'Missing Metadata',
      message: `Lesson ${lesson.id} is missing required 'difficulty' field`,
      lessonId: lesson.id,
      moduleId: module.id,
    })
    hasIssues = true
  } else if (!['beginner', 'intermediate', 'advanced'].includes(lesson.difficulty)) {
    errors.push({
      type: 'error',
      category: 'Invalid Metadata',
      message: `Lesson ${lesson.id} has invalid difficulty: ${lesson.difficulty}. Must be 'beginner', 'intermediate', or 'advanced'`,
      lessonId: lesson.id,
      moduleId: module.id,
    })
    hasIssues = true
  }

  // Check required metadata: tags
  if (!lesson.tags || lesson.tags.length === 0) {
    errors.push({
      type: 'error',
      category: 'Missing Metadata',
      message: `Lesson ${lesson.id} is missing 'tags' field or has no tags`,
      lessonId: lesson.id,
      moduleId: module.id,
    })
    hasIssues = true
  } else if (lesson.tags.length < 2) {
    warnings.push({
      type: 'warning',
      category: 'Metadata Quality',
      message: `Lesson ${lesson.id} has less than 2 tags (recommended minimum)`,
      lessonId: lesson.id,
      moduleId: module.id,
      details: { tags: lesson.tags },
    })
  } else {
    // Collect tags for statistics
    lesson.tags.forEach(tag => {
      allTags.add(tag)
      tagFrequency.set(tag, (tagFrequency.get(tag) || 0) + 1)
    })
  }

  // Check required metadata: topic
  if (!lesson.topic) {
    errors.push({
      type: 'error',
      category: 'Missing Metadata',
      message: `Lesson ${lesson.id} is missing required 'topic' field`,
      lessonId: lesson.id,
      moduleId: module.id,
    })
    hasIssues = true
  }

  // Check content structure
  if (lesson.content) {
    // Validate tables
    if (lesson.content.tables) {
      lesson.content.tables.forEach((table, index) => {
        if (!table.title || !table.headers || !table.rows) {
          errors.push({
            type: 'error',
            category: 'Invalid Table Structure',
            message: `Lesson ${lesson.id} has invalid table at index ${index}`,
            lessonId: lesson.id,
            moduleId: module.id,
            details: { tableIndex: index },
          })
          hasIssues = true
        } else {
          // Check if rows match header count
          const headerCount = table.headers.length
          table.rows.forEach((row, rowIndex) => {
            if (row.length !== headerCount) {
              errors.push({
                type: 'error',
                category: 'Table Row Mismatch',
                message: `Lesson ${lesson.id} table "${table.title}" row ${rowIndex} has ${row.length} columns but headers have ${headerCount}`,
                lessonId: lesson.id,
                moduleId: module.id,
                details: { tableTitle: table.title, rowIndex, expected: headerCount, actual: row.length },
              })
              hasIssues = true
            }
          })
        }
      })
    }

    // Check if lesson has labs array but no lab content
    if (lesson.content.labs && lesson.content.labs.length === 0) {
      warnings.push({
        type: 'warning',
        category: 'Content Quality',
        message: `Lesson ${lesson.id} has empty labs array`,
        lessonId: lesson.id,
        moduleId: module.id,
      })
    }
  }

  // Special validation: If lesson title contains "Lab" or "Hands-On", check for labs array
  const titleLower = lesson.title.toLowerCase()
  const isLabLesson = titleLower.includes('lab') || 
                      titleLower.includes('hands-on') || 
                      (lesson.content?.labs && lesson.content.labs.length > 0)

  if (isLabLesson && (!lesson.content?.labs || lesson.content.labs.length === 0)) {
    warnings.push({
      type: 'warning',
      category: 'Lab Content',
      message: `Lesson ${lesson.id} appears to be a lab lesson but has no labs array`,
      lessonId: lesson.id,
      moduleId: module.id,
      details: { title: lesson.title },
    })
  }

  // Check for DAX-related content and tags
  const contentText = JSON.stringify(lesson.content || '').toLowerCase()
  const hasDAXContent = contentText.includes('dax') || contentText.includes('measure') || contentText.includes('calculated')
  const hasDAXTag = lesson.tags?.some(tag => tag.toLowerCase().includes('dax'))

  if (hasDAXContent && !hasDAXTag) {
    warnings.push({
      type: 'warning',
      category: 'Tag Consistency',
      message: `Lesson ${lesson.id} contains DAX content but is not tagged with 'DAX'`,
      lessonId: lesson.id,
      moduleId: module.id,
    })
  }

  // Check for 2025 Features
  const has2025Content = contentText.includes('2025') || 
                         contentText.includes('copilot') || 
                         contentText.includes('fabric') ||
                         contentText.includes('onelake')
  const has2025Tag = lesson.tags?.some(tag => 
    tag.toLowerCase().includes('2025') || 
    tag.toLowerCase().includes('new feature') ||
    tag.toLowerCase().includes('copilot') ||
    tag.toLowerCase().includes('fabric')
  )

  if (has2025Content && !has2025Tag) {
    warnings.push({
      type: 'warning',
      category: 'Tag Consistency',
      message: `Lesson ${lesson.id} mentions 2025 features but is not tagged accordingly`,
      lessonId: lesson.id,
      moduleId: module.id,
    })
  }

  return hasIssues
}

/**
 * Validate tag consistency across modules
 */
function validateTagConsistency() {
  // Check for inconsistent tag naming (e.g., "DAX" vs "Dax" vs "dax")
  const tagVariations = new Map<string, Set<string>>()
  
  allTags.forEach(tag => {
    const normalized = tag.toLowerCase().trim()
    if (!tagVariations.has(normalized)) {
      tagVariations.set(normalized, new Set())
    }
    tagVariations.get(normalized)!.add(tag)
  })

  tagVariations.forEach((variations, normalized) => {
    if (variations.size > 1) {
      warnings.push({
        type: 'warning',
        category: 'Tag Consistency',
        message: `Inconsistent tag naming found: ${Array.from(variations).join(', ')}`,
        details: { variations: Array.from(variations) },
      })
    }
  })
}

/**
 * Validate difficulty progression
 */
function validateDifficultyProgression() {
  // Group lessons by module and check difficulty progression
  const moduleDifficulties = new Map<number, string[]>()

  courseData.forEach((part: Part) => {
    part.modules.forEach((module: Module) => {
      const difficulties: string[] = []
      module.lessons.forEach((lesson: Lesson) => {
        if (lesson.difficulty) {
          difficulties.push(lesson.difficulty)
        }
      })
      if (difficulties.length > 0) {
        moduleDifficulties.set(module.moduleNumber, difficulties)
      }
    })
  })

  // Check if difficulty generally increases across modules
  const moduleNumbers = Array.from(moduleDifficulties.keys()).sort((a, b) => a - b)
  
  for (let i = 1; i < moduleNumbers.length; i++) {
    const prevModule = moduleNumbers[i - 1]
    const currentModule = moduleNumbers[i]
    
    const prevAvg = getDifficultyAverage(moduleDifficulties.get(prevModule)!)
    const currentAvg = getDifficultyAverage(moduleDifficulties.get(currentModule)!)

    // Allow some variation but flag major regressions
    if (currentAvg < prevAvg - 0.5) {
      warnings.push({
        type: 'warning',
        category: 'Difficulty Progression',
        message: `Module ${currentModule} appears easier than Module ${prevModule} (difficulty regression)`,
        moduleId: `module-${currentModule}`,
        details: { 
          previous: prevAvg.toFixed(2), 
          current: currentAvg.toFixed(2) 
        },
      })
    }
  }
}

/**
 * Get average difficulty as a number (beginner=1, intermediate=2, advanced=3)
 */
function getDifficultyAverage(difficulties: string[]): number {
  const difficultyMap: Record<string, number> = {
    beginner: 1,
    intermediate: 2,
    advanced: 3,
  }
  
  const sum = difficulties.reduce((acc, d) => acc + (difficultyMap[d] || 2), 0)
  return sum / difficulties.length
}

/**
 * Generate tag statistics
 */
function generateTagStatistics() {
  // Find tags that might be inconsistent
  const inconsistentTags: string[] = []
  
  const tagVariations = new Map<string, Set<string>>()
  allTags.forEach(tag => {
    const normalized = tag.toLowerCase().trim()
    if (!tagVariations.has(normalized)) {
      tagVariations.set(normalized, new Set())
    }
    tagVariations.get(normalized)!.add(tag)
  })

  tagVariations.forEach((variations, normalized) => {
    if (variations.size > 1) {
      inconsistentTags.push(Array.from(variations).join(' / '))
    }
  })

  return {
    allTags,
    tagFrequency,
    inconsistentTags,
  }
}

/**
 * Generate difficulty progression report
 */
function generateDifficultyProgression() {
  const progression: ValidationReport['difficultyProgression'] = []

  courseData.forEach((part: Part) => {
    part.modules.forEach((module: Module) => {
      const difficulties: string[] = []
      const issues: string[] = []

      module.lessons.forEach((lesson: Lesson) => {
        if (lesson.difficulty) {
          difficulties.push(lesson.difficulty)
        } else {
          issues.push(`Lesson ${lesson.id} missing difficulty`)
        }
      })

      if (difficulties.length > 0) {
        const uniqueDifficulties = [...new Set(difficulties)]
        progression.push({
          moduleNumber: module.moduleNumber,
          difficulties: uniqueDifficulties,
          issues,
        })
      }
    })
  })

  return progression.sort((a, b) => a.moduleNumber - b.moduleNumber)
}

/**
 * Print detailed report
 */
function printDetailedReport(report: ValidationReport) {
  console.log('\n' + '='.repeat(80))
  console.log('📋 DETAILED VALIDATION REPORT')
  console.log('='.repeat(80) + '\n')

  if (errors.length > 0) {
    console.log(`❌ ERRORS (${errors.length}):\n`)
    errors.forEach((error, index) => {
      console.log(`${index + 1}. [${error.category}] ${error.message}`)
      if (error.lessonId) console.log(`   Lesson ID: ${error.lessonId}`)
      if (error.moduleId) console.log(`   Module ID: ${error.moduleId}`)
      if (error.details) console.log(`   Details:`, JSON.stringify(error.details, null, 2))
      console.log()
    })
  }

  if (warnings.length > 0) {
    console.log(`⚠️  WARNINGS (${warnings.length}):\n`)
    warnings.forEach((warning, index) => {
      console.log(`${index + 1}. [${warning.category}] ${warning.message}`)
      if (warning.lessonId) console.log(`   Lesson ID: ${warning.lessonId}`)
      if (warning.moduleId) console.log(`   Module ID: ${warning.moduleId}`)
      if (warning.details) console.log(`   Details:`, JSON.stringify(warning.details, null, 2))
      console.log()
    })
  }

  if (report.tagStatistics.inconsistentTags.length > 0) {
    console.log('\n🏷️  TAG INCONSISTENCIES:\n')
    report.tagStatistics.inconsistentTags.forEach((tag, index) => {
      console.log(`${index + 1}. ${tag}`)
    })
    console.log()
  }

  // Print most common tags
  console.log('\n📊 TOP 10 MOST USED TAGS:\n')
  const sortedTags = Array.from(report.tagStatistics.tagFrequency.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
  
  sortedTags.forEach(([tag, count], index) => {
    console.log(`${index + 1}. ${tag}: ${count} lessons`)
  })
}

// Run validation if script is executed directly
try {
  const report = validateCourseData()
  printDetailedReport(report)
  
  // Exit with error code if there are errors
  if (errors.length > 0) {
    console.log(`\n❌ Validation failed with ${errors.length} error(s)`)
    process.exit(1)
  } else {
    console.log(`\n✅ Validation passed! (${warnings.length} warning(s) found)`)
    process.exit(0)
  }
} catch (error) {
  console.error('❌ Validation script error:', error)
  process.exit(1)
}

// Export types for potential reuse (uncomment if needed)
// export type { ValidationReport, ValidationError }

