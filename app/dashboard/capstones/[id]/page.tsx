'use client'

import { use } from 'react'
import { useRouter } from 'next/navigation'
import { getCapstoneById } from '@/lib/data/capstoneData'

export default function CapstoneDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const router = useRouter()
  const capstone = getCapstoneById(resolvedParams.id)

  if (!capstone) {
    return <div>Capstone not found</div>
  }

  return (
    <div className="space-y-6">
      <button onClick={() => router.push('/dashboard/capstones')} className="text-gray-600">
        ← Back
      </button>
      <div className="bg-white rounded-lg shadow p-8">
        <h1 className="font-serif text-3xl mb-4">{capstone.title}</h1>
        <p className="text-gray-600">{capstone.description}</p>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Tasks</h2>
          {capstone.tasks.map((task, idx) => (
            <div key={idx} className="mb-4 border p-4 rounded">
              <h3 className="font-bold">{task.title}</h3>
              <p className="text-sm text-gray-600">{task.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
