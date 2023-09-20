import React, { useState } from 'react'
import FormRegister from '../../components/FormRegister/FormRegister'
import FormLogin from '../../components/FormLogin/FormLogin'
import style from './Forms.module.css'
import { LoginImage } from '../../Images/FormImages'

const Forms: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(true)

  const toggleForm = (): void => {
    setShowLoginForm(!showLoginForm)
  }

  return (
    <div className={style['div-forms']}>
      <div className={style['div-forms-container']}>
        <div className={style['image-h3-container']}>
          <h3 className={style['h3-form-user']}>
            Let your work Glow!
          </h3>
          <img src={LoginImage} alt='Login' className={style['image-form-user']} />
        </div>

        <div className={style.right}>
          <div className={style['text-log'] + (showLoginForm ? '' : ` ${style['text-log-adjusted']}`)}>
            <div className={style.text}>
              <button className={style['i-log']} onClick={toggleForm} disabled={showLoginForm}>
                LOGIN
              </button>
              <span className={style.I}>|</span>
              <button className={style['i-reg']} onClick={toggleForm} disabled={!showLoginForm}>
                REGISTER
              </button>
            </div>
            <div className={style.forms}>
              <div>{showLoginForm ? <FormLogin onToggle={toggleForm} /> : <FormRegister onToggle={toggleForm} />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forms
