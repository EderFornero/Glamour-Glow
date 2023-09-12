import { useState } from 'react'
// toaster
import toast, { Toaster } from 'react-hot-toast'
// utils
import { sendResetPasswordEmail } from '../../utils'
// router
import { Link } from 'react-router-dom'
// css
import style from './PasswordRecovery.module.css'
import { forgotPasswordImage } from '../../Images/FormImages'

const NodemailerTest = (): JSX.Element => {
  const [email, setEmail] = useState('')
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSendResetPassword = async (e: any) => {
    e.preventDefault()
    try {
      const response = await sendResetPasswordEmail(email)
      toast.success('Sent, check your mail', {
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
      return response
    } catch (error) {
      toast.error('Ops! An error occurred', {
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
    <>
      <div className={style['div-container-recovery-password']}>
        <div className={style['form-container']}>
          <img src={forgotPasswordImage} alt='Forgot Password' />
          <div className={style['logo-container']}>
            Forgot Password
          </div>

          <form className={style.form}>
            <div className={style['form-group']}>
              <label htmlFor='email'>Email</label>
              <input
                onChange={e => { setEmail(e.target.value) }}
                type='text'
                id='email'
                name='email'
                placeholder='Enter your email'
              />
            </div>

            <button onClick={(e) => { void handleSendResetPassword(e) }} className={style['form-submit-btn']} type='submit'>Send Email</button>
          </form>

          <p className={style['signup-link']}>
            Don&apos;t have an account?
            <Link to='/login' className={style['signup-link link']}> Sign Up</Link>
          </p>
        </div>
      </div>
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    </>
  )
}

export default NodemailerTest
