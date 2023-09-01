import React from 'react';

interface EmailInputProps {
  register: any;
  errors: any;
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
            message: 'Please enter your email'
          },
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: 'Email not valid'
          }
        })}
      />
<<<<<<< HEAD
      <div>
      {(Boolean(errors.email)) && <span>{errors.email.message}</span>}
      </div>
=======
      <div>{errors.email && <span>{errors.email.message}</span>}</div>
>>>>>>> 62dbd688df7cf908a75f946e13b8f6eb5e31904f
    </div>
  );
};

export default EmailInput;
