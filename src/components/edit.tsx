import { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CanvasContext, parseRowName } from '../Store'
import EditForm from './editForm'
import EditCard from './edit-card'

const Edit = () => {
  const { id } = useParams()
  const { store, setStore } = useContext(CanvasContext)
  const data = id && store[id]
  const title = id && parseRowName(id)
  const [values, setValues] = useState(data)

  const handleData = () => {
    if (id && values) {
      const newStore = store
      newStore[id] = values
      setStore(newStore)
    }
  }

  const addValue = (value: string) => {
    if (value.length > 0 && values) setValues([...values, value])
  }

  const deleteValue = (valueIndex: number) => {
    if (values) {
      const newValues = values.filter((_, index) => index !== valueIndex)
      setValues(newValues)
    }
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold uppercase mt-10">{title}</h1>
      <main className="container">
        <div className="flex items-center py-2">
          <EditForm addValue={(value: string) => addValue(value)} />
          <button className="flex-shrink-0 text-sm py-1 px-2 ml-2 mt-10 font-bold uppercase border-2 hover:border-black rounded">
            <Link onClick={() => handleData()} to="/">
              Done
            </Link>
          </button>
        </div>

        <ul>
          {values &&
            values.map((item, index) => (
              <EditCard
                item={item}
                key={index}
                deleteValue={() => deleteValue(index)}
              />
            ))}
        </ul>
      </main>
    </div>
  )
}

export default Edit
