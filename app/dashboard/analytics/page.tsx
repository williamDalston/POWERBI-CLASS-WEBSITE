'use client'

import Container from '@/components/shared/Container'
import WeaknessDashboard from '@/components/dashboard/WeaknessDashboard'

export default function AnalyticsPage() {
  return (
    <Container maxWidth="7xl" className="py-8">
      <WeaknessDashboard />
    </Container>
  )
}
