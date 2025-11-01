'use client'

import { motion } from 'framer-motion'
import Container from '@/components/shared/Container'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { staggerContainer, staggerItem, getAnimationVariants } from '@/lib/utils/animations'

interface Module {
  week: string
  title: string
  description: string
}

const modules: Module[] = [
  {
    week: 'Module 1',
    title: 'Getting Started with Power BI',
    description: 'Master the Power BI Desktop interface, connect to data sources, and create your first interactive reports and dashboards.',
  },
  {
    week: 'Module 2',
    title: 'Data Connections & Transformation',
    description: 'Learn to import data from multiple sources, transform and clean data with Power Query, and build robust data models.',
  },
  {
    week: 'Module 3',
    title: 'Data Modeling & Relationships',
    description: 'Design star schemas, create relationships between tables, and optimize your data models for performance and clarity.',
  },
  {
    week: 'Module 4',
    title: 'DAX Fundamentals',
    description: 'Master calculated columns, measures, and essential DAX functions to create powerful business metrics and analytics.',
  },
  {
    week: 'Module 5',
    title: 'Advanced Visualization',
    description: 'Build professional dashboards, use advanced chart types, implement drill-throughs, and create stunning data visualizations.',
  },
  {
    week: 'Module 6',
    title: 'Power BI Service & Deployment',
    description: 'Publish to Power BI Service, share reports with your team, set up data refresh, and implement security best practices.',
  },
]

export default function CourseOutline() {
  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-neutral-100">
      <Container>
        <AnimatedSection direction="up">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary-900 mb-3 sm:mb-4 font-bold">
              Your Path to Power BI Mastery
            </h2>
            <p className="text-base sm:text-lg font-sans text-gray-700 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
              A comprehensive, hands-on curriculum designed to take you from beginner to Power BI expert
            </p>
          </div>
        </AnimatedSection>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto"
          variants={getAnimationVariants(staggerContainer)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {modules.map((module, index) => (
            <motion.div
              key={index}
              variants={getAnimationVariants(staggerItem)}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-5 sm:p-6 border border-neutral-100 hover:border-accent/40 relative overflow-hidden group"
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Decorative gradient on hover */}
              <motion.div 
                className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full -mr-12 -mt-12 blur-xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center shadow-lg ring-2 ring-accent/20"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 5,
                      boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white font-sans font-bold text-base sm:text-lg">
                      {index + 1}
                    </span>
                  </motion.div>
                  <div>
                    <span className="text-xs sm:text-sm font-sans font-semibold text-accent uppercase tracking-wide">
                      {module.week}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-serif text-primary-900 mb-2 sm:mb-3 leading-tight font-semibold group-hover:text-primary-800 transition-colors">
                  {module.title}
                </h3>
                <p className="text-sm sm:text-base font-sans text-gray-700 leading-relaxed">
                  {module.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10 sm:mt-12 px-4 sm:px-0">
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-neutral-200 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p className="text-base sm:text-lg font-sans text-gray-700">
                <span className="font-semibold text-primary-900">Self-paced learning:</span> Progress at your own rhythm. 
                All content is available immediately upon enrollment.
              </p>
            </div>
            <p className="text-sm sm:text-base font-sans text-gray-600">
              Plus bonus materials, theory lectures, and ongoing updates added regularly.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
