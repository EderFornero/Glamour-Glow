import { useState, useEffect } from 'react'
import imgprofile from '../../../assets/profile-circle.svg'
import style from './NavMobile.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth, getUserbyId } from '../../../redux/actions'
import type { RootState } from '../../../redux/types'

const NavMobile = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuth = localStorage.getItem('isAuth')
  const role = localStorage.getItem('role')
  const id = localStorage.getItem('id')
  const { userdetail } = useSelector((state: RootState) => state)

  const handleLogout = (): void => {
    dispatch(setAuth(false))
    localStorage.clear()
    navigate('/')
  }

  useEffect(() => {
    dispatch(getUserbyId(id))
  }, [id])
  return (
    <nav className={style['nav-mobile']}>
      <div className={style.div}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} rounded />
      </div>
      {isOpen && (
        <ul className={style.menu}>
          {isAuth === null && (
            <li className={style['menu-item']}>
              <NavLink to='/login' className={style.link}>
                Login
              </NavLink>
            </li>
          )}
          {isAuth === 'true' && (
            <li className={style['menu-item-full']}>
              <NavLink to={role !== null && role === 'seller' ? '/admin' : `/userdetail/${id}`}>
                <img className={style['userimg-full']} src={userdetail.image ?? imgprofile} />
              </NavLink>
            </li>
          )}
          <li className={style['menu-item']}>
            <NavLink to={role !== null && role === 'seller' ? '/businessRegister' : '/businessLogin'} className={style.link}>
              {role !== null && role === 'seller' ? 'Register your business' : 'For Business'}
            </NavLink>
          </li>
          <li className={style['menu-item']}>
            <NavLink to='/business' className={style.link}>
              Services
            </NavLink>
          </li>
          {isAuth === 'true' && (
            <li onClick={handleLogout} className={`${style['menu-item']} ${style.link} logout`}>
              <NavLink to='/business' className={style.link}>
                Logout
              </NavLink>
            </li>
          )}
        </ul>
      )}
    </nav>
  )
}

export default NavMobile
