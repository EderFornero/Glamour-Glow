import React from 'react'

interface BusiGenderInputProps {
  register: any
  errors: any
}

const BusiGenderInput: React.FC<BusiGenderInputProps> = ({ register, errors }) => {
  return (

    <div>
        <select
        type='select'
        name='gender'
        {...register('gender', {
          required: {
            value: true,
            message: 'Please enter at least one Gender'
          }
        })}>
          <option value='any'>Any</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        <div>
            {errors.businessGender?.type === 'required' && <span>You neet at least one Gender</span>}
        </div>
    </div>
  )
}

export default BusiGenderInput
