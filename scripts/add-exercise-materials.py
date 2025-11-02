#!/usr/bin/env python3
"""
Script to add exercise materials to lab lessons in courseData.ts
Based on AGENT-ASSIGNMENTS-REMAINING-TASKS.md requirements
"""

import re
import sys

# Lessons that need exercise materials
LESSONS_NEEDING_MATERIALS = {
    "1-2": {"name": "Installation Lab", "materials": [
        {"name": "Power BI Desktop Installation Guide (PDF)", "url": "/resources/installation-guide.pdf", "type": "pdf"},
        {"name": "System Requirements Checklist", "url": "/resources/system-requirements.pdf", "type": "cheatsheet"}
    ]},
    "2-2": {"name": "Connecting to Files", "materials": [
        {"name": "Sample Excel Dataset", "url": "/resources/sample-sales-data.xlsx", "type": "dataset"},
        {"name": "Sample CSV Dataset", "url": "/resources/sample-customers.csv", "type": "dataset"},
        {"name": "File Connection Guide", "url": "/resources/file-connection-guide.pdf", "type": "pdf"}
    ]},
    "2-4": {"name": "Web/Cloud Services", "materials": [
        {"name": "Web Data Demo URL List", "url": "/resources/web-data-sources.pdf", "type": "pdf"},
        {"name": "Cloud Service Connection Cheat Sheet", "url": "/resources/cloud-connections.pdf", "type": "cheatsheet"}
    ]},
    "3-2": {"name": "Basic Transformations", "materials": [
        {"name": "Messy Dataset Exercise", "url": "/resources/messy-data.csv", "type": "dataset"},
        {"name": "Transformations Practice Guide", "url": "/resources/transformations-guide.pdf", "type": "pdf"},
        {"name": "Solution File (.pbix)", "url": "/resources/transformations-solution.pbix", "type": "pbix"}
    ]},
    "5-4": {"name": "Relationships Lab", "materials": [
        {"name": "Star Schema Sample Data", "url": "/resources/star-schema-data.xlsx", "type": "dataset"},
        {"name": "Relationships Best Practices", "url": "/resources/relationships-guide.pdf", "type": "pdf"},
        {"name": "Solution File (.pbix)", "url": "/resources/relationships-solution.pbix", "type": "pbix"}
    ]},
    "6-3": {"name": "DAX Lab 1", "materials": [
        {"name": "DAX Practice Dataset", "url": "/resources/dax-practice-data.xlsx", "type": "dataset"},
        {"name": "DAX Reference Sheet", "url": "/resources/dax-reference.pdf", "type": "cheatsheet"},
        {"name": "DAX Formulas Template", "url": "/resources/dax-template.txt", "type": "code"}
    ]},
    "6-4": {"name": "DAX Lab 2", "materials": [
        {"name": "Advanced DAX Exercises", "url": "/resources/advanced-dax-data.xlsx", "type": "dataset"},
        {"name": "DAX Solutions Reference", "url": "/resources/dax-solutions.pdf", "type": "pdf"}
    ]},
    "6-6": {"name": "DAX Lab 3", "materials": [
        {"name": "Complex DAX Scenarios", "url": "/resources/complex-dax-data.xlsx", "type": "dataset"},
        {"name": "DAX Pattern Library", "url": "/resources/dax-patterns.pdf", "type": "cheatsheet"}
    ]},
    "8-1": {"name": "CALCULATE Lab 1", "materials": [
        {"name": "CALCULATE Practice Data", "url": "/resources/calculate-practice.xlsx", "type": "dataset"},
        {"name": "CALCULATE Function Guide", "url": "/resources/calculate-guide.pdf", "type": "pdf"},
        {"name": "CALCULATE Examples Template", "url": "/resources/calculate-examples.txt", "type": "code"}
    ]},
    "8-2": {"name": "CALCULATE Lab 2", "materials": [
        {"name": "Advanced CALCULATE Scenarios", "url": "/resources/calculate-advanced.xlsx", "type": "dataset"},
        {"name": "CALCULATE Patterns Cheat Sheet", "url": "/resources/calculate-patterns.pdf", "type": "cheatsheet"}
    ]},
    "9-2": {"name": "Time Intelligence Lab 1", "materials": [
        {"name": "Time Intelligence Dataset", "url": "/resources/time-data.xlsx", "type": "dataset"},
        {"name": "Date Functions Reference", "url": "/resources/date-functions.pdf", "type": "cheatsheet"}
    ]},
    "9-3": {"name": "Time Intelligence Lab 2", "materials": [
        {"name": "YTD/MTD Practice Data", "url": "/resources/ytd-mtd-data.xlsx", "type": "dataset"},
        {"name": "Time Intelligence Solutions", "url": "/resources/time-intelligence-solutions.pdf", "type": "pdf"}
    ]},
    "9-4": {"name": "Time Intelligence Lab 3", "materials": [
        {"name": "Advanced Time Analysis", "url": "/resources/advanced-time-data.xlsx", "type": "dataset"},
        {"name": "Time Intelligence Best Practices", "url": "/resources/time-best-practices.pdf", "type": "pdf"}
    ]},
    "9-5": {"name": "Time Intelligence Lab 4", "materials": [
        {"name": "Custom Date Tables Exercise", "url": "/resources/custom-dates.xlsx", "type": "dataset"},
        {"name": "Date Table Template", "url": "/resources/date-table-template.txt", "type": "code"}
    ]},
    "10-2": {"name": "Report Design Lab 1", "materials": [
        {"name": "Design Practice Data", "url": "/resources/design-data.xlsx", "type": "dataset"},
        {"name": "Report Design Guidelines", "url": "/resources/report-design-guide.pdf", "type": "pdf"}
    ]},
    "10-4": {"name": "Report Design Lab 2", "materials": [
        {"name": "Visualization Best Practices", "url": "/resources/viz-best-practices.pdf", "type": "pdf"},
        {"name": "Color Palette Reference", "url": "/resources/color-palettes.pdf", "type": "cheatsheet"}
    ]},
    "10-5": {"name": "Report Design Lab 3", "materials": [
        {"name": "Advanced Design Exercises", "url": "/resources/advanced-design.xlsx", "type": "dataset"},
        {"name": "Design Template (.pbix)", "url": "/resources/design-template.pbix", "type": "pbix"}
    ]},
    "11-1": {"name": "AI Visuals Lab 1", "materials": [
        {"name": "AI Visuals Practice Data", "url": "/resources/ai-viz-data.xlsx", "type": "dataset"},
        {"name": "AI Features Guide", "url": "/resources/ai-features-guide.pdf", "type": "pdf"}
    ]},
    "11-2": {"name": "AI Visuals Lab 2", "materials": [
        {"name": "Copilot in Power BI Guide", "url": "/resources/copilot-guide.pdf", "type": "pdf"},
        {"name": "AI Prompts Library", "url": "/resources/ai-prompts.pdf", "type": "cheatsheet"}
    ]},
    "11-3": {"name": "AI Visuals Lab 3", "materials": [
        {"name": "Advanced AI Scenarios", "url": "/resources/ai-advanced.xlsx", "type": "dataset"},
        {"name": "AI Best Practices", "url": "/resources/ai-best-practices.pdf", "type": "pdf"}
    ]},
    "13-1": {"name": "Performance Lab 1", "materials": [
        {"name": "Performance Test Dataset", "url": "/resources/perf-test-data.xlsx", "type": "dataset"},
        {"name": "Performance Optimization Guide", "url": "/resources/perf-guide.pdf", "type": "pdf"}
    ]},
    "13-2": {"name": "Performance Lab 2", "materials": [
        {"name": "Query Optimization Tips", "url": "/resources/query-optimization.pdf", "type": "cheatsheet"},
        {"name": "Performance Monitoring Tools", "url": "/resources/perf-tools.pdf", "type": "pdf"}
    ]},
    "13-6": {"name": "Performance Lab 3", "materials": [
        {"name": "Advanced Performance Tuning", "url": "/resources/advanced-perf.xlsx", "type": "dataset"},
        {"name": "Performance Checklist", "url": "/resources/perf-checklist.pdf", "type": "cheatsheet"}
    ]},
    "14-1": {"name": "Security Lab 1", "materials": [
        {"name": "Security Best Practices", "url": "/resources/security-guide.pdf", "type": "pdf"},
        {"name": "RLS Examples", "url": "/resources/rls-examples.txt", "type": "code"}
    ]},
    "14-2": {"name": "Security Lab 2", "materials": [
        {"name": "Security Configuration Guide", "url": "/resources/security-config.pdf", "type": "pdf"},
        {"name": "Security Checklist", "url": "/resources/security-checklist.pdf", "type": "cheatsheet"}
    ]},
    "14-3": {"name": "Security Lab 3", "materials": [
        {"name": "Advanced Security Scenarios", "url": "/resources/advanced-security.xlsx", "type": "dataset"},
        {"name": "Security Best Practices Reference", "url": "/resources/security-reference.pdf", "type": "pdf"}
    ]},
    "15-2": {"name": "Calculation Groups", "materials": [
        {"name": "Calculation Groups Template", "url": "/resources/calc-groups-template.txt", "type": "code"},
        {"name": "Calculation Groups Guide", "url": "/resources/calc-groups-guide.pdf", "type": "pdf"}
    ]},
    "16-1": {"name": "CI/CD Lab", "materials": [
        {"name": "CI/CD Setup Guide", "url": "/resources/cicd-setup.pdf", "type": "pdf"},
        {"name": "Deployment Templates", "url": "/resources/deployment-templates.zip", "type": "other"}
    ]},
    "17-1": {"name": "Copilot Lab 1", "materials": [
        {"name": "Copilot Practice Dataset", "url": "/resources/copilot-practice.xlsx", "type": "dataset"},
        {"name": "Copilot Getting Started", "url": "/resources/copilot-getting-started.pdf", "type": "pdf"}
    ]},
    "17-2": {"name": "Copilot Lab 2", "materials": [
        {"name": "Copilot Advanced Features", "url": "/resources/copilot-advanced.pdf", "type": "pdf"},
        {"name": "Copilot Tips & Tricks", "url": "/resources/copilot-tips.pdf", "type": "cheatsheet"}
    ]},
    "17-3": {"name": "Copilot Lab 3", "materials": [
        {"name": "Copilot Best Practices", "url": "/resources/copilot-best-practices.pdf", "type": "pdf"},
        {"name": "Copilot Prompt Templates", "url": "/resources/copilot-prompts.pdf", "type": "cheatsheet"}
    ]},
    "17-4": {"name": "Copilot Lab 4", "materials": [
        {"name": "Copilot Integration Scenarios", "url": "/resources/copilot-integration.xlsx", "type": "dataset"},
        {"name": "Copilot FAQ", "url": "/resources/copilot-faq.pdf", "type": "pdf"}
    ]}
}

