import { Link } from 'react-router-dom'
import './canvas-row.css'
import { parseRowName } from './Store'

interface Props {
  name: string
  data: string[]
}

const CanvasRow = ({ name, data }: Props) => {
  const title = parseRowName(name)
  return (
    <Link className={`${name} canvas`} to={`/edit/${name}`}>
      <div>
        <div className="title">{title}</div>
        <div className="list">
          <ul>
            {data.map((listItem, index) => (
              <li key={index}>{listItem}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  )
}

export default CanvasRow
