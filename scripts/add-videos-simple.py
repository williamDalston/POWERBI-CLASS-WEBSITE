#!/usr/bin/env python3
"""
Simple, reliable script to add video URLs and chapters to lessons.
Uses a line-by-line approach for safety.
"""

import re

def generate_chapters(duration, title):
    """Generate video chapters based on duration."""
    total_seconds = duration * 60
    has_lab = 'Lab' in title or 'Hands-On' in title
    
    if duration <= 10:
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

def format_chapters(lesson_id, chapters):
    """Format chapters as TypeScript code."""
    lines = [f'            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-{lesson_id}",']
    lines.append('            videoChapters: [')
    for i, ch in enumerate(chapters):
        comma = ',' if i < len(chapters) - 1 else ''
        lines.append(f'              {{ title: "{ch["title"]}", timestamp: {ch["timestamp"]} }}{comma}')
    lines.append('            ],')
    return '\n'.join(lines)

def process_file(filepath):
    """Process file to add videos to lessons without them."""
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    i = 0
    added_count = 0
    
    while i < len(lines):
        line = lines[i]
        new_lines.append(line)
        
        # Look for lesson start: id: "X-Y"
        id_match = re.match(r'^\s+id: "(\d+-\d+)",\s*$', line)
        if id_match:
            lesson_id = id_match.group(1)
            
            # Check if this lesson already has videoUrl
            # Look ahead to see if videoUrl exists before content:
            has_video = False
            lookahead = i + 1
            while lookahead < len(lines) and lookahead < i + 30:
                if 'videoUrl:' in lines[lookahead]:
                    has_video = True
                    break
                if 'content:' in lines[lookahead] or 'content?:' in lines[lookahead]:
                    break
                lookahead += 1
            
            if not has_video:
                # Find duration and title
                duration = 10  # default
                title = ""
                j = i + 1
                while j < len(lines) and j < i + 20:
                    dur_match = re.match(r'^\s+duration: (\d+),?\s*$', lines[j])
                    if dur_match:
                        duration = int(dur_match.group(1))
                    
                    title_match = re.match(r'^\s+title: "([^"]+)",?\s*$', lines[j])
                    if title_match:
                        title = title_match.group(1)
                    
                    # Stop when we hit content: or topic: (last field before content)
                    if 'content:' in lines[j] or 'content?:' in lines[j]:
                        # Insert video block before content
                        chapters = generate_chapters(duration, title)
                        video_block = format_chapters(lesson_id, chapters)
                        new_lines.append(video_block + '\n')
                        added_count += 1
                        break
                    elif 'topic:' in lines[j] and j + 1 < len(lines) and 'content' in lines[j + 1]:
                        # Insert after topic line, before content
                        j += 1
                        chapters = generate_chapters(duration, title)
                        video_block = format_chapters(lesson_id, chapters)
                        new_lines.append(video_block + '\n')
                        added_count += 1
                        break
                    j += 1
        
        i += 1
    
    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    
    print(f"Added videos to {added_count} lessons.")

if __name__ == '__main__':
    process_file('lib/data/courseData.ts')





