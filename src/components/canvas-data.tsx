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

const canvasData = {
  problem: ['uno', 'dos', 'tres'],
  solution: ['cuatro'],
  keyMetrics: ['e', 'b', 'c'],
  uniqueValueProp: ['some', 'sata'],
  unfairAdvantages: ['a', '1', '2'],
  channels: ['chan'],
  customerSegments: ['custom', 'ers'],
  costStructure: ['lot', 'lota'],
  revenueStreams: ['mone'],
}

export { canvasData, rows }
