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
import { auth, provider } from '../../firebase-config'
import { signInWithPopup } from 'firebase/auth'

const FormLogin: React.FC = ({ onToggle }) => {
  const dispatch = useDispatch()
  const goBack = useGoBack()
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<FormLoginData>({
    defaultValues: { email: '', password: '' } })
  const [errorMessage, setErrorMessage] = useState('')
  const [error, setError] = useState('')

  const onSubmit = handleSubmit(async (data: FormLoginData) => {
    try {
      const response = await dispatch(postValidate(data))
      const { id, token } = response.data

      if (id && token) {
        localStorage.setItem('isAuth', 'true')
        dispatch(setAuth(true))
        dispatch(setUserId(id))
        navigate('/')
      }
    } catch (error: any) {
      setError('Incorrect credentials')
    }
  })

  return (
    <div className={style.content}>
      <form onSubmit={onSubmit}>
        <p className={style.txt}>Email:</p>
        <EmailLogin register={register} errors={errors} />
        {errorMessage !== '' && <ErrorMessage message={errorMessage} />}
        <p className={style.txt}>Password:</p>
        <PasswordLogin register={register} errors={errors} />
        <div className={style['alt-login']}>
          <h4 className={style['log-with']}>or Login With:</h4>
          <div className={style['ico-div']}>
            <button type='button' className={style.google}></button>
            <button className={style.ig}></button>
          </div>
        </div>
        <div className={style['buton-div']}>
          <button className={style.btn} onClick={goBack}>
            Back
          </button>
          <button className={style.btn} type='submit'>
            Send
          </button>
          {error && <div className={style['error-login']}>{error}</div>}
        </div>
      </form>
      <div className={style['link-texts']}>
        <button>
          <p className={style['reg-button']} onClick={onToggle}>
            Dont have an account?
          </p>
        </button>
        <Link to='/recovePassword'>
          <p className={style.forgot}>Forgot Password?</p>
        </Link>
      </div>
    </div>
  )
}

export default FormLogin
