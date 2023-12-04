import { useEffect, useState } from 'react'
import router from './router'
import { RouterProvider } from 'react-router-dom'

import { auth } from './firebase'

// components
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)
  const init = async () => {
    const result = await auth.authStateReady()
    console.log('aaa', result, auth.currentUser)
    setLoading(false)
  }

  useEffect(() => {
    init()
  }, [])

  return loading ? <Loader /> : <RouterProvider router={router} />
}

export default App
