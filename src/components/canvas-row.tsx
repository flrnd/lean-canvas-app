import './canvas-row.css'

interface Props {
  name: string
  linkTo: string
}

const CanvasRow = ({ name, linkTo }: Props) => {
  return (
    <a className={`${name} canvas`} href={linkTo}>
      <div className="">
        <div className="title">{name.replace(/-/g, ' ')}</div>
      </div>
    </a>
  )
}

export default CanvasRow
