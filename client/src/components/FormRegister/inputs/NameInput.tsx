import React from 'react'

interface NameInputProps {
  register: any
  errors: any
}

const NameInput: React.FC<NameInputProps> = ({ register, errors }) => {
  return (
    <div>
      <label>Name: </label>
      <input
        type="text"
        name="name"
        {...register('name', {
          required: {
            value: true,
            message: 'Please enter your name!',
          },
          maxLength: 30,
          minLength: 3,
        })}
      />
      {errors.name?.type === 'required' && <span>Name Required</span>}
      {errors.name?.type === 'maxLength' && (
        <span>The name must not be longer than 20 characters</span>
      )}
      {errors.name?.type === 'minLength' && (
        <span>The name must not be less than 3 characters</span>
      )}
    </div>
  );
};

export default NameInput;