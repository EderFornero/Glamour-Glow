// router
import { createBrowserRouter } from 'react-router-dom'
// layout
import Layout from './Layout/Layout.tsx'
// pages
import Home from './pages/Home/Home.tsx'
import AboutUs from './pages/AboutUs/AboutUs.tsx'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard.tsx'
// error component
import NotFound from './pages/NotFound/NotFound.tsx'
// pages
import Forms from './pages/Forms/Forms.tsx'
import BusinessDetail from './pages/BusinessDetail/BusinessDetail.tsx'
import BusinessCardsView from './pages/BusinessCardsView/BusinessCardsView.tsx'
import UserDetail from './pages/UserDetail/UserDetail.tsx'
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery.tsx'
import BookAService from './pages/BookAService/BookAService.tsx'
import ResetPassword from './pages/ResetPassword/ResetPassword.tsx'
// components
import FormBusiness from './components/FormCreateBusiness/FormCreateBusiness.tsx'

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
        path: '/sellerdetail/:id',
        children: [
          {
            index: true,
            element: <BusinessDetail />
          }
        ]
      },
      {
        path: '/bookaservice/:name/:price/:sellerId',
        children: [
          {
            index: true,
            element: <BookAService />
          }
        ]
      },
      {
        path: '/userdetail/:id',
        children: [
          {
            index: true,
            element: <UserDetail />
          }
        ]
      },
      {
        path: '/business',
        children: [
          {
            index: true,
            element: <BusinessCardsView />
          }
        ]
      },
      {
        path: '/login',
        children: [
          {
            index: true,
            element: <Forms />
          },
          {
            path: '/login/passwordRecovery',
            children: [
              {
                index: true,
                element: <PasswordRecovery />
              }
            ]
          }
        ]
      },
      {
        path: '/businessRegister',
        children: [
          {
            index: true,
            element: <FormBusiness />
          }
        ]
      },
      {
        path: '/about',
        element: <AboutUs />
      },
      {
        path: '/admin',
        children: [
          {
            index: true,
            element: <AdminDashboard />
          }
        ]
      },
      {
        path: '/resetPassword',
        children: [
          {
            index: true,
            element: <ResetPassword />
          }
        ]
      }
    ]
  }
])

export default router
