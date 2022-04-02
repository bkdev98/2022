import React from 'react'

import styled from 'styled-components'

interface FooterProps {
  leftContent?: any
  rightContent?: any
}

const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: ${({ theme }) => theme.sizes.container}px;
  margin: 0px auto;
  display: flex;
  padding: 1rem 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  ::after {
    content: '';
    height: 1px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: currentColor;
    transition: transform 0.3s;
    transform-origin: 0 0;
    transform: scaleX(1);
  }
`

const Footer = ({ leftContent, rightContent }: FooterProps) => (
  <Wrapper>
    {leftContent || 'The personal site & portfolio of Quoc Khanh'}
    {rightContent}
  </Wrapper>
)

export default Footer
