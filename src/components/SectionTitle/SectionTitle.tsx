import React from 'react'

import styled from 'styled-components'

interface SectionTitleProps {
  index: string
  title: string
}

const Index = styled.h2<{ indent?: boolean }>`
  font-family: 'Silk Serif', serif;
  font-size: 18rem;
  text-align: center;
  line-height: 0.9;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: ${({ indent }) => (indent ? '-2rem' : 0)};
  text-indent: ${({ indent }) => (indent ? '-2rem' : 0)};
`

const Title = styled.h2`
  max-width: 28rem;
  line-height: 0.9;
  margin: 0px auto;
  text-transform: uppercase;
  font-weight: 100;
  margin-bottom: 3rem;
  text-align: center;
  font-size: 6rem;
  font-family: 'Silk Serif', serif;
`

const SectionTitle: React.FC<SectionTitleProps> = ({ index, title }) => (
  <>
    <Index indent={index.length > 1}>{index}</Index>
    <Title>{title}</Title>
  </>
)

export default SectionTitle
