import { Link } from 'react-router-dom'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <h3>Header</h3>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/join'>Join</Link>
          </li>
        </ul>
      </header>
      <section>{children}</section>
      {/* <footer>
        <h3>footer</h3>
      </footer> */}
    </>
  )
}

export default Layout
