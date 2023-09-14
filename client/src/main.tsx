import ReactDOM from 'react-dom/client'
import router from './router.tsx'
import store from './redux/Store.ts'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
