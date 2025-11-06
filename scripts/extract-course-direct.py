#!/usr/bin/env python3
"""
Directly extract course content from TypeScript file using regex
and generate a comprehensive book document
"""

import re
import json
from pathlib import Path

def extract_string_value(text, start_pos):
    """Extract a quoted string value"""
    if start_pos >= len(text) or text[start_pos] != '"':
        return None, start_pos
    
    i = start_pos + 1
    escaped = False
    value_parts = []
    
    while i < len(text):
        char = text[i]
        
        if escaped:
            if char == 'n':
                value_parts.append('\n')
            elif char == 't':
                value_parts.append('\t')
            elif char == 'r':
                value_parts.append('\r')
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

def extract_array_content(text, start_pos):
    """Extract content of an array"""
    if start_pos >= len(text) or text[start_pos] != '[':
        return None, start_pos
    
    depth = 0
    in_string = False
    escaped = False
    i = start_pos
    
    while i < len(text):
        char = text[i]
        
        if escaped:
            escaped = False
            i += 1
            continue
        
        if char == '\\':
            escaped = True
            i += 1
            continue
        
        if char == '"' and not escaped:
            in_string = not in_string
        elif not in_string:
            if char == '[':
                depth += 1
            elif char == ']':
                depth -= 1
                if depth == 0:
                    return text[start_pos+1:i], i + 1
        
        i += 1
    
    return None, start_pos

def extract_lesson_content(text, lesson_start):
    """Extract all content from a lesson object"""
    lesson = {}
    i = lesson_start
    
    # Find the closing brace for this lesson
    depth = 0
    in_string = False
    escaped = False
    lesson_end = i
    
    while i < len(text):
        char = text[i]
        
        if escaped:
            escaped = False
            i += 1
            continue
        
        if char == '\\':
            escaped = True
            i += 1
            continue
        
        if char == '"' and not escaped:
            in_string = not in_string
        elif not in_string:
            if char == '{':
                if depth == 0:
                    lesson_start = i
                depth += 1
            elif char == '}':
                depth -= 1
                if depth == 0:
                    lesson_end = i + 1
                    break
        
        i += 1
    
    lesson_text = text[lesson_start:lesson_end]
    
    # Extract id
    id_match = re.search(r'id:\s*"([^"]+)"', lesson_text)
    if id_match:
        lesson['id'] = id_match.group(1)
    
    # Extract moduleNumber
    mod_match = re.search(r'moduleNumber:\s*(\d+)', lesson_text)
    if mod_match:
        lesson['moduleNumber'] = int(mod_match.group(1))
    
    # Extract lessonNumber
    les_match = re.search(r'lessonNumber:\s*(\d+)', lesson_text)
    if les_match:
        lesson['lessonNumber'] = int(les_match.group(1))
    
    # Extract title
    title_match = re.search(r'title:\s*"([^"]+)"', lesson_text)
    if title_match:
        lesson['title'] = title_match.group(1)
    
    # Extract description
    desc_match = re.search(r'description:\s*"([^"]+)"', lesson_text)
    if desc_match:
        lesson['description'] = desc_match.group(1)
    
    # Extract duration
    dur_match = re.search(r'duration:\s*(\d+)', lesson_text)
    if dur_match:
        lesson['duration'] = int(dur_match.group(1))
    
    # Extract difficulty
    diff_match = re.search(r"difficulty:\s*'([^']+)'", lesson_text)
    if diff_match:
        lesson['difficulty'] = diff_match.group(1)
    
    # Extract content object
    content_match = re.search(r'content:\s*\{([^}]*)\}', lesson_text, re.DOTALL)
    if content_match:
        content_text = content_match.group(1)
        content = {}
        
        # Extract concept
        concept_match = re.search(r'concept:\s*"([^"]+)"', content_text, re.DOTALL)
        if not concept_match:
            # Try multiline
            concept_match = re.search(r'concept:\s*"((?:[^"\\]|\\.)+)"', content_text, re.DOTALL)
        if concept_match:
            content['concept'] = concept_match.group(1).replace('\\n', '\n').replace('\\"', '"')
        
        # Extract discussion
        disc_match = re.search(r'discussion:\s*"((?:[^"\\]|\\.)+)"', content_text, re.DOTALL)
        if disc_match:
            content['discussion'] = disc_match.group(1).replace('\\n', '\n').replace('\\"', '"')
        
        # Extract keyPoints array
        kp_match = re.search(r'keyPoints:\s*\[([^\]]+)\]', content_text, re.DOTALL)
        if kp_match:
            kp_text = kp_match.group(1)
            key_points = []
            for kp in re.finditer(r'"((?:[^"\\]|\\.)+)"', kp_text):
                key_points.append(kp.group(1).replace('\\n', '\n').replace('\\"', '"'))
            if key_points:
                content['keyPoints'] = key_points
        
        # Extract insiderTips
        tips_match = re.search(r'insiderTips:\s*\[([^\]]+)\]', content_text, re.DOTALL)
        if tips_match:
            tips_text = tips_match.group(1)
            tips = []
            for tip in re.finditer(r'"((?:[^"\\]|\\.)+)"', tips_text):
                tips.append(tip.group(1).replace('\\n', '\n').replace('\\"', '"'))
            if tips:
                content['insiderTips'] = tips
        
        # Extract labs
        labs_match = re.search(r'labs:\s*\[([^\]]+)\]', content_text, re.DOTALL)
        if labs_match:
            labs_text = labs_match.group(1)
            labs = []
            for lab in re.finditer(r'"((?:[^"\\]|\\.)+)"', labs_text):
                labs.append(lab.group(1).replace('\\n', '\n').replace('\\"', '"'))
            if labs:
                content['labs'] = labs
        
        # Extract tables
        tables_match = re.search(r'tables:\s*\[([^\]]+)\]', content_text, re.DOTALL)
        if tables_match:
            # Parse tables more carefully
            tables = []
            # Simplified: extract table objects
            table_objects = re.finditer(r'\{\s*title:\s*"([^"]+)"[^}]*headers:\s*\[([^\]]+)\][^}]*rows:\s*\[([^\]]+)\]', content_text, re.DOTALL)
            for table_obj in table_objects:
                table = {
                    'title': table_obj.group(1),
                    'headers': [],
                    'rows': []
                }
                # Extract headers
                headers_text = table_obj.group(2)
                for h in re.finditer(r'"([^"]+)"', headers_text):
                    table['headers'].append(h.group(1))
                # Extract rows
                rows_text = table_obj.group(3)
                for row_match in re.finditer(r'\[([^\]]+)\]', rows_text):
                    row_text = row_match.group(1)
                    row = []
                    for cell in re.finditer(r'"([^"]+)"', row_text):
                        row.append(cell.group(1))
                    if row:
                        table['rows'].append(row)
                if table['headers']:
                    tables.append(table)
            if tables:
                content['tables'] = tables
        
        if content:
            lesson['content'] = content
    
    # Extract tags
    tags_match = re.search(r'tags:\s*\[([^\]]+)\]', lesson_text)
    if tags_match:
        tags_text = tags_match.group(1)
        tags = []
        for tag in re.finditer(r'"([^"]+)"', tags_text):
            tags.append(tag.group(1))
        if tags:
            lesson['tags'] = tags
    
    return lesson, lesson_end

