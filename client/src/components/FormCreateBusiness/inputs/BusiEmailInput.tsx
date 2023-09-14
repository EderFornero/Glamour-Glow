import React from 'react'
import style from './input.module.css'

interface BusiEmailInputProps {
  register: any
  errors: any
}

const BusiEmailInput: React.FC<BusiEmailInputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
      className={style.input}
        type="email"
        name="sellerEmail"
        placeholder='Business Email'
        {...register('sellerEmail', {
          required: {
            value: true,
            message: 'Please enter your business email'
          },
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: 'Email not valid'
          }
        })}
      />
      <div>
      {(Boolean(errors.sellerEmail)) && <span className={style.span}>{errors.sellerEmail.message}</span>}
      </div>
    </div>
  )
}

export default BusiEmailInput
