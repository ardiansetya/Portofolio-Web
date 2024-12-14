import React  from 'react'
import Navbar from '../components/Navbar'

const Layout = ({children}) => {
  return (
    <div className="bg-gray-900 scroll-smooth">
      <Navbar />
      <div className="container">{children}</div>
    </div>
  );
}

export default Layout