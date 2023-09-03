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
      className={style['input']}
        type="email"
        name="seller_email"
        placeholder='Business Email'
        {...register('seller_email', {
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
      {(Boolean(errors.seller_email)) && <span className={style['span']}>{errors.seller_email.message}</span>}
      </div>
    </div>
  )
}

export default BusiEmailInput
