# Remaining Tasks - Agent Assignments

## Overview
All 91 lessons have been refined with metadata, enhanced content, and improved design. The following tasks remain to complete the course.

---

## Task Breakdown by Agent

### 🔧 Agent A: Exercise Materials & Resources
**Priority: High** | **Estimated Effort: Medium**

**Objective:** Add exercise materials to all lab lessons that currently lack them.

**Tasks:**
1. Identify all lessons with `labs` arrays (hands-on labs)
2. Add `exerciseMaterials` arrays to each lab lesson
3. Include appropriate resources:
   - Sample datasets (Excel, CSV, .pbix files)
   - Solution files
   - Cheat sheets
   - Code templates (for M/DAX)
   - PDF guides

**Lessons Needing Exercise Materials:**
- Module 1: Lesson 1-2 (Installation Lab)
- Module 2: Lesson 2-2 (Connecting to Files)
- Module 2: Lesson 2-4 (Web/Cloud Services)
- Module 3: Lesson 3-2 (Basic Transformations)
- Module 5: Lesson 5-4 (Relationships Lab)
- Module 6: Lessons 6-3, 6-4, 6-6 (DAX Labs)
- Module 8: Lessons 8-1, 8-2 (CALCULATE Labs)
- Module 9: Lessons 9-2, 9-3, 9-4, 9-5 (Time Intelligence Labs)
- Module 10: Lessons 10-2, 10-4, 10-5 (Report Design Labs)
- Module 11: All 3 lessons (AI Visuals Labs)
- Module 13: Lessons 13-1, 13-2, 13-6 (Performance Labs)
- Module 14: Lessons 14-1, 14-2, 14-3 (Security Labs)
- Module 15: Lesson 15-2 (Calculation Groups)
- Module 16: Lesson 16-1 (CI/CD Lab)
- Module 17: All 4 lessons (Copilot Labs)

**Deliverable:**
- Updated `courseData.ts` with `exerciseMaterials` for ~30+ lab lessons
- Resource file structure documented
- Placeholder URLs that can be updated later

---

### 🎥 Agent B: Video Content Structure
**Priority: High** | **Estimated Effort: Low-Medium**

**Objective:** Add video URLs and chapter structures to all lessons.

**Tasks:**
1. Add `videoUrl` placeholder (or actual URL if available) to all 91 lessons
2. Create `videoChapters` arrays for lessons (estimate based on duration)
3. Structure chapters logically based on lesson content:
   - Introduction/Overview
   - Concept explanation
   - Demonstration/Lab walkthrough
   - Summary/Key takeaways

**Current Status:**
- ✅ 2 lessons have video chapters (0-1, 1-2)
- ❌ 89 lessons missing video chapters
- ❌ 88 lessons missing videoUrl

**Chapter Structure Template:**
```typescript
videoChapters: [
  { title: 'Introduction', timestamp: 0 },
  { title: 'Concept Overview', timestamp: X },
  { title: 'Hands-On Demonstration', timestamp: Y },
  { title: 'Key Takeaways', timestamp: Z }
]
```

**Deliverable:**
- All lessons have `videoUrl` field (placeholder or real)
- Estimated video chapters for all lessons
- Chapters mapped to lesson duration and content structure

---

### ✅ Agent C: Quiz Questions (Modules 5-18) - COMPLETE
**Priority: Medium** | **Estimated Effort: High** | **Status: ✅ COMPLETE**

**Objective:** Create comprehensive quiz questions for remaining 14 modules.

**Current Status:**
- ✅ Modules 0-4: Complete (5 module assessments)
- ✅ PL-300 Mock Exam: Complete (20 questions)
- ✅ Modules 5-18: Complete (14 module assessments with 77 questions)

**Tasks:**
1. Create module assessments for Modules 5-18
2. Each module needs 5-8 questions covering:
   - Key concepts
   - Practical application
   - Common mistakes
   - Critical thinking scenarios
3. Question types:
   - Multiple choice
   - True/false
   - Fill-in-the-blank (DAX formulas)
   - Scenario-based questions

