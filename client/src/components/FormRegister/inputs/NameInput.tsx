import React from 'react'
import style from './input.module.css'

interface NameInputProps {
  register: any
  errors: any
}

const NameInput: React.FC<NameInputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        className={style.input}
        type="text"
        name="name"
        placeholder="Name"
        {...register('name', {
          required: {
            value: true,
            message: 'Please enter your name!'
          },
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: 'Only use Letters'
          },
          maxLength: 30,
          minLength: 3
        })}
      />
      <div>
      {errors.name && <span className={style.span}>{errors.name.message}</span>}
      {errors.name?.type === 'maxLength' && (
        <span className={style.span}>The name is too longer</span>
      )}
      {errors.name?.type === 'minLength' && (
        <span className={style.span}>The name is too short</span>
      )}
      </div>
    </div>
  )
}

export default NameInput
