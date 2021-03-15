import localforage from 'localforage'
import { rows } from '../store'
const localCanvasDB = 'leanCanvasDB'

const problemStore = localforage.createInstance({
  name: localCanvasDB,
  storeName: rows[0],
  description: 'Problem row',
})

const solutionStore = localforage.createInstance({
  name: localCanvasDB,
  storeName: 'solutionStore',
  description: 'Solution row',
})

const keyMetricStore = localforage.createInstance({
  name: localCanvasDB,
  storeName: 'keyMetricStore',
  description: 'Key Metrics row',
})

const uniqueValuePropStore = localforage.createInstance({
  name: localCanvasDB,
  storeName: 'uniqueValuePropStore',
  description: 'Unique Value Props row',
})

const unfairAdvantagesStore = localforage.createInstance({
  name: localCanvasDB,
  storeName: 'unfairAdvantagesStore',
  description: 'Unfair Advantages row',
})

const channelsStore = localforage.createInstance({
  name: localCanvasDB,
  storeName: 'channelsStore',
  description: 'Channels row',
})

const customerSegmentsStore = localforage.createInstance({
  name: localCanvasDB,
  storeName: 'customerSegmentsStore',
  description: 'Customer Segments row',
})

const costStructureStore = localforage.createInstance({
  name: localCanvasDB,
  storeName: 'costStructureStore',
  description: 'Cost structure row',
})

const revenueStreamsStore = localforage.createInstance({
  name: localCanvasDB,
  storeName: 'revenueStremasStore',
  description: 'Revenue streams row',
})

export {
  problemStore,
  solutionStore,
  keyMetricStore,
  uniqueValuePropStore,
  unfairAdvantagesStore,
  channelsStore,
  customerSegmentsStore,
  costStructureStore,
  revenueStreamsStore,
}
