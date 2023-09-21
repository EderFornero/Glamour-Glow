import React from 'react'
import style from './input.module.css'

interface ServicePriceInputProps {
  register: any
  errors: any
}

const ServicePriceInput: React.FC<ServicePriceInputProps> = ({ register, errors }) => {
  return (
    <div className={style.priceInput}>
      <span className={style.dollarSign}>$</span>
      <input
        className={style.input}
        type='text'
        name="price"
        placeholder='0'
        {...register('price', {
          required: {
            value: true,
            message: 'Please enter a price number'
          },
          pattern: {
            value: /^[1-9]\d*$/,
            message: 'Only Numbers are allowed and must be higher than 0'
          }
        })}
      />
      <div>
        {Boolean(errors.price) && (
          <span className={style.span}>{errors.price.message}</span>
        )}
      </div>
    </div>
  )
}

export default ServicePriceInput
