// router
import { createBrowserRouter } from 'react-router-dom'
// layout
import Layout from './Layout/Layout.tsx'
// pages
import Home from './pages/Home/Home.tsx'
import AboutUs from './pages/AboutUs/AboutUs.tsx'
// error component
import NotFound from './pages/NotFound/NotFound.tsx'
<<<<<<< HEAD
//component
import FormRegister from './components/FormRegister/FormRegister.tsx'
=======
// component
import FormRegister from './components/FormRegister/FormRegister'
>>>>>>> about-us

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
      },
      {
        path: '/about',
        element: <AboutUs />
      }
    ]
  }
])

export default router
