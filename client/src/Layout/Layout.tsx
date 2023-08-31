import { Outlet } from 'react-router-dom'
// components
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

const Layout: React.FC = () => {
  return (
    <>
      <Nav />
      <main style={{ marginTop: '90px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
