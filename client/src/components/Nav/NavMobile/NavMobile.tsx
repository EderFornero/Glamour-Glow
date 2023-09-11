import { useState } from 'react'
import imgprofile from '../../../assets/profile-circle.svg'
import style from './NavMobile.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../redux/types'
import { setAuth } from '../../../redux/actions'

const NavMobile = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userId = useSelector((state: RootState) => state.userId)
  const isAuth = localStorage.getItem('isAuth')

  const handleLogout = (): void => {
    dispatch(setAuth(false))
    localStorage.removeItem('token')
    localStorage.removeItem('isAuth')
    localStorage.removeItem('id')
    navigate('/')
  }
  return (
    <nav className={style['nav-mobile']}>
      <div className={style.div}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} rounded />
      </div>
      {isOpen && (
        <ul className={style.menu}>
          {!isAuth && (
            <li className={style['menu-item']}>
              <NavLink to='/login' className={style.link}>
                Login
              </NavLink>
            </li>
          )}
          {isAuth && (
            <li className={style['menu-item-full']}>
              <NavLink to={`/userdetail/${userId}`}>
                <img className={style['userimg-full']} src={imgprofile} />
              </NavLink>
            </li>
          )}
          <li className={style['menu-item']}>
            <NavLink to='/businessRegister' className={style.link}>
              For business
            </NavLink>
          </li>
          <li className={style['menu-item']}>
            <NavLink to='/business' className={style.link}>
              Services
            </NavLink>
          </li>
          {isAuth && (
            <li onClick={handleLogout} className={`${style['menu-item']} ${style.link} logout`}>
              Logout
            </li>
          )}
        </ul>
      )}
    </nav>
  )
}

export default NavMobile
