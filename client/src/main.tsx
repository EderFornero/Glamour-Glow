import ReactDOM from 'react-dom/client'
import router from './router.tsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
