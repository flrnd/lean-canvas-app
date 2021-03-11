import { useState } from 'react'

interface Props {
  addValue: Function
}

const EditForm = ({ addValue }: Props) => {
  const [value, setValue] = useState('')

  return (
    <form
      className="w-full max-w-sm"
      onSubmit={(event) => {
        event.preventDefault()
        addValue(value)
        setValue('')
      }}
    >
      <div className="flex items-center border-b border-blue-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          placeholder="start typing some ideas"
          onChange={(event) => {
            setValue(event.target.value)
          }}
          value={value}
        />
        <button
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default EditForm
