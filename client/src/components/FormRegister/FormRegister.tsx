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
import { postUser } from '../../redux/actions'
import PhoneNumberInput from './inputs/PhoneNumberInput'
import { sendWelcomeEmail } from '../../utils'

interface FormLoginProps {
  onToggle: () => void
}

const FormRegister: React.FC<FormLoginProps> = ({ onToggle }: any) => {
  const goBack = useGoBack()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    getValues,
    handleSubmit, // Importa handleSubmit
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      role: 'customer',
      dateOfBirth: '',
      image: '',
      isActive: true,
      confirmPassword: ''
    }
  })

  const onSubmit = async (e: any): Promise<void> => {
    e.preventDefault()
    const data: FormData = getValues()
    delete data.confirmPassword
    console.log(data)
    try {
      await dispatch(postUser(data))
      await sendWelcomeEmail(data.email)
      navigate('/')
    } catch (error) {
      throw new Error()
    }
  }

  return (
    <div className={style['div-form']}>
      <form className={style['form-box']} onSubmit={handleSubmit(onSubmit)}>
        <NameInput register={register} errors={errors} />
        <LastNameInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <PhoneNumberInput register={register} errors={errors} />
        <BirthDateInput register={register} errors={errors} />
        <div className={style['div-buttons']}>
          <button className={style.botn} onClick={goBack}>
            Back
          </button>
          <button className={style.botn} type='submit'>
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormRegister
