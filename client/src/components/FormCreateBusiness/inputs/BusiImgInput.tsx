import React from 'react'

interface BusiImgInputProps {
  register: any
  errors: any
}

const BusiImgInput: React.FC<BusiImgInputProps> = ({ register, errors }) => {
  return (
    <div>
      <input
        type='text'
        name="imgs"
        placeholder='Imagen proximamente'
        {...register('imgs')}
      />
      <div>
      {(Boolean(errors.imgs)) && <span>{errors.imgs.message}</span>}
      </div>
    </div>
  )
}

export default BusiImgInput
