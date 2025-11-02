#!/usr/bin/env python3
"""
Script to add video URLs and chapters to all lessons in courseData.ts
This is a safe, controlled approach that modifies the file in place.
"""

import re
import sys

def generate_video_chapters(duration, title, has_lab=False):
    """Generate video chapters based on lesson duration and content."""
    total_seconds = duration * 60
    
    if duration <= 10:
        # Short lessons: 3-4 chapters
        if has_lab:
            return [
                {"title": "Introduction", "timestamp": 0},
                {"title": "Key Concepts", "timestamp": int(total_seconds * 0.3)},
                {"title": "Hands-On Lab", "timestamp": int(total_seconds * 0.6)},
                {"title": "Summary", "timestamp": int(total_seconds * 0.85)},
            ]
        else:
            return [
                {"title": "Introduction", "timestamp": 0},
                {"title": "Core Concepts", "timestamp": int(total_seconds * 0.4)},
                {"title": "Summary", "timestamp": int(total_seconds * 0.8)},
            ]
    elif duration <= 20:
        # Medium lessons: 4-5 chapters
        if has_lab:
            return [
                {"title": "Introduction", "timestamp": 0},
                {"title": "Key Concepts", "timestamp": 180},
                {"title": "Detailed Discussion", "timestamp": 480},
                {"title": "Hands-On Lab", "timestamp": 780},
                {"title": "Summary", "timestamp": int(total_seconds * 0.9)},
            ]
        else:
            return [
                {"title": "Introduction", "timestamp": 0},
                {"title": "Key Concepts", "timestamp": 180},
                {"title": "Detailed Discussion", "timestamp": 480},
                {"title": "Best Practices", "timestamp": 780},
                {"title": "Summary", "timestamp": int(total_seconds * 0.9)},
            ]
    else:
        # Long lessons: 5-6 chapters
        if has_lab:
            return [
                {"title": "Introduction", "timestamp": 0},
                {"title": "Key Concepts", "timestamp": 180},
                {"title": "Detailed Discussion", "timestamp": 540},
                {"title": "Advanced Topics", "timestamp": 900},
                {"title": "Hands-On Lab", "timestamp": 1260},
                {"title": "Summary", "timestamp": int(total_seconds * 0.9)},
            ]
        else:
            return [
                {"title": "Introduction", "timestamp": 0},
                {"title": "Key Concepts", "timestamp": 180},
                {"title": "Detailed Discussion", "timestamp": 540},
                {"title": "Advanced Topics", "timestamp": 900},
                {"title": "Best Practices", "timestamp": 1260},
                {"title": "Summary", "timestamp": int(total_seconds * 0.9)},
            ]

def format_video_chapters(chapters):
    """Format video chapters as TypeScript array."""
    lines = ["            videoChapters: ["]
    for i, chapter in enumerate(chapters):
        comma = "," if i < len(chapters) - 1 else ""
        lines.append(f'              {{ title: "{chapter["title"]}", timestamp: {chapter["timestamp"]} }}{comma}')
    lines.append("            ],")
    return "\n".join(lines)

def add_video_to_lesson(lesson_match, lesson_id, duration, title, has_lab):
    """Add video URL and chapters to a lesson object."""
    lesson_content = lesson_match.group(0)
    
    # Check if video already exists
    if 'videoUrl:' in lesson_content:
        return lesson_content
    
    # Extract the fields we need
    # Find the position after difficulty/tags/topic and before content
    # We'll insert videoUrl and videoChapters right after topic field
    
    # Generate chapters
    chapters = generate_video_chapters(duration, title, has_lab)
    chapters_str = format_video_chapters(chapters)
    
    # Add videoUrl and videoChapters
    # Look for the pattern: topic: '...',\n            content: or similar
    # We'll insert before content:
    
    video_block = f'''            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-{lesson_id}",
{chapters_str}'''
    
    # Try to insert before content:
    if 'content: {' in lesson_content:
        lesson_content = lesson_content.replace(
            '            content: {',
            video_block + '\n            content: {'
        )
    elif 'content?: {' in lesson_content:
        lesson_content = lesson_content.replace(
            '            content?: {',
            video_block + '\n            content?: {'
        )
    else:
        # If no content, add after the last field before closing brace
        # Find the last property before closing brace
        lines = lesson_content.split('\n')
        insert_pos = len(lines) - 1
        for i in range(len(lines) - 1, -1, -1):
            if lines[i].strip().startswith('topic:') or lines[i].strip().startswith('difficulty:'):
                insert_pos = i + 1
                break
        
        # Insert video block
        lines.insert(insert_pos, '')
        lines.insert(insert_pos + 1, video_block)
        lesson_content = '\n'.join(lines)
    
    return lesson_content

