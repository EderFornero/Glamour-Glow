import React from 'react'
import style from './input.module.css'

interface PasswordLoginProps {
  register: any
  errors: any
}

const PasswordLogin: React.FC<PasswordLoginProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        className={style.input}
        type='password'
        name='password'
        placeholder='Password'
        {...register('password', {
          required: {
            value: true,
            message: 'Password required'
          }
        })}
      />
      <div>{Boolean(errors.password) && <span className={style.span}>{errors.password.message}</span>}</div>
    </div>
  )
}

export default PasswordLogin
