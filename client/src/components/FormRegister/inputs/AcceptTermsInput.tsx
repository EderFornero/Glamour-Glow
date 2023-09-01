import React from 'react';

interface AcceptTermsInputProps {
  register: any;
  errors: any;
}

const AcceptTermsInput: React.FC<AcceptTermsInputProps> = ({
  register,
  errors,
}) => {
  return (
    <div>
      <label>Terms and Conditions</label>
      <input
        type="checkbox"
        name="acceptTerms"
        {...register('acceptTerms', {
          required: {
            value: true,
            message: 'Please accept Terms and conditions'
          }
        })}
      />
      <div>
        {errors.acceptTerms && <span>{errors.acceptTerms.message}</span>}
      </div>
    </div>
  )
}

<<<<<<< HEAD
export default AcceptTermsInput
=======
export default AcceptTermsInput;
>>>>>>> 62dbd688df7cf908a75f946e13b8f6eb5e31904f
