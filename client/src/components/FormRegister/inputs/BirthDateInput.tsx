import React from 'react'

interface BirthDateInputProps {
  register: any
  errors: any
}

const BirthDateInput: React.FC<BirthDateInputProps> = ({ register, errors }) => {
  return (
    <div>
      <label>Birth Date: </label>
      <input
        type="date"
        name="birthDate"
        {...register('birthDate', {
          required: {
            value: true,
            message: 'Birth date required',
          },
          validate: (value: string) => {
            const birthDate = new Date(value);
            const actualDate = new Date();
            const age = actualDate.getFullYear() - birthDate.getFullYear();
            return age >= 15 || 'You are too young';
          },
        })}
      />
      {errors.birthDate && <span>{errors.birthDate.message}</span>}
    </div>
  )
}

export default BirthDateInput