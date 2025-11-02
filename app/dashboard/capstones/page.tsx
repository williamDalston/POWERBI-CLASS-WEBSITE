'use client'

import { capstoneProjects } from '@/lib/data/capstoneData'
import CapstoneGrid from '@/components/capstones/CapstoneGrid'

export default function CapstonesPage() {
  const completedCapstoneIds: string[] = []
  if (typeof window !== 'undefined') {
    const submissions = JSON.parse(localStorage.getItem('capstoneSubmissions') || '[]')
    completedCapstoneIds.push(...submissions.map((s: any) => s.capstoneId))
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow p-8">
        <h1 className="font-serif text-3xl mb-4">Capstone Projects</h1>
        <p className="text-lg text-gray-600">
          Showcase your Power BI mastery through hands-on projects
        </p>
      </div>
      <CapstoneGrid capstones={capstoneProjects} completedCapstoneIds={completedCapstoneIds} />
    </div>
  )
}
