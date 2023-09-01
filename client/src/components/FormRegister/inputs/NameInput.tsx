import React from 'react';

interface NameInputProps {
  register: any;
  errors: any;
}

const NameInput: React.FC<NameInputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        {...register('name', {
          required: {
            value: true,
            message: 'Please enter your name!'
          },
          pattern: {
            value: /^[A-Za-z\s]+$/,
            message: 'Only use Letters'
          },
          maxLength: 30,
          minLength: 3
        })}
      />
      <div>
<<<<<<< HEAD
      {errors.name && <span>{errors.name.message}</span>}
      {errors.name?.type === 'maxLength' && (
        <span>The name is too longer</span>
      )}
      {errors.name?.type === 'minLength' && (
        <span>The name is too short</span>
      )}
=======
        {errors.name?.type === 'required' && <span>Name Required</span>}
        {errors.name?.type === 'maxLength' && (
          <span>The name must not be longer than 20 characters</span>
        )}
        {errors.name?.type === 'minLength' && (
          <span>The name must not be less than 3 characters</span>
        )}
>>>>>>> 62dbd688df7cf908a75f946e13b8f6eb5e31904f
      </div>
    </div>
  )
}

<<<<<<< HEAD
export default NameInput
=======
export default NameInput;
>>>>>>> 62dbd688df7cf908a75f946e13b8f6eb5e31904f
