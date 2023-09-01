import React from 'react'

interface BusiNameInputProps {
  register: any
  errors: any
}

const BusiNameInput: React.FC<BusiNameInputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        type="text"
        name="businessName"
        placeholder='Business Name'
        {...register('businessName', {
          required: {
            value: true,
            message: 'Please enter your business name!'
          },
          maxLength: 30,
          minLength: 2
        })}
      />
      <div>
      {errors.businessName?.type === 'required' && <span>Business Name Required</span>}
      {errors.businessName?.type === 'maxLength' && (
        <span>The Business name is too longer</span>
      )}
      {errors.businessName?.type === 'minLength' && (
        <span>The business name is too short</span>
      )}
      </div>
    </div>
  )
}

export default BusiNameInput
