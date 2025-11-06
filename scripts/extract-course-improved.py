#!/usr/bin/env python3
"""
Improved extraction: Better handling of nested structures and multiline strings
"""

import re
import json
from pathlib import Path

def find_balanced_brace(text, start_pos):
    """Find the matching closing brace for a { starting at start_pos"""
    depth = 0
    in_string = False
    escape_next = False
    i = start_pos
    
    while i < len(text):
        char = text[i]
        
        if escape_next:
            escape_next = False
            i += 1
            continue
        
        if char == '\\':
            escape_next = True
        elif char == '"':
            in_string = not in_string
        elif not in_string:
            if char == '{':
                depth += 1
            elif char == '}':
                depth -= 1
                if depth == 0:
                    return i + 1
        
        i += 1
    
    return -1

def extract_string_multiline(text, start_pos):
    """Extract a string value, handling multiline and escaped characters"""
    if start_pos >= len(text) or text[start_pos] != '"':
        return None, start_pos
    
    i = start_pos + 1
    value_parts = []
    escaped = False
    
    while i < len(text):
        char = text[i]
        
        if escaped:
            if char == 'n':
                value_parts.append('\n')
            elif char == 't':
                value_parts.append('\t')
            elif char == 'r':
                value_parts.append('\r')
            elif char == '"':
                value_parts.append('"')
            elif char == '\\':
                value_parts.append('\\')
            else:
                value_parts.append(char)
            escaped = False
        elif char == '\\':
            escaped = True
        elif char == '"':
            return ''.join(value_parts), i + 1
        else:
            value_parts.append(char)
        
        i += 1
    
    return None, start_pos

