import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import type { FormData } from '../../interfaces'
import NameInput from './inputs/NameInput'
import EmailInput from './inputs/EmailInput'
import BirthDateInput from './inputs/BirthDateInput'
import PasswordInput from './inputs/PasswordInput'
import LastNameInput from './inputs/LastNameInput'
import style from './FormRegister.module.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postUser, postValidate, setAuth, setUserId } from '../../redux/actions'
import PhoneNumberInput from './inputs/PhoneNumberInput'
import { sendWelcomeEmail } from '../../utils'
import TermsAndConditions from '../TermsAndConditions/TermsAndConditions'
import toast, { Toaster } from 'react-hot-toast'
import StandardButton from '../StandardButton/StandardButton'

interface FormLoginProps {
  onToggle: () => void
}

const FormRegister: React.FC<FormLoginProps> = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Enter') {
        event.preventDefault()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const {
    register,
    getValues,
    handleSubmit,
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
      image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
      isActive: true,
      confirmPassword: ''
    }
  })
  const [showTerms, setShowTerms] = useState(false)

  const autoLogin = {
    email: '',
    password: ''
  }

  const toggleTerms = (): void => {
    setShowTerms(!showTerms)
  }

  const onSubmit = async (): Promise<void> => {
    const data: FormData = getValues()
    delete data.confirmPassword
    try {
      const response = await dispatch(postUser(data))
      await sendWelcomeEmail(data.email)
      if (response.data !== undefined) {
        try {
          autoLogin.email = data.email
          autoLogin.password = data.password
          const response = await dispatch(postValidate(autoLogin))
          const { id, token, role } = response.data
          if (token !== undefined && id !== undefined) {
            localStorage.setItem('isAuth', 'true')
            localStorage.setItem('id', id)
            localStorage.setItem('role', role)
            dispatch(setAuth(true))
            dispatch(setUserId(id))
            navigate('/')
          }
          toast.success('Successfully registered', {
            style: {
              border: '1px solid #3d36be',
              padding: '16px',
              color: '#1eb66d'
            },
            iconTheme: {
              primary: '#6e66ff',
              secondary: '#FFFAEE'
            }
          })
        } catch (error: any) {
          toast.error('Ops! Something went wrong', {
            style: {
              border: '1px solid #3d36be',
              padding: '16px',
              color: 'red'
            },
            iconTheme: {
              primary: 'red',
              secondary: '#FFFAEE'
            }
          })
        }
      } else {
        toast.error('The email is already in use', {
          style: {
            border: '1px solid #3d36be',
            padding: '16px',
            color: 'red'
          },
          iconTheme: {
            primary: 'red',
            secondary: '#FFFAEE'
          }
        })
      }
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
          <StandardButton variant='sizeForms' type='submit'>
            Register
          </StandardButton>
        </div>
        </form>
        <a href="#" className={style['terms-conditions']} onClick={toggleTerms}>Terms and Conditions</a>
        <div className={style[`terms-and-conditions${showTerms ? '-show-terms' : ''}`]}>
          <TermsAndConditions />
        </div>
        <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    </div>
  )
}

export default FormRegister
