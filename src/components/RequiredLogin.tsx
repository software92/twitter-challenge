import { Navigate } from 'react-router-dom'
import { auth } from '../firebase'

const RequiredLogin = ({ children }: { children: React.ReactNode }) => {
  const user = auth.currentUser

  return user !== null ? children : <Navigate to='/login' />
}

export default RequiredLogin
