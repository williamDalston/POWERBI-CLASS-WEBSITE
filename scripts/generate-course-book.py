#!/usr/bin/env python3
"""
Generate a comprehensive book-like document from course data JSON
"""

import json
import os
import sys
from pathlib import Path

def format_table_markdown(table):
    """Format a table as markdown"""
    headers = table.get('headers', [])
    rows = table.get('rows', [])
    
    if not headers:
        return ""
    
    lines = []
    # Headers
    lines.append("| " + " | ".join(headers) + " |")
    # Separator
    lines.append("| " + " | ".join(["---"] * len(headers)) + " |")
    # Rows
    for row in rows:
        # Ensure row has same length as headers
        row_data = row[:len(headers)]
        while len(row_data) < len(headers):
            row_data.append("")
        lines.append("| " + " | ".join(row_data) + " |")
    
    return "\n".join(lines)

def format_lesson_content(lesson, lesson_num):
    """Format a single lesson as markdown"""
    lines = []
    
    # Lesson header
    title = lesson.get('title', 'Untitled Lesson')
    module_num = lesson.get('moduleNumber', 0)
    lesson_number = lesson.get('lessonNumber', 0)
    
    lines.append(f"### Lesson {module_num}.{lesson_number}: {title}")
    lines.append("")
    
    # Description
    description = lesson.get('description', '')
    if description:
        lines.append(f"**Overview:** {description}")
        lines.append("")
    
    # Duration and difficulty
    metadata = []
    if lesson.get('duration'):
        metadata.append(f"Duration: {lesson['duration']} minutes")
    if lesson.get('difficulty'):
        metadata.append(f"Difficulty: {lesson['difficulty'].title()}")
    if metadata:
        lines.append("*" + " • ".join(metadata) + "*")
        lines.append("")
    
    # Content sections
    content = lesson.get('content', {})
    
    # Concept
    if content.get('concept'):
        lines.append("**Key Concept**")
        lines.append("")
        lines.append(content['concept'])
        lines.append("")
    
    # Discussion
    if content.get('discussion'):
        lines.append("**Detailed Discussion**")
        lines.append("")
        lines.append(content['discussion'])
        lines.append("")
    
    # Tables
    if content.get('tables'):
        for table in content['tables']:
            table_title = table.get('title', 'Table')
            lines.append(f"**{table_title}**")
            lines.append("")
            lines.append(format_table_markdown(table))
            lines.append("")
    
    # Key Points
    if content.get('keyPoints'):
        lines.append("**Key Takeaways**")
        lines.append("")
        for point in content['keyPoints']:
            lines.append(f"- {point}")
        lines.append("")
    
    # Insider Tips
    if content.get('insiderTips'):
        lines.append("**💡 Insider Tips**")
        lines.append("")
        for tip in content['insiderTips']:
            lines.append(f"- {tip}")
        lines.append("")
    
    # Labs
    if content.get('labs'):
        lines.append("**Hands-On Lab**")
        lines.append("")
        for i, lab_step in enumerate(content['labs'], 1):
            lines.append(f"{i}. {lab_step}")
        lines.append("")
    
    # Exercise Materials
    if lesson.get('exerciseMaterials'):
        lines.append("**Exercise Materials**")
        lines.append("")
        for material in lesson['exerciseMaterials']:
            name = material.get('name', 'Material')
            url = material.get('url', '#')
            mat_type = material.get('type', 'other')
            lines.append(f"- [{name}]({url}) *({mat_type})*")
        lines.append("")
    
    # Tags
    if lesson.get('tags'):
        tags_str = ", ".join([f"`{tag}`" for tag in lesson['tags']])
        lines.append(f"**Topics:** {tags_str}")
        lines.append("")
    
    # Divider
    lines.append("---")
    lines.append("")
    
    return "\n".join(lines)

def generate_book(course_data_path):
    """Generate the complete course book from JSON"""
    
    # Read JSON file
    print(f"Reading {course_data_path}...")
    with open(course_data_path, 'r', encoding='utf-8') as f:
        course_data = json.load(f)
    
    if not course_data:
        print("❌ No course data found!")
        return None
    
    # Start building the book
    book_lines = []
    
    # Title page
    book_lines.append("# Power BI Mastery Course")
    book_lines.append("")
    book_lines.append("*Complete Course Guide - From Beginner to PL-300 Certified Expert*")
    book_lines.append("")
    book_lines.append("**Version:** December 2025")
    book_lines.append("")
    book_lines.append("---")
    book_lines.append("")
    book_lines.append("")
    
    # Table of Contents
    book_lines.append("# Table of Contents")
    book_lines.append("")
    
    part_num = 0
    for part in course_data:
        book_lines.append(f"## Part {part_num}: {part.get('title', 'Untitled')}")
        book_lines.append("")
        for module in part.get('modules', []):
            book_lines.append(f"- Module {module.get('moduleNumber', 0)}: {module.get('title', 'Untitled')}")
            for lesson in module.get('lessons', []):
                lesson_title = lesson.get('title', 'Untitled')
                module_num = lesson.get('moduleNumber', 0)
                lesson_num = lesson.get('lessonNumber', 0)
                book_lines.append(f"  - Lesson {module_num}.{lesson_num}: {lesson_title}")
        book_lines.append("")
        part_num += 1
    
    book_lines.append("---")
    book_lines.append("")
    book_lines.append("")
    
    # Course content
    part_num = 0
    for part in course_data:
        # Part header
        book_lines.append(f"# Part {part_num}: {part.get('title', 'Untitled')}")
        book_lines.append("")
        
        if part.get('description'):
            book_lines.append(f"*{part['description']}*")
            book_lines.append("")
        
        book_lines.append("---")
        book_lines.append("")
        
        # Modules
        for module in part.get('modules', []):
            # Module header
            module_num = module.get('moduleNumber', 0)
            module_title = module.get('title', 'Untitled')
            
            book_lines.append(f"## Module {module_num}: {module_title}")
            book_lines.append("")
            
            if module.get('description'):
                book_lines.append(f"*{module['description']}*")
                book_lines.append("")
            
            book_lines.append("---")
            book_lines.append("")
            
            # Lessons
            for lesson in module.get('lessons', []):
                lesson_content = format_lesson_content(lesson, module_num)
                book_lines.append(lesson_content)
        
        part_num += 1
    
    return "\n".join(book_lines)

def main():
    """Main function"""
    script_dir = Path(__dirname__ if '__file__' in globals() else '.')
    project_root = script_dir.parent if script_dir.name == 'scripts' else script_dir
    
    # Look for the exported JSON file
    json_path = project_root / 'course-data-export.json'
    
    if not json_path.exists():
        print("❌ course-data-export.json not found!")
        print("   Please run: node scripts/export-course-json.js first")
        print("   Or: npm run export-course-data")
        return 1
    
    # Generate the book
    print("Generating course book...")
    book_content = generate_book(str(json_path))
    
    if not book_content:
        return 1
    
    # Write to file
    output_path = project_root / 'COMPLETE-COURSE-BOOK.md'
    print(f"Writing to {output_path}...")
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(book_content)
    
    print(f"✅ Successfully created {output_path}")
    print(f"   File size: {len(book_content)} characters")
    print(f"   Lines: {len(book_content.splitlines())}")
    
    return 0

if __name__ == '__main__':
    # Fix __file__ for Python
    if '__file__' not in globals():
        __file__ = sys.argv[0]
    
    import os
    __dirname__ = os.path.dirname(os.path.abspath(__file__))
    
    sys.exit(main())

