import { useContext } from 'react'
import CanvasRow from './canvas-row'
import { rows, CanvasContext } from './Store/'
import './canvas.css'

const Canvas = () => {
  const { store } = useContext(CanvasContext)
  return (
    <div className="grid-container">
      {rows.map((row, index) => {
        const data: string[] = store[row]

        return <CanvasRow name={row} data={data} key={index} />
      })}
    </div>
  )
}

export default Canvas
