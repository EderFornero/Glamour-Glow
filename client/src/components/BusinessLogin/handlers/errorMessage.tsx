import React from 'react'
import style from '../BusinessLogin.module.css'

interface ErrorMessageProps {
  message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <p className={style['error-message']}>{message}</p>
  )
}

export default ErrorMessage
