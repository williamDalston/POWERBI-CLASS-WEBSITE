'use client'

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { AnalyticsData, WeeklyActivity } from '@/lib/utils/analytics'

interface ProgressChartsProps {
  analyticsData: AnalyticsData
  weeklyActivity?: WeeklyActivity[]
}

export default function ProgressCharts({ analyticsData, weeklyActivity }: ProgressChartsProps) {
  return (
    <div className="space-y-6">
      {/* Learning Velocity Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="font-serif text-xl text-primary-900 mb-4">
          Learning Velocity
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={analyticsData.completedOverTime}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis 
              dataKey="date" 
              stroke="#666"
              fontSize={12}
              tickFormatter={(value) => {
                try {
                  return new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                } catch {
                  return value
                }
              }}
            />
            <YAxis stroke="#666" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e0e0e0',
                borderRadius: '8px'
              }}
              formatter={(value: number) => [value, 'Lessons']}
              labelFormatter={(label) => {
                try {
                  return new Date(label).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                  })
                } catch {
                  return label
                }
              }}
            />
            <Line
              type="monotone"
              dataKey="cumulative"
              stroke="#0066cc"
              strokeWidth={2}
              dot={{ fill: '#0066cc', r: 4 }}
              name="Cumulative Progress"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Time Per Module Chart */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h3 className="font-serif text-xl text-primary-900 mb-4">
          Time Investment by Module
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={analyticsData.timeSpentPerModule}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis 
              dataKey="module" 
              stroke="#666"
              fontSize={12}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis stroke="#666" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e0e0e0',
                borderRadius: '8px'
              }}
              formatter={(value: number) => [`${value}m`, 'Time Spent']}
            />
            <Bar dataKey="minutes" fill="#00a4a6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Weekly Activity Chart */}
      {weeklyActivity && weeklyActivity.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <h3 className="font-serif text-xl text-primary-900 mb-4">
            Weekly Activity
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis 
                dataKey="week" 
                stroke="#666"
                fontSize={12}
                tickFormatter={(value) => {
                  try {
                    return new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                  } catch {
                    return value
                  }
                }}
              />
              <YAxis stroke="#666" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar dataKey="lessonsCompleted" fill="#0066cc" radius={[8, 8, 0, 0]} name="Lessons" />
              <Bar dataKey="activeDays" fill="#00a4a6" radius={[8, 8, 0, 0]} name="Active Days" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}





