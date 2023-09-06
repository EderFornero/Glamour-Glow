import React from 'react'
import { useForm } from 'react-hook-form'
import type { FormData } from '../../interfaces'
import NameInput from './inputs/NameInput'
import EmailInput from './inputs/EmailInput'
import BirthDateInput from './inputs/BirthDateInput'
import PasswordInput from './inputs/PasswordInput'
import LastNameInput from './inputs/LastNameInput'
import style from './FormRegister.module.css'
import { useGoBack } from '../../hooks'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postUser } from '../../redux/Actions'
import PhoneNumberInput from './inputs/PhoneNumberInput'

const FormRegister: React.FC = ({ onToggle }: any) => {
  const goBack = useGoBack()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      last_name: '',
      email: '',
      password: '',
      phone_number: '',
      role: 'customer',
      date_of_birth: '',
      image: 'https://cdn.icon-icons.com/icons2/2574/PNG/512/profile_picture_user_icon_153847.png',
      isActive: true,
      confirmPassword: ''
    }
  })

  const onSubmit = handleSubmit((data: FormData) => {
    delete data.confirmPassword
    console.log(data)
    dispatch(postUser(data))
    navigate('/')
  })

  return (
    <div className={style['div-form']}>
      <form className={style['form-box']} onSubmit={onSubmit}>
          <NameInput register={register} errors={errors} />
          <LastNameInput register={register} errors={errors} />
          <EmailInput register={register} errors={errors} />
          <PasswordInput register={register} errors={errors} />
          <PhoneNumberInput register={register} errors={errors} />
          <BirthDateInput register={register} errors={errors} />
          <div className={style['div-buttons']}>
            <button className={style.botn} onClick={goBack}>Back</button>
            <button className={style.botn} type='submit'>Send</button>
          </div>
      </form>
      <button>
            <p className={style['reg-button']} onClick={onToggle}>You have an account?</p>
      </button>
    </div>
  )
}

export default FormRegister
