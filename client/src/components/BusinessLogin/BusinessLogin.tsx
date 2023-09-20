import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import type { SellerLoginData } from '../../interfaces'
import EmailLogin from './inputs/EmailLogin'
import PasswordLogin from './inputs/PasswordLogin'
import { postSellerValidate, setAuth, setUserId } from '../../redux/actions'
import style from './BusinessLogin.module.css'
import ErrorMessage from './handlers/errorMessage'
import toast, { Toaster } from 'react-hot-toast'
import StandardButton from '../StandardButton/StandardButton'
import { BusinessLoginImage } from '../../Images/FormImages'

interface BusinessLoginProps {
  onToggle: () => void
}

const BusinessLogin: React.FC<BusinessLoginProps> = ({ onToggle }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SellerLoginData>({
    defaultValues: { sellerEmail: '', sellerPassword: '' }
  })

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

  const [errorMessage] = useState('')

  const onSubmit = handleSubmit(async (data: SellerLoginData) => {
    try {
      const response = await dispatch(postSellerValidate(data))
      const { id, token, role } = response.data

      if (token !== undefined && id !== undefined) {
        toast.success('Logged in successfully', {
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
        localStorage.setItem('isAuth', 'true')
        localStorage.setItem('id', id)
        localStorage.setItem('role', role)
        dispatch(setAuth(true))
        dispatch(setUserId(id))
        setTimeout(() => {
          navigate('/')
        }, 1000)
      }
    } catch (error: any) {
      toast.error('Ops! Credential(s) incorrect', {
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
  })

  return (
    <div className={style['div-business-login']}>
      <div className={style['div-business-login-container']}>

        <div className={style['image-h3-container']}>
          <h3 className={style['h3-form-user']}>
          Ready to Glow again?
          </h3>
          <img src={BusinessLoginImage} alt='Business Login' className={style['image-form-user']} />
        </div>

        <div className={style.right}>
          <div className={style['div-right']}>
            <div className={style.text}>
              <h2 className={style.h2}></h2>
            </div>
            <form onSubmit={onSubmit}>
              <p className={style.txt}>Email:</p>
              <EmailLogin register={register} errors={errors} />
              {errorMessage !== '' && <ErrorMessage message={errorMessage} />}
              <p className={style.txt}>Password:</p>
              <PasswordLogin register={register} errors={errors} />
              <div className={style['buton-div']}>
                <StandardButton variant='sizeForms' type='submit'>
                  Log In
                </StandardButton>
              </div>
            </form>
            <div className={style['link-texts']}>
              <button>
                <p className={style['reg-button']} onClick={onToggle}>
                  Do not have a business account?
                </p>
              </button>
              <Link to='/businessLogin/passwordRecovery'>
                <p className={style.forgot}>Forgot password?</p>
              </Link>
            </div>
          </div>
        </div>
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

export default BusinessLogin
