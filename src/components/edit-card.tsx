import TrashIcon from './icons/trash'

interface Props {
  deleteValue: Function
  item: string
}

const EditCard = ({ deleteValue, item }: Props): JSX.Element => {
  return (
    <div className="flex justify-between max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden my-2">
      <div className="w-2 bg-gray-800"></div>
      <div className="mx-3">
        <p className="w-80 text-gray-600 p-2">{item}</p>
      </div>
      <div className="flex w-8 bg-red-500 items-center justify-center">
        <button className="p-1" onClick={() => deleteValue(item)}>
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}

export default EditCard
