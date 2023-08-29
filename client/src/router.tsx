// router
import { createBrowserRouter } from 'react-router-dom'
// layout
import Layout from './Layout/Layout.tsx'
// pages
import Home from './pages/Home/Home.tsx'
// error component

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // home
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

export default router
