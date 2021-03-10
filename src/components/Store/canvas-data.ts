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

// Declaring the type here helps avoid indexing error
// see: https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// and this https://github.com/microsoft/TypeScript/issues/35859#issuecomment-679986472
const canvasData: { [location: string]: string[] } = {
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
