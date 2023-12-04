import { createBrowserRouter } from 'react-router-dom'

// components
import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './components/NotFound'
import Join from './pages/Join'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'join',
        element: <Join />,
      },
    ],
  },
])

export default router
