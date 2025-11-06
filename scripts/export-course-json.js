#!/usr/bin/env node
/**
 * Export courseData.ts to JSON for easy parsing
 */

const fs = require('fs');
const path = require('path');

// Simple approach: use require with ts-node if available
// Otherwise, we'll need to transpile

try {
    // Try to use ts-node
    require('ts-node').register({
        compilerOptions: { module: 'commonjs' },
        transpileOnly: true
    });
    
    // Import the course data
    const courseData = require('../lib/data/courseData.ts');
    
    // Write to JSON
    fs.writeFileSync(
        path.join(__dirname, '../course-data-export.json'),
        JSON.stringify(courseData.courseData, null, 2),
        'utf-8'
    );
    
    console.log('✅ Successfully exported course data to course-data-export.json');
    console.log(`   Parts: ${courseData.courseData.length}`);
    
    let totalLessons = 0;
    courseData.courseData.forEach(part => {
        part.modules.forEach(module => {
            totalLessons += module.lessons.length;
        });
    });
    
    console.log(`   Total Lessons: ${totalLessons}`);
} catch (error) {
    console.error('❌ Error:', error.message);
    console.error('   Make sure ts-node is installed: npm install -D ts-node');
    process.exit(1);
}

