#!/usr/bin/env python3
"""
Extract course content from courseData.ts and generate a comprehensive book-like markdown document
"""

import re
import json
from typing import Dict, List, Any

def extract_ts_value(text: str, start_pos: int) -> tuple:
    """Extract a value from TypeScript, handling strings, arrays, objects"""
    text = text[start_pos:].strip()
    
    if text.startswith('"'):
        # String value
        end = start_pos + 1
        escaped = False
        while end < len(text) + start_pos:
            if text[end - start_pos] == '\\' and not escaped:
                escaped = True
                end += 1
                continue
            if text[end - start_pos] == '"' and not escaped:
                value = text[1:end - start_pos].replace('\\"', '"').replace('\\n', '\n')
                return value, end + 1
            escaped = False
            end += 1
        return text[1:-1], len(text)
    
    # For arrays and objects, we'll use a simple approach
    if text.startswith('['):
        depth = 0
        i = 0
        in_string = False
        escape_next = False
        while i < len(text):
            if escape_next:
                escape_next = False
                i += 1
                continue
            if text[i] == '\\':
                escape_next = True
                i += 1
                continue
            if text[i] == '"':
                in_string = not in_string
            elif not in_string:
                if text[i] == '[':
                    depth += 1
                elif text[i] == ']':
                    depth -= 1
                    if depth == 0:
                        return text[:i+1], start_pos + i + 1
            i += 1
    
    # For simple values
    match = re.match(r'^([^,\}\]]+)', text)
    if match:
        value = match.group(1).strip().strip('"').strip("'")
        return value, start_pos + len(match.group(1))
    
    return None, start_pos

def parse_table_array(text: str) -> List[Dict]:
    """Parse a tables array from TypeScript"""
    tables = []
    # Find all table objects
    table_pattern = r'\{[^}]*title:\s*"([^"]+)"[^}]*headers:\s*\[([^\]]+)\][^}]*rows:\s*\[([^\]]+)\][^}]*\}'
    # Simplified extraction
    return tables

def format_markdown(course_data: Dict) -> str:
    """Format course data as a beautiful markdown book"""
    
    md = []
    md.append("# Power BI Mastery Course: Complete Guide")
    md.append("")
    md.append("*From Beginner to PL-300 Certified Expert*")
    md.append("")
    md.append("---")
    md.append("")
    
    for part_idx, part in enumerate(course_data.get('parts', [])):
        md.append(f"## Part {part_idx}: {part.get('title', 'Untitled')}")
        md.append("")
        if part.get('description'):
            md.append(f"*{part['description']}*")
            md.append("")
        
        for module in part.get('modules', []):
            md.append(f"### Module {module.get('moduleNumber', 0)}: {module.get('title', 'Untitled')}")
            md.append("")
            if module.get('description'):
                md.append(f"*{module['description']}*")
                md.append("")
            
            for lesson in module.get('lessons', []):
                md.append(f"#### Lesson {lesson.get('moduleNumber', 0)}.{lesson.get('lessonNumber', 0)}: {lesson.get('title', 'Untitled')}")
                md.append("")
                
                if lesson.get('description'):
                    md.append(f"**Overview:** {lesson['description']}")
                    md.append("")
                
                content = lesson.get('content', {})
                
                if content.get('concept'):
                    md.append("**Key Concept:**")
                    md.append("")
                    md.append(content['concept'])
                    md.append("")
                
                if content.get('discussion'):
                    md.append("**Discussion:**")
                    md.append("")
                    md.append(content['discussion'])
                    md.append("")
                
                if content.get('tables'):
                    for table in content['tables']:
                        md.append(f"**{table.get('title', 'Table')}:**")
                        md.append("")
                        headers = table.get('headers', [])
                        rows = table.get('rows', [])
                        
                        if headers:
                            md.append("| " + " | ".join(headers) + " |")
                            md.append("| " + " | ".join(["---"] * len(headers)) + " |")
                            for row in rows:
                                md.append("| " + " | ".join(row) + " |")
                            md.append("")
                
                if content.get('keyPoints'):
                    md.append("**Key Points:**")
                    md.append("")
                    for point in content['keyPoints']:
                        md.append(f"- {point}")
                    md.append("")
                
                if content.get('insiderTips'):
                    md.append("**Insider Tips:**")
                    md.append("")
                    for tip in content['insiderTips']:
                        md.append(f"💡 {tip}")
                    md.append("")
                
                if content.get('labs'):
                    md.append("**Hands-On Lab:**")
                    md.append("")
                    for i, step in enumerate(content['labs'], 1):
                        md.append(f"{i}. {step}")
                    md.append("")
                
                if lesson.get('exerciseMaterials'):
                    md.append("**Exercise Materials:**")
                    md.append("")
                    for material in lesson['exerciseMaterials']:
                        md.append(f"- [{material.get('name', 'Material')}]({material.get('url', '#')}) ({material.get('type', 'other')})")
                    md.append("")
                
                if lesson.get('tags'):
                    tags_str = ", ".join([f"`{tag}`" for tag in lesson['tags']])
                    md.append(f"**Tags:** {tags_str}")
                    md.append("")
                
                md.append("---")
                md.append("")
    
    return "\n".join(md)

