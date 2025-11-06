#!/usr/bin/env python3
"""
Script to add video URLs and chapters to all lessons in courseData.ts
This adds placeholder YouTube URLs that can be replaced with real videos later
"""

import re
import sys
from typing import List, Tuple, Dict, Any

def parse_lesson_content(lesson_str: str) -> Dict[str, Any]:
    """Parse a lesson string to extract relevant information"""
    info = {}
    
    # Extract id
    id_match = re.search(r'id:\s*"([^"]+)"', lesson_str)
    if id_match:
        info['id'] = id_match.group(1)
    
    # Extract duration
    duration_match = re.search(r'duration:\s*(\d+)', lesson_str)
    if duration_match:
        info['duration'] = int(duration_match.group(1))
    else:
        info['duration'] = 20  # default
    
    # Check for content sections
    info['has_concept'] = 'concept:' in lesson_str
    info['has_labs'] = 'labs:' in lesson_str
    info['has_tables'] = 'tables:' in lesson_str
    
    # Check if already has videoUrl
    info['has_video'] = 'videoUrl:' in lesson_str
    
    return info

def generate_chapters(info: Dict[str, Any]) -> List[Tuple[str, int]]:
    """Generate video chapters based on lesson structure"""
    chapters = []
    duration = info.get('duration', 20)
    total_seconds = duration * 60
    
    # Determine chapter structure based on content
    if info.get('has_concept'):
        chapters.append(('Introduction', 0))
        
        if info.get('has_labs'):
            chapters.append(('Concept Overview', int(total_seconds * 0.2)))
            chapters.append(('Hands-On Lab', int(total_seconds * 0.5)))
            chapters.append(('Key Takeaways', int(total_seconds * 0.85)))
        elif info.get('has_tables'):
            chapters.append(('Core Concepts', int(total_seconds * 0.25)))
            chapters.append(('Detailed Explanation', int(total_seconds * 0.6)))
            chapters.append(('Summary', int(total_seconds * 0.85)))
        else:
            chapters.append(('Core Concepts', int(total_seconds * 0.3)))
            chapters.append(('Practical Examples', int(total_seconds * 0.65)))
            chapters.append(('Summary', int(total_seconds * 0.85)))
    elif info.get('has_labs'):
        chapters.append(('Lab Introduction', 0))
        chapters.append(('Step-by-Step Walkthrough', int(total_seconds * 0.3)))
        chapters.append(('Testing & Validation', int(total_seconds * 0.8)))
    else:
        chapters.append(('Introduction', 0))
        chapters.append(('Main Content', int(total_seconds * 0.3)))
        chapters.append(('Summary', int(total_seconds * 0.8)))
    
    return chapters

def generate_video_insertion(info: Dict[str, Any]) -> str:
    """Generate the videoUrl and videoChapters fields to insert"""
    chapters = generate_chapters(info)
    
    lines = []
    lines.append('videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",')
    lines.append('videoChapters: [')
    
    chapter_strs = []
    for title, timestamp in chapters:
        chapter_strs.append(f'  {{ title: \'{title}\', timestamp: {timestamp} }}')
    
    lines.append(',\n'.join(chapter_strs))
    lines.append('],')
    
    return '\n            ' + '\n            '.join(lines)

def find_lesson_insertion_point(lesson_str: str) -> Tuple[int, bool]:
    """
    Find where to insert video fields in a lesson object.
    Returns (insertion_line, has_video_already)
    """
    lines = lesson_str.split('\n')
    
    # Check if already has videoUrl
    has_video = any('videoUrl:' in line for line in lines)
    if has_video:
        return -1, True
    
    # Find the insertion point: after duration, before difficulty/tags
    insert_after = -1
    for i, line in enumerate(lines):
        if 'duration:' in line:
            insert_after = i
            break
    
    if insert_after == -1:
        # If no duration, look for other fields
        for i, line in enumerate(lines):
            if re.match(r'^\s*(moduleNumber|lessonNumber|title|description):', line):
                insert_after = i
    
    return insert_after, False

def process_file(filepath: str) -> None:
    """Process the courseData.ts file and add videos to all lessons"""
    print(f"Reading {filepath}...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find all lesson objects
    # Pattern: { id: "...", moduleNumber: ..., ... content {...} ... }
    lesson_pattern = r'(\{\s*id:\s*"[^"]+"[^}]*(?:\{[^}]*\}[^}]*)*\})'
    
    lessons = re.findall(lesson_pattern, content, re.MULTILINE | re.DOTALL)
    
    print(f"Found {len(lessons)} lesson objects")
    
    # Process each lesson
    updated_content = content
    processed_count = 0
    skipped_count = 0
    
    for lesson_str in lessons:
        info = parse_lesson_content(lesson_str)
        
        if info.get('has_video'):
            skipped_count += 1
            continue
        
        if not info.get('id'):
            continue
        
        # Generate the video insertion
        video_insertion = generate_video_insertion(info)
        
        # Find where to insert in the full content
        # We need to find this specific lesson in the full content
        lesson_start = updated_content.find(lesson_str)
        if lesson_start == -1:
            continue
        
        # Find the insertion point within this lesson
        insert_after, has_video = find_lesson_insertion_point(lesson_str)
        if has_video or insert_after == -1:
            continue
        
        # Split the lesson into lines
        lesson_lines = lesson_str.split('\n')
        
        # Insert the video fields
        insertion_idx = insert_after + 1
        lesson_lines.insert(insertion_idx, video_insertion)
        
        # Reconstruct the lesson
        new_lesson_str = '\n'.join(lesson_lines)
        
        # Replace in full content
        updated_content = updated_content.replace(lesson_str, new_lesson_str, 1)
        
        processed_count += 1
        if processed_count % 10 == 0:
            print(f"Processed {processed_count} lessons...")
    
    # Write the updated content
    print(f"Writing updated content...")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"✅ Successfully processed {processed_count} lessons!")
    print(f"⏭️  Skipped {skipped_count} lessons (already had video)")
    print(f"📝 File updated: {filepath}")

if __name__ == '__main__':
    filepath = 'lib/data/courseData.ts'
    if len(sys.argv) > 1:
        filepath = sys.argv[1]
    
    try:
        process_file(filepath)
    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)




