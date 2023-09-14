import React, { useRef } from 'react'
import style from './input.module.css'

interface PasswordInputProps {
  register: any
  errors: any
}

const PasswordInput: React.FC<PasswordInputProps> = ({ register, errors }) => {
  const passwordRef = useRef<string | undefined>('')

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): any => {
    passwordRef.current = event.target.value
  }

  return (
    <div>
      <input
        className={style.input}
        type="password"
        name="password"
        placeholder="Password"
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
        onBlur={handlePasswordChange}
      />
      <div>
      {errors.password?.type === 'required' && (
          <span className={style.span}>Password required</span>
      )}
      </div>
      <input
        className={style.input}
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
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
        {(Boolean(errors.confirmPassword)) && (
          <span className={style.span}>{errors.confirmPassword.message}</span>
        )}
      </div>
    </div>
  )
}

export default PasswordInput
