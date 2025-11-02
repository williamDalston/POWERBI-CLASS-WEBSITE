import InteractiveTable from '@/components/shared/InteractiveTable'
import InteractiveLabSteps from '@/components/labs/InteractiveLabSteps'
import { Callout } from './Callout'

interface Lesson {
  id: string
  title: string
  description?: string
  content?: {
    concept?: string
    discussion?: string
    tables?: Array<{
      title: string
      headers: string[]
      rows: string[][]
    }>
    labs?: string[]
    keyPoints?: string[]
    insiderTips?: string[]
  }
  exerciseMaterials?: Array<{
    name: string
    url: string
    type?: 'pdf' | 'dataset' | 'code' | 'cheatsheet' | 'pbix' | 'other'
  }>
}

interface LessonContentProps {
  lesson: Lesson
}

export default function LessonContent({ lesson }: LessonContentProps) {
  return (
    <article id="lesson-content" className="prose prose-neutral max-w-none sm:prose-lg">
      {/* Description */}
      {lesson.description && (
        <p className="text-neutral-700 text-lg leading-8 mb-6">{lesson.description}</p>
      )}

      {lesson.content && (
        <div className="space-y-6">
          {/* Key Concept */}
          {lesson.content.concept && (
            <section id="key-concept">
              <h2 id="key-concept-heading" className="text-2xl font-serif tracking-tight text-neutral-900 mb-2">Key Concept</h2>
              <div className="border-l-4 border-primary-600 pl-4 py-2 mb-6">
                <p className="text-neutral-800 text-[17px] leading-8">{lesson.content.concept}</p>
              </div>
            </section>
          )}

          {/* Discussion */}
          {lesson.content.discussion && (
            <section id="discussion">
              <h2 id="discussion-heading" className="text-2xl font-serif tracking-tight text-neutral-900 mb-2">Discussion</h2>
              <div className="text-neutral-700 text-[17px] leading-8 whitespace-pre-wrap mb-6">
                {lesson.content.discussion}
              </div>
            </section>
          )}

          {/* Tables */}
          {lesson.content.tables && lesson.content.tables.length > 0 && (
            <section id="tables">
              <h2 id="tables-heading" className="text-2xl font-serif tracking-tight text-neutral-900 mb-4">Reference Tables</h2>
              <div className="space-y-6 mb-6">
                {lesson.content.tables.map((table, idx) => (
                  <InteractiveTable
                    key={idx}
                    data={table}
                    showSearch={true}
                    showExport={true}
                    exportFileName={`${lesson.id}-table-${idx + 1}`}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Labs */}
          {lesson.content.labs && lesson.content.labs.length > 0 && (
            <section id="labs">
              <h2 id="labs-heading" className="text-2xl font-serif tracking-tight text-neutral-900 mb-4">Hands-On Lab</h2>
              <div className="mb-6">
                <InteractiveLabSteps
                  steps={lesson.content.labs.map((lab, idx) => ({
                    id: `${lesson.id}-lab-${idx}`,
                    instruction: lab
                  }))}
                  lessonId={lesson.id}
                  autoSave={true}
                  showProgress={true}
                  collapsibleCompleted={true}
                />
              </div>
            </section>
          )}

          {/* Key Points */}
          {lesson.content.keyPoints && lesson.content.keyPoints.length > 0 && (
            <section id="key-points">
              <h2 id="key-points-heading" className="text-2xl font-serif tracking-tight text-neutral-900 mb-4">Key Points</h2>
              <ul className="space-y-3 mb-6">
                {lesson.content.keyPoints.map((point, idx) => (
                  <li key={idx} className="text-neutral-800 text-[17px] leading-8 flex items-start gap-3">
                    <span className="text-primary-600 mt-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Insider Tips */}
          {lesson.content.insiderTips && lesson.content.insiderTips.length > 0 && (
            <section id="insider-tips">
              <h2 id="insider-tips-heading" className="text-2xl font-serif tracking-tight text-neutral-900 mb-4">Industry Insider Tips</h2>
              <div className="space-y-3 mb-6">
                {lesson.content.insiderTips.map((tip, idx) => (
                  <Callout key={idx} variant="tip" title="💡 Pro Tip">
                    {tip}
                  </Callout>
                ))}
              </div>
            </section>
          )}
        </div>
      )}

      {/* Exercise Materials */}
      {lesson.exerciseMaterials && lesson.exerciseMaterials.length > 0 && (
        <section id="resources" className="mt-8 pt-6 border-t border-neutral-200">
          <h2 id="resources-heading" className="text-2xl font-serif tracking-tight text-neutral-900 mb-4">Downloadable Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {lesson.exerciseMaterials.map((material, index) => (
              <a
                key={index}
                href={material.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-white rounded-lg border border-neutral-200 hover:border-primary-600 hover:shadow-md transition-all group"
                download
              >
                <div className="flex-shrink-0">
                  {material.type === 'pdf' && (
                    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                    </svg>
                  )}
                  {material.type === 'dataset' && (
                    <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  )}
                  {!material.type && (
                    <svg className="h-5 w-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-neutral-900 group-hover:text-primary-600 truncate">
                    {material.name}
                  </p>
                  {material.type && (
                    <p className="text-xs text-neutral-500 capitalize">
                      {material.type === 'pbix' ? 'Power BI File' : material.type}
                    </p>
                  )}
                </div>
                <svg className="h-5 w-5 text-neutral-400 group-hover:text-primary-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}

