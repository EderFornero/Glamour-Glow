import React from 'react'
import style from './input.module.css'

interface EmailLoginProps {
  register: any
  errors: any
}

const EmailLogin: React.FC<EmailLoginProps> = ({ register, errors }) => {
  return (
        <div>
            <input
            className={style.input}
              type="email"
              name="sellerEmail"
              placeholder='business@gmail.com'
              {...register('sellerEmail', {
                required: {
                  value: true,
                  message: 'Please enter a Email'
                },
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Email not valid'
                }
              })}
            />
            <div>
              {(Boolean(errors.email)) && <span className={style.span}>{errors.email.message}</span>}
            </div>
        </div>
  )
}

export default EmailLogin
