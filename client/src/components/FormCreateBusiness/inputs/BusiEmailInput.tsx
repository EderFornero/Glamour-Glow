import React from 'react'

interface BusiEmailInputProps {
  register: any
  errors: any
}

const BusiEmailInput: React.FC<BusiEmailInputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        type="email"
        name="businessEmail"
        placeholder='Business Email'
        {...register('businessEmail', {
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
      {(Boolean(errors.businessEmail)) && <span>{errors.businessEmail.message}</span>}
      </div>
    </div>
  )
}

export default BusiEmailInput
