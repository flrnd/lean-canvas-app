import { Link } from 'react-router-dom'
import './canvas-row.css'
import { parseRowName } from '../../Store'

interface Props {
  name: string
  data: string[]
}

const CanvasRow = ({ name, data }: Props) => {
  const title = parseRowName(name)
  return (
    <Link
      className={`${name} bg-white border-4 border-black hover:border-blue-700 focus:border-blue-700 visited:text-black p-3`}
      to={`/edit/${name}`}
    >
      <div className="uppercase font-bold">{title}</div>
      <div className="mt-2">
        <ul className="flex flex-wrap">
          {data.map((listItem, index) => (
            <li
              className="bg-yellow-200 text-black text-xl p-3 m-1 rounded shadow break-all"
              key={index}
            >
              {listItem}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  )
}

export default CanvasRow
