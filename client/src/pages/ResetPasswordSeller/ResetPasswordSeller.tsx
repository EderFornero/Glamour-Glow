import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// css
import style from './ResetPasswordSeller.module.css'
import { resetPasswordImage } from '../../Images/FormImages'
// svg
import closeEye from '../../assets/PasswordEyes/close-eye.svg'
import openEye from '../../assets/PasswordEyes/open-eye.svg'
// utils
import { confirmResetPasswordSeller } from '../../utils/SendEmail'
import toast, { Toaster } from 'react-hot-toast'

const ResetPasswordSeller = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)
  const [eyeClicked, setEyeClicked] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const togglePasswordVisibility = (): void => {
    setEyeClicked(!eyeClicked)
    setShowPassword(!showPassword)
  }

  const searchParams = new URLSearchParams(location.search)
  const passwordResetCode = searchParams.get('key')
  const id = searchParams.get('id')

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleOnClickReset = async (e: any) => {
    e.preventDefault()
    try {
      const response = await confirmResetPasswordSeller(id, passwordResetCode, newPassword, passwordConfirm)
      toast.success('Password Successfully Changed', {
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

      if (response.status === 200) {
        setTimeout(() => {
          navigate('/businessLogin')
        }, 2000)
        return response
      }
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
          <img src={resetPasswordImage} alt='Forgot Password' />
          <div className={style['logo-container']}>
            Reset Password
          </div>

          <form className={style.form}>
            <div className={style['form-group']}>
              <label htmlFor='password'>New Password</label>
              <div className={style['div-new-password']}>
                <input
                  onChange={e => { setNewPassword(e.target.value) }}
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='sellerPassword'
                  placeholder='New Password'
                />
                <span
                  onClick={togglePasswordVisibility}
                  className={style['eye-button']}
                >
                  <img
                    src={eyeClicked ? closeEye : openEye}
                    alt='Toggle Password Visibility'
                  />
                </span>
              </div>
              <label htmlFor='password'>Confirm Password</label>
              <div className={style['div-new-password']}>
                <input
                  onChange={e => { setPasswordConfirm(e.target.value) }}
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='sellerPassword'
                  placeholder='New Password'
                />
                <span
                  onClick={togglePasswordVisibility}
                  className={style['eye-button']}
                >
                  <img
                    src={eyeClicked ? closeEye : openEye}
                    alt='Toggle Password Visibility'
                  />
                </span>
              </div>
            </div>

            <button
              onClick={(e) => { void handleOnClickReset(e) }}
              className={style['form-submit-btn']}
              type='submit'

            >Reset</button>
          </form>

        </div>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default ResetPasswordSeller
