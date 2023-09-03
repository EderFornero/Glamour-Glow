import React from 'react'
import style from './input.module.css'

interface BusiGenderInputProps {
  register: any
  errors: any
}

const BusiGenderInput: React.FC<BusiGenderInputProps> = ({ register, errors }) => {
  return (

    <div>
        <select
        className={style['input']}
        type='select'
        name='seller_gender'
        {...register('seller_gender', {
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
            {errors.seller_gender?.type === 'required' && <span className={style['span']}>You neet at least one Gender</span>}
        </div>
    </div>
  )
}

export default BusiGenderInput
