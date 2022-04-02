import * as React from 'react'

import { motion } from 'framer-motion'

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
    {children}
  </motion.main>
)

export default Layout
