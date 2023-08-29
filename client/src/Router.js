// layout
import Layout from './Layout/Layout.tsx'
// pages
import Home from './pages/Home/Home.tsx'
// error component

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
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
