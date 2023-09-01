import React from 'react'
import { useGoBack } from '../../hooks'
import { useForm } from 'react-hook-form'
import BusiCategoriesInput from './inputs/BusiCategoriesInput'
import BusiGenderInput from './inputs/BusiGenderInput'
import BusiNameInput from './inputs/BusiNameInput'
import BusiEmailInput from './inputs/BusiEmailInput'
import BusiPhoneInput from './inputs/BusiPhoneInput'
import BusiImgInput from './inputs/BusiImgInput'
import style from './FormCreateBusiness.module.css'

interface FormCreateBusi {
  imgs: string
  businessName: string
  businessEmail: string
  businessPhone: number
  businessLocation: string
  businessGender: 'male' | 'female' | 'any'
  categories: string[]
}

const FormBusiness: React.FC = () => {
  const goBack = useGoBack()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormCreateBusi>({
    defaultValues: {
      imgs: '',
      businessName: '',
      businessEmail: '',
      businessPhone: undefined,
      businessLocation: '',
      businessGender: 'any',
      categories: []
    }
  })

  const onSubmit = handleSubmit((data: FormCreateBusi) => {
    console.log(data)
  })

  return (
      <div className={style['div-gral']}>
        <div className={style['cont-img']}>
            <h1>Share your skills with the world!</h1>
            <div className={style['div-img']}></div>
        </div>
        <form onSubmit={onSubmit} className={style['form-div']}>
        <h2>Tell us about your work</h2>
          <BusiNameInput register={register} errors={errors} />
          <BusiEmailInput register={register} errors={errors} />
          <BusiPhoneInput register={register} errors={errors} />
          <BusiImgInput register={register} errors={errors} />
          <div className={style['div-inputs-bottom']}>
            <BusiCategoriesInput register={register} errors={errors} />
            <BusiGenderInput register={register} errors={errors} />
          </div>
          <div className={style['div-button']}>
            <button onClick={goBack}>Back</button>
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
  )
}

export default FormBusiness