def extract_all_lessons_from_text(text):
    """Extract all lesson objects from the text"""
    lessons = []
    
    # Find all lesson objects by their id pattern
    pattern = r'\{\s*id:\s*"(\d+-\d+)"'
    
    for match in re.finditer(pattern, text):
        lesson_start = match.start()
        
        # Find the matching closing brace
        lesson_end = find_balanced_brace(text, lesson_start)
        if lesson_end == -1:
            continue
        
        lesson_text = text[lesson_start:lesson_end]
        lesson = {}
        
        # Extract id
        id_match = re.search(r'id:\s*"(\d+-\d+)"', lesson_text)
        if id_match:
            lesson['id'] = id_match.group(1)
            parts = lesson['id'].split('-')
            if len(parts) == 2:
                lesson['moduleNumber'] = int(parts[0])
                lesson['lessonNumber'] = int(parts[1])
        
        # Extract title - handle multiline
        title_match = re.search(r'title:\s*"((?:[^"\\]|\\.|\\n)+)"', lesson_text, re.DOTALL)
        if title_match:
            lesson['title'] = title_match.group(1).replace('\\n', '\n').replace('\\"', '"').replace('\\t', '\t')
        
        # Extract description - handle multiline
        desc_match = re.search(r'description:\s*"((?:[^"\\]|\\.|\\n)+)"', lesson_text, re.DOTALL)
        if desc_match:
            lesson['description'] = desc_match.group(1).replace('\\n', '\n').replace('\\"', '"').replace('\\t', '\t')
        
        # Extract duration
        dur_match = re.search(r'duration:\s*(\d+)', lesson_text)
        if dur_match:
            lesson['duration'] = int(dur_match.group(1))
        
        # Extract difficulty
        diff_match = re.search(r"difficulty:\s*'([^']+)'", lesson_text)
        if diff_match:
            lesson['difficulty'] = diff_match.group(1)
        
        # Extract topic
        topic_match = re.search(r"topic:\s*'([^']+)'", lesson_text)
        if topic_match:
            lesson['topic'] = topic_match.group(1)
        
        # Extract content object
        content_start = lesson_text.find('content: {')
        if content_start != -1:
            content_brace_start = content_start + len('content: ')
            content_brace_end = find_balanced_brace(lesson_text, content_brace_start)
            if content_brace_end != -1:
                content_text = lesson_text[content_brace_start:content_brace_end]
                content = {}
                
                # Extract concept - handle very long strings
                concept_pattern = r'concept:\s*"((?:[^"\\]|\\.|\\n)+)"'
                concept_match = re.search(concept_pattern, content_text, re.DOTALL)
                if concept_match:
                    content['concept'] = concept_match.group(1).replace('\\n', '\n').replace('\\"', '"').replace('\\t', '\t')
                
                # Extract discussion
                disc_pattern = r'discussion:\s*"((?:[^"\\]|\\.|\\n)+)"'
                disc_match = re.search(disc_pattern, content_text, re.DOTALL)
                if disc_match:
                    content['discussion'] = disc_match.group(1).replace('\\n', '\n').replace('\\"', '"').replace('\\t', '\t')
                
                # Extract keyPoints
                kp_match = re.search(r'keyPoints:\s*\[(.*?)\]', content_text, re.DOTALL)
                if kp_match:
                    kp_text = kp_match.group(1)
                    key_points = []
                    # Find all string values in the array
                    for kp_string in re.finditer(r'"((?:[^"\\]|\\.|\\n)+)"', kp_text, re.DOTALL):
                        key_points.append(kp_string.group(1).replace('\\n', '\n').replace('\\"', '"').replace('\\t', '\t'))
                    if key_points:
                        content['keyPoints'] = key_points
                
                # Extract insiderTips
                tips_match = re.search(r'insiderTips:\s*\[(.*?)\]', content_text, re.DOTALL)
                if tips_match:
                    tips_text = tips_match.group(1)
                    tips = []
                    for tip_string in re.finditer(r'"((?:[^"\\]|\\.|\\n)+)"', tips_text, re.DOTALL):
                        tips.append(tip_string.group(1).replace('\\n', '\n').replace('\\"', '"').replace('\\t', '\t'))
                    if tips:
                        content['insiderTips'] = tips
                
                # Extract labs
                labs_match = re.search(r'labs:\s*\[(.*?)\]', content_text, re.DOTALL)
                if labs_match:
                    labs_text = labs_match.group(1)
                    labs = []
                    for lab_string in re.finditer(r'"((?:[^"\\]|\\.|\\n)+)"', labs_text, re.DOTALL):
                        labs.append(lab_string.group(1).replace('\\n', '\n').replace('\\"', '"').replace('\\t', '\t'))
                    if labs:
                        content['labs'] = labs
                
                # Extract tables - more complex
                tables_match = re.search(r'tables:\s*\[(.*?)\]', content_text, re.DOTALL)
                if tables_match:
                    tables_text = tables_match.group(1)
                    tables = []
                    
                    # Find individual table objects
                    table_obj_pattern = r'\{\s*title:\s*"([^"]+)"[^}]*headers:\s*\[(.*?)\][^}]*rows:\s*\[(.*?)\]'
                    for table_match in re.finditer(table_obj_pattern, tables_text, re.DOTALL):
                        table = {
                            'title': table_match.group(1),
                            'headers': [],
                            'rows': []
                        }
                        
                        # Extract headers
                        headers_text = table_match.group(2)
                        for h_match in re.finditer(r'"([^"]+)"', headers_text):
                            table['headers'].append(h_match.group(1))
                        
                        # Extract rows - find all row arrays
                        rows_text = table_match.group(3)
                        for row_array in re.finditer(r'\[(.*?)\]', rows_text, re.DOTALL):
                            row = []
                            row_content = row_array.group(1)
                            for cell_match in re.finditer(r'"([^"]+)"', row_content):
                                row.append(cell_match.group(1))
                            if row:
                                table['rows'].append(row)
                        
                        if table['headers']:
                            tables.append(table)
                    
                    if tables:
                        content['tables'] = tables
                
                if content:
                    lesson['content'] = content
        
        # Extract tags
        tags_match = re.search(r'tags:\s*\[(.*?)\]', lesson_text, re.DOTALL)
        if tags_match:
            tags_text = tags_match.group(1)
            tags = []
            for tag_match in re.finditer(r'"([^"]+)"', tags_text):
                tags.append(tag_match.group(1))
            if tags:
                lesson['tags'] = tags
        
        if lesson:
            lessons.append(lesson)
    
    return lessons

