'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Dataset {
  id: string
  name: string
  description: string
  size: string
  format: string[]
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  downloadUrl: string
  preview?: {
    rows: number
    columns: number
    sampleColumns: string[]
  }
}

interface PracticeDatasetsProps {
  datasets?: Dataset[]
}

const defaultDatasets: Dataset[] = [
  {
    id: 'retail-sales',
    name: 'Retail Sales Dataset',
    description: 'Complete sales data for a retail business including products, customers, orders, and dates.',
    size: '2.4 MB',
    format: ['Excel', 'CSV', 'Power BI'],
    difficulty: 'Beginner',
    downloadUrl: '/datasets/retail-sales-sample.xlsx',
    preview: {
      rows: 10000,
      columns: 15,
      sampleColumns: ['OrderID', 'CustomerID', 'Product', 'Quantity', 'Price', 'Date'],
    },
  },
  {
    id: 'financial-data',
    name: 'Financial Analysis Dataset',
    description: 'Company financial records including revenue, expenses, departments, and time periods.',
    size: '1.8 MB',
    format: ['Excel', 'CSV'],
    difficulty: 'Intermediate',
    downloadUrl: '/datasets/financial-analysis-sample.xlsx',
    preview: {
      rows: 5000,
      columns: 20,
      sampleColumns: ['Date', 'Department', 'Revenue', 'Expenses', 'Profit', 'Region'],
    },
  },
  {
    id: 'customer-data',
    name: 'Customer Analytics Dataset',
    description: 'Complex customer journey data with demographics, purchases, and behavior metrics.',
    size: '3.2 MB',
    format: ['Excel', 'CSV', 'JSON'],
    difficulty: 'Advanced',
    downloadUrl: '/datasets/customer-analytics-sample.xlsx',
    preview: {
      rows: 15000,
      columns: 25,
      sampleColumns: ['CustomerID', 'Name', 'Email', 'FirstPurchase', 'TotalSpent', 'Category'],
    },
  },
  {
    id: 'inventory',
    name: 'Inventory Management',
    description: 'Warehouse inventory data with stock levels, suppliers, and transactions.',
    size: '900 KB',
    format: ['Excel', 'CSV'],
    difficulty: 'Beginner',
    downloadUrl: '/datasets/inventory-sample.xlsx',
    preview: {
      rows: 3000,
      columns: 12,
      sampleColumns: ['ProductID', 'ProductName', 'Category', 'Stock', 'Supplier', 'LastOrder'],
    },
  },
]

export default function PracticeDatasets({ datasets = defaultDatasets }: PracticeDatasetsProps) {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All')
  const [downloadingId, setDownloadingId] = useState<string | null>(null)

  const difficulties = ['All', ...Array.from(new Set(datasets.map(d => d.difficulty)))]

  const filteredDatasets =
    selectedDifficulty === 'All'
      ? datasets
      : datasets.filter(d => d.difficulty === selectedDifficulty)

  const handleDownload = (dataset: Dataset) => {
    setDownloadingId(dataset.id)
    // Simulate download
    setTimeout(() => {
      // In a real implementation, this would trigger a download
      console.log('Downloading:', dataset.name)
      setDownloadingId(null)
      // You could trigger actual download here
    }, 1000)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-700 border-green-200'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      case 'Advanced':
        return 'bg-red-100 text-red-700 border-red-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-accent to-accent-dark">
        <div className="flex items-center gap-3">
          <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          </svg>
          <h2 className="text-2xl font-serif text-white font-bold">Practice Datasets</h2>
        </div>
        <p className="text-white text-opacity-90 mt-2 font-sans">
          Download real-world datasets to practice your Power BI skills
        </p>
      </div>

      {/* Filters */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-sans text-sm font-medium text-gray-700">Filter by difficulty:</span>
          {difficulties.map(difficulty => (
            <button
              key={difficulty}
              onClick={() => setSelectedDifficulty(difficulty)}
              className={`px-3 py-1 rounded-full font-sans text-sm font-medium transition-colors ${
                selectedDifficulty === difficulty
                  ? 'bg-accent text-white border-2 border-accent'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-accent hover:text-accent'
              }`}
            >
              {difficulty}
            </button>
          ))}
        </div>
      </div>

      {/* Datasets Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDatasets.map(dataset => (
            <motion.div
              key={dataset.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Dataset Header */}
              <div className="p-4 bg-gradient-to-br from-neutral-50 to-white">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-lg font-bold text-primary-900">{dataset.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-semibold border ${getDifficultyColor(dataset.difficulty)}`}>
                    {dataset.difficulty}
                  </span>
                </div>
                <p className="font-sans text-sm text-gray-600 mb-3">{dataset.description}</p>

                {/* Preview Info */}
                {dataset.preview && (
                  <div className="flex items-center gap-4 text-xs text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg>
                      {dataset.preview.rows.toLocaleString()} rows
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                      </svg>
                      {dataset.preview.columns} columns
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {dataset.size}
                    </span>
                  </div>
                )}

                {/* Sample Columns */}
                {dataset.preview && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {dataset.preview.sampleColumns.slice(0, 4).map((col, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-mono rounded border border-blue-200"
                      >
                        {col}
                      </span>
                    ))}
                    {dataset.preview.sampleColumns.length > 4 && (
                      <span className="px-2 py-1 text-xs text-gray-500">
                        +{dataset.preview.sampleColumns.length - 4} more
                      </span>
                    )}
                  </div>
                )}

                {/* Formats */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-gray-600 font-medium">Formats:</span>
                  {dataset.format.map((fmt, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded">
                      {fmt}
                    </span>
                  ))}
                </div>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(dataset)}
                  disabled={downloadingId === dataset.id}
                  className="w-full px-4 py-2 bg-accent text-white rounded-lg font-sans font-medium hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {downloadingId === dataset.id ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Download Dataset
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}




