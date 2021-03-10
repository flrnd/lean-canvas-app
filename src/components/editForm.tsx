import { useState } from 'react'

interface Props {
  addValue: Function
}

const styles = {
  input:
    'appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none',
  formContent: 'flex items-center border-b border-teal-500 py-2',
  button: '',
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
      <div className={styles.formContent}></div>
      <input
        className={styles.input}
        onChange={(event) => {
          setValue(event.target.value)
        }}
        value={value}
      />
      <button className={styles.button} type="submit">
        submit
      </button>
    </form>
  )
}

export default EditForm
