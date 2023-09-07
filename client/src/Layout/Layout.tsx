import { Outlet, useLocation } from 'react-router-dom'
// components
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import style from './Layout.module.css'
import { useState } from 'react'

const Layout: React.FC = () => {
  const location = useLocation()
<<<<<<< HEAD
  const [isAuth, setIsAuth] = useState(false)

  const showNavFooter = location.pathname !== '/admin'
  return (
    <>
      {showNavFooter && <Nav isAuth={isAuth}/>}
=======

  const showNavFooter = location.pathname !== '/admin'

  return (
    <>
      {showNavFooter && <Nav/>}
>>>>>>> 099e852aa3bcdbe60cd5173811f671b3505a7e10
      <main className={style.main}>
        <Outlet />
      </main>
      {showNavFooter && <Footer />}
    </>
  )
}

export default Layout
