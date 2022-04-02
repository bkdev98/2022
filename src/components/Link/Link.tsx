import React from 'react'

import NextLink from 'next/link'

interface LinkProps {
  href?: string
  children?: JSX.Element
}

const Link: React.FC<LinkProps> = ({ href = '/', children }) => (
  <NextLink href={href} passHref scroll={false}>
    {children}
  </NextLink>
)

export default Link
