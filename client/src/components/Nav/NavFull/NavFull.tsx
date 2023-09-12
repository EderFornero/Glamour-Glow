import style from './NavFull.module.css'
import { NavLink } from 'react-router-dom'
import imgprofile from '../../../assets/profile-circle.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getUserbyId, setAuth } from '../../../redux/actions'
import { useEffect } from 'react'
import type { RootState } from '../../../redux/types'

const NavFull = (): JSX.Element => {
  const dispatch = useDispatch()
  const id = localStorage.getItem('id')
  const isAuth = localStorage.getItem('isAuth')
  const { userdetail } = useSelector((state: RootState) => state)
  const role = localStorage.getItem('role')

  const handleLogout = (): void => {
    dispatch(setAuth(false))
    localStorage.removeItem('token')
    localStorage.removeItem('isAuth')
    localStorage.removeItem('id')
    localStorage.removeItem('role')
  }

  useEffect(() => {
    dispatch(getUserbyId(id))
  }, [id])

  return (
    <nav className={style['nav-full']}>
      <ul className={style['menu-full']}>
        <li className={style['menu-item-full']}>
          <NavLink to='/business' className={style['link-full']}>
            Services
          </NavLink>
        </li>
        <li className={style['menu-item-full']}>
          <NavLink to={role !== null && role === 'seller' ? '/businessRegister' : '/businessLogin'} className={style['link-full']}>
            {role !== null && role === 'seller' ? 'Register your business' : 'For Business'}
          </NavLink>
        </li>
        {isAuth === null ? (
          <li className={style['menu-item-full']}>
            <NavLink to='/login' className={style['link-full']}>
              Login
            </NavLink>
          </li>
        ) : (
          <>
            <li className={`${style['menu-item-full']} ${style.link} ${style.logout}`} onClick={handleLogout}>
              <NavLink to='/' className={style['link-full']}>
                Logout
              </NavLink>
            </li>
            <li className={style['menu-item-full']}>
              <NavLink to={role !== null && role === 'seller' ? '/admin' : `/userdetail/${id}`}>
                <img className={style['userimg-full']} src={userdetail.image ?? imgprofile} />
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default NavFull
