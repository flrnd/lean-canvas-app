import { Link } from 'react-router-dom'
import './canvas-row.css'

interface Props {
  name: string
  linkTo: string
  data: string[]
}

const CanvasRow = ({ name, linkTo, data }: Props) => {
  return (
    <Link
      className={`${name} canvas`}
      to={{ pathname: '/edit', state: { location: linkTo } }}
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