def generate_materials_string(materials):
    """Generate the exerciseMaterials array string"""
    if not materials:
        return ""
    
    lines = ["exerciseMaterials: ["]
    
    for i, material in enumerate(materials):
        indent = "  "
        lines.append(f'{indent}{{')
        lines.append(f'{indent}  name: "{material["name"]}",')
        lines.append(f'{indent}  url: "{material["url"]}",')
        lines.append(f'{indent}  type: "{material["type"]}"')
        if i < len(materials) - 1:
            lines.append(f'{indent}}},')
        else:
            lines.append(f'{indent}}}')
    
    lines.append("            ],")
    return '\n            '.join(lines)

def process_file(filepath):
    """Process the courseData.ts file and add exercise materials to lab lessons"""
    print(f"Reading {filepath}...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Process each lesson that needs materials
    updated_content = content
    processed_count = 0
    skipped_count = 0
    
    for lesson_id, lesson_info in LESSONS_NEEDING_MATERIALS.items():
        # Find this specific lesson
        # Pattern: id: "lesson-id", followed by lesson content
        pattern = rf'(id:\s*"{re.escape(lesson_id)}",[\s\S]*?)(?=(?:^\s*}},\s*$)|\n\s*{{)'
        match = re.search(pattern, updated_content)
        
        if not match:
            print(f"⚠️  Could not find lesson {lesson_id}")
            skipped_count += 1
            continue
        
        lesson_content = match.group(1)
        
        # Check if already has exerciseMaterials
        if 'exerciseMaterials:' in lesson_content:
            print(f"⏭️  Lesson {lesson_id} already has exercise materials, skipping")
            skipped_count += 1
            continue
        
        # Generate materials string
        materials_str = generate_materials_string(lesson_info["materials"])
        
        # Find where to insert (after tags/topic/difficulty, before content)
        # Look for closing of the properties before content object
        insert_pattern = rf'(difficulty:\s*\'[^\']+\',\s+tags:|tags:.*?topic:|topic:[^,]+,\s+)(?=content:)'
        
        replacement = rf'\1\n            {materials_str}\n            '
        
        # Replace in the lesson content
        new_lesson_content = re.sub(insert_pattern, replacement, lesson_content, flags=re.DOTALL)
        
        # Replace in full content
        updated_content = updated_content.replace(lesson_content, new_lesson_content, 1)
        
        processed_count += 1
        print(f"✅ Added materials to lesson {lesson_id} ({lesson_info['name']})")
    
    # Write the updated content
    print(f"\nWriting updated content...")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"\n✅ Successfully processed {processed_count} lessons!")
    print(f"⏭️  Skipped {skipped_count} lessons")
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

