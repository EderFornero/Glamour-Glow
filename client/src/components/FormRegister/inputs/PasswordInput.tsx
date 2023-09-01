import React, { useRef } from 'react';

interface PasswordInputProps {
  register: any;
  errors: any;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ register, errors }) => {
  const passwordRef = useRef<string | undefined>(''); // Inicializa con un valor en blanco

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    passwordRef.current = event.target.value; // Actualiza el valor en passwordRef
  };

  return (
    <div>
      <input
        type="password"
        name="password"
        placeholder="Password"
        {...register('password', {
          required: {
            value: true,
            message: 'Password required',
          },
          minLength: {
            value: 6,
            message: 'The password must be longer than 6 characters',
          },
        })}
        onChange={handlePasswordChange} // Actualiza passwordRef en cada cambio
      />
      <div>{errors.password && <span>{errors.password.message}</span>}</div>

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        {...register('confirmPassword', {
          required: {
            value: true,
            message: 'Please confirm your password',
          },
          minLength: {
            value: 6,
            message: 'The password must be longer than 6 characters',
          },
          validate: (value: string) =>
            value === passwordRef.current || 'the passwords dont match',
        })}
      />
      <div>
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
