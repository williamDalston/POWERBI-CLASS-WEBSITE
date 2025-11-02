'use client'

import CapstoneCard from './CapstoneCard'
import { CapstoneProject } from '@/lib/data/capstoneData'

interface CapstoneGridProps {
  capstones: CapstoneProject[]
  completedCapstoneIds?: string[]
}

export default function CapstoneGrid({ capstones, completedCapstoneIds = [] }: CapstoneGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {capstones.map((capstone) => (
        <CapstoneCard
          key={capstone.id}
          capstone={capstone}
          isCompleted={completedCapstoneIds.includes(capstone.id)}
        />
      ))}
    </div>
  )
}
