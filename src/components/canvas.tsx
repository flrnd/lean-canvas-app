import { useContext } from 'react'
import CanvasRow from './canvas-row'
import { rows, CanvasContext } from './Store/'
import './canvas.css'

const Canvas = () => {
  const { store } = useContext(CanvasContext)
  return (
    <div className="grid-container">
      {rows.map((row) => {
        const keyName: string = Object.keys(row)[0]
        const rowName: string = row[keyName]
        const data: string[] = store[keyName]

        return (
          <CanvasRow
            name={rowName}
            linkTo={`/${rowName}`}
            data={data}
            key={rowName}
          />
        )
      })}
    </div>
  )
}

export default Canvas
