import React from 'react'
import style from './input.module.css'

interface DescriptionInputProps {
  register: any
  errors: any
}

const ServiceDescriptionInput: React.FC<DescriptionInputProps> = ({ register, errors }) => {
  return (
    <div>
      <textarea
        className={style.textarea}
        type="text"
        name="description"
        placeholder="The best haircut in the area"
        {...register('description', {
          required: {
            value: true,
            message: 'Please enter the description'
          },
          maxLength: {
            value: 60,
            message: 'The description is too long'
          },
          minLength: {
            value: 10,
            message: 'The description is too short'
          }
        })}
      />
      <div>
        {(Boolean(errors.description)) && <span className={style.span}>{errors.description.message}</span>}
        {errors.description?.type === 'maxLength' && (
          <span className={style.span}>The description is too long</span>
        )}
        {errors.description?.type === 'minLength' && (
          <span className={style.span}>The description is too short</span>
        )}
      </div>
    </div>
  )
}

export default ServiceDescriptionInput
