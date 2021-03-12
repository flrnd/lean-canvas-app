import { useContext } from 'react'
import CanvasRow from './canvas-row'
import { rows, CanvasContext } from '../../Store'
import './canvas.css'

const Canvas = () => {
  const { store } = useContext(CanvasContext)

  return (
    <div className="grid-container">
      <div className="head z-0">
        <div className="flex justify-between items-center z-1">
          <div className="font-bold text-2xl">Lean Canvas</div>
        </div>
      </div>
      {rows.map((row, index) => {
        const data: string[] = store[row]

        return <CanvasRow name={row} data={data} key={index} />
      })}
      <div className="footer flex justify-center">
        <div className="text-sm">
          Built by{' '}
          <a className="underline font-semibold" href="https://florianrand.com">
            Florian Rand
          </a>
        </div>
      </div>
    </div>
  )
}

export default Canvas
