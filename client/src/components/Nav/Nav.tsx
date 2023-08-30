import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import './Nav.css'

const Nav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header>
      <nav>
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
              <NavLink to='/' className='link'>
                For business
              </NavLink>
            </li>
            <li className='menu-item link'>Logout</li>
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Nav
