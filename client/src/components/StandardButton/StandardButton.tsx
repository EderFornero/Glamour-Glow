import React, { type ReactNode, type ButtonHTMLAttributes } from 'react'
import styles from './StandardButton.module.css'

interface StandardButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'sizePagination' | 'sizeCards' | 'sizeForms' | 'sizeComment'
}

const StandardButton: React.FC<StandardButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const buttonClassName = `${styles.button} ${styles[variant]}`

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  )
}

export default StandardButton
