import React from 'react'
import style from './input.module.css'

interface PhoneNumberInputProps {
  register: any
  errors: any
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        className={style.input}
        type='text'
        name="phone_number"
        placeholder='Phone Number'
        {...register('phone_number', {
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
      {(Boolean(errors.phone_number)) && <span className={style.span}>{errors.phone_number.message}</span>}
      </div>
    </div>
  )
}

export default PhoneNumberInput
