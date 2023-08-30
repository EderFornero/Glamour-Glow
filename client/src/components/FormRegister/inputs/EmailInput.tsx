import React from 'react'

interface EmailInputProps {
  register: any
  errors: any
}

const EmailInput: React.FC<EmailInputProps> = ({ register, errors }) => {
  return (
    <div>
      <label>Email: </label>
      <input
        type="email"
        name="email"
        {...register('email', {
          required: {
            value: true,
            message: 'Please enter your email',
          },
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: 'Email not valid',
          },
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}
    </div>
  );
};

export default EmailInput;