import React from 'react';

interface UserNameInputProps {
  register: any;
  errors: any;
}

const UserNameInput: React.FC<UserNameInputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        type="text"
        name="userName"
        placeholder="User Name"
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
<<<<<<< HEAD
      {errors.userName?.type === 'required' && <span>User Name Required</span>}
      {errors.userName?.type === 'maxLength' && (
        <span>The user name is too longer</span>
      )}
      {errors.userName?.type === 'minLength' && (
        <span>The user name is too short</span>
      )}
=======
        {errors.userName?.type === 'required' && (
          <span>User Name Required</span>
        )}
        {errors.userName?.type === 'maxLength' && (
          <span>The user name must not be longer than 20 characters</span>
        )}
        {errors.userName?.type === 'minLength' && (
          <span>The user name must not be less than 3 characters</span>
        )}
>>>>>>> 62dbd688df7cf908a75f946e13b8f6eb5e31904f
      </div>
    </div>
  )
}

<<<<<<< HEAD
export default UserNameInput
=======
export default UserNameInput;
>>>>>>> 62dbd688df7cf908a75f946e13b8f6eb5e31904f
