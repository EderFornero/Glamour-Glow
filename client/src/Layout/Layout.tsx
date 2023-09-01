import { Outlet, useLocation } from 'react-router-dom'
// components
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

const Layout: React.FC = () => {
  const location = useLocation()

  const showNavFooter = location.pathname !== '/admin'
  return (
    <>
      {
        showNavFooter && <Nav />
      }
      <main style={{ marginTop: '90px' }}>
        <Outlet />
      </main>
      {
        showNavFooter && <Footer />
      }
    </>
  )
}

export default Layout
