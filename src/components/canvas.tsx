import React from 'react'
import './canvas.css'

const Canvas = () => {
  return (
    <div className="grid-container">
      <a className="problem canvas" href="/problem">
        <div className="">
          <div className="title">Problem</div>
        </div>
      </a>
      <div className="solution canvas">
        <div className="title">Solution</div>
      </div>
      <div className="key-metrics canvas">
        <div className="title">Key Metrics</div>
      </div>
      <div className="unique-value-prop canvas">
        <div className="title">Unique Value Proposition</div>
      </div>
      <div className="unfair-advantages canvas">
        <div className="title">Unfair Advantages</div>
      </div>
      <div className="channels canvas">
        <div className="title">Channels</div>
      </div>
      <div className="customer-segments canvas">
        <div className="title">Customer Segments</div>
      </div>
      <div className="cost-structure canvas">
        <div className="title">Cost structure</div>
      </div>
      <div className="revenue-streams canvas">
        <div className="title">Revenue Streams</div>
      </div>
    </div>
  )
}

export default Canvas
