import localforage from 'localforage'
import { v4 as uuid } from 'uuid'

const dbName = 'localCanvasDB'

const localCanvasDB: { [store: string]: LocalForage } = {
  problem: localforage.createInstance({
    name: dbName,
    storeName: 'problemStore',
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
}

const getItem = async (store: string, key: string) => {
  try {
    const stored = await localCanvasDB[store].getItem<string>(key)
    if (stored === null) throw new Error('store is empty')

    return stored
  } catch (error) {
    console.error(`getItem localforage error: ${error}`)
  }
}

const saveItem = (store: string, item: string) => {
  try {
    const key = uuid()
    localCanvasDB[store].setItem(key, item)
  } catch (error) {
    console.error(`saveItem localforage error: ${error}`)
  }
}

export { localCanvasDB, saveItem, getItem }
