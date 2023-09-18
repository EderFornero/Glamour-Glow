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
        name='sellerPassword'
        placeholder='Password'
        {...register('sellerPassword', {
          required: {
            value: true,
            message: 'Password required'
          },
          minLength: {
            value: 6,
            message: 'Password Not Valid'
          }
        })}
      />
      <div>{Boolean(errors.password) && <span className={style.span}>{errors.password.message}</span>}</div>
    </div>
  )
}

export default PasswordLogin
