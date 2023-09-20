import { useState, useEffect, useRef } from 'react'
import imgprofile from '../../../assets/profile-circle.svg'
import style from './NavMobile.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth, getUserbyId } from '../../../redux/actions'
import type { RootState } from '../../../redux/types'

const NavMobile = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const navMobileRef = useRef<HTMLDivElement | null>(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuth = localStorage.getItem('isAuth')
  const role = localStorage.getItem('role')
  const id = localStorage.getItem('id')
  const { userdetail } = useSelector((state: RootState) => state)
  const handleOutsideClick = (event: MouseEvent): void => {
    if (navMobileRef.current !== null && !navMobileRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  const handleLogout = (): void => {
    dispatch(setAuth(false))
    localStorage.removeItem('token')
    localStorage.removeItem('isAuth')
    localStorage.removeItem('id')
    localStorage.removeItem('role')
    navigate('/')
    setIsOpen(false)
  }

  useEffect(() => {
    dispatch(getUserbyId(id))
  }, [id])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick)
    } else {
      document.removeEventListener('click', handleOutsideClick)
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [isOpen])
  return (
    <nav className={style['nav-mobile']} ref={navMobileRef}>
      <div className={style.div}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} rounded />
      </div>
      {isOpen && (
        <ul className={style.menu}>
          {isAuth === null
            ? (<>
              <li
                className={style['menu-item']}
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                <NavLink to='/login' className={style.link}>
                  Login
                </NavLink>
              </li>
              <li
                className={style['menu-item']}
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                <NavLink to='/businessLogin' className={style.link}>
                  For Business
                </NavLink>
              </li>
            </>)
            : (
            <>
              {role === 'seller'
                ? (<>
                  <li
                    className={style['menu-item']}
                    onClick={() => {
                      setIsOpen(false)
                    }}
                  >
                    <NavLink to={`/admin/seller/${id}`} className={style.link}>
                      MyBusiness
                    </NavLink>
                  </li>
                </>)
                : (<>
                    {role === 'admin'
                      ? <li
                        className={style['menu-item']}
                        onClick={() => {
                          setIsOpen(false)
                        }}
                      >
                        <NavLink to='/admin/glamour' className={style.link}>
                          Admin
                        </NavLink>
                      </li>
                      : <>
                        <li
                          className={style['menu-item']}
                          onClick={() => {
                            setIsOpen(false)
                          }}
                        >
                          <NavLink to={`/userdetail/${id}`}>
                            <img className={style.userimg} src={userdetail.image ?? imgprofile} />
                          </NavLink>
                        </li>
                        <li
                          className={style['menu-item']}
                          onClick={() => {
                            setIsOpen(false)
                          }}
                        >
                          <NavLink to='/businessLogin' className={style.link}>
                            For Business
                          </NavLink>
                        </li>
                  </>
                    }
                </>
                  )}
              <li className={`${style['menu-item']} ${style.link} ${style.logout}`} onClick={handleLogout}>
                <NavLink to='/' className={style.link}>
                  Logout
                </NavLink>
              </li>
            </>
              )}

          <li
            className={style['menu-item']}
            onClick={() => {
              setIsOpen(false)
            }}
          >
            <NavLink to='/business' className={style.link}>
              Services
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default NavMobile
