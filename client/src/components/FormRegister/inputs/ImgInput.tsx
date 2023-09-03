import React from 'react'
import style from './input.module.css'

interface ImgInputProps {
  register: any
  errors: any
}

const ImgInput: React.FC<ImgInputProps> = ({ errors }) => {
  return (
    <div>
      <input
        className={style['input']}
        type='text'
        name="image"
        placeholder='Imagen proximamente'
      />
      <div>
      {(Boolean(errors.image)) && <span className={style['span']}>{errors.image.message}</span>}
      </div>
    </div>
  )
}

export default ImgInput
