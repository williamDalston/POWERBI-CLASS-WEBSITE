'use client'

import AnimatedSection from '@/components/shared/AnimatedSection'
import Container from '@/components/shared/Container'

export default function ReadingFirstSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <AnimatedSection direction="up">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
            <div className="rounded-3xl border border-primary-100 bg-gradient-to-br from-primary-50 via-white to-blue-50/70 p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
                Self-Paced, Reading-First
              </p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-serif text-primary-900">
                A complete Power BI masterclass you can finish without watching a single video
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-700">
                Every module in the course is written like a field manual for senior analysts. You get long-form
                explanations, battle-tested playbooks, insider tips, and labs you can run immediately&mdash;all designed
                to stand on their own. Learn at your own pace, on your schedule, with expert-level clarity.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-neutral-50 p-6 shadow-inner ring-1 ring-primary-100">
                <h3 className="text-lg font-semibold text-primary-900">
                  What &ldquo;reading-first&rdquo; means here
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary-500" aria-hidden />
                    Long-form concepts with enterprise context for every lesson
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary-500" aria-hidden />
                    Hands-on labs and data files for immediate practice
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary-500" aria-hidden />
                    Executive-ready summaries with key takeaways and insider tips
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary-500" aria-hidden />
                    Reference tables, prompt libraries, and checklists for future projects
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-dashed border-primary-200 p-6 text-sm leading-relaxed text-neutral-700">
                <p className="font-semibold text-primary-800">
                  Bonus: Videos are coming, but not required.
                </p>
                <p className="mt-2">
                  We&apos;re actively recording companion walkthroughs. Enroll now and get lifetime updates&mdash;the
                  written curriculum already delivers the full experience today.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}


