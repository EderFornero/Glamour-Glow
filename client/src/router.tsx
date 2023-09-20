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
import BusinessForms from './pages/BusinessForms/BusinessForms.tsx'
import BusinessDetail from './pages/BusinessDetail/BusinessDetail.tsx'
import BusinessCardsView from './pages/BusinessCardsView/BusinessCardsView.tsx'
import UserDetail from './pages/UserDetail/UserDetail.tsx'
import PasswordRecovery from './pages/PasswordRecovery/PasswordRecovery.tsx'
import SellerRecovery from './pages/SellerRecovery/SellerRecovery.tsx'
import BookAService from './pages/BookAService/BookAService.tsx'
import ResetPassword from './pages/ResetPassword/ResetPassword.tsx'
import ResetPasswordSeller from './pages/ResetPasswordSeller.tsx/ResetPasswordSeller.tsx'
// components
import FormBusiness from './components/FormCreateBusiness/FormCreateBusiness.tsx'
import GlamourAdmin from './pages/GlamourAdmin/GlamourAdmin.tsx'

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
        path: '/admin/glamour',
        children: [
          {
            index: true,
            element: <GlamourAdmin />
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
        path: '/businessLogin',
        children: [
          {
            index: true,
            element: <BusinessForms />
          },
          {
            path: '/businessLogin/passwordRecovery',
            children: [
              {
                index: true,
                element: <SellerRecovery />
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
            element: <FormBusiness onToggle={function (): void {
              throw new Error('Function not implemented.')
            } } />
          }
        ]
      },
      {
        path: '/know/us',
        children: [
          {
            index: true,
            element: <AboutUs />
          }
        ]
      },
      {
        path: '/admin/seller/:id',
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
      },
      {
        path: '/resetPasswordSeller',
        children: [
          {
            index: true,
            element: <ResetPasswordSeller />
          }
        ]
      }
    ]
  }
])

export default router
