#!/usr/bin/env node
/**
 * Simple extraction: parse the TypeScript file using string manipulation
 * This doesn't require TypeScript compilation
 */

const fs = require('fs');
const path = require('path');

// Read the TypeScript file
const tsFile = path.join(__dirname, '../lib/data/courseData.ts');
const content = fs.readFileSync(tsFile, 'utf-8');

// Find the start of courseData array
const startPattern = /export const courseData: Part\[\] = \[/;
const startMatch = content.match(startPattern);

if (!startMatch) {
    console.error('❌ Could not find courseData export');
    process.exit(1);
}

// Extract everything from start to end of array
// Find matching closing bracket
let depth = 0;
let inString = false;
let escapeNext = false;
let startPos = startMatch.index + startMatch[0].length;
let endPos = startPos;

for (let i = startPos; i < content.length; i++) {
    const char = content[i];
    
    if (escapeNext) {
        escapeNext = false;
        continue;
    }
    
    if (char === '\\') {
        escapeNext = true;
        continue;
    }
    
    if (char === '"' && !escapeNext) {
        inString = !inString;
        continue;
    }
    
    if (!inString) {
        if (char === '[') {
            depth++;
        } else if (char === ']') {
            depth--;
            if (depth < 0) {
                endPos = i + 1;
                break;
            }
        }
    }
}

// Extract the array content
const arrayContent = content.substring(startPos, endPos - 1).trim();

// Now we'll manually parse this using a simpler approach
// Actually, let's use a different strategy - use eval with proper context
// But first, let's see if we can use a JSON-like extraction

console.log('Attempting to extract course structure...');

// Use eval in a safe way (we control the input)
try {
    // Create a minimal TypeScript-like environment
    const Part = class Part {
        constructor(data) {
            Object.assign(this, data);
        }
    };
    
    const Module = class Module {
        constructor(data) {
            Object.assign(this, data);
        }
    };
    
    const Lesson = class Lesson {
        constructor(data) {
            Object.assign(this, data);
        }
    };
    
    // Replace TypeScript syntax with JavaScript
    let jsCode = content.substring(startMatch.index);
    
    // Remove TypeScript annotations
    jsCode = jsCode.replace(/:\s*Part\[\]/g, '');
    jsCode = jsCode.replace(/export const courseData\s*=\s*\[/, 'const courseData = [');
    
    // Remove type annotations but keep the structure
    // Actually, let's try a cleaner approach
    
    // Use a regex to extract all objects
    const parts = [];
    const partRegex = /\{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*modules:\s*\[/g;
    
    // This is getting complex. Let me try a better approach:
    // Use a proper parser or convert to valid JavaScript
    
    console.log('Using eval-based extraction...');
    
    // Actually, the simplest approach: manually convert TypeScript to JavaScript
    // Remove type annotations
    let cleanCode = content
        .replace(/export const courseData: Part\[\] = /, 'module.exports.courseData = ')
        .replace(/export interface \w+ \{[^}]*\}/g, '') // Remove interfaces
        .replace(/export function \w+[^}]*\}/g, '') // Remove functions
        .replace(/:\s*\w+(\[\])?/g, '') // Remove type annotations
        .replace(/\/\/[^\n]*/g, ''); // Remove comments
    
    // Create isolated context
    const module = { exports: {} };
    
    // Execute with module context
    eval(cleanCode);
    
    // Extract the data
    const courseData = module.exports.courseData;
    
    if (!courseData) {
        throw new Error('Could not extract courseData');
    }
    
    // Write to JSON
    const outputPath = path.join(__dirname, '../course-data-export.json');
    fs.writeFileSync(
        outputPath,
        JSON.stringify(courseData, null, 2),
        'utf-8'
    );
    
    console.log('✅ Successfully extracted course data!');
    console.log(`   Parts: ${courseData.length}`);
    
    let totalLessons = 0;
    courseData.forEach(part => {
        part.modules.forEach(module => {
            totalLessons += module.lessons.length;
        });
    });
    
    console.log(`   Total Lessons: ${totalLessons}`);
    console.log(`   Written to: ${outputPath}`);
    
} catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
}

