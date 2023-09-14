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
        className={style.input}
        type='text'
        name="sellerPhone"
        placeholder='Phone Number'
        {...register('sellerPhone', {
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
      {(Boolean(errors.sellerPhone)) && <span className={style.span}>{errors.sellerPhone.message}</span>}
      </div>
    </div>
  )
}

export default BusiPhoneInput
