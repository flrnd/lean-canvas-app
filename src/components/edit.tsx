import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CanvasContext } from './Store'

const Edit = (props) => {
  const { store, setStore } = useContext(CanvasContext)
  const { location } = props.location.state
  const data = store[location]

  const handleData = (values: string[]) => {
    const newStore = store
    newStore[location] = values
    setStore(newStore)
  }

  return (
    <div>
      <h1>{location}</h1>
      {data.map((item) => (
        <input type="text" value={item} />
      ))}

      <Link to="/">Done</Link>
    </div>
  )
}

export default Edit
