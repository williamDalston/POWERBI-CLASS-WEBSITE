'use client'

import { useState, useMemo } from 'react'

export interface TableData {
  headers: string[]
  rows: string[][]
  title?: string
}

export interface InteractiveTableProps {
  data: TableData
  className?: string
  showSearch?: boolean
  showExport?: boolean
  exportFileName?: string
  stickyHeader?: boolean
}

export default function InteractiveTable({
  data,
  className = '',
  showSearch = true,
  showExport = true,
  exportFileName = 'table-data',
  stickyHeader = false
}: InteractiveTableProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortConfig, setSortConfig] = useState<{ key: number; direction: 'asc' | 'desc' } | null>(null)
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set())

  // Filter rows based on search
  const filteredRows = useMemo(() => {
    if (!searchTerm.trim()) return data.rows

    const lowerSearch = searchTerm.toLowerCase()
    return data.rows.filter((row) =>
      row.some((cell) => cell.toLowerCase().includes(lowerSearch))
    )
  }, [data.rows, searchTerm])

  // Sort rows
  const sortedRows = useMemo(() => {
    if (!sortConfig) return filteredRows

    const sorted = [...filteredRows].sort((a, b) => {
      const aValue = a[sortConfig.key] || ''
      const bValue = b[sortConfig.key] || ''
      
      // Try to parse as numbers if possible
      const aNum = parseFloat(aValue)
      const bNum = parseFloat(bValue)
      const isNumeric = !isNaN(aNum) && !isNaN(bNum)

      if (isNumeric) {
        return sortConfig.direction === 'asc' ? aNum - bNum : bNum - aNum
      }

      // String comparison
      const comparison = aValue.localeCompare(bValue)
      return sortConfig.direction === 'asc' ? comparison : -comparison
    })

    return sorted
  }, [filteredRows, sortConfig])

  const handleSort = (columnIndex: number) => {
    setSortConfig((current) => {
      if (current?.key === columnIndex) {
        // Toggle direction if same column
        return {
          key: columnIndex,
          direction: current.direction === 'asc' ? 'desc' : 'asc'
        }
      }
      // New column, default to ascending
      return {
        key: columnIndex,
        direction: 'asc'
      }
    })
  }

  const getSortIcon = (columnIndex: number) => {
    if (!sortConfig || sortConfig.key !== columnIndex) {
      return (
        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      )
    }

    if (sortConfig.direction === 'asc') {
      return (
        <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
        </svg>
      )
    }

    return (
      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
      </svg>
    )
  }

  const handleSelectRow = (rowIndex: number) => {
    setSelectedRows((current) => {
      const newSet = new Set(current)
      if (newSet.has(rowIndex)) {
        newSet.delete(rowIndex)
      } else {
        newSet.add(rowIndex)
      }
      return newSet
    })
  }

  const handleSelectAll = () => {
    if (selectedRows.size === sortedRows.length) {
      setSelectedRows(new Set())
    } else {
      setSelectedRows(new Set(sortedRows.map((_, idx) => idx)))
    }
  }

  const handleExportCSV = () => {
    const csvHeaders = data.headers.join(',')
    const csvRows = sortedRows.map((row) =>
      row.map((cell) => {
        // Escape quotes and wrap in quotes if contains comma or quotes
        if (cell.includes(',') || cell.includes('"') || cell.includes('\n')) {
          return `"${cell.replace(/"/g, '""')}"`
        }
        return cell
      }).join(',')
    )

    const csvContent = [csvHeaders, ...csvRows].join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    
    link.setAttribute('href', url)
    link.setAttribute('download', `${exportFileName}.csv`)
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className={`bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm ${className}`}>
      {/* Header with Controls */}
      {(showSearch || showExport || data.title) && (
        <div className="px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
          {data.title && (
            <h3 className="font-sans font-semibold text-gray-900 mb-2">
              {data.title}
            </h3>
          )}
          <div className="flex items-center gap-2 flex-wrap">
            {showSearch && (
              <div className="flex-1 min-w-[200px] max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search table..."
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg text-sm font-sans focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <svg className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            )}
            {showExport && (
              <button
                onClick={handleExportCSV}
                className="px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg font-sans font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 text-sm"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export CSV
              </button>
            )}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className={stickyHeader ? 'sticky top-0 bg-gray-50 z-10' : 'bg-gray-50'}>
            <tr>
              {data.headers.map((header, idx) => (
                <th
                  key={idx}
                  className={`px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider cursor-pointer select-none hover:bg-gray-100 transition-colors ${
                    idx === 0 ? 'sticky left-0 bg-gray-50 z-20' : ''
                  }`}
                  onClick={() => handleSort(idx)}
                >
                  <div className="flex items-center gap-2">
                    <span>{header}</span>
                    {getSortIcon(idx)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedRows.length === 0 ? (
              <tr>
                <td colSpan={data.headers.length} className="px-4 py-12 text-center text-gray-500 font-sans">
                  No results found for &quot;{searchTerm}&quot;
                </td>
              </tr>
            ) : (
              sortedRows.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className={`hover:bg-blue-50 transition-colors ${
                    selectedRows.has(rowIdx) ? 'bg-blue-50' : ''
                  }`}
                >
                  {row.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      className={`px-4 py-3 font-sans text-sm text-gray-700 ${
                        cellIdx === 0 && stickyHeader ? 'sticky left-0 bg-blue-50 z-10' : ''
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer with Results Count */}
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
        <p className="text-xs text-gray-600 font-sans">
          Showing {sortedRows.length} of {data.rows.length} rows
          {searchTerm && (
            <span className="ml-2 text-gray-500">
              (filtered by &quot;{searchTerm}&quot;)
            </span>
          )}
        </p>
      </div>
    </div>
  )
}


