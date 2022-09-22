import { Outlet } from 'react-router-dom'

// import Footer from '../Footer'
import Navbar from '../Navbar'

import "./SharedLayout.css"

const SharedLayout = () => {
  return (
    <section className='layout'>
        <div className='outline'>
          <Navbar />
          <Outlet />
          {/* <Footer /> */}
        </div>
    </section>
  )
}

export default SharedLayout