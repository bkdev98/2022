import React from 'react'

import Image from 'next/image'
import styled from 'styled-components'

import Layout from '@components/Layout'

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.sizes.container}px;
  margin: 10rem auto;
  position: relative;
`

const CoverImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.magBackground};
  max-width: 75rem;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
  padding-top: min(15 / 12 * 100%, 87.5rem);
  position: relative;
  z-index: 0;
  top: 2rem;
`

const CoverDrifter = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  width: calc(100% - 3rem);
  height: calc(100% - 3rem);
  z-index: -1;
  overflow: hidden;
  background-color: #eeeff1;
`

export default function Resume() {
  return (
    <Layout>
      <Wrapper>
        <CoverImageWrapper>
          <CoverDrifter>
            <Image src="/resume.svg" layout="fill" />
          </CoverDrifter>
        </CoverImageWrapper>
      </Wrapper>
    </Layout>
  )
}
