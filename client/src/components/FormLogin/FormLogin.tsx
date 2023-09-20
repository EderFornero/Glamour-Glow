import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import EmailLogin from './inputs/EmailLogin'
import PasswordLogin from './inputs/PasswordLogin'
import { Link, useNavigate } from 'react-router-dom'
import style from './FormLogin.module.css'
import { useDispatch } from 'react-redux'
import type { FormLoginData } from '../../interfaces'
import ErrorMessage from './handlers/errorMessage'
import { postValidate, setAuth, setUserId } from '../../redux/actions'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import type { AuthProvider } from 'firebase/auth'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
const API_URL = import.meta.env.VITE_SERVER_URL

interface FormLoginProps {
  onToggle: () => void
}

const FormLogin: React.FC<FormLoginProps> = ({ onToggle }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goBack = (): void => {
    navigate('/')
  }

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
    handleSubmit,
    formState: { errors }
  } = useForm<FormLoginData>({
    defaultValues: { email: '', password: '' }
  })
  const [errorMessage] = useState('')

  const onSubmit = handleSubmit(async (data: FormLoginData) => {
    try {
      const response = await dispatch(postValidate(data))
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
          if (data.email === 'glamourglowpf@gmail.com') {
            navigate('/admin/glamour')
          } else { navigate('/') }
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

  const firebaseConfig = {
    apiKey: 'AIzaSyD_Z-SEf-f0T2I28mY9CPYk2o5Djk0Lalo',
    authDomain: 'glamour-glow-a4ce7.firebaseapp.com',
    projectId: 'glamour-glow-a4ce7',
    storageBucket: 'glamour-glow-a4ce7.appspot.com',
    messagingSenderId: '179833174281',
    appId: '1:179833174281:web:6d7438a365a1fdb86cfbd8'
  }

  const app = initializeApp(firebaseConfig)

  const auth = getAuth(app)

  const handleOnClick = async (): Promise<void> => {
    try {
      const googleProvider = new GoogleAuthProvider()
      await singInWithGoogle(googleProvider)
    } catch (error) {}
  }

  const singInWithGoogle = async (googleProvider: AuthProvider): Promise<void> => {
    try {
      const res = await signInWithPopup(auth, googleProvider)
      const email = res.user.email
      const image = res.user.photoURL
      const name = res.user.displayName
      const password = res.user.uid
      const data = {
        email,
        image,
        name,
        password
      }
      const response = await axios.post(`${API_URL}users/auth/login`, data)
      const { token, id, role } = response.data

      if (token !== undefined && id !== undefined) {
        localStorage.setItem('isAuth', 'true')
        localStorage.setItem('id', id)
        localStorage.setItem('role', role)
        dispatch(setAuth(true))
        dispatch(setUserId(id))
        navigate('/')
      }
      localStorage.setItem('token', token)
    } catch (error) {
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
  }

  return (
    <div className={style.content}>
      <form onSubmit={(event) => {
        event.preventDefault()
        void onSubmit(event)
      }}>
        <label className={style.txt}>Email:</label>
        <EmailLogin register={register} errors={errors} />
        {errorMessage !== '' && <ErrorMessage message={errorMessage} />}
        <label className={style.txt}>Password:</label>
        <PasswordLogin register={register} errors={errors} />
        <div className={style['alt-login']}>
          <h4 className={style['log-with']}>or Login With:</h4>
          <div className={style['ico-div']}>
            <button type='button' onClick={handleOnClick} className={style.google}></button>
          </div>
        </div>
        <div className={style['buton-div']}>
          <button className={style.btn} onClick={goBack}>
            Back
          </button>
          <button className={style.btn} type='submit'>
            Login
          </button>
        </div>
      </form>
      <div className={style['link-texts']}>
        <button>
          <p className={style['reg-button']} onClick={onToggle}>
            Dont have an account?
          </p>
        </button>
        <Link to='/login/passwordRecovery'>
          <p className={style.forgot}>Forgot Password?</p>
        </Link>
      </div>
      <div>
        <Toaster position='top-center' reverseOrder={false} />
      </div>
    </div>
  )
}

export default FormLogin
