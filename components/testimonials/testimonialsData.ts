import { Testimonial, SpotlightTestimonial } from './types'

// Regular testimonials for the grid
export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "I tried YouTube tutorials and other courses, but this was the first program that taught me to build professional dashboards from scratch. The hands-on projects were game-changers.",
    author: 'Sarah M.',
    identifier: 'Sarah M., Data Analyst',
    role: 'Data Analyst',
    persona: 'skeptic',
    rating: 5,
  },
  {
    id: '2',
    quote: 'I was a complete beginner to Power BI. The step-by-step approach made everything click. Now I create dashboards that impress my management team every month.',
    author: 'Michael R.',
    identifier: 'Michael R., Business Consultant',
    role: 'Business Consultant',
    persona: 'beginner',
    rating: 5,
  },
  {
    id: '3',
    quote: 'Before this course, I was drowning in spreadsheets. Six months later, I got promoted to Senior Analyst. The DAX formulas and data modeling techniques were exactly what I needed.',
    author: 'Jessica L.',
    identifier: 'Jessica L., Operations Manager',
    role: 'Operations Manager',
    persona: 'transformation',
    rating: 5,
  },
  {
    id: '4',
    quote: 'The practical, real-world approach was perfect. No fluff—just actionable skills. I immediately applied what I learned to create executive dashboards that drive decisions.',
    author: 'David K.',
    identifier: 'David K., Finance Director',
    role: 'Finance Director',
    persona: 'skeptic',
    rating: 5,
  },
  {
    id: '5',
    quote: 'Even with my busy schedule, the self-paced format worked perfectly. The downloadable practice files helped me master each concept before moving on.',
    author: 'Emma T.',
    identifier: 'Emma T., Marketing Director',
    role: 'Marketing Director',
    persona: 'beginner',
    rating: 5,
  },
  {
    id: '6',
    quote: 'This course transformed my career. I went from basic Excel reporting to building enterprise dashboards. The ROI was immediate—better insights, faster decisions, more recognition.',
    author: 'Robert C.',
    identifier: 'Robert C., IT Manager',
    role: 'IT Manager',
    persona: 'transformation',
    rating: 5,
  },
]

// Spotlight testimonial (featured, large format)
export const spotlightTestimonial: SpotlightTestimonial = {
  id: 'spotlight-1',
  quote: 'This course didn\'t just teach me Power BI—it changed my entire career trajectory.',
  author: 'Maria G.',
  identifier: 'Maria G., Senior Business Intelligence Specialist',
  role: 'BI Specialist',
  fullStory: 'After years of using Excel and basic BI tools, I hit a ceiling in my career. I tried online tutorials and fragmented courses, but nothing gave me the comprehensive understanding I needed to build enterprise-level dashboards. Then I found this course. The structured curriculum and expert instruction helped me master DAX, data modeling, and advanced visualization techniques that I had struggled with for years. Today, I lead a data analytics team at a Fortune 500 company. The practical projects and real-world insights from this course gave me the confidence and skills to land my dream role and deliver value from day one.',
  persona: 'transformation',
  rating: 5,
}

