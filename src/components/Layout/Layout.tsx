import * as React from 'react'

import Footer from './Footer'
import Header from './Header'

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Footer />
    {children}
  </>
)

export default Layout
