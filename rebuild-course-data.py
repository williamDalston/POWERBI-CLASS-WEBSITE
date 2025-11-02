#!/usr/bin/env python3
"""
Rebuild courseData.ts from course-outline.md

This script parses the course outline and generates a complete TypeScript courseData.ts file.
"""

import re
import json

def escape_js_string(s):
    """Escape string for JavaScript"""
    if not s:
        return '""'
    s = str(s)
    s = s.replace('\\', '\\\\')
    s = s.replace('"', '\\"')
    s = s.replace('\n', '\\n')
    s = s.replace('\r', '')
    # Remove trailing reference numbers like "8" or "10" 
    s = re.sub(r'(\d+)$', '', s)
    s = s.rstrip('. ')
    return f'"{s}"'

def parse_outline(content):
    """Parse the course outline content"""
    lessons = []
    
    # Find all lesson blocks
    lesson_blocks = re.findall(
        r'Lesson (\d+)\.(\d+): (.+?)(?=Lesson \d+\.\d+|Module \d+:|$)',
        content,
        re.DOTALL
    )
    
    for module_num_str, lesson_num_str, rest in lesson_blocks:
        module_num = int(module_num_str)
        lesson_num = int(lesson_num_str)
        
        # Extract title (before Concept:)
        title_match = re.match(r'(.+?)(?=Concept:|Discussion:)', rest, re.DOTALL)
        if title_match:
            title = title_match.group(1).strip()
        else:
            title = rest[:100].strip()
        
        # Extract concept
        concept_match = re.search(r'Concept: (.+?)(?=Discussion:|Lesson|\Z)', rest, re.DOTALL)
        concept = ''
        if concept_match:
            concept = re.sub(r'\d+$', '', concept_match.group(1).strip())  # Remove trailing numbers
        
        # Extract discussion
        discussion_match = re.search(r'Discussion: (.+?)(?=Concept:|Lesson|Module|Table:|Lab:|\Z)', rest, re.DOTALL)
        discussion = ''
        if discussion_match:
            discussion = re.sub(r'\d+$', '', discussion_match.group(1).strip())  # Remove trailing numbers
        
        lessons.append({
            'module': module_num,
            'lesson': lesson_num,
            'title': title,
            'concept': concept,
            'discussion': discussion
        })
    
    return lessons

def determine_difficulty(module_num):
    """Determine difficulty based on module number"""
    if module_num <= 4:
        return 'beginner'
    elif module_num <= 11:
        return 'intermediate'
    else:
        return 'advanced'

def get_tags_for_lesson(title, concept, discussion):
    """Extract tags based on lesson content"""
    tags = set()
    text = (str(title) + " " + str(concept) + " " + str(discussion)).lower()
    
    # Tag mapping
    if 'dax' in text:
        tags.add('DAX')
    if 'power query' in text or 'etl' in text:
        tags.add('Power Query')
    if 'data modeling' in text or 'star schema' in text or 'fact' in text or 'dimension' in text:
        tags.add('Data Modeling')
    if 'visualization' in text or 'report' in text or 'dashboard' in text or 'chart' in text:
        tags.add('Visualizations')
    if 'security' in text or 'rls' in text or 'row-level' in text:
        tags.add('Security')
    if 'fabric' in text or 'onelake' in text:
        tags.add('Microsoft Fabric')
    if 'copilot' in text or 'ai visual' in text:
        tags.add('AI Features')
    if '2025' in text:
        tags.add('2025 Features')
    if 'time intelligence' in text or 'ytd' in text or 'yoy' in text:
        tags.add('Time Intelligence')
    if 'performance' in text or 'optimization' in text:
        tags.add('Performance')
    
    # Add general tags if none found
    if not tags:
        tags.add('Power BI Fundamentals')
    
    return list(tags)

def get_topic_for_lesson(title, concept, discussion):
    """Determine main topic"""
    text = (str(title) + " " + str(concept) + " " + str(discussion)).lower()
    
    if 'dax' in text:
        return 'DAX'
    elif 'power query' in text or 'etl' in text:
        return 'Power Query'
    elif 'modeling' in text or 'schema' in text or 'relationship' in text:
        return 'Data Modeling'
    elif 'visualization' in text or 'report' in text or 'dashboard' in text:
        return 'Visualizations'
    elif 'security' in text or 'rls' in text:
        return 'Security'
    elif 'service' in text or 'workspace' in text:
        return 'Power BI Service'
    elif 'fabric' in text or 'onelake' in text:
        return 'Microsoft Fabric'
    elif 'copilot' in text or 'ai' in text:
        return 'AI Features'
    elif 'performance' in text or 'optimization' in text:
        return 'Performance'
    else:
        return 'Business Intelligence'

