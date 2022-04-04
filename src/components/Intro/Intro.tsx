import React from 'react'

import styled from 'styled-components'

import Availability from './Availability'

const Wrapper = styled.section`
  max-width: ${({ theme }) => theme.sizes.container}px;
  margin: 0px auto;
  position: relative;
  height: 100vh;
  margin-bottom: 6rem;
`

const Content = styled.div`
  display: flex;
  position: absolute;
  bottom: 10vh;
  left: 0;
  right: 0;
  align-items: flex-end;
  justify-content: space-between;
`

const HeadingWrapper = styled.div``

const Heading = styled.h1`
  font-size: 24vw;
  font-family: 'Tusker Grotesk', sans-serif;
  line-height: 1.1;
`

const SubHeading = styled.h3`
  font-size: 2.1vw;
  font-family: 'Migra', sans-serif;
  margin-left: 4px;
`

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 5.5vh;
`

const Description = styled.h2`
  width: 40vw;
  text-transform: uppercase;
  font-weight: 400;
`

export default function Intro() {
  return (
    <Wrapper>
      <Availability />
      <Content>
        <HeadingWrapper>
          <SubHeading>Frontend</SubHeading>
          <Heading>Developer</Heading>
        </HeadingWrapper>
        <DescriptionWrapper>
          <Description>
            {`I'm a developer based in Vietnam. I have 4+ years experience of
            developing modern mobile and web apps.\nI love plants, books and
            movies.`}
          </Description>
        </DescriptionWrapper>
      </Content>
    </Wrapper>
  )
}
