import { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CanvasContext, parseRowName } from './Store'
import './edit.css'
import CanvasFieldsForm from './canvasFieldsForm'

interface IEditRouterParams {
  id: string
}

const Edit = () => {
  const { id } = useParams<IEditRouterParams>()
  const { store, setStore } = useContext(CanvasContext)
  const data = store[id]
  const title = parseRowName(id)
  const [values, setValues] = useState(data)

  const handleData = () => {
    const newStore = store
    newStore[id] = values
    setStore(newStore)
  }

  const addValue = (value: string) => {
    setValues([...values, value])
  }

  return (
    <div className="edit">
      <h1>{title}</h1>
      <main className="container">
        <CanvasFieldsForm addValue={(value: string) => addValue(value)} />

        <ul>
          {values.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <Link className="link" onClick={() => handleData()} to="/">
          Done
        </Link>
      </main>
    </div>
  )
}

export default Edit
