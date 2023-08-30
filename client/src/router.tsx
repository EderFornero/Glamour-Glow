// router
import { createBrowserRouter } from 'react-router-dom'
// layout
import Layout from './Layout/Layout.tsx'
// pages
import Home from './pages/Home/Home.tsx'
// error component
import NotFound from './pages/NotFound/NotFound.tsx'
//component
import FormRegister from './components/FormRegister/FormRegister'

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
      },
      {
        path: '/register',
        children: [
          {
            index: true,
            element: <FormRegister />
          }
        ]
      }
    ]
  }
])

export default router
