import React from 'react'
import CanvasRow from './canvas-row'
import './canvas.css'

const rows = [
  'problem',
  'solution',
  'key-metrics',
  'unique-value-prop',
  'unfair-advantages',
  'channels',
  'customer-segments',
  'cost-structure',
  'revenue-streams',
]

const Canvas = () => {
  return (
    <div className="grid-container">
      {rows.map((row) => (
        <CanvasRow name={row} linkTo={`/${row}`} />
      ))}
    </div>
  )
}

export default Canvas
