'use client'

import Link from 'next/link'
import { CapstoneProject } from '@/lib/data/capstoneData'

interface CapstoneCardProps {
  capstone: CapstoneProject
  isCompleted?: boolean
}

const levelColors = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-accent bg-opacity-10 text-accent',
  advanced: 'bg-purple-100 text-purple-800'
}

export default function CapstoneCard({ capstone, isCompleted }: CapstoneCardProps) {
  return (
    <Link href={`/dashboard/capstones/${capstone.id}`}>
      <div className="bg-white rounded-lg shadow p-6 border hover:shadow-lg transition">
        <div className="flex justify-between items-start mb-3">
          <span className={`px-2 py-1 rounded text-xs font-semibold ${levelColors[capstone.level]}`}>
            {capstone.level}
          </span>
          {isCompleted && <span className="text-green-600">✓</span>}
        </div>
        <h3 className="font-serif text-xl mb-2">{capstone.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{capstone.description}</p>
        <div className="flex gap-4 text-sm">
          <span>{capstone.estimatedHours}h</span>
          <span>{capstone.tasks.length} tasks</span>
        </div>
      </div>
    </Link>
  )
}

