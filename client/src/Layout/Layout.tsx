import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
// components
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import style from './Layout.module.css'

const Layout: React.FC = () => {
  const location = useLocation()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const showNavFooter = location.pathname !== '/admin'
  return (
    <>
      {showNavFooter && <Nav />}
      <main className={style.main}>
        <Outlet />
      </main>
      {showNavFooter && <Footer />}
    </>
  )
}

export default Layout
