import style from './NavFull.module.css'
import { NavLink } from 'react-router-dom'
import imgprofile from '../../../assets/profile-circle.svg'
import { useSelector, useDispatch } from 'react-redux'
import { setAuth } from '../../../redux/actions'
import type { RootState } from '../../../redux/types'

const NavFull = (): JSX.Element => {
  const dispatch = useDispatch()
  const userId = useSelector((state: RootState) => state.userId)
  // const isAuth = useSelector((state: RootState) => state.isAuth)
  const isAuth = localStorage.getItem('isAuth')

  const handleLogout = (): void => {
    dispatch(setAuth(false))
    localStorage.removeItem('token')
    localStorage.removeItem('isAuth')
    localStorage.removeItem('id')
  }

  return (
    <nav className={style['nav-full']}>
      <ul className={style['menu-full']}>
        <li className={style['menu-item-full']}>
          <NavLink to='/business' className={style['link-full']}>
            Services
          </NavLink>
        </li>
        {!isAuth
          ? (<li className={style['menu-item-full']}>
            <NavLink to='/login' className={style['link-full']}>
              Login
            </NavLink>
          </li>)
          : (<>
            <li className={style['menu-item-full']}>
              <NavLink to='/admin' className={style['link-full']}>
                For business
              </NavLink>
            </li>
            <li className={`${style['menu-item-full']} ${style.link} ${style.logout}`} onClick={handleLogout}>
            <NavLink to='/' className={style['link-full']}>
              Logout
            </NavLink>
            </li>
            <li className={style['menu-item-full']}>
              <NavLink to={`/userdetail/${userId}`}>
                <img className={style['userimg-full']} src={imgprofile} />
              </NavLink>
            </li>
          </>
            )}
      </ul>
    </nav>
  )
}

export default NavFull
