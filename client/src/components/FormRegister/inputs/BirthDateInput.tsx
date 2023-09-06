import React from 'react'
import style from './input.module.css'

interface BirthDateInputProps {
  register: any
  errors: any
}

const BirthDateInput: React.FC<BirthDateInputProps> = ({
  register,
  errors
}) => {
  return (
    <div>
      <input
        className={style.input}
        type="date"
        name="date_of_birth"
        {...register('date_of_birth', {
          required: {
            value: true,
            message: 'Birth date required'
          },
          validate: (value: string) => {
            const birthDate = new Date(value)
            const actualDate = new Date()
            const age = actualDate.getFullYear() - birthDate.getFullYear()
            return age >= 15 || 'You are too young'
          }
        })}
      />
      <div>{errors.date_of_birth && <span className={style.span}>{errors.date_of_birth.message}</span>}</div>
    </div>
  )
}

export default BirthDateInput
