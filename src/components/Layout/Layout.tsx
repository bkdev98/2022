import * as React from 'react'

import { motion } from 'framer-motion'
import styled from 'styled-components'

const ShowOnDesktop = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: block;
  }
`

const ShowOnMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: ${({ theme }) => theme.sizes.container}px;
  margin: 0px auto;
  @media (min-width: 1000px) {
    display: none;
  }
  h1 {
    font-family: 'Silk Serif', serif;
    font-weight: 100;
    text-align: center;
    margin: 20px;
  }
`

const Layout: React.FC = ({ children }) => (
  <motion.main
    variants={{
      hidden: { opacity: 0, x: 0, y: 100, transition: { duration: 0.5 } },
      enter: { opacity: 1, x: 0, y: 0, transition: { duration: 1 } },
      exit: { opacity: 0, x: 0, y: 100, transition: { duration: 0.5 } },
    }}
    initial="hidden"
    animate="enter"
    exit="exit"
    transition={{ type: 'linear' }}
  >
    <ShowOnDesktop>{children}</ShowOnDesktop>
    <ShowOnMobile>
      <h1>
        The mobile version is currently in progress, please access this site
        from a desktop.
      </h1>
    </ShowOnMobile>
  </motion.main>
)

export default Layout
