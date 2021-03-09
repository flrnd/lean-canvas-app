import './canvas-row.css'

interface Props {
  name: string
  linkTo: string
  data: string[]
}

const CanvasRow = ({ name, linkTo, data }: Props) => {
  return (
    <a className={`${name} canvas`} href={linkTo}>
      <div className="title">{name.replace(/-/g, ' ')}</div>
      <div className="list">
        <ul>
          {data.map((listItem) => (
            <li key={listItem}>{listItem}</li>
          ))}
        </ul>
      </div>
    </a>
  )
}

export default CanvasRow