def parse_course_data(file_path: str) -> Dict:
    """Parse the TypeScript course data file"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the courseData array
    # Find the start of courseData export
    start_match = re.search(r'export const courseData: Part\[\] = \[', content)
    if not start_match:
        return {'parts': []}
    
    # We'll use a simpler regex-based extraction
    parts = []
    
    # Extract parts
    part_pattern = r'id:\s*"([^"]+)"\s*,\s*title:\s*"([^"]+)"\s*,\s*description:\s*"([^"]+)"'
    part_matches = re.finditer(part_pattern, content)
    
    # More comprehensive parsing using regex
    # Find all parts
    part_blocks = re.split(r'},\s*\{', content[start_match.end():])
    
    # For now, let's use a different approach - extract using structured parsing
    return {'parts': []}

def main():
    """Main function"""
    print("Reading courseData.ts...")
    
    # Use Node.js to export the data as JSON, or parse directly
    # For now, let's create a simpler extraction script
    import subprocess
    import sys
    
    # Create a simple Node.js script to export as JSON
    node_script = """
    const ts = require('typescript');
    const fs = require('fs');
    
    // Read and transpile the TypeScript file
    const source = fs.readFileSync('lib/data/courseData.ts', 'utf8');
    const result = ts.transpile(source, { module: ts.ModuleKind.CommonJS });
    
    // Evaluate it (in a safe way)
    const module = { exports: {} };
    eval(result);
    
    // Export as JSON
    console.log(JSON.stringify(module.exports.courseData || {}));
    """
    
    # Alternative: Use Python to parse TypeScript more directly
    # Let's read the file and extract content using regex
    print("Parsing courseData.ts with regex extraction...")
    
    with open('lib/data/courseData.ts', 'r', encoding='utf-8') as f:
        ts_content = f.read()
    
    # Extract all lessons with their content
    # This is a simplified approach - extract key fields
    print("Extracting course structure...")
    
    # We'll use a hybrid approach: extract structure and then manually format
    # For production, consider using a proper TypeScript parser
    
    # Find all lesson objects
    lessons = []
    lesson_pattern = r'id:\s*"(\d+-\d+)"[^}]*title:\s*"([^"]+)"[^}]*description:\s*"([^"]*)"'
    
    print("This is a complex TypeScript structure.")
    print("Creating extraction script using ts-node...")
    
    # Create a Node.js extraction script
    extract_script = """
const { execSync } = require('child_process');
const fs = require('fs');

// Try to import the TypeScript file
try {
    // Use ts-node to execute
    const tsNode = require('ts-node');
    tsNode.register({ compilerOptions: { module: 'commonjs' } });
    
    const courseData = require('./lib/data/courseData.ts');
    
    fs.writeFileSync('course-data.json', JSON.stringify(courseData.courseData, null, 2));
    console.log('Successfully extracted to course-data.json');
} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
}
"""
    
    # Write the extraction script
    with open('scripts/temp-extract.js', 'w') as f:
        f.write(extract_script)
    
    print("Attempting to extract using simpler method...")
    
    # Simpler: Read file and manually parse structure
    # Extract course structure
    parts_data = {'parts': []}
    
    # Find all part blocks
    part_blocks = re.findall(r'id:\s*"(part-\d+)"[^}]*title:\s*"([^"]+)"[^}]*description:\s*"([^"]+)"', ts_content)
    
    # This is getting complex. Let me create a proper solution using direct regex extraction
    
    print("Using comprehensive regex extraction...")
    
    # Extract lessons more comprehensively
    lessons_extracted = []
    
    # Match lesson objects more thoroughly
    lesson_block_pattern = r'\{\s*id:\s*"(\d+-\d+)"[^}]*?title:\s*"([^"]+)"[^}]*?description:\s*"([^"]*?)"[^}]*?\}'
    
    # Better approach: extract module by module
    module_pattern = r'id:\s*"(module-\d+)"[^}]*title:\s*"([^"]+)"[^}]*description:\s*"([^"]+)"[^}]*moduleNumber:\s*(\d+)'
    
    print("For now, creating a Node.js-based solution...")
    
    # Actually, let's use a TypeScript compiler approach
    # Or better: manually parse the known structure
    
    return None

if __name__ == '__main__':
    result = main()

