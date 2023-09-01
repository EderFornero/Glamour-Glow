import React, { useRef } from 'react'

interface PasswordInputProps {
  register: any
  errors: any
}

const PasswordInput: React.FC<PasswordInputProps> = ({ register, errors }) => {
  const passwordRef = useRef<string | undefined>('')

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    passwordRef.current = event.target.value
  }

  return (
    <div>
      <input
        type="password"
        name="password"
        placeholder='Password'
        {...register('password', {
          required: {
            value: true,
            message: 'Password required'
          },
          minLength: {
            value: 6,
            message: 'The password is too short'
          }
        })}
        onChange={handlePasswordChange} // Actualiza passwordRef en cada cambio
      />
      <div>
      {errors.password && <span>{errors.password.message}</span>}
      </div>

      <input
        type="password"
        name="confirmPassword"
        placeholder='Confirm Password'
        {...register('confirmPassword', {
          required: {
            value: true,
            message: 'Please confirm your password'
          },
          validate: (value: string) =>
            value === passwordRef.current || 'the passwords dont match'
        })}
      />
      <div>
      {errors.confirmPassword && (
        <span>{errors.confirmPassword.message}</span>
      )}
      </div>
    </div>
  )
}

export default PasswordInput
