import { useState } from 'react'
// css
import style from './ResetPassword.module.css'
import resetPasswordImage from '../../Images/Description-images/resetpassword.png'
// svg
import closeEye from '../../assets/PasswordEyes/close-eye.svg'
import openEye from '../../assets/PasswordEyes/open-eye.svg'
// import { sendResetPasswordEmail } from '../../utils'
const ResetPassword = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false)
  const [eyeClicked, setEyeClicked] = useState(false)

  const togglePasswordVisibility = (): void => {
    setEyeClicked(!eyeClicked)
    setShowPassword(!showPassword)
  }

  return (
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
                // onChange={e => { setEmail(e.target.value) }}
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
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
                // onChange={e => { setEmail(e.target.value) }}
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
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

          <button className={style['form-submit-btn']} type='submit'>Reset</button>
        </form>

      </div>
    </div>
  )
}

export default ResetPassword
