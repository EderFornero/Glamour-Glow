import React from 'react'

interface BusiCategoriesInputProps {
  register: any
  errors: any
}

const BusiCategoriesInput: React.FC<BusiCategoriesInputProps> = ({ register, errors }) => {
  return (

    <div>
        <select
        type='select'
        name='categories'
        {...register('categories', {
          required: {
            value: true,
            message: 'Please enter at least one category'
          }
        })}>
          <option value='Barber'>Barber</option>
          <option value='Haircut'>Haircut</option>
          <option value='Spa'>Spa</option>
          <option value='Massage'>Massage</option>
        </select>
        <div>
            {errors.categories?.type === 'required' && <span>{errors.categories.message}</span>}
        </div>
    </div>
  )
}

export default BusiCategoriesInput
