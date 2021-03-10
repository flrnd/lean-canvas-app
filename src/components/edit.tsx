import { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CanvasContext, parseRowName } from './Store'
import EditForm from './editForm'
import { componentStyles } from '../styles'

interface IEditRouterParams {
  id: string
}

const styleClasses = {
  heading: 'text-3xl font-bold uppercase',
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
    if (value.length > 0) setValues([...values, value])
  }

  return (
    <div className="container mx-auto">
      <h1 className={styleClasses.heading}>{title}</h1>
      <main className="container">
        <div className="flex items-center py-2">
          <EditForm addValue={(value: string) => addValue(value)} />
          <button className={componentStyles.doneButton}>
            <Link onClick={() => handleData()} to="/">
              Done
            </Link>
          </button>
        </div>

        <ul>
          {values.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Edit
