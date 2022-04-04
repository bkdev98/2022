import React from 'react'

import NextLink from 'next/link'

interface LinkProps {
  href?: string
  children?: JSX.Element
  scroll?: boolean
}

const Link: React.FC<LinkProps> = ({
  href = '/',
  children,
  scroll = false,
}) => (
  <NextLink href={href} passHref scroll={scroll}>
    {children}
  </NextLink>
)

export default Link
