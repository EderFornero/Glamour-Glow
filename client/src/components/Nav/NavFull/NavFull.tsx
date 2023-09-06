import style from './NavFull.module.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import imgprofile from '../../../assets/profile-circle.svg'

const NavFull = ({isAuth}): JSX.Element => {
    const [token, setToken] = useState<{ userId: number, role: string } | null>(null)
    const login = (): void => {
        setToken({ userId: 1, role: 'customer' })
    }

    // Simulate logout by removing the token
    const logout = (): void => {
        setToken(null)
    }

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
                        <li className={`${style['menu-item-full']} ${style.link} ${style.logout}`} onClick={logout}>
                            Logout
                        </li>
                        <li className={style['menu-item-full']}>
                            <NavLink to='/userdetail'>
                                <img className={style['userimg-full']} src={imgprofile} />
                            </NavLink>
                        </li>
                    </>)}

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
            </ul>
        </nav>
  )
}

export default NavFull