def organize_lessons_into_structure(lessons, text):
    """Organize lessons into the part/module structure"""
    parts = []
    
    # Find part structure
    part_pattern = r'id:\s*"(part-\d+)"[^}]*title:\s*"([^"]+)"[^}]*description:\s*"([^"]+)"'
    
    # Also find modules
    module_pattern = r'id:\s*"(module-\d+)"[^}]*title:\s*"([^"]+)"[^}]*description:\s*"([^"]+)"[^}]*moduleNumber:\s*(\d+)'
    
    # Extract parts
    part_matches = list(re.finditer(part_pattern, text, re.DOTALL))
    module_matches = list(re.finditer(module_pattern, text, re.DOTALL))
    
    # Organize by finding which lessons belong to which module
    for part_match in part_matches:
        part_id = part_match.group(1)
        part_title = part_match.group(2)
        part_desc = part_match.group(3)
        
        part = {
            'id': part_id,
            'title': part_title,
            'description': part_desc,
            'modules': []
        }
        
        # Find modules in this part (between this part and next part)
        part_start = part_match.end()
        part_end = len(text)
        if part_matches.index(part_match) < len(part_matches) - 1:
            next_part = part_matches[part_matches.index(part_match) + 1]
            part_end = next_part.start()
        
        part_text = text[part_start:part_end]
        
        # Find modules in this part
        for module_match in module_matches:
            module_id = module_match.group(1)
            module_title = module_match.group(2)
            module_desc = module_match.group(3)
            module_num = int(module_match.group(4))
            
            # Check if this module is in this part's text
            if module_match.start() >= part_start and module_match.start() < part_end:
                module = {
                    'id': module_id,
                    'title': module_title,
                    'description': module_desc,
                    'moduleNumber': module_num,
                    'lessons': []
                }
                
                # Find lessons for this module
                for lesson in lessons:
                    if lesson.get('moduleNumber') == module_num:
                        module['lessons'].append(lesson)
                
                # Sort lessons by lessonNumber
                module['lessons'].sort(key=lambda x: x.get('lessonNumber', 0))
                
                if module['lessons']:
                    part['modules'].append(module)
        
        # Sort modules by moduleNumber
        part['modules'].sort(key=lambda x: x.get('moduleNumber', 0))
        
        if part['modules']:
            parts.append(part)
    
    return parts

def format_lesson_markdown(lesson):
    """Format a lesson as markdown"""
    lines = []
    
    title = lesson.get('title', 'Untitled')
    mod_num = lesson.get('moduleNumber', 0)
    les_num = lesson.get('lessonNumber', 0)
    
    lines.append(f"### Lesson {mod_num}.{les_num}: {title}")
    lines.append("")
    
    desc = lesson.get('description', '')
    if desc:
        lines.append(f"**Overview:** {desc}")
        lines.append("")
    
    metadata = []
    if lesson.get('duration'):
        metadata.append(f"Duration: {lesson['duration']} minutes")
    if lesson.get('difficulty'):
        metadata.append(f"Difficulty: {lesson['difficulty'].title()}")
    if metadata:
        lines.append("*" + " • ".join(metadata) + "*")
        lines.append("")
    
    content = lesson.get('content', {})
    
    if content.get('concept'):
        lines.append("**Key Concept**")
        lines.append("")
        lines.append(content['concept'])
        lines.append("")
    
    if content.get('discussion'):
        lines.append("**Detailed Discussion**")
        lines.append("")
        lines.append(content['discussion'])
        lines.append("")
    
    if content.get('tables'):
        for table in content['tables']:
            lines.append(f"**{table.get('title', 'Table')}**")
            lines.append("")
            headers = table.get('headers', [])
            rows = table.get('rows', [])
            if headers:
                lines.append("| " + " | ".join(headers) + " |")
                lines.append("| " + " | ".join(["---"] * len(headers)) + " |")
                for row in rows:
                    row_data = row[:len(headers)]
                    while len(row_data) < len(headers):
                        row_data.append("")
                    lines.append("| " + " | ".join(row_data) + " |")
            lines.append("")
    
    if content.get('keyPoints'):
        lines.append("**Key Takeaways**")
        lines.append("")
        for point in content['keyPoints']:
            lines.append(f"- {point}")
        lines.append("")
    
    if content.get('insiderTips'):
        lines.append("**💡 Insider Tips**")
        lines.append("")
        for tip in content['insiderTips']:
            lines.append(f"- {tip}")
        lines.append("")
    
    if content.get('labs'):
        lines.append("**Hands-On Lab**")
        lines.append("")
        for i, step in enumerate(content['labs'], 1):
            lines.append(f"{i}. {step}")
        lines.append("")
    
    if lesson.get('tags'):
        tags_str = ", ".join([f"`{tag}`" for tag in lesson['tags']])
        lines.append(f"**Topics:** {tags_str}")
        lines.append("")
    
    lines.append("---")
    lines.append("")
    
    return "\n".join(lines)

