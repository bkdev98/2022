/* eslint-disable global-require */
import React, { Fragment } from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styled from 'styled-components'

import Link from '@components/Link'

const Wrapper = styled.section`
  position: relative;
  margin-bottom: 6rem;
`

const Heading = styled.h2`
  max-width: ${({ theme }) => theme.sizes.container}px;
  margin: 0px auto;
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 3rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 33.333333%);
  width: 100%;
  grid-auto-rows: 32vmin;
`

const Cell = styled.div<{
  readonly column: number
  readonly row: number
}>`
  display: grid;
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  align-items: center;
  margin: 1vw 0;
  min-height: 258px;
`

const WorkTitle = styled.h2`
  font-family: 'Tusker Grotesk', sans-serif;
  font-weight: 500;
  font-size: 5.5vw;
  line-height: 1.1;
`

const WorkTags = styled.h5`
  text-transform: uppercase;
  font-weight: 400;
`

const ImageWrapper = styled(motion.a)`
  filter: grayscale(1) sepia(1) saturate(0.5) contrast(0.6) brightness(0.8);
  height: 258px;
  transform: scale(1);
  transition-duration: 2s;
  img {
    transition-duration: 2s;
  }
  :hover {
    filter: grayscale(0) sepia(0) saturate(1) contrast(1) brightness(1);
    transform: scale(0.95);
    img {
      transform: scale(1.25);
    }
  }
`

const WorkContent = styled.a<{
  readonly inverted: boolean
}>`
  height: 258px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes.spacing}px;
  align-items: ${({ inverted }) => (inverted ? 'flex-end' : 'flex-start')};
`

export const dummyData = [
  {
    id: 'u-connect',
    title: 'U-Connect',
    tags: ['typescript', 'urql', 'codegen'],
    thumbnail: require('@assets/images/portfolio/u-connect.png'),
    position: [1, 2],
    description: `- Exploring nearby businesses, services & products.
- Connect and hang out with community events.
- Sending messages with businesses.
    `,
    url: 'https://testflight.apple.com/join/xwT5U9By',
  },
  {
    id: 'kizuner',
    title: 'Kizuner',
    tags: ['stripe', 'laravel-echo'],
    thumbnail: require('@assets/images/portfolio/kizuner.png'),
    position: [2, 1],
    description: `Do what you like, where you want, with the people you like. There are many people around the world waiting for you and you'll find the people you need.`,
    url: 'https://kizuner.com',
  },
  {
    id: 'bidbid',
    title: 'BidBid',
    tags: ['typescript', 'redux saga', 'socketio'],
    thumbnail: require('@assets/images/portfolio/bidbid.png'),
    position: [2, 3],
    description: `Bid • Plan • Meet`,
    url: 'https://bidbid.app',
  },
  {
    id: 'holo-speak',
    title: 'Holo Speak',
    tags: ['zoomus', 'callkit'],
    thumbnail: require('@assets/images/portfolio/holo-speak.png'),
    position: [3, 2],
    description: `Teach and learn English online`,
    url: 'https://holospeak.vn',
  },
  {
    id: 'innoteq-pos',
    title: 'Innoteq POS',
    tags: ['electronjs', 'expo', 'socketio'],
    thumbnail: require('@assets/images/portfolio/innoteq-pos.png'),
    position: [1, 2],
    description: `Easy solution for managing restaurant and coffee shops`,
    url: 'https://innoteq-pos.netlify.app',
  },
]

export default function SelectedWorks() {
  return (
    <Wrapper>
      <Heading>Selected Works</Heading>
      <Grid>
        {dummyData.map((item, index) => {
          const inverted = item.position[0] < item.position[1]
          return (
            <Fragment key={item.id}>
              <Cell row={index + 1} column={item.position[0]}>
                <Link href={`/works/${item.id}`}>
                  <WorkContent inverted={inverted}>
                    <WorkTitle>{item.title}</WorkTitle>
                    <WorkTags>{item.tags.join(', ')}</WorkTags>
                  </WorkContent>
                </Link>
              </Cell>
              <Cell row={index + 1} column={item.position[1]}>
                <Link href={`/works/${item.id}`}>
                  <ImageWrapper layoutId={`img-${item.id}`}>
                    <Image
                      src={item.thumbnail}
                      layout="fill"
                      objectFit="cover"
                    />
                  </ImageWrapper>
                </Link>
              </Cell>
            </Fragment>
          )
        })}
      </Grid>
    </Wrapper>
  )
}
