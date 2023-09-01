import React from 'react';

interface BirthDateInputProps {
  register: any;
  errors: any;
}

const BirthDateInput: React.FC<BirthDateInputProps> = ({
  register,
  errors,
}) => {
  return (
    <div>
      <input
        type="date"
        name="birthDate"
        {...register('birthDate', {
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
      <div>{errors.birthDate && <span>{errors.birthDate.message}</span>}</div>
    </div>
  );
};

<<<<<<< HEAD
export default BirthDateInput
=======
export default BirthDateInput;
>>>>>>> 62dbd688df7cf908a75f946e13b8f6eb5e31904f
