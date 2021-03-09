import { createContext } from 'react'
import { canvasData } from './canvas-data'

const CanvasContext = createContext({
  store: canvasData,
  setStore: (store: {}) => {},
})

export default CanvasContext
