import React from 'react'
import { useForm } from 'react-hook-form'
import { useGoBack } from '../../hooks'
import EmailLogin from './inputs/EmailLogin'
import PasswordLogin from './inputs/PasswordLogin'
import { Link } from 'react-router-dom'
import style from './FormLogin.module.css'


interface FormLoginData {
  email: string
  password: string
}

const FormLogin: React.FC = () => {
  const goBack = useGoBack()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormLoginData>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = handleSubmit((data: FormLoginData) => {
    console.log(data)
  })

  return (
    <div className={style['content']}>
      <div className={style['cover']}>
        <form onSubmit={onSubmit}>
          <h3>Login Here</h3>
          <EmailLogin register={register} errors={errors} />
          <PasswordLogin register={register} errors={errors} />
          <h4>or Login With:</h4>
          <div className={style['alt-login']}>
            <div className={style['instagram']}></div>
            <div className={style['google']}></div>
          </div>
          <div className={style['buton-div']}>
            <button onClick={goBack}>Back</button>
            <button type='submit'>Send</button>
          </div>
        </form>
        <div className={style['link-texts']}>
          <Link to='/register'>
            <p className={style['reg-button']}>Dont have an account?</p>
          </Link> 
          <Link to='/recovePassword'>
            <p className={style['forgot']}>Forgot Password?</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FormLogin
