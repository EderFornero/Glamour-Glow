import style from './NavFull.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import imgprofile from '../../../assets/profile-circle.svg'
import { useSelector, useDispatch } from 'react-redux'
import { setAuth } from '../../../redux/actions'

<<<<<<< HEAD
const NavFull = ({isAuth}): JSX.Element => {
    const [token, setToken] = useState<{ userId: number, role: string } | null>(null)
    const login = (): void => {
        setToken({ userId: 1, role: 'customer' })
    }
=======
const NavFull = (): JSX.Element => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userId = useSelector(state => state.userId)
  const isAuth = useSelector(state=> state.isAuth)
>>>>>>> 099e852aa3bcdbe60cd5173811f671b3505a7e10

  const [token, setToken] = useState<{ userId: number, role: string } | null>(null)
  const login = (): void => {
    setToken({ userId: 1, role: 'customer' })
  }

<<<<<<< HEAD
=======
  const handleLogout = () => {
    dispatch(setAuth(false))
    localStorage.removeItem('isAuth')
    navigate('/')
  }

>>>>>>> 099e852aa3bcdbe60cd5173811f671b3505a7e10
  return (
        <nav className={style['nav-full']}>
            <ul className={style['menu-full']}>
                <li className={style['menu-item-full']}>
                    <NavLink to='/business' className={style['link-full']}>
                        Services
                    </NavLink>
                </li>
                <li className={style['menu-item-full']}>
                    <NavLink to='/admin' className={style['link-full']}>
                        For business
                    </NavLink>
                </li>
                {!isAuth
                  ? (<li className={style['menu-item-full']} onClick={login}>
                        <NavLink to='/login' className={style['link-full']}>
                            Login
                        </NavLink>
                    </li>)
                  : (<>
<<<<<<< HEAD
                        <li className={`${style['menu-item-full']} ${style.link} ${style.logout}`} onClick={logout}>
=======
                        <li className={`${style['menu-item-full']} ${style.link} ${style.logout}`}
                         onClick={handleLogout}>
>>>>>>> 099e852aa3bcdbe60cd5173811f671b3505a7e10
                            Logout
                        </li>
                        <li className={style['menu-item-full']}>
                            <NavLink to={`/userdetail/${userId}`} >
                                <img className={style['userimg-full']} src={imgprofile} />
                            </NavLink>
                        </li>
                    </>)}
<<<<<<< HEAD

                {/* {token !== null
                  ? (<>
                        <li className={`${style['menu-item-full']} ${style.link} ${style.logout}`} onClick={logout}>
                            Logout
                        </li>
                        <li className={style['menu-item-full']}>
                            <NavLink to='/userdetail'>
                                <img className={style['userimg-full']} src={imgprofile} />
                            </NavLink>
                        </li>
                    </>)
                  : (
                    <li className={style['menu-item-full']} onClick={login}>
                        <NavLink to='/login' className={style['link-full']}>
                            Login
                        </NavLink>
                    </li>
                    )} */}
=======
>>>>>>> 099e852aa3bcdbe60cd5173811f671b3505a7e10
            </ul>
        </nav>
  )
}

export default NavFull
