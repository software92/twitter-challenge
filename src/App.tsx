import { Outlet } from 'react-router-dom'

// components
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <section>
        <Outlet />
      </section>
    </Layout>
  )
}

export default App
