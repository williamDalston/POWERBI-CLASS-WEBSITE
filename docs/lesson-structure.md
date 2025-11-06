# Lesson Structure Documentation

This document describes the structure and fields available when creating lessons for the Power BI course.

## Quick Reference

```typescript
interface Lesson {
  // Required Fields
  id: string                    // Format: "moduleNumber-lessonNumber" (e.g., "1-2")
  moduleNumber: number          // Must match the module this lesson belongs to
  lessonNumber: number          // Sequential number within the module
  title: string                 // Lesson title
  description: string           // 1-2 sentence description
  
  // Recommended Fields
  duration?: number             // Duration in minutes
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  tags?: string[]               // At least 2 tags recommended
  topic?: string                // Main topic (e.g., "DAX", "Data Modeling")
  
  // Video Content
  videoUrl?: string             // YouTube/Vimeo URL
  videoChapters?: Array<{       // Video chapter markers
    title: string
    timestamp: number           // Timestamp in seconds
  }>
  
  // Lesson Content
  content?: {
    concept?: string            // Key concept explanation
    discussion?: string         // Detailed discussion/explanation
    keyPoints?: string[]        // Bullet points summarizing key takeaways
    labs?: string[]             // Hands-on lab instructions
    insiderTips?: string[]      // Pro tips and best practices
    tables?: Array<{            // Comparison or reference tables
      title: string
      headers: string[]
      rows: string[][]
    }>
  }
  
  // Exercise Materials
  exerciseMaterials?: Array<{
    name: string
    url: string
    type?: 'pdf' | 'dataset' | 'code' | 'cheatsheet' | 'pbix' | 'other'
  }>
  
  // Progress Tracking (auto-populated)
  isCompleted?: boolean
  timeSpent?: number
  lastAccessed?: string
  completionDate?: string
}
```

## Field Descriptions

### Required Fields

#### `id`
- **Format**: `"moduleNumber-lessonNumber"` (e.g., `"1-2"`, `"5-3"`)
- **Must be unique** across all lessons
- Used for routing and references

#### `moduleNumber`
- Must match the module number this lesson belongs to
- Used for validation

#### `lessonNumber`
- Sequential number within the module (starts at 1)
- Used for ordering lessons

#### `title`
- Clear, descriptive lesson title
- Should indicate what students will learn

#### `description`
- 1-2 sentence summary of the lesson
- Appears in course outlines and previews

### Recommended Fields

#### `duration`
- Estimated lesson duration in minutes
- Helps students plan their time

#### `difficulty`
- **Values**: `'beginner'`, `'intermediate'`, `'advanced'`
- Required for validation
- Should progress logically through modules

#### `tags`
- **Minimum**: 2 tags recommended
- Used for search and filtering
- Examples: `['DAX', 'Measures', 'Power Query']`
- Common tags:
  - `'DAX'` - For DAX-related lessons
  - `'Power Query'` - For ETL lessons
  - `'Data Modeling'` - For modeling lessons
  - `'Visualizations'` - For report design
  - `'2025 Features'` - For new features

#### `topic`
- Main topic category
- Examples: `'DAX'`, `'Data Modeling'`, `'Visualizations'`, `'Power Query'`

### Video Content

#### `videoUrl`
- YouTube or Vimeo URL
- If not provided, lesson will still work but won't have video

#### `videoChapters`
- Array of chapter markers with title and timestamp
- Helps students navigate long videos
- Timestamp in seconds from video start

### Content Structure

#### `content.concept`
- Brief explanation of the key concept
- Usually 1-2 paragraphs

#### `content.discussion`
- Detailed discussion and explanation
- Can include examples, use cases, best practices

#### `content.keyPoints`
- Array of bullet points
- Summarizes main takeaways
- Usually 3-5 points

#### `content.labs`
- Array of lab instructions
- Step-by-step hands-on exercises
- Required for lessons with "Lab" or "Hands-On" in title

#### `content.insiderTips`
- Array of pro tips
- Best practices, common pitfalls, insider knowledge

#### `content.tables`
- Array of comparison or reference tables
- Useful for comparing concepts, features, or tools

### Exercise Materials

#### `exerciseMaterials`
- Array of downloadable resources
- Each material has:
  - `name`: Display name
  - `url`: Path to resource (usually `/resources/...`)
  - `type`: Optional type for categorization

## Examples

### Basic Lesson

