import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CanvasContext, parseRowName } from './Store'
import './edit.css'

interface IEditRouterParams {
  id: string
}

const Edit = () => {
  const { id } = useParams<IEditRouterParams>()
  const { store, setStore } = useContext(CanvasContext)
  const data = store[id]
  const title = parseRowName(id)

  const handleData = (values: string[]) => {
    const newStore = store
    newStore['problem'] = values
    setStore(newStore)
  }

  return (
    <div className="edit">
      <h1>{title}</h1>
      <main className="container">
        {data.map((item) => (
          <input type="text" value={item} />
        ))}
        <Link to="/">Done</Link>
      </main>
    </div>
  )
}

export default Edit
