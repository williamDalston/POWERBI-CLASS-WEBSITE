import { Lesson } from '@/lib/data/courseData'

interface ReadingModeBannerProps {
  lesson: Lesson
}

export function ReadingModeBanner({ lesson }: ReadingModeBannerProps) {
  const labsCount = lesson.content?.labs?.length ?? 0
  const tablesCount = lesson.content?.tables?.length ?? 0
  const hasInsiderTips = (lesson.content?.insiderTips?.length ?? 0) > 0
  const hasKeyPoints = (lesson.content?.keyPoints?.length ?? 0) > 0

  return (
    <section className="rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 via-white to-blue-50/60 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
            Reading-First Experience
          </p>
          <h2 className="mt-2 text-2xl font-serif text-neutral-900">
            Immersive lesson designed for senior Power BI practitioners
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-neutral-700">
            Every section below is crafted to stand on its own&mdash;no video required. Dive into the detailed concept
            narrative, explore the expert discussion, and work through the labs at your own pace. Bookmark this lesson
            as part of your executive-ready reference library.
          </p>
        </div>

        <div className="rounded-xl bg-white/80 p-4 shadow-inner ring-1 ring-primary-100">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">
            Lesson Assets
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-neutral-700">
            <li className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary-500" aria-hidden />
              Deep-dive concept &amp; discussion
            </li>
            {hasKeyPoints && (
              <li className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-primary-500" aria-hidden />
                Executive summary key points
              </li>
            )}
            {hasInsiderTips && (
              <li className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-primary-500" aria-hidden />
                Insider tips from enterprise delivery
              </li>
            )}
            {labsCount > 0 && (
              <li className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-primary-500" aria-hidden />
                {labsCount} step-by-step lab{labsCount > 1 ? 's' : ''}
              </li>
            )}
            {tablesCount > 0 && (
              <li className="flex items-center gap-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-primary-500" aria-hidden />
                {tablesCount} reference table{tablesCount > 1 ? 's' : ''}
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}


