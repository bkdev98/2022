import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.container}px;
  margin: 0px auto;
  display: flex;
  padding: ${({ theme }) => theme.sizes.spacing}px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.contrast};
  z-index: 1;
`

const Header = () => <Wrapper>Quoc Khanh</Wrapper>

export default Header
