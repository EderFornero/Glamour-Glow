import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useGoBack } from '../../hooks'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import type { SellerLoginData } from '../../interfaces'
import EmailLogin from './inputs/EmailLogin'
import PasswordLogin from './inputs/PasswordLogin'
import { postSellerValidate, setAuth, setUserId } from '../../redux/actions'
import style from './BusinessLogin.module.css'
import ErrorMessage from './handlers/errorMessage'

interface BusinessLoginProps {
  onToggle: () => void
}

const BusinessLogin: React.FC<BusinessLoginProps> = ({ onToggle }) => {
  const dispatch = useDispatch()
  const goBack = useGoBack()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SellerLoginData>({
    defaultValues: { sellerEmail: '', sellerPassword: '' }
  })

  const [errorMessage, setErrorMessage] = useState('')
  const [error, setError] = useState('')

  console.log(setErrorMessage)

  const onSubmit = handleSubmit(async (data: SellerLoginData) => {
    try {
      const response = await dispatch(postSellerValidate(data))
      const { id, token, role } = response.data
      console.log(response.data)

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

  return (
    <div className={style.all}>
      <div className={style.content}>
        <div className={style.left}>
          <h1 className={style.h1}>Ready to Glow again?</h1>
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
              <div className={style['alt-login']}>
                <h4 className={style['log-with']}>or Login With:</h4>
                <div className={style['ico-div']}>
                  <button type='button' className={style.google}></button>
                </div>
              </div>
              <div className={style['buton-div']}>
                <button className={style.btn} onClick={goBack}>
                  Back
                </button>
                <button className={style.btn} type='submit'>
                  Send
                </button>
              </div>
              {error !== undefined && <div className={style['error-login']}>{error}</div>}
            </form>
            <div className={style['link-texts']}>
              <button>
                <p className={style['reg-button']} onClick={onToggle}>
                  Dont have an business account?
                </p>
              </button>
              <Link to='/login/passwordRecovery'>
                <p className={style.forgot}>Forgot password?</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessLogin
