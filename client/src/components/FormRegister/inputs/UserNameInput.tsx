import React from 'react'
import style from './input.module.css'

interface UserNameInputProps {
  register: any
  errors: any
}

const UserNameInput: React.FC<UserNameInputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        className={style.input}
        type="text"
        name="username"
        placeholder="User Name"
        {...register('username', {
          required: {
            value: true,
            message: 'Please enter your user name!'
          },
          maxLength: 20,
          minLength: 3
        })}
      />
      <div>
      {errors.username?.type === 'required' && <span className={style.span}>User Name Required</span>}
      {errors.username?.type === 'maxLength' && (
        <span className={style.span}>The user name is too longer</span>
      )}
      {errors.username?.type === 'minLength' && (
        <span className={style.span}>The user name is too short</span>
      )}
      </div>
    </div>
  )
}

export default UserNameInput
