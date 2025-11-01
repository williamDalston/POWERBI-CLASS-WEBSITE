'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Container from '@/components/shared/Container'
import { usePrefersReducedMotion } from '@/lib/hooks/usePrefersReducedMotion'
import { getAnimationVariants } from '@/lib/utils/animations'

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: (
      <svg
        className="w-12 h-12 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    title: '20+ Hours of Comprehensive Video Training',
    description: 'In-depth tutorials covering Power BI Desktop, DAX formulas, data modeling, and visualization. Each module builds practical skills with real-world examples and hands-on projects.',
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: 'Hands-On Practice Projects',
    description: 'Build real dashboards and reports using actual business scenarios. Get downloadable datasets, starter files, and bonus resources to create professional portfolio pieces.',
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Taught by Power BI Experts',
    description: 'Learn from certified professionals with years of industry experience. Our instructors combine technical expertise with practical insights from working with Fortune 500 companies.',
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Lifetime Access & Updates',
    description: 'Get lifetime access to all course materials plus future updates. New content added regularly to keep you current with the latest Power BI features and best practices.',
  },
]

export default function ValueProposition() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const prefersReducedMotion = usePrefersReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleItems(new Set(benefits.map((_, i) => i)))
      return
    }

    const observers: IntersectionObserver[] = []

    itemRefs.current.forEach((element, index) => {
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]))
            observer.unobserve(element)
          }
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -50px 0px',
        }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [prefersReducedMotion])

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-neutral-50 relative"
      aria-labelledby="value-prop-heading"
    >
      <Container maxWidth="7xl">
        <div className="text-center mb-12 lg:mb-20">
          <h2 
            id="value-prop-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-primary-900 mb-4 lg:mb-6 leading-tight"
          >
            What You'll Master
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Everything you need to become a Power BI expert and advance your data analytics career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-0">
          {benefits.map((benefit, index) => {
            const isVisible = visibleItems.has(index) || prefersReducedMotion
            
            return (
              <motion.div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                className="group flex flex-col sm:flex-row gap-5 sm:gap-6 p-6 sm:p-8 rounded-xl bg-white border border-neutral-200 hover:border-accent/40 touch-manipulation cursor-pointer focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:outline-none backdrop-blur-sm"
                initial={prefersReducedMotion ? "visible" : "hidden"}
                animate={isVisible ? "visible" : "hidden"}
                variants={getAnimationVariants({
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      delay: prefersReducedMotion ? 0 : index * 0.1,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }
                  }
                })}
                whileHover={prefersReducedMotion ? {} : { 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                role="article"
                aria-labelledby={`benefit-title-${index}`}
                tabIndex={0}
              >
                <div className="flex-shrink-0 flex items-start justify-center sm:justify-start">
                  <motion.div 
                    className="relative w-12 h-12 sm:w-14 sm:h-14 p-2 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 group-hover:from-accent/25 group-hover:to-accent/15 transition-all duration-500"
                    whileHover={prefersReducedMotion ? {} : { 
                      scale: 1.1, 
                      rotate: 3,
                      boxShadow: "0 10px 20px rgba(255,125,50,0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-center h-full">
                      {benefit.icon}
                    </div>
                  </motion.div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 
                    id={`benefit-title-${index}`}
                    className="text-xl sm:text-2xl lg:text-3xl font-serif text-primary-900 mb-3 sm:mb-4 leading-tight group-hover:text-accent transition-colors duration-300"
                  >
                    {benefit.title}
                  </h3>
                  <p className="text-base sm:text-lg font-sans text-gray-700 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
