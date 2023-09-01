import React from 'react'

interface PasswordLoginProps {
  register: any
  errors: any
}

const PasswordLogin: React.FC<PasswordLoginProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        type="password"
        name="password"
        placeholder='Password:'
        {...register('password', {
          required: {
            value: true,
            message: 'Password required'
          },
          minLength: {
            value: 6,
            message: 'Password Not Valid'
          },
        })}
      />
      <div>
        {(Boolean(errors.password)) && <span>{errors.password.message}</span>}
      </div>
    </div>
  )
}

export default PasswordLogin
