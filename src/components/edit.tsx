import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CanvasContext } from './Store'

interface IEditRouterParams {
  id: string
}

const Edit = () => {
  const { id } = useParams<IEditRouterParams>()
  const { store, setStore } = useContext(CanvasContext)
  const data = store[id]

  const handleData = (values: string[]) => {
    const newStore = store
    newStore['problem'] = values
    setStore(newStore)
  }

  return (
    <div>
      <h1>{id}</h1>
      {data.map((item) => (
        <input type="text" value={item} />
      ))}

      <Link to="/">Done</Link>
    </div>
  )
}

export default Edit
