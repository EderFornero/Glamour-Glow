import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
import style from './Layout.module.css'

const Layout: React.FC = () => {
  return (
    <>
      <Nav />
      <main className={style.main}>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
