import React from 'react'
import style from './input.module.css'

interface BusiPhoneInputProps {
  register: any
  errors: any
}

const BusiPhoneInput: React.FC<BusiPhoneInputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        className={style['input']}
        type='text'
        name="seller_phone"
        placeholder='Phone Number'
        {...register('seller_phone', {
          required: {
            value: true,
            message: 'Please enter your phone number!'
          },
          pattern: {
            value: /^\d{6,13}$/,
            message: 'Phone number not valid'
          }
        })}
      />
      <div>
      {(Boolean(errors.seller_phone)) && <span className={style['span']}>{errors.seller_phone.message}</span>}
      </div>
    </div>
  )
}

export default BusiPhoneInput
