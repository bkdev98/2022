import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import BackButton from '@components/BackButton'
import Layout from '@components/Layout'
import Footer from '@components/Layout/Footer'
import { dummyData } from '@components/SelectedWorks/SelectedWorks'

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.sizes.container}px;
  margin: 0px auto;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`

const ImageWrapper = styled(motion.a)`
  display: flex;
  flex: 2;
  max-width: 50%;
`

const WorkTitle = styled.h2`
  font-family: 'Tusker Grotesk', sans-serif;
  font-weight: 500;
  font-size: 6.5vw;
  line-height: 1.1;
  margin-top: ${({ theme }) => theme.sizes.spacing}px;
`

const WorkDescription = styled.div`
  text-transform: uppercase;
  white-space: break-spaces;
  max-width: 80%;
`

const ExternalLink = styled.a``

export default function WorkDetail() {
  const router = useRouter()
  const { id } = router.query

  const data = dummyData.find((item) => item.id === id)

  if (!data) return <h1>Not found!</h1>

  return (
    <Layout>
      <Wrapper>
        <Content>
          <BackButton />
          <WorkTitle>{data.title}</WorkTitle>
          <WorkDescription>{data.description}</WorkDescription>
        </Content>
        <ImageWrapper layoutId={`img-${data.id}`}>
          <Image src={data.thumbnail} layout="intrinsic" objectFit="cover" />
        </ImageWrapper>
      </Wrapper>
      <Footer
        leftContent={data.tags.join(', ').toUpperCase()}
        rightContent={
          <ExternalLink href={data.url} target="_blank">
            {data.url}
          </ExternalLink>
        }
      />
    </Layout>
  )
}