```typescript
{
  id: '1-1',
  moduleNumber: 1,
  lessonNumber: 1,
  title: 'Introduction to Power BI',
  description: 'Learn what Power BI is and why it matters.',
  duration: 15,
  difficulty: 'beginner',
  tags: ['BI Fundamentals', 'Introduction'],
  topic: 'Business Intelligence',
}
```

### Lesson with Full Content

```typescript
{
  id: '6-1',
  moduleNumber: 6,
  lessonNumber: 1,
  title: 'What is DAX?',
  description: 'Introduction to Data Analysis Expressions (DAX) formula language.',
  duration: 20,
  difficulty: 'beginner',
  tags: ['DAX', 'Measures', 'Formulas'],
  topic: 'DAX',
  videoUrl: 'https://www.youtube.com/watch?v=...',
  videoChapters: [
    { title: 'Introduction to DAX', timestamp: 0 },
    { title: 'DAX Syntax', timestamp: 300 },
    { title: 'First Measure', timestamp: 600 },
  ],
  content: {
    concept: 'DAX is a formula language used in Power BI for calculations.',
    discussion: 'DAX allows you to create calculated columns and measures...',
    keyPoints: [
      'DAX is similar to Excel formulas',
      'Measures are calculated at query time',
      'DAX operates on entire tables, not cells',
    ],
    insiderTips: [
      'Always create explicit measures instead of implicit ones',
      'Use DAX variables to improve readability',
    ],
  },
  exerciseMaterials: [
    {
      name: 'DAX Cheat Sheet',
      url: '/resources/dax-cheatsheet.pdf',
      type: 'cheatsheet',
    },
  ],
}
```

### Lab Lesson

```typescript
{
  id: '3-2',
  moduleNumber: 3,
  lessonNumber: 2,
  title: 'Basic Table Transformations (Hands-On Lab)',
  description: 'Practice cleaning and transforming data using Power Query.',
  duration: 30,
  difficulty: 'beginner',
  tags: ['Power Query', 'Data Transformation', 'Lab'],
  topic: 'Power Query',
  content: {
    concept: 'Power Query provides visual tools for data transformation.',
    discussion: 'This lab will guide you through common transformations...',
    labs: [
      'Connect to the sample dataset',
      'Remove unnecessary columns',
      'Filter out null values',
      'Promote first row as headers',
      'Change data types',
    ],
  },
  exerciseMaterials: [
    {
      name: 'Sample Dataset',
      url: '/resources/lab-3-2-data.xlsx',
      type: 'dataset',
    },
    {
      name: 'Solution File',
      url: '/resources/lab-3-2-solution.pbix',
      type: 'pbix',
    },
  ],
}
```

## Best Practices

1. **Always include required fields**: `id`, `moduleNumber`, `lessonNumber`, `title`, `description`

2. **Include metadata**: `difficulty`, `tags` (at least 2), `topic` - these are validated

3. **Use consistent tags**: Check existing lessons for tag naming conventions

4. **Progressive difficulty**: Earlier modules should be `beginner`, progressing to `advanced`

5. **Lab lessons**: If title includes "Lab" or "Hands-On", include `content.labs` array

6. **DAX lessons**: Should include `'DAX'` tag if discussing DAX concepts

7. **2025 features**: Should include appropriate tags for new features

8. **Video chapters**: Add chapters for videos longer than 10 minutes

9. **Exercise materials**: Provide both starter datasets and solution files for labs

10. **Test after adding**: Run `npm run validate` to check for issues

## Tools

### Generate a New Lesson

```bash
npm run scaffold-lesson
```

This interactive tool will prompt you for lesson information and generate properly formatted code.

### Validate Course Data

```bash
npm run validate
```

Runs validation to check for:
- Missing required fields
- Duplicate IDs
- Tag consistency
- Difficulty progression
- Table structure validity

## Adding a Lesson to courseData.ts

1. Open `lib/data/courseData.ts`
2. Find the correct module in the `courseData` array
3. Locate the `lessons` array for that module
4. Add your new lesson object (use scaffold tool or copy example)
5. Ensure lesson numbers are sequential
6. Run `npm run validate` to check for errors

## Common Issues

### Duplicate IDs
- Ensure each lesson has a unique `id`
- Format: `"moduleNumber-lessonNumber"`

### Module Number Mismatch
- Lesson's `moduleNumber` must match the module it's in

### Missing Tags
- Each lesson needs at least 2 tags
- Check existing lessons for consistent tag names

### Difficulty Progression
- Modules should generally increase in difficulty
- Validation will warn about major regressions

---

For questions or issues, refer to the validation script output or check existing lessons for examples.





