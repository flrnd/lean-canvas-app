import { Link } from 'react-router-dom'
import './canvas-row.css'

interface Props {
  name: string
  data: string[]
}

const CanvasRow = ({ name, data }: Props) => {
  return (
    <Link
      className={`${name} canvas`}
      to={{ pathname: '/edit', state: { location: name } }}
    >
      <div>
        <div className="title">{name.replace(/-/g, ' ')}</div>
        <div className="list">
          <ul>
            {data.map((listItem) => (
              <li key={listItem}>{listItem}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  )
}

export default CanvasRow
