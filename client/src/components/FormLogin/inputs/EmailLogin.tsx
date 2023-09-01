import React from 'react'

interface EmailLoginProps {
  register: any
  errors: any
}

const EmailLogin: React.FC<EmailLoginProps> = ({ register, errors }) => {
  return (
        <div>
            <input
              type="email"
              name="email"
              placeholder='Email:'
              {...register('email', {
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
              {(Boolean(errors.email)) && <span>{errors.email.message}</span>}
            </div>
        </div>
  )
}

export default EmailLogin
