import React, { useMemo } from 'react'

import { useViewportScroll, motion, useTransform } from 'framer-motion'
import Image from 'next/image'
import styled from 'styled-components'

import synecdoche from '@assets/images/synecdoche-1.png'

const Wrapper = styled.div`
  margin-bottom: 6rem;
  position: relative;
  width: 100%;
`

const CoverTitle = styled.div`
  font-size: 10rem;
  margin-top: 14rem;
  margin-bottom: -11rem;
  font-family: 'Silk Serif', seref;
  z-index: -1;
  text-align: center;
  text-transform: uppercase;
`

const CoverTitleBlurred = styled(CoverTitle)`
  position: absolute;
  top: -20rem;
  right: 0;
  left: 0;
  filter: blur(2px);
  z-index: 0;
`

const CoverTitleWord = styled.span``

const CoverTitleChar = styled.span`
  display: inline-block;
  transition: transform 1s ease;
  transform: translateY(0);
  transition-delay: 0.05s;
`

const CoverTitleSubtitle = styled.h1`
  top: 12rem;
  font-size: 1.5rem;
  max-width: 25rem;
  z-index: 1;
  position: absolute;
  right: 0;
  left: 0;
  margin: 0 auto;
  transition: filter 0.5s ease;
  transition-delay: 0.5s;
  text-align: center;
  text-transform: uppercase;
  filter: blur(2px);
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

const CoverDrifter = styled(motion.div)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  width: calc(100% - 3rem);
  height: calc(100% - 3rem);
  z-index: -1;
  overflow: hidden;
`

const ImageWrapper = styled(motion.div)`
  position: relative;
  top: -100px;
`

const CoverImage = styled(Image)`
  object-fit: cover;
  pointer-events: none;
`

function MegazineCover() {
  const { scrollY } = useViewportScroll()
  const y = useTransform(scrollY, [0, 1300], [0, 250])

  const renderChars = useMemo(
    () =>
      'EVERYTHING'.split('').map((char, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <CoverTitleChar key={char + index}>{char}</CoverTitleChar>
      )),
    [],
  )

  return (
    <Wrapper>
      <CoverTitle>
        <CoverTitleWord>{renderChars}</CoverTitleWord>
      </CoverTitle>
      <CoverTitleSubtitle>
        is more complicated than you think
      </CoverTitleSubtitle>
      <CoverImageWrapper>
        <CoverTitleBlurred>
          <CoverTitleWord>{renderChars}</CoverTitleWord>
        </CoverTitleBlurred>
        <CoverDrifter>
          <ImageWrapper
            style={{ y }}
            transition={{ ease: 'easeInOut', duration: 2 }}
          >
            <CoverImage src={synecdoche} placeholder="blur" />
          </ImageWrapper>
        </CoverDrifter>
      </CoverImageWrapper>
    </Wrapper>
  )
}

export default MegazineCover
