'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/shared/Container'
import AnimatedSection from '@/components/shared/AnimatedSection'
import { fadeInUp, getAnimationVariants } from '@/lib/utils/animations'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How is this different from free YouTube tutorials?',
    answer: 'While YouTube has great content, it\'s fragmented and lacks structure. Our course provides a complete learning path from beginner to expert with hands-on projects, downloadable datasets, and expert guidance. You\'ll learn not just the "how" but also the "why" behind best practices.',
  },
  {
    question: 'I\'m a beginner with no Power BI experience. Is this for me?',
    answer: 'Absolutely! The course is designed for complete beginners. We start with Power BI Desktop installation and basic concepts, building up to advanced techniques. Our step-by-step approach makes complex topics accessible, and many students with no prior experience have achieved mastery.',
  },
  {
    question: 'How long does the course take to complete?',
    answer: 'The course is self-paced with 6 comprehensive modules. Most students spend 4-8 weeks completing the material thoroughly, but you can go faster or slower based on your schedule. You have lifetime access, so you can revisit any section whenever you need to.',
  },
  {
    question: 'What if I\'m not satisfied with the course?',
    answer: 'We offer a 30-day money-back guarantee with no questions asked. If you\'re not completely satisfied, simply contact us within 30 days of your purchase for a full refund. We\'re confident in the value we provide and want you to feel secure in your investment.',
  },
  {
    question: 'Do I need to have Power BI installed before starting?',
    answer: 'No! We\'ll guide you through downloading and installing Power BI Desktop (which is free) in Module 1. You don\'t need any special software or prior experience. Everything you need is covered in the course.',
  },
  {
    question: 'Will I get a certificate upon completion?',
    answer: 'Yes! Upon completing the course, you\'ll receive a certificate of completion that you can add to your LinkedIn profile and resume. This demonstrates your commitment to professional development to employers.',
  },
  {
    question: 'What format is the content delivered in?',
    answer: 'The course includes high-quality HD video lessons, downloadable practice files and datasets, step-by-step guides, and bonus resources. Everything is accessible through your member dashboard on any device—desktop, tablet, or mobile.',
  },
  {
    question: 'How much time should I dedicate each week?',
    answer: 'We recommend 3-5 hours per week for optimal learning, but the self-paced format lets you fit it into your schedule. You can accelerate through familiar topics or take extra time on challenging sections. Consistent practice yields the best results.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-gradient-to-b from-white to-neutral-50" id="faq">
      <Container>
        <div className="max-w-3xl mx-auto">
          <AnimatedSection direction="up">
            <div className="text-center mb-12 px-4 sm:px-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg font-sans text-gray-700">
                Everything you need to know before starting your journey
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm hover:border-accent/40 hover:shadow-lg transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={getAnimationVariants({
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      delay: index * 0.05,
                      duration: 0.4,
                    }
                  }
                })}
                whileHover={{ 
                  y: -2,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset transition-colors group"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  whileHover={{ backgroundColor: 'rgba(255, 125, 50, 0.05)' }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="font-sans font-semibold text-lg text-primary-900 pr-8 group-hover:text-accent transition-colors">
                    {faq.question}
                  </span>
                  <motion.svg
                    className="w-6 h-6 flex-shrink-0 text-accent group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      className="overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 bg-gradient-to-br from-neutral-50 to-white border-t border-gray-200">
                        <motion.p 
                          className="font-sans text-base text-gray-700 leading-relaxed"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center px-4 sm:px-0">
            <p className="text-base font-sans text-gray-700 mb-4">
              Still have questions? We're here to help.
            </p>
            <a
              href="mailto:support@powerbicourse.com"
              className="inline-block text-accent hover:text-accent-dark font-sans font-semibold underline transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

