import React from 'react'
import style from './input.module.css'

interface BusiCategoriesInputProps {
  register: any
  errors: any
  categoryList: any[]
}

const BusiCategoriesInput: React.FC<BusiCategoriesInputProps> = ({
  register,
  errors,
  categoryList
}) => {
  return (
    <div>
      <select
        className={style.input}
        type='select'
        name='categoriesArray'
        {...register('categoriesArray', {
          required: {
            value: true,
            message: 'Please enter at least one category'
          }
        })}
      >
        <option value='' disabled selected>
          Business Category
        </option>
        {categoryList.map((el, index) => (
          <option className={style.option} key={index} value={el._id}>
            {el.name}
          </option>
        ))}
      </select>
      <div>
        {errors.categoriesArray?.type === 'required' && (
          <span className={style.span}>{errors.categoriesArray.message}</span>
        )}
      </div>
    </div>
  )
}

export default BusiCategoriesInput
