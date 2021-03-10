import { useState } from 'react'

interface Props {
  addValue: Function
}

const CanvasFieldsForm = ({ addValue }: Props) => {
  const [value, setValue] = useState('')

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        addValue(value)
        setValue('')
      }}
    >
      <input
        onChange={(event) => {
          setValue(event.target.value)
        }}
        value={value}
      />
      <button type="submit">submit</button>
    </form>
  )
}

export default CanvasFieldsForm
