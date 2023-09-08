import React from 'react'
import style from './input.module.css'

interface BusiNameInputProps {
  register: any
  errors: any
}

const BusiNameInput: React.FC<BusiNameInputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
      className={style.input}
        type="text"
        name="sellerName"
        placeholder='Business Name'
        {...register('sellerName', {
          required: {
            value: true,
            message: 'Please enter your business name!'
          },
          maxLength: 30,
          minLength: 2
        })}
      />
      <div>
      {errors.sellerName?.type === 'required' && <span className={style.span}>Business Name Required</span>}
      {errors.sellerName?.type === 'maxLength' && (
        <span className={style.span}>The Business name is too longer</span>
      )}
      {errors.sellerName?.type === 'minLength' && (
        <span className={style.span}>The business name is too short</span>
      )}
      </div>
    </div>
  )
}

export default BusiNameInput
