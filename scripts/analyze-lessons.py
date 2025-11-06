#!/usr/bin/env python3
"""Analyze all lessons for text content completeness."""

import re
import json

# Read the course data file
with open('lib/data/courseData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all lessons
lesson_pattern = r'id:\s*"([0-9]+-[0-9]+)"[^}]*?title:\s*"([^"]+)"'
lessons = []
matches = list(re.finditer(lesson_pattern, content))

print(f"Found {len(matches)} lessons\n")

issues_found = []

for i, match in enumerate(matches):
    lesson_id = match.group(1)
    title = match.group(2)
    start_pos = match.start()
    
    # Find the content section for this lesson
    # Look for the next lesson or end of this lesson
    if i + 1 < len(matches):
        end_pos = matches[i + 1].start()
    else:
        end_pos = len(content)
    
    lesson_content = content[start_pos:end_pos]
    
    # Check for content section
    content_match = re.search(r'content:\s*\{([^}]*)\}', lesson_content, re.DOTALL)
    
    if not content_match:
        issues_found.append({
            'id': lesson_id,
            'title': title,
            'issue': 'Missing content section entirely'
        })
        continue
    
    content_section = content_match.group(1)
    
    # Check each component
    has_concept = bool(re.search(r'concept:\s*"[^"]+"', content_section)) or bool(re.search(r'concept:\s*`[^`]+`', content_section))
    has_discussion = bool(re.search(r'discussion:\s*"[^"]+"', content_section)) or bool(re.search(r'discussion:\s*`[^`]+`', content_section))
    has_key_points = bool(re.search(r'keyPoints:\s*\[', content_section))
    has_insider_tips = bool(re.search(r'insiderTips:\s*\[', content_section))
    has_labs = bool(re.search(r'labs:\s*\[', content_section))
    
    issues = []
    
    if not has_concept:
        issues.append('Missing concept field')
    elif len(re.findall(r'concept:\s*"([^"]+)"', content_section)) == 0:
        concept_match = re.findall(r'concept:\s*`([^`]+)`', content_section)
        if not concept_match or len(concept_match[0]) < 200:
            issues.append(f'Concept too short (need 200+ chars)')
    
    if not has_discussion:
        issues.append('Missing discussion field')
    else:
        discussion_match = re.findall(r'discussion:\s*"([^"]+)"', content_section)
        if not discussion_match:
            discussion_match = re.findall(r'discussion:\s*`([^`]+)`', content_section)
        if not discussion_match or len(discussion_match[0]) < 500:
            issues.append(f'Discussion too short (need 500+ chars)')
    
    if not has_key_points:
        issues.append('Missing keyPoints array')
    else:
        # Count key points
        kp_match = re.search(r'keyPoints:\s*\[([^\]]+)\]', content_section, re.DOTALL)
        if kp_match:
            kp_content = kp_match.group(1)
            kp_count = len(re.findall(r'"[^"]+"', kp_content))
            if kp_count < 3:
                issues.append(f'Insufficient key points ({kp_count}, need 3+)')
    
    # Labs should have at least 3 steps if present
    if has_labs:
        labs_match = re.search(r'labs:\s*\[([^\]]+)\]', content_section, re.DOTALL)
        if labs_match:
            labs_content = labs_match.group(1)
            labs_count = len(re.findall(r'"[^"]+"', labs_content))
            if labs_count < 3:
                issues.append(f'Insufficient lab steps ({labs_count}, need 3+)')
    
    if issues:
        issues_found.append({
            'id': lesson_id,
            'title': title,
            'issues': issues
        })

print("=" * 60)
print("LESSON CONTENT COMPLETENESS ANALYSIS")
print("=" * 60)
print(f"\nTotal lessons: {len(matches)}")
print(f"Lessons with issues: {len(issues_found)}")
print(f"Complete lessons: {len(matches) - len(issues_found)}")

if issues_found:
    print("\n" + "=" * 60)
    print("LESSONS REQUIRING ENHANCEMENT")
    print("=" * 60)
    for item in issues_found:
        print(f"\n[{item['id']}] {item['title']}")
        if 'issue' in item:
            print(f"  - {item['issue']}")
        else:
            for issue in item['issues']:
                print(f"  - {issue}")

# Save to JSON
with open('lesson-analysis.json', 'w', encoding='utf-8') as f:
    json.dump({
        'total': len(matches),
        'incomplete': len(issues_found),
        'issues': issues_found
    }, f, indent=2)

print(f"\n\nAnalysis saved to lesson-analysis.json")




