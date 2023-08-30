import React from 'react'

interface AcceptTermsInputProps {
  register: any
  errors: any
}

const AcceptTermsInput: React.FC<AcceptTermsInputProps> = ({ register, errors }) => {
  return (
    <div>
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
      <label>Accept Terms and Conditions</label>
      {errors.acceptTerms && <span>{errors.acceptTerms.message}</span>}
    </div>
  );
};

export default AcceptTermsInput