import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useGoBack } from '../../hooks'
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

interface FormLoginProps {
  onToggle: () => void
}

const FormLogin: React.FC<FormLoginProps> = ({ onToggle }) => {
  const dispatch = useDispatch()
  const goBack = useGoBack()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormLoginData>({
    defaultValues: { email: '', password: '' }
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [error, setError] = useState('')

  console.log(setErrorMessage)

  const onSubmit = handleSubmit(async (data: FormLoginData) => {
    try {
      const response = await dispatch(postValidate(data))
      const { id, token, role } = response.data

      if (token !== undefined && id !== undefined) {
        localStorage.setItem('isAuth', 'true')
        localStorage.setItem('id', id)
        localStorage.setItem('role', role)
        dispatch(setAuth(true))
        dispatch(setUserId(id))
        navigate('/')
      }
    } catch (error: any) {
      setError('Incorrect credentials')
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
      const response = await axios.post('http://localhost:3001/users/auth/login', data)
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
      console.log(error)
    }
  }

  return (
    <div className={style.content}>
      <form onSubmit={onSubmit}>
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
            Send
          </button>
          {error !== undefined && <div className={style['error-login']}>{error}</div>}
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
    </div>
  )
}

export default FormLogin
