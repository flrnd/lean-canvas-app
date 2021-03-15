import localforage from 'localforage'
import { rows } from '../store'

const dbName = 'localCanvasDB'

const localCanvasDB = {
  name: dbName,
  stores: {
    problem: localforage.createInstance({
      name: dbName,
      storeName: rows[0],
      description: 'Problem row',
    }),
    solution: localforage.createInstance({
      name: dbName,
      storeName: 'solutionStore',
      description: 'Solution row',
    }),
    keyMetrics: localforage.createInstance({
      name: dbName,
      storeName: 'keyMetricStore',
      description: 'Key Metrics row',
    }),
    uniqueValueProp: localforage.createInstance({
      name: dbName,
      storeName: 'uniqueValuePropStore',
      description: 'Unique Value Props row',
    }),
    unfairAdvantages: localforage.createInstance({
      name: dbName,
      storeName: 'unfairAdvantagesStore',
      description: 'Unfair Advantages row',
    }),
    channels: localforage.createInstance({
      name: dbName,
      storeName: 'channelsStore',
      description: 'Channels row',
    }),
    customerSegments: localforage.createInstance({
      name: dbName,
      storeName: 'customerSegmentsStore',
      description: 'Customer Segments row',
    }),
    costStructure: localforage.createInstance({
      name: dbName,
      storeName: 'costStructureStore',
      description: 'Cost structure row',
    }),
    revenueStreams: localforage.createInstance({
      name: dbName,
      storeName: 'revenueStremasStore',
      description: 'Revenue streams row',
    }),
  },
}

export { localCanvasDB }
