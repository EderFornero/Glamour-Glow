import React from 'react'
import { useForm } from 'react-hook-form'
import type { FormData } from '../../interfaces'
import NameInput from './inputs/NameInput'
import EmailInput from './inputs/EmailInput'
import BirthDateInput from './inputs/BirthDateInput'
import PasswordInput from './inputs/PasswordInput'
import AcceptTermsInput from './inputs/AcceptTermsInput'
import UserNameInput from './inputs/UserNameInput'
import style from './FormRegister.module.css'
import { useGoBack } from '../../hooks'

const FormRegister: React.FC = () => {
  const goBack = useGoBack()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      userName: '',
      email: '',
      birthDate: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false
    }
  })

  const onSubmit = handleSubmit((data: FormData) => {
    console.log(data)
  })

  return (
    <div className={style['div-form']}>
      <form className={style['form-box']} onSubmit={onSubmit}>
        <h1>Welcome!</h1>
          <NameInput register={register} errors={errors} />
          <UserNameInput register={register} errors={errors} />
          <EmailInput register={register} errors={errors} />
          <PasswordInput register={register} errors={errors} />
          <BirthDateInput register={register} errors={errors} />
          <div className={style['confirm-input']}>
            <AcceptTermsInput register={register} errors={errors} />
          </div>
          <div className={style['div-buttons']}>
            <button onClick={goBack}>Back</button>
            <button type='submit'>Send</button>
          </div>
      </form>
    </div>
  )
}

export default FormRegister
