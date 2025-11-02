'use client'

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts'
import { AnalyticsData } from '@/lib/utils/analytics'

interface MasteryChartProps {
  analyticsData: AnalyticsData
}

export default function MasteryChart({ analyticsData }: MasteryChartProps) {
  // Transform topic mastery data for radar chart
  const radarData = analyticsData.topicMastery
    .slice(0, 6) // Top 6 topics
    .map(({ topic, mastery }) => ({
      subject: topic.length > 15 ? topic.substring(0, 15) + '...' : topic,
      mastery: mastery,
      fullMark: 100,
    }))

  // If no data, show placeholder
  if (radarData.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="font-serif text-xl text-primary-900 mb-4">
          Topic Mastery
        </h3>
        <div className="h-[300px] flex items-center justify-center">
          <p className="text-gray-500 font-sans">
            Complete more lessons to see your mastery breakdown
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h3 className="font-serif text-xl text-primary-900 mb-4">
        Topic Mastery
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={radarData}>
          <PolarGrid stroke="#e0e0e0" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#666', fontSize: 12 }}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 100]}
            tick={{ fill: '#666', fontSize: 12 }}
          />
          <Radar
            name="Mastery"
            dataKey="mastery"
            stroke="#0066cc"
            fill="#0066cc"
            fillOpacity={0.6}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}


