import React from 'react'

interface EmailInputProps {
  register: any
  errors: any
}

const EmailInput: React.FC<EmailInputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder='Email'
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
      <div>
      {errors.email && <span>{errors.email.message}</span>}
      </div>
    </div>
  );
};

export default EmailInput;