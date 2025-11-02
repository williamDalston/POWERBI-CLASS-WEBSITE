'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import {
  getAllLessonsWithPosition,
  calculateGraphLayout,
  LessonNode,
} from '@/lib/utils/pathVisualizationUtils'
import { motion } from 'framer-motion'

interface LearningPathGraphProps {
  className?: string
}

export default function LearningPathGraph({
  className = '',
}: LearningPathGraphProps) {
  const router = useRouter()
  const [nodes, setNodes] = useState<LessonNode[]>([])
  const [edges, setEdges] = useState<Array<{ from: string; to: string }>>([])
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(0.8)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const updateData = () => {
      const lessons = getAllLessonsWithPosition()
      const layout = calculateGraphLayout(lessons)
      setNodes(layout.nodes)
      setEdges(layout.edges)
    }
    
    updateData()
    
    // Refresh periodically to catch localStorage updates
    const interval = setInterval(updateData, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(nodeId)
    router.push(`/dashboard/lessons/${nodeId}`)
  }

  const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
    if (e.button === 0) {
      // Left mouse button
      setIsDragging(true)
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent<SVGSVGElement>) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    setZoom((prev) => Math.max(0.3, Math.min(2, prev * delta)))
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.1, 2))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.1, 0.3))
  }

  const handleResetView = () => {
    setPan({ x: 0, y: 0 })
    setZoom(0.8)
  }

  // Calculate viewbox bounds
  const bounds = nodes.reduce(
    (acc, node) => {
      if (node.x !== undefined && node.y !== undefined) {
        return {
          minX: Math.min(acc.minX, node.x),
          maxX: Math.max(acc.maxX, node.x),
          minY: Math.min(acc.minY, node.y),
          maxY: Math.max(acc.maxY, node.y),
        }
      }
      return acc
    },
    { minX: 0, maxX: 0, minY: 0, maxY: 0 }
  )

  const width = Math.max(bounds.maxX - bounds.minX, 800)
  const height = Math.max(bounds.maxY - bounds.minY, 600)

  const hoveredNodeData = nodes.find((n) => n.id === hoveredNode)
  const selectedNodeData = nodes.find((n) => n.id === selectedNode)

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-serif text-2xl text-primary-900 mb-1">
            Course Graph View
          </h3>
          <p className="font-sans text-sm text-gray-600">
            Explore course structure and connections
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomOut}
            className="px-3 py-1.5 text-sm font-sans border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            title="Zoom out"
          >
            −
          </button>
          <button
            onClick={handleResetView}
            className="px-3 py-1.5 text-sm font-sans border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            title="Reset view"
          >
            Reset
          </button>
          <button
            onClick={handleZoomIn}
            className="px-3 py-1.5 text-sm font-sans border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            title="Zoom in"
          >
            +
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="font-sans text-sm text-blue-900">
          💡 <strong>Tip:</strong> Drag to pan, scroll to zoom, click nodes to
          navigate
        </p>
      </div>

      {/* Graph */}
      <div className="relative border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
        <svg
          ref={svgRef}
          width="100%"
          height="600"
          className="cursor-move"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
          viewBox={`${bounds.minX - 100} ${bounds.minY - 100} ${width + 200} ${height + 200}`}
          preserveAspectRatio="xMidYMid meet"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: 'center center',
          }}
        >
          {/* Edges */}
          <g className="edges">
            {edges.map((edge, index) => {
              const fromNode = nodes.find((n) => n.id === edge.from)
              const toNode = nodes.find((n) => n.id === edge.to)

              if (!fromNode || !toNode || fromNode.x === undefined || fromNode.y === undefined || toNode.x === undefined || toNode.y === undefined) {
                return null
              }

              const isHovered =
                hoveredNode === edge.from || hoveredNode === edge.to

              return (
                <line
                  key={`${edge.from}-${edge.to}-${index}`}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke={isHovered ? '#f59e0b' : '#d1d5db'}
                  strokeWidth={isHovered ? 3 : 1}
                  opacity={isHovered ? 0.8 : 0.4}
                  className="transition-all"
                />
              )
            })}
          </g>

          {/* Nodes */}
          <g className="nodes">
            {nodes.map((node) => {
              if (node.x === undefined || node.y === undefined) return null

              const isCompleted = node.isCompleted
              const isHovered = hoveredNode === node.id
              const isSelected = selectedNode === node.id

              const nodeColor = isCompleted
                ? '#f59e0b' // accent color
                : '#9ca3af' // gray

              const nodeSize = isHovered || isSelected ? 12 : 8

              return (
                <g key={node.id}>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={nodeSize}
                    fill={nodeColor}
                    stroke={isSelected ? '#1f2937' : 'white'}
                    strokeWidth={isSelected ? 3 : 2}
                    className="cursor-pointer transition-all"
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => handleNodeClick(node.id)}
                  />

                  {/* Node label on hover */}
                  {isHovered && (
                    <g>
                      <rect
                        x={node.x + 15}
                        y={node.y - 20}
                        width={180}
                        height={50}
                        fill="rgba(17, 24, 39, 0.95)"
                        rx={4}
                      />
                      <text
                        x={node.x + 20}
                        y={node.y - 5}
                        fill="white"
                        fontSize="12"
                        fontFamily="sans-serif"
                        fontWeight="bold"
                      >
                        {node.title.length > 40
                          ? node.title.substring(0, 40) + '...'
                          : node.title}
                      </text>
                      <text
                        x={node.x + 20}
                        y={node.y + 12}
                        fill="#d1d5db"
                        fontSize="10"
                        fontFamily="sans-serif"
                      >
                        Module {node.moduleNumber} • Lesson {node.lessonNumber}
                      </text>
                      {node.duration && (
                        <text
                          x={node.x + 20}
                          y={node.y + 25}
                          fill="#d1d5db"
                          fontSize="10"
                          fontFamily="sans-serif"
                        >
                          {node.duration} min
                        </text>
                      )}
                    </g>
                  )}
                </g>
              )
            })}
          </g>

          {/* Module labels */}
          {Array.from(new Set(nodes.map((n) => n.moduleNumber)))
            .sort()
            .map((moduleNum) => {
              const moduleNodes = nodes.filter(
                (n) => n.moduleNumber === moduleNum && n.x !== undefined && n.y !== undefined
              )
              if (moduleNodes.length === 0) return null

              const avgX =
                moduleNodes.reduce((sum, n) => sum + (n.x || 0), 0) /
                moduleNodes.length
              const minY = Math.min(
                ...moduleNodes.map((n) => n.y || 0)
              )

              return (
                <g key={`module-label-${moduleNum}`}>
                  <rect
                    x={avgX - 40}
                    y={minY - 35}
                    width={80}
                    height={25}
                    fill="#1f2937"
                    rx={4}
                  />
                  <text
                    x={avgX}
                    y={minY - 18}
                    fill="white"
                    fontSize="12"
                    fontFamily="serif"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    Module {moduleNum}
                  </text>
                </g>
              )
            })}
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm font-sans">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-accent rounded-full"></div>
          <span className="text-gray-700">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          <span className="text-gray-700">Not Started</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-gray-300"></div>
          <span className="text-gray-700">Lesson Connection</span>
        </div>
      </div>

      {/* Selected node info */}
      {selectedNodeData && (
        <div className="mt-4 p-4 bg-primary-50 border border-primary-200 rounded-lg">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-serif text-lg text-primary-900 mb-1">
                {selectedNodeData.title}
              </h4>
              <p className="font-sans text-sm text-gray-600">
                Module {selectedNodeData.moduleNumber} • Lesson{' '}
                {selectedNodeData.lessonNumber}
                {selectedNodeData.duration &&
                  ` • ${selectedNodeData.duration} min`}
              </p>
              {selectedNodeData.difficulty && (
                <span
                  className={`inline-block mt-2 px-2 py-1 text-xs font-sans rounded ${
                    selectedNodeData.difficulty === 'beginner'
                      ? 'bg-green-100 text-green-800'
                      : selectedNodeData.difficulty === 'intermediate'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {selectedNodeData.difficulty}
                </span>
              )}
            </div>
            <button
              onClick={() => router.push(`/dashboard/lessons/${selectedNodeData.id}`)}
              className="ml-4 px-4 py-2 bg-primary-900 text-white rounded-md hover:bg-primary-800 transition-colors font-sans text-sm"
            >
              Go to Lesson →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
