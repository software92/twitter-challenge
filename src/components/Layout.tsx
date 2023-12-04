import { Outlet, useNavigate } from 'react-router-dom'

import { auth } from '../firebase'
import { FirebaseError } from 'firebase/app'

import styles from './Layout.module.css'

const Header = () => {
  const navigate = useNavigate()
  const user = auth.currentUser
  const onLogout = async (): Promise<JSX.Element | void> => {
    try {
      await auth.signOut()

      navigate('/login')
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e.message)
      }
    }
  }

  return (
    <header>
      <ul className={styles.nav}>
        {user !== null && (
          <li>
            {/* 프로필 페이지 연결 */}
            <button>{user.email}</button>
          </li>
        )}
        <li>
          <button onClick={onLogout}>Logout</button>
        </li>
      </ul>
    </header>
  )
}
const Footer = () => {
  return <></>
}

const Layout = () => {
  return (
    <>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  )
}

export default Layout
