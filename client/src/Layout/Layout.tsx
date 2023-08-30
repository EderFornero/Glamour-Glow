import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav/Nav'

const Layout: React.FC = () => {
  return (
    <>
      <Nav />
      <main style={{ marginTop: '90px' }}>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
