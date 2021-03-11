import { useContext } from 'react'
import CanvasRow from './canvas-row'
import { rows, CanvasContext } from '../../Store'
import './canvas.css'
import Cog from '../icons/cog'

const Canvas = () => {
  const { store } = useContext(CanvasContext)
  return (
    <div className="grid-container">
      <div className="head flex justify-between items-center">
        <div className="font-bold text-2xl">Lean Canvas</div>
        <div>
          <Cog />
        </div>
      </div>
      {rows.map((row, index) => {
        const data: string[] = store[row]

        return <CanvasRow name={row} data={data} key={index} />
      })}
      <div className="footer flex items-center">
        <div className="">
          {' '}
          Designed and developed by{' '}
          <a href="https://florianrand.com">Florian Rand</a>
        </div>
      </div>
    </div>
  )
}

export default Canvas
