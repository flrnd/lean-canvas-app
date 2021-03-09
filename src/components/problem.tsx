import { useContext } from 'react'
import { CanvasContext } from './Store'

const Problem = () => {
  const { store, setStore } = useContext(CanvasContext)
  const data = ['New', 'Data', 'added']
  const newStore = store
  newStore['problem'] = data
  setStore(newStore)
  return (
    <div>
      {store['problem'].map((item) => (
        <input type="text" value={item} />
      ))}

      <a href="/">Done</a>
      {}
    </div>
  )
}

export default Problem