def estimate_duration(concept, discussion):
    """Estimate lesson duration based on content"""
    content_length = len(str(concept)) + len(str(discussion))
    if content_length < 500:
        return 10
    elif content_length < 1500:
        return 20
    elif content_length < 3000:
        return 30
    else:
        return 45

def generate_course_data(lessons):
    """Generate the complete TypeScript file"""
    
    output = []
    output.append("export interface VideoChapter {")
    output.append("  title: string")
    output.append("  timestamp: number // in seconds")
    output.append("}")
    output.append("")
    output.append("export interface Lesson {")
    output.append("  id: string")
    output.append("  title: string")
    output.append("  description: string")
    output.append("  moduleNumber: number")
    output.append("  lessonNumber: number")
    output.append("  duration?: number // in minutes")
    output.append("  videoUrl?: string")
    output.append("  videoChapters?: VideoChapter[]")
    output.append("  content?: {")
    output.append("    concept?: string")
    output.append("    discussion?: string")
    output.append("    tables?: Array<{")
    output.append("      title: string")
    output.append("      headers: string[]")
    output.append("      rows: string[][]")
    output.append("    }>")
    output.append("    labs?: string[]")
    output.append("    keyPoints?: string[]")
    output.append("    insiderTips?: string[]")
    output.append("  }")
    output.append("  exerciseMaterials?: Array<{")
    output.append("    name: string")
    output.append("    url: string")
    output.append("    type?: 'pdf' | 'dataset' | 'code' | 'cheatsheet' | 'pbix' | 'other'")
    output.append("  }>")
    output.append("  isCompleted?: boolean")
    output.append("  tags?: string[]")
    output.append("  difficulty?: 'beginner' | 'intermediate' | 'advanced'")
    output.append("  topic?: string")
    output.append("  timeSpent?: number")
    output.append("  lastAccessed?: string")
    output.append("  completionDate?: string")
    output.append("}")
    output.append("")
    output.append("export interface Module {")
    output.append("  id: string")
    output.append("  title: string")
    output.append("  description: string")
    output.append("  moduleNumber: number")
    output.append("  lessons: Lesson[]")
    output.append("}")
    output.append("")
    output.append("export interface Part {")
    output.append("  id: string")
    output.append("  title: string")
    output.append("  description: string")
    output.append("  modules: Module[]")
    output.append("}")
    output.append("")
    
    # Group lessons by module
    modules_dict = {}
    for lesson in lessons:
        module_num = lesson['module']
        if module_num not in modules_dict:
            modules_dict[module_num] = []
        modules_dict[module_num].append(lesson)
    
    # Determine part boundaries
    part1_modules = [0, 1, 2, 3, 4]
    part2_modules = [5, 6, 7, 8, 9, 10, 11]
    part3_modules = [12, 13, 14, 15, 16, 17, 18]
    
    # Module titles
    module_titles = {
        0: "Setting the Stage - Your Journey to Mastery",
        1: "The Power BI Ecosystem: Components and Setup",
        2: "Data Acquisition – Connecting to Your World",
        3: "Data Transformation – The Power Query Editor",
        4: "Data Visualization – Building Your First Report",
        5: "Data Modeling – The Relational Foundation",
        6: "Introduction to DAX (Data Analysis Expressions)",
        7: "Intermediate DAX – Understanding Evaluation Context",
        8: "Advanced DAX – Modifying Filter Context",
        9: "Specialized DAX – Time Intelligence",
        10: "Report Design and Data Storytelling",
        11: "Deep-Dive with AI Visuals & Insights",
        12: "The Power BI Service – Collaboration and Deployment",
        13: "Optimization and Performance Tuning",
        14: "Governance and Security",
        15: "Advanced Data Modeling",
        16: "Enterprise Deployment and Integration",
        17: "Copilot & Fabric Mastery",
        18: "Certification & Career",
    }
    
    # Generate courseData array
    output.append("export const courseData: Part[] = [")
    
    # Part 0 & 1: Beginner
    output.append("  {")
    output.append('    id: "part-0",')
    output.append('    title: "Course Introduction and Foundations",')
    output.append('    description: "Foundation of BI and course orientation",')
    output.append("    modules: [")
    
    for module_num in sorted([m for m in modules_dict.keys() if m in part1_modules]):
        lessons_in_module = modules_dict[module_num]
        output.append("      {")
        output.append(f'        id: "module-{module_num}",')
        output.append(f'        title: "{module_titles.get(module_num, f"Module {module_num}")}",')
        output.append(f'        description: "Power BI fundamentals and basics",')
        output.append(f"        moduleNumber: {module_num},")
        output.append("        lessons: [")
        
        for lesson in sorted(lessons_in_module, key=lambda x: x['lesson']):
            lesson_num = lesson['lesson']
            difficulty = determine_difficulty(module_num)
            tags = get_tags_for_lesson(lesson['title'], lesson.get('concept', ''), lesson.get('discussion', ''))
            topic = get_topic_for_lesson(lesson['title'], lesson.get('concept', ''), lesson.get('discussion', ''))
            duration = estimate_duration(lesson.get('concept', ''), lesson.get('discussion', ''))
            description = lesson['concept'][:200] if lesson.get('concept') else lesson['title']
            
            output.append("          {")
            output.append(f'            id: "{module_num}-{lesson_num}",')
            output.append(f"            moduleNumber: {module_num},")
            output.append(f"            lessonNumber: {lesson_num},")
            output.append(f"            title: {escape_js_string(lesson['title'])},")
            output.append(f"            description: {escape_js_string(description)},")
            output.append(f"            duration: {duration},")
            output.append(f"            difficulty: '{difficulty}',")
            output.append(f"            tags: {json.dumps(tags)},")
            output.append(f"            topic: '{topic}',")
            
            # Add content if available
            if lesson.get('concept') or lesson.get('discussion'):
                output.append("            content: {")
                if lesson.get('concept'):
                    output.append(f"              concept: {escape_js_string(lesson['concept'])},")
                if lesson.get('discussion'):
                    output.append(f"              discussion: {escape_js_string(lesson['discussion'])},")
                output.append("            },")
            
            output.append("          },")
        
        output.append("        ],")
        output.append("      },")
    
    output.append("    ],")
    output.append("  },")
    
    # Part 2: Analyst
    output.append("  {")
    output.append('    id: "part-2",')
    output.append('    title: "The Power BI Analyst – Modeling, DAX, and Design",')
    output.append('    description: "Advanced modeling, DAX, and report design",')
    output.append("    modules: [")
    
    for module_num in sorted([m for m in modules_dict.keys() if m in part2_modules]):
        lessons_in_module = modules_dict[module_num]
        output.append("      {")
        output.append(f'        id: "module-{module_num}",')
        output.append(f'        title: "{module_titles.get(module_num, f"Module {module_num}")}",')
        output.append(f'        description: "Intermediate Power BI concepts",')
        output.append(f"        moduleNumber: {module_num},")
        output.append("        lessons: [")
        
        for lesson in sorted(lessons_in_module, key=lambda x: x['lesson']):
            lesson_num = lesson['lesson']
            difficulty = determine_difficulty(module_num)
            tags = get_tags_for_lesson(lesson['title'], lesson.get('concept', ''), lesson.get('discussion', ''))
            topic = get_topic_for_lesson(lesson['title'], lesson.get('concept', ''), lesson.get('discussion', ''))
            duration = estimate_duration(lesson.get('concept', ''), lesson.get('discussion', ''))
            description = lesson['concept'][:200] if lesson.get('concept') else lesson['title']
            
            output.append("          {")
            output.append(f'            id: "{module_num}-{lesson_num}",')
            output.append(f"            moduleNumber: {module_num},")
            output.append(f"            lessonNumber: {lesson_num},")
            output.append(f"            title: {escape_js_string(lesson['title'])},")
            output.append(f"            description: {escape_js_string(description)},")
            output.append(f"            duration: {duration},")
            output.append(f"            difficulty: '{difficulty}',")
            output.append(f"            tags: {json.dumps(tags)},")
            output.append(f"            topic: '{topic}',")
            
            if lesson.get('concept') or lesson.get('discussion'):
                output.append("            content: {")
                if lesson.get('concept'):
                    output.append(f"              concept: {escape_js_string(lesson['concept'])},")
                if lesson.get('discussion'):
                    output.append(f"              discussion: {escape_js_string(lesson['discussion'])},")
                output.append("            },")
            
            output.append("          },")
        
        output.append("        ],")
        output.append("      },")
    
    output.append("    ],")
    output.append("  },")
    
    # Part 3: Master
    output.append("  {")
    output.append('    id: "part-3",')
    output.append('    title: "The Power BI Master – Enterprise and Administration",')
    output.append('    description: "Enterprise deployment, optimization, and advanced topics",')
    output.append("    modules: [")
    
    for module_num in sorted([m for m in modules_dict.keys() if m in part3_modules]):
        lessons_in_module = modules_dict[module_num]
        output.append("      {")
        output.append(f'        id: "module-{module_num}",')
        output.append(f'        title: "{module_titles.get(module_num, f"Module {module_num}")}",')
        output.append(f'        description: "Advanced and enterprise Power BI topics",')
        output.append(f"        moduleNumber: {module_num},")
        output.append("        lessons: [")
        
        for lesson in sorted(lessons_in_module, key=lambda x: x['lesson']):
            lesson_num = lesson['lesson']
            difficulty = determine_difficulty(module_num)
            tags = get_tags_for_lesson(lesson['title'], lesson.get('concept', ''), lesson.get('discussion', ''))
            topic = get_topic_for_lesson(lesson['title'], lesson.get('concept', ''), lesson.get('discussion', ''))
            duration = estimate_duration(lesson.get('concept', ''), lesson.get('discussion', ''))
            description = lesson['concept'][:200] if lesson.get('concept') else lesson['title']
            
            output.append("          {")
            output.append(f'            id: "{module_num}-{lesson_num}",')
            output.append(f"            moduleNumber: {module_num},")
            output.append(f"            lessonNumber: {lesson_num},")
            output.append(f"            title: {escape_js_string(lesson['title'])},")
            output.append(f"            description: {escape_js_string(description)},")
            output.append(f"            duration: {duration},")
            output.append(f"            difficulty: '{difficulty}',")
            output.append(f"            tags: {json.dumps(tags)},")
            output.append(f"            topic: '{topic}',")
            
            if lesson.get('concept') or lesson.get('discussion'):
                output.append("            content: {")
                if lesson.get('concept'):
                    output.append(f"              concept: {escape_js_string(lesson['concept'])},")
                if lesson.get('discussion'):
                    output.append(f"              discussion: {escape_js_string(lesson['discussion'])},")
                output.append("            },")
            
            output.append("          },")
        
        output.append("        ],")
        output.append("      },")
    
    output.append("    ],")
    output.append("  },")
    output.append("]")
    output.append("")
    
    # Add helper functions
    output.append("export function getAllLessons(): Lesson[] {")
    output.append("  const lessons: Lesson[] = []")
    output.append("  courseData.forEach(part => {")
    output.append("    part.modules.forEach(module => {")
    output.append("      lessons.push(...module.lessons)")
    output.append("    })")
    output.append("  })")
    output.append("  return lessons")
    output.append("}")
    output.append("")
    
    output.append("export function getAllModules(): Module[] {")
    output.append("  const modules: Module[] = []")
    output.append("  courseData.forEach(part => {")
    output.append("    modules.push(...part.modules)")
    output.append("  })")
    output.append("  return modules")
    output.append("}")
    output.append("")
    
    output.append("export function getLessonById(id: string): Lesson | undefined {")
    output.append("  const lessons = getAllLessons()")
    output.append("  return lessons.find(lesson => lesson.id === id)")
    output.append("}")
    output.append("")
    
    output.append("export function getLessonByNumber(moduleNumber: number, lessonNumber: number): Lesson | undefined {")
    output.append("  return getLessonById(`${moduleNumber}-${lessonNumber}`)")
    output.append("}")
    output.append("")
    
    return "\n".join(output)

def main():
    print("Parsing course-outline.md...")
    with open('course-outline.md', 'r', encoding='utf-8') as f:
        content = f.read()
    
    lessons = parse_outline(content)
    print(f"Found {len(lessons)} lessons")
    
    print("Generating TypeScript code...")
    ts_code = generate_course_data(lessons)
    
    print("Writing lib/data/courseData.ts...")
    with open('lib/data/courseData.ts', 'w', encoding='utf-8') as f:
        f.write(ts_code)
    
    print("✅ Successfully rebuilt courseData.ts!")
    print(f"   Total lessons: {len(lessons)}")

if __name__ == '__main__':
    main()
