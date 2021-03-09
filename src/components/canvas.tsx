import CanvasRow from './canvas-row'
import { rows, canvasData } from './canvas-data'
import './canvas.css'

const Canvas = () => {
  return (
    <div className="grid-container">
      {rows.map((row) => {
        const keyName: string = Object.keys(row)[0]
        const rowName: string = row[keyName]
        const data: string[] = canvasData[keyName]

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
