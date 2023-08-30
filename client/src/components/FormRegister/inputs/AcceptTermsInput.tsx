import React from 'react'

interface AcceptTermsInputProps {
  register: any
  errors: any
}

const AcceptTermsInput: React.FC<AcceptTermsInputProps> = ({ register, errors }) => {
  return (
    <div>
      <label>Terms and Conditions</label>
      <input
        type="checkbox"
        name="acceptTerms"
        {...register('acceptTerms', {
          required: {
            value: true,
            message: 'Please accept the terms and conditions',
          },
        })}
      />
      <div>
      {errors.acceptTerms && <span>{errors.acceptTerms.message}</span>}
      </div>
    </div>
  );
};

export default AcceptTermsInput