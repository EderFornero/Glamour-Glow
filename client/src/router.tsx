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
import FormBusiness from './components/FormCreateBusiness/FormCreateBusiness.tsx'
import BusinessCardsView from './pages/BusinessCardsView/BusinessCardsView.tsx'
import UserDetail from './pages/UserDetail/UserDetail.tsx'
import NodemailerTest from './components/NodemailerTest/NodemailerTest.tsx'
import BookAService from './pages/BookAService/BookAService.tsx'

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
        path: '/bookaservice/:name/:price',
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
        path: '/nodemailer',
        children: [
          {
            index: true,
            element: <NodemailerTest />
          }
        ]
      }
    ]
  }
])

export default router
