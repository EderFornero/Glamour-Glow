import { Outlet, useLocation } from 'react-router-dom'
// components
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import style from './Layout.module.css'
import { useState } from 'react'

const Layout: React.FC = () => {
  const location = useLocation()
  const [isAuth, setIsAuth] = useState(false)

  const showNavFooter = location.pathname !== '/admin'
  return (
    <>
      {showNavFooter && <Nav isAuth={isAuth}/>}
      <main className={style.main}>
        <Outlet />
      </main>
      {showNavFooter && <Footer />}
    </>
  )
}

export default Layout
