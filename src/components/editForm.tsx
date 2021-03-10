import { useState } from 'react'
import { componentStyles } from '../styles/'

interface Props {
  addValue: Function
}

const EditForm = ({ addValue }: Props) => {
  const [value, setValue] = useState('')

  return (
    <form
      className={componentStyles.form}
      onSubmit={(event) => {
        event.preventDefault()
        addValue(value)
        setValue('')
      }}
    >
      <div className={componentStyles.contentForm}>
        <input
          className={componentStyles.input}
          onChange={(event) => {
            setValue(event.target.value)
          }}
          value={value}
        />
        <button className={componentStyles.button} type="submit">
          submit
        </button>
      </div>
    </form>
  )
}

export default EditForm
