import React from 'react'
import style from './input.module.css'

interface LastNameInputProps {
  register: any
  errors: any
}

const LastNameInput: React.FC<LastNameInputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        className={style.input}
        type="text"
        name="last_name"
        placeholder="Last Name"
        {...register('last_name', {
          required: {
            value: true,
            message: 'Please enter your last name!'
          },
          maxLength: 20,
          minLength: 3
        })}
      />
      <div>
      {errors.last_name?.type === 'required' && <span className={style.span}>Last Name Required</span>}
      {errors.last_name?.type === 'maxLength' && (
        <span className={style.span}>The last name is too longer</span>
      )}
      {errors.last_name?.type === 'minLength' && (
        <span className={style.span}>The last name is too short</span>
      )}
      </div>
    </div>
  )
}

export default LastNameInput