**Modules to Complete:**
- Module 5: Data Modeling (6 questions)
- Module 6: Introduction to DAX (6 questions)
- Module 7: Intermediate DAX (6 questions)
- Module 8: Advanced DAX (8 questions - CALCULATE, ALL, etc.)
- Module 9: Time Intelligence (6 questions)
- Module 10: Report Design (6 questions)
- Module 11: AI Visuals (4 questions)
- Module 12: Power BI Service (5 questions)
- Module 13: Performance Tuning (6 questions)
- Module 14: Governance & Security (6 questions)
- Module 15: Advanced Data Modeling (5 questions)
- Module 16: Enterprise Deployment (5 questions)
- Module 17: Copilot & Fabric (4 questions)
- Module 18: Certification & Career (4 questions)

**Deliverable:**
- ✅ Updated `quizQuestions.ts` with 77 new questions
- ✅ All modules have assessments (19 total)
- ✅ Questions align with lesson content
- ✅ See AGENT-C-COMPLETE.md for full details

---

### ✅ Agent D: Data Validation & Quality Assurance
**Priority: Medium** | **Estimated Effort: Low**

**Objective:** Create validation scripts and ensure data consistency.

**Tasks:**
1. Create validation script to check:
   - All lessons have required metadata (difficulty, tags, topic)
   - Lab lessons have `labs` arrays
   - Lessons have appropriate content fields
   - No missing IDs or broken references
   - Tag consistency across modules
   - Difficulty progression makes sense

2. Fix any inconsistencies found:
   - Standardize tag naming
   - Ensure topic categorization is consistent
   - Verify all tables have proper headers/rows
   - Check for duplicate tags

**Validation Checks:**
- [ ] All 91 lessons have `difficulty`
- [ ] All 91 lessons have `tags` (min 2 tags)
- [ ] All 91 lessons have `topic`
- [ ] All lab lessons have `labs` array
- [ ] All lessons with DAX examples tagged correctly
- [ ] All "2025 Features" tagged consistently
- [ ] All table structures are valid
- [ ] No duplicate lesson IDs
- [ ] Module numbers match lesson module numbers

**Deliverable:**
- Validation script (TypeScript/JavaScript)
- Fix report with all inconsistencies
- Updated courseData.ts with fixes

---

### 🔍 Agent E: Content Audit & Polish
**Priority: Low** | **Estimated Effort: Medium**

**Objective:** Final content review and polish for consistency.

**Tasks:**
1. Review all lesson content for:
   - Consistent terminology
   - Proper grammar and formatting
   - Table titles are descriptive
   - Insider tips are practical and actionable
   - Key points align with concept/discussion

2. Cross-reference with `course-outline.md`:
   - Ensure all outline topics are covered
   - Verify lesson descriptions match outline
   - Confirm capstone requirements are clear

3. Tag standardization:
   - Review all tags for consistency
   - Create tag taxonomy document
   - Ensure PL-300 alignment tags are present

**Deliverable:**
- Content review report
- Tag taxonomy document
- Any necessary content refinements

---

## Task Priority Summary

### Phase 1 (Critical for Launch)
1. ✅ **Agent A: Exercise Materials** - Students need resources for labs
2. ✅ **Agent B: Video Structure** - Basic video placeholders needed

### Phase 2 (Important for Quality)
3. ✅ **Agent C: Quiz Questions** - Assessment coverage
4. ✅ **Agent D: Validation** - Ensure data integrity

### Phase 3 (Nice to Have)
5. ✅ **Agent E: Content Polish** - Final touches

---

## Estimated Timeline

| Agent | Task | Estimated Time |
|-------|------|---------------|
| A | Exercise Materials | 4-6 hours |
| B | Video Structure | 2-3 hours |
| C | Quiz Questions | 8-10 hours |
| D | Validation Script | 2-3 hours |
| E | Content Audit | 4-6 hours |
| **Total** | | **20-28 hours** |

---

## Files to Modify

1. `lib/data/courseData.ts` - Main course data (Agents A, B, D, E)
2. `lib/data/quizQuestions.ts` - Quiz data (Agent C)
3. `scripts/validate-course-data.ts` - New validation script (Agent D)
4. `docs/tag-taxonomy.md` - New tag documentation (Agent E)

---

## Notes

- All agents should work on separate branches if using Git
- Coordinate tag naming conventions (Agent A, D, E)
- Video URLs can be placeholders initially (Agent B)
- Quiz questions should reference specific lesson content (Agent C)
- Validation script should be runnable via npm script (Agent D)