def generate_book(parts_data):
    """Generate the complete course book"""
    lines = []
    
    # Title
    lines.append("# Power BI Mastery Course")
    lines.append("")
    lines.append("*Complete Course Guide - From Beginner to PL-300 Certified Expert*")
    lines.append("")
    lines.append("**Version:** December 2025")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("")
    
    # Table of Contents
    lines.append("# Table of Contents")
    lines.append("")
    
    part_num = 0
    for part in parts_data:
        lines.append(f"## Part {part_num}: {part.get('title', 'Untitled')}")
        lines.append("")
        for module in part.get('modules', []):
            lines.append(f"- Module {module.get('moduleNumber', 0)}: {module.get('title', 'Untitled')}")
            for lesson in module.get('lessons', []):
                les_title = lesson.get('title', 'Untitled')
                mod_num = lesson.get('moduleNumber', 0)
                les_num = lesson.get('lessonNumber', 0)
                lines.append(f"  - Lesson {mod_num}.{les_num}: {les_title}")
        lines.append("")
        part_num += 1
    
    lines.append("---")
    lines.append("")
    lines.append("")
    
    # Course content
    part_num = 0
    for part in parts_data:
        lines.append(f"# Part {part_num}: {part.get('title', 'Untitled')}")
        lines.append("")
        
        if part.get('description'):
            lines.append(f"*{part['description']}*")
            lines.append("")
        
        lines.append("---")
        lines.append("")
        
        for module in part.get('modules', []):
            mod_num = module.get('moduleNumber', 0)
            mod_title = module.get('title', 'Untitled')
            
            lines.append(f"## Module {mod_num}: {mod_title}")
            lines.append("")
            
            if module.get('description'):
                lines.append(f"*{module['description']}*")
                lines.append("")
            
            lines.append("---")
            lines.append("")
            
            for lesson in module.get('lessons', []):
                lesson_md = format_lesson_markdown(lesson)
                lines.append(lesson_md)
        
        part_num += 1
    
    return "\n".join(lines)

def main():
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    course_file = project_root / 'lib' / 'data' / 'courseData.ts'
    
    print(f"Reading {course_file}...")
    print("This may take a moment...")
    
    with open(course_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract all lessons
    print("Extracting lessons...")
    lessons = extract_all_lessons_from_text(content)
    print(f"Found {len(lessons)} lessons")
    
    # Organize into structure
    print("Organizing into parts and modules...")
    parts_data = organize_lessons_into_structure(lessons, content)
    print(f"Found {len(parts_data)} parts")
    
    total_lessons = 0
    for part in parts_data:
        for module in part.get('modules', []):
            total_lessons += len(module.get('lessons', []))
    print(f"Total lessons organized: {total_lessons}")
    
    # Generate book
    print("Generating book...")
    book_content = generate_book(parts_data)
    
    # Write to file
    output_file = project_root / 'COMPLETE-COURSE-BOOK.md'
    print(f"Writing to {output_file}...")
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(book_content)
    
    print(f"✅ Successfully created {output_file}")
    print(f"   File size: {len(book_content):,} characters")
    print(f"   Lines: {len(book_content.splitlines()):,}")

if __name__ == '__main__':
    main()


