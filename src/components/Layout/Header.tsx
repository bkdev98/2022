import React from 'react'

import Link from 'next/link'
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
  padding: 1rem 0 0.75rem;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  ::after {
    content: '';
    height: 1px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: currentColor;
    transition: transform 0.3s;
    transform-origin: 0 0;
    transform: scaleX(1);
  }
`

const Navigation = styled.div`
  text-transform: lowercase;
  font-size: 0.85rem;
`

const NavLinkWrapper = styled.div`
  overflow: hidden;
  display: inline-block;
`

const NavLink = styled.a`
  position: relative;
  ::after {
    content: '';
    position: absolute;
    top: 55%;
    width: 100%;
    background-color: currentColor;
    height: 2px;
    left: 0;
    transform: translate(-101%, -50%);
    transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  :hover {
    ::after {
      transform: translate(0%, -50%);
      transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
  }
`

const HomeLink = styled.a`
  font-family: Migra, seref;
`

const Header = () => (
  <Wrapper>
    <Link href="/" passHref>
      <HomeLink>Quoc Khanh</HomeLink>
    </Link>
    <Navigation>
      <NavLinkWrapper>
        <Link href="/" passHref>
          <NavLink>Work</NavLink>
        </Link>
      </NavLinkWrapper>
      {', '}
      <NavLinkWrapper>
        <Link href="/" passHref>
          <NavLink>My Stuff</NavLink>
        </Link>
      </NavLinkWrapper>
    </Navigation>
  </Wrapper>
)

export default Header
