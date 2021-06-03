import { useContext, useEffect } from 'react'
import CanvasRow from './canvas-row'
import { rows, CanvasContext } from '../../store'
import './canvas.css'
import { fetchCanvasData } from '../../store/canvas-data'

const Canvas = () => {
  const { store, setStore } = useContext(CanvasContext)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCanvasData()
      setStore(data)
    }
    fetchData()
  }, [setStore])

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
