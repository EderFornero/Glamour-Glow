import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import style from './Nav.module.css'
import logoBGLess from '../../assets/logoBGless.png'

const Nav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={style.test}>
      <header>
        <div className={style['logo-container']}>
          <NavLink to='/' className={style.logo}>
            <img width='100px' height='50px' src={logoBGLess} alt='logo' />
          </NavLink>
          <div>
            <span>Glamour Glow</span>
          </div>
        </div>
        <nav className={style['nav-mobile']}>
          <div className={style.div}>
            <Hamburger toggled={isOpen} toggle={setIsOpen} rounded />
          </div>
          {isOpen && (
            <ul className={style.menu}>
              <li className={style['menu-item']}>
                <NavLink to='/' className={style.link}>
                  Login
                </NavLink>
              </li>
              <li className={style['menu-item']}>
                <NavLink to='/' className={style.link}>
                  For business
                </NavLink>
              </li>
              <li className={`${style['menu-item']} ${style.link} logout`}>Logout</li>
            </ul>
          )}
        </nav>
        <nav className={style['nav-full']}>
          <ul className={style['menu-full']}>
            <li className={style['menu-item-full']}>
              <NavLink to='/' className={style['link-full']}>
                Login
              </NavLink>
            </li>
            <li className={style['menu-item-full']}>
              <NavLink to='/admin' className={style['link-full']}>
                For business
              </NavLink>
            </li>
            <li className='menu-item link logout'>Logout</li>
          </ul>
      </nav>
    </header>
    </div>
  )
}

export default Nav