def parse_course_file(file_path):
    """Parse the courseData.ts file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    parts = []
    
    # Find all parts
    part_pattern = r'id:\s*"(part-\d+)"[^}]*title:\s*"([^"]+)"[^}]*description:\s*"([^"]+)"[^}]*modules:\s*\['
    
    for part_match in re.finditer(part_pattern, content, re.DOTALL):
        part_id = part_match.group(1)
        part_title = part_match.group(2)
        part_desc = part_match.group(3)
        
        part = {
            'id': part_id,
            'title': part_title,
            'description': part_desc,
            'modules': []
        }
        
        # Find modules in this part
        module_start = part_match.end()
        module_pattern = r'id:\s*"(module-\d+)"[^}]*title:\s*"([^"]+)"[^}]*description:\s*"([^"]+)"[^}]*moduleNumber:\s*(\d+)'
        
        # Find the modules section
        modules_text_start = content.find('modules: [', module_start)
        if modules_text_start == -1:
            continue
        
        # Extract module blocks
        depth = 0
        in_string = False
        escaped = False
        i = modules_text_start + len('modules: [')
        module_block_start = i
        
        while i < len(content):
            char = content[i]
            
            if escaped:
                escaped = False
                i += 1
                continue
            
            if char == '\\':
                escaped = True
            elif char == '"':
                in_string = not in_string
            elif not in_string:
                if char == '{':
                    if depth == 0:
                        module_block_start = i
                    depth += 1
                elif char == '}':
                    depth -= 1
                    if depth == 0:
                        # Extract module
                        module_text = content[module_block_start:i+1]
                        
                        mod_match = re.search(r'id:\s*"(module-\d+)"[^}]*title:\s*"([^"]+)"[^}]*description:\s*"([^"]+)"[^}]*moduleNumber:\s*(\d+)', module_text)
                        if mod_match:
                            module = {
                                'id': mod_match.group(1),
                                'title': mod_match.group(2),
                                'description': mod_match.group(3),
                                'moduleNumber': int(mod_match.group(4)),
                                'lessons': []
                            }
                            
                            # Extract lessons
                            lessons_start = module_text.find('lessons: [')
                            if lessons_start != -1:
                                lessons_text = module_text[lessons_start + len('lessons: ['):]
                                
                                # Extract lesson objects
                                lesson_pattern = r'\{\s*id:\s*"(\d+-\d+)"[^}]*title:\s*"([^"]+)"'
                                for lesson_match in re.finditer(lesson_pattern, module_text, re.DOTALL):
                                    lesson_start = lesson_match.start()
                                    lesson, lesson_end = extract_lesson_content(module_text, lesson_start)
                                    if lesson:
                                        module['lessons'].append(lesson)
                            
                            part['modules'].append(module)
                        
                        # Check if we've moved to next part
                        if content[i+1:i+3].strip() == ',':
                            break
                elif depth < 0:
                    break
            
            i += 1
        
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
    
    # Parse the file
    parts_data = parse_course_file(course_file)
    
    print(f"Found {len(parts_data)} parts")
    total_lessons = 0
    for part in parts_data:
        for module in part.get('modules', []):
            total_lessons += len(module.get('lessons', []))
    print(f"Total lessons: {total_lessons}")
    
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


