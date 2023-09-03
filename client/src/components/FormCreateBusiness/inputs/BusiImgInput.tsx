import React from 'react'
import style from './input.module.css'

interface BusiImgInputProps {
  register: any
  errors: any
}

const BusiImgInput: React.FC<BusiImgInputProps> = ({ errors }) => {
  return (
    <div>
      <input
      className={style['input']}
        type='text'
        name="imgs"
        placeholder='Imagen proximamente'
      />
      <div>
      {(Boolean(errors.imgs)) && <span className={style['span']}>{errors.imgs.message}</span>}
      </div>
    </div>
  )
}

export default BusiImgInput
