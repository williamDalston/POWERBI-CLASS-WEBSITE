#!/usr/bin/env ruby
# Add videos to the 11 remaining lessons that don't have them

content = File.read('lib/data/courseData.ts', encoding: 'UTF-8')

# List of lesson IDs that need videos
lessons_to_fix = ['1-4', '3-5', '4-2', '5-4', '6-3', '8-1', '9-2', '10-2', '10-5', '11-1', '18-5']

lines = content.split("\n")
output = []
i = 0

while i < lines.length
  line = lines[i]
  output << line
  
  # Check if this is one of the lessons we need to fix
  if line =~ /id: '(\d+-\d+)',/ && lessons_to_fix.include?($1)
    lesson_id = $1
    
    # Look ahead to find topic and duration
    duration = 15
    topic_idx = nil
    
    (i+1..[i+30, lines.length-1].min).each do |j|
      next_line = lines[j]
      break if next_line =~ /^\s*id: '/ && !(next_line =~ /^\s*\/\//)
      
      if next_line =~ /topic:/
        topic_idx = j
      end
      
      if next_line =~ /duration:\s*(\d+)/
        duration = $1.to_i
      end
      
      break if next_line =~ /content: \{/
    end
    
    # Calculate chapters
    chapters = []
    if duration <= 10
      chapters = [{title: 'Introduction', timestamp: 0}, {title: 'Key Concepts', timestamp: duration * 30}]
    elsif duration <= 15
      chapters = [{title: 'Introduction', timestamp: 0}, {title: 'Concept Overview', timestamp: duration * 24}, {title: 'Summary', timestamp: duration * 48}]
    elsif duration <= 20
      chapters = [{title: 'Introduction', timestamp: 0}, {title: 'Concept Overview', timestamp: duration * 24}, {title: 'Demonstration', timestamp: duration * 48}, {title: 'Key Takeaways', timestamp: duration * 72}]
    else
      chapters = [{title: 'Introduction', timestamp: 0}, {title: 'Concept Overview', timestamp: duration * 20}, {title: 'Demonstration/Lab', timestamp: duration * 40}, {title: 'Best Practices', timestamp: duration * 60}, {title: 'Key Takeaways', timestamp: duration * 80}]
    end
    
    # Find where to insert
    if topic_idx
      insert_idx = output.length
      (output.length-1).downto([output.length-30, 0].max) do |k|
        if output[k] =~ /topic:/
          insert_idx = k + 1
          break
        end
      end
      
      # Build video lines
      video_lines = [
        "            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder - replace with actual video URL",
        "            videoChapters: ["
      ]
      
      chapters.each do |ch|
        video_lines << "              { title: '#{ch[:title]}', timestamp: #{ch[:timestamp]} },"
      end
      
      video_lines << "            ],"
      
      # Insert in reverse order
      video_lines.reverse.each do |vline|
        output.insert(insert_idx, vline)
      end
    end
  end
  
  i += 1
end

File.write('lib/data/courseData.ts', output.join("\n"))

count = output.join("\n").scan(/videoUrl:/).length
puts "Done! Total lessons with videoUrl: #{count}"

