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

const parseRowName = (rowName: string): string => {
  let parsed = ''
  switch (rowName) {
    case 'problem':
      parsed = rowName
      break
    case 'solution':
      parsed = rowName
      break
    case 'keyMetrics':
      parsed = 'Key Metrics'
      break
    case 'uniqueValueProp':
      parsed = 'Unique Value Proposition'
      break
    case 'unfairAdvantages':
      parsed = 'Unfair Advantages'
      break
    case 'channels':
      parsed = rowName
      break
    case 'customerSegments':
      parsed = 'Customer Segments'
      break
    case 'costStructure':
      parsed = 'Cost Structure'
      break
    case 'revenueStreams':
      parsed = 'Revenue Streams'
      break
    default:
      parsed = `invalid: ${rowName}`
  }

  return parsed
}

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

export { canvasData, rows, parseRowName }
