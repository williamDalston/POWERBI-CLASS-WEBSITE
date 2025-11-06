export default function SelfPacedReminder() {
  return (
    <section className="mb-8 rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 via-white to-blue-50/70 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
            Reading-First Curriculum
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-neutral-900">
            Every module is fully written, lab-ready, and video-optional
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
            The entire class is designed to be consumed like a professional playbook. Each lesson includes deep
            explanations, executive-ready summaries, hands-on labs, and reference tables. Work through the curriculum at
            your own pace&mdash;no videos required to get full value.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 rounded-xl bg-white/85 p-5 shadow-inner ring-1 ring-primary-100 sm:w-auto sm:min-w-[240px]">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-400">
            What&apos;s inside every module
          </p>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-2 w-2 rounded-full bg-primary-500" aria-hidden />
              Long-form concept narrative with senior-level perspective
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-2 w-2 rounded-full bg-primary-500" aria-hidden />
              Detailed discussions you can reference during implementation
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-2 w-2 rounded-full bg-primary-500" aria-hidden />
              Step-by-step labs designed for self-paced learning
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-2 w-2 rounded-full bg-primary-500" aria-hidden />
              Quick-glance key points, insider tips, and comparison tables
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}


