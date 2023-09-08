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
        className={style.input}
        type='select'
        name='sellerGender'
        {...register('sellerGender', {
          required: {
            value: true,
            message: 'Please enter at least one Gender'
          }
        })}>
          <option className={style.option} value='any'>Any</option>
          <option className={style.option} value='male'>Male</option>
          <option className={style.option} value='female'>Female</option>
        </select>
        <div>
            {errors.sellerGender?.type === 'required' && <span className={style.span}>You neet at least one Gender</span>}
        </div>
    </div>
  )
}

export default BusiGenderInput
