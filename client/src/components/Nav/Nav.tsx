import { NavLink } from 'react-router-dom'
import style from './Nav.module.css'
import { WhiteLogo } from '../../Images/LogoImages'
import NavMobile from './NavMobile/NavMobile'
import NavFull from './NavFull/NavFull'

const Nav = (): JSX.Element => {
  return (
    <div className={style.test}>
      <header className={style.header}>
        <div className={style['logo-container']}>
          <NavLink to='/' className={style.logo}>
            <img width='140px' height='75px' src={WhiteLogo} alt='logo' />
            <span className={style.title}>Glamour Glow</span>
          </NavLink>
        </div>
        <NavMobile />
        <NavFull />
      </header>
    </div>
  )
}

export default Nav
