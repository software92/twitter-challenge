import { createBrowserRouter } from 'react-router-dom'

// components
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './components/NotFound'
import Join from './pages/Join'
import Layout from './components/Layout'
import RequiredLogin from './components/RequiredLogin'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequiredLogin>
        <Layout />
      </RequiredLogin>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/join',
    element: <Join />,
  },
])

export default router
