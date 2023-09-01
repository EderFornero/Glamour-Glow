import React from 'react'

interface UserNameInputProps {
  register: any
  errors: any
}

const UserNameInput: React.FC<UserNameInputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        type="text"
        name="userName"
        placeholder='User Name'
        {...register('userName', {
          required: {
            value: true,
            message: 'Please enter your user name!'
          },
          maxLength: 20,
          minLength: 3
        })}
      />
      <div>
      {errors.userName?.type === 'required' && <span>User Name Required</span>}
      {errors.userName?.type === 'maxLength' && (
        <span>The user name is too longer</span>
      )}
      {errors.userName?.type === 'minLength' && (
        <span>The user name is too short</span>
      )}
      </div>
    </div>
  )
}

export default UserNameInput