def process_file(file_path):
    """Process the courseData.ts file to add videos to all lessons."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match a lesson object
    # This is complex because lessons can have many optional fields
    lesson_pattern = r'\{[^}]*id: "(\d+-\d+)"[^}]*moduleNumber: \d+,[^}]*lessonNumber: \d+,[^}]*title: "([^"]+)"[^}]*duration: (\d+)[^}]*?(?:tags: \[[^\]]+\][^}]*?)?(?:difficulty: \'[^\']+\'[^}]*?)?(?:topic: \'[^\']+\'[^}]*?)?(?:videoUrl:[^}]*?)?(?:videoChapters:[^}]*?)?(?:content:[^}]*?\{[^}]*\}[^}]*?)?\}'
    
    # Simpler approach: find lessons that don't have videoUrl
    # Look for lesson objects without videoUrl
    
    # Split by lesson boundaries
    lessons_without_video = []
    
    # Find all lesson objects
    lesson_blocks = re.finditer(
        r'(\{\s+id: "(\d+-\d+)"[^}]*?duration: (\d+)[^}]*?title: "([^"]+)"[^}]*(?:"(?:Hands-On|Lab)"[^}]*)?[^}]*?)(?=\},|\s+\],)',
        content,
        re.DOTALL
    )
    
    new_content = content
    replacements = []
    
    for match in lesson_blocks:
        lesson_block = match.group(1)
        lesson_id = match.group(2)
        duration = int(match.group(3))
        title = match.group(4)
        
        # Check if videoUrl already exists
        if 'videoUrl:' not in lesson_block:
            has_lab = 'Lab' in title or 'Hands-On' in title
            chapters = generate_video_chapters(duration, title, has_lab)
            chapters_str = format_video_chapters(chapters)
            
            video_block = f'''videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-{lesson_id}",
            {chapters_str}'''
            
            # Insert before content: or at end before closing brace
            if 'content: {' in lesson_block:
                new_block = lesson_block.replace(
                    '            content: {',
                    '            ' + video_block + '\n            content: {'
                )
            elif 'content?: {' in lesson_block:
                new_block = lesson_block.replace(
                    '            content?: {',
                    '            ' + video_block + '\n            content?: {'
                )
            else:
                # Insert before closing brace
                # Find last property line
                lines = lesson_block.split('\n')
                insert_idx = len(lines) - 1
                for i in range(len(lines) - 1, -1, -1):
                    line = lines[i].strip()
                    if line and not line.startswith('}') and (line.startswith('topic:') or line.startswith('difficulty:') or line.startswith('tags:')):
                        insert_idx = i + 1
                        break
                
                lines.insert(insert_idx, '            ' + video_block)
                new_block = '\n'.join(lines)
            
            replacements.append((match.group(0), new_block + match.group(0)[len(lesson_block):]))
    
    # Apply replacements in reverse order to maintain positions
    for old, new in reversed(replacements):
        new_content = new_content.replace(old, new, 1)
    
    return new_content

if __name__ == '__main__':
    file_path = 'lib/data/courseData.ts'
    
    print(f"Processing {file_path}...")
    new_content = process_file(file_path)
    
    # Write back
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("Done! Videos added to all lessons without videoUrl.")


