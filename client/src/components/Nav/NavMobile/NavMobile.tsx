import { useState } from 'react'
import imgprofile from '../../../assets/profile-circle.svg'
import style from './NavMobile.module.css'
import { NavLink } from 'react-router-dom'
import Hamburger from 'hamburger-react'
const NavMobile = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [token, setToken] = useState<{ userId: number, role: string } | null>(null)
  const login = (): void => {
    setToken({ userId: 1, role: 'customer' })
  }

  // Simulate logout by removing the token
  const logout = (): void => {
    setToken(null)
  }

  return (
    <nav className={style['nav-mobile']}>
      <div className={style.div}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} rounded />
      </div>
      {isOpen && (
        <ul className={style.menu}>
          {token === null && (
            <li onClick={login} className={style['menu-item']}>
              <NavLink to='/' className={style.link}>
                Login
              </NavLink>
            </li>
          )}
          {token !== null && (
            <li className={style['menu-item-full']}>
              <NavLink to='/userdetail'>
                <img className={style['userimg-full']} src={imgprofile} />
              </NavLink>
            </li>
          )}
          <li className={style['menu-item']}>
            <NavLink to='/' className={style.link}>
              For business
            </NavLink>
          </li>
          <li className={style['menu-item']}>
            <NavLink to='/business' className={style.link}>
              Services
            </NavLink>
          </li>
          {token !== null && (
            <li onClick={logout} className={`${style['menu-item']} ${style.link} logout`}>
              Logout
            </li>
          )}
        </ul>
      )}
    </nav>
  )
}

export default NavMobile
