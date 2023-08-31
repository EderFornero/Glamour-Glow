import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import style from './Nav.module.css'
const Nav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header>
      <nav className={style['nav-mobile']}>
        <div className={style.div}>
          <Hamburger toggled={isOpen} toggle={setIsOpen} rounded />
        </div>
        {isOpen && (
          <ul className={style.menu}>
            <li className={style['menu-item']}>
              <NavLink to='/' className='link'>
                Login
              </NavLink>
            </li>
            <li className={style['menu-item']}>
              <NavLink to='/' className='link'>
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
          <li className='menu-item-full'>
            <NavLink to='/' className={style['link-full']}>
              For business
            </NavLink>
          </li>
          <li className={`${style['menu-item-full']} ${style['link-full']} logout`}>Logout</li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
