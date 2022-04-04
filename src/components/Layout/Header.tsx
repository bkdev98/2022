import React from 'react'

import styled from 'styled-components'

import Link from '@components/Link'

const Wrapper = styled.div`
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 4;
`

const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.container}px;
  margin: 0px auto;
  display: flex;
  padding: 1rem 0 0.75rem;
  display: flex;
  justify-content: space-between;
  position: relative;
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
  text-transform: uppercase;
  font-size: 0.85rem;
`

const NavLinkWrapper = styled.div`
  overflow: hidden;
  display: inline-block;
  margin-left: 10px;
`

const NavLink = styled.a`
  position: relative;
  top: 2px;
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
  font-family: 'Silk Serif', seref;
`

const Header = () => (
  <Wrapper>
    <Container>
      <Link href="/">
        <HomeLink>Quoc Khanh</HomeLink>
      </Link>
      <Navigation>
        <NavLinkWrapper>
          <Link href="#work">
            <NavLink>Work</NavLink>
          </Link>
        </NavLinkWrapper>
        <NavLinkWrapper>
          <Link href="#contact">
            <NavLink>Contact</NavLink>
          </Link>
        </NavLinkWrapper>
      </Navigation>
    </Container>
  </Wrapper>
)

export default Header
