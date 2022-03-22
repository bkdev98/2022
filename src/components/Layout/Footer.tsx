import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.container}px;
  margin: 0px auto;
  display: flex;
  padding: ${({ theme }) => theme.sizes.spacing}px 0px;
  border-top: 1px solid ${({ theme }) => theme.palette.contrast};
  z-index: 1;
`

const Footer = () => <Wrapper>The personal site & portfolio</Wrapper>

export default Footer
