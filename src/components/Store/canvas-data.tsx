// rows and canvasData must have same keynames

const rows = [
  { problem: 'problem' },
  { solution: 'solution' },
  { keyMetrics: 'key-metrics' },
  { uniqueValueProp: 'unique-value-prop' },
  { unfairAdvantages: 'unfair-advantages' },
  { channels: 'channels' },
  { customerSegments: 'customer-segments' },
  { costStructure: 'cost-structure' },
  { revenueStreams: 'revenue-streams' },
]

interface ICanvasData {
  problem: string[]
  solution: string[]
  keyMetrics: string[]
  uniqueValueProp: string[]
  unfairAdvantages: string[]
  channels: string[]
  customerSegments: string[]
  costStructure: string[]
  revenueStreams: string[]
}

const canvasData: ICanvasData = {
  problem: [],
  solution: [],
  keyMetrics: [],
  uniqueValueProp: [],
  unfairAdvantages: [],
  channels: [],
  customerSegments: [],
  costStructure: [],
  revenueStreams: [],
}

export { canvasData, rows }
