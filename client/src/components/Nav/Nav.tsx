import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import './Nav.css'

const Nav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header>
      <nav className='nav-mobile'>
        <div className='div'>
          <Hamburger toggled={isOpen} toggle={setIsOpen} rounded />
        </div>
        {isOpen && (
          <ul className='menu'>
            <li className='menu-item'>
              <NavLink to='/' className='link'>
                Login
              </NavLink>
            </li>
            <li className='menu-item'>
              <NavLink to='/admin' className='link'>
                For business
              </NavLink>
            </li>
            <li className='menu-item link logout'>Logout</li>
          </ul>
        )}
      </nav>
      <nav className='nav-full'>
        <ul className='menu-full'>
          <li className='menu-item-full'>
            <NavLink to='/' className='link-full'>
              Login
            </NavLink>
          </li>
          <li className='menu-item-full'>
            <NavLink to='/admin' className='link-full'>
              For business
            </NavLink>
          </li>
          <li className='menu-item-full link-full logout'>Logout</li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
