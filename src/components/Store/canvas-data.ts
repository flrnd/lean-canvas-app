const rows = [
  'problem',
  'solution',
  'keyMetrics',
  'uniqueValueProp',
  'unfairAdvantages',
  'channels',
  'customerSegments',
  'costStructure',
  'revenueStreams',
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
