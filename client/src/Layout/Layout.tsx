import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
// redux
import { useDispatch } from 'react-redux'
import { getAllBusiness, getCategories } from '../redux/actions.ts'
// components
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import style from './Layout.module.css'

const Layout: React.FC = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getCategories())
    dispatch(getAllBusiness())
  }, [pathname])

  const showNavFooter = location.pathname !== '/admin/:id'
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
