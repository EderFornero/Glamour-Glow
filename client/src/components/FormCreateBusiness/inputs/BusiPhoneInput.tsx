import React from 'react'

interface BusiPhoneInputProps {
  register: any
  errors: any
}

const BusiPhoneInput: React.FC<BusiPhoneInputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        type='number'
        name="businessPhone"
        placeholder='Phone Number'
        {...register('businessPhone', {
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
      {(Boolean(errors.businessPhone)) && <span>{errors.businessPhone.message}</span>}
      </div>
    </div>
  )
}

export default BusiPhoneInput
