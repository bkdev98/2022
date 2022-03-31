/* eslint-disable global-require */
import React, { Fragment } from 'react'

import Image from 'next/image'
import styled from 'styled-components'

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

const ImageWrapper = styled.div`
  filter: grayscale(1) sepia(1) saturate(0.5) contrast(0.6) brightness(0.8);
  height: 258px;
  transform: scale(1);
  transition-duration: 2s;
  img {
    transition-duration: 2s;
  }
  :hover {
    filter: none;
    transform: scale(0.95);
    img {
      transform: scale(1.25);
    }
  }
`

const WorkContent = styled.div<{
  readonly inverted: boolean
}>`
  height: 258px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes.spacing}px;
  align-items: ${({ inverted }) => (inverted ? 'flex-end' : 'flex-start')};
`

const dummyData = [
  {
    id: 1,
    title: 'U-Connect',
    tags: ['typescript', 'urql', 'codegen'],
    thumbnail: require('@assets/images/portfolio/u-connect.png'),
    position: [1, 2],
  },
  {
    id: 2,
    title: 'Kizuner',
    tags: ['stripe', 'laravel-echo'],
    thumbnail: require('@assets/images/portfolio/kizuner.png'),
    position: [2, 1],
  },
  {
    id: 3,
    title: 'BidBid',
    tags: ['typescript', 'redux saga', 'socketio'],
    thumbnail: require('@assets/images/portfolio/bidbid.png'),
    position: [2, 3],
  },
  {
    id: 4,
    title: 'Holo Speak',
    tags: ['zoomus', 'callkit'],
    thumbnail: require('@assets/images/portfolio/holo-speak.png'),
    position: [3, 2],
  },
  {
    id: 5,
    title: 'Innoteq POS',
    tags: ['electronjs', 'expo', 'socketio'],
    thumbnail: require('@assets/images/portfolio/innoteq-pos.png'),
    position: [1, 2],
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
                <WorkContent inverted={inverted}>
                  <WorkTitle>{item.title}</WorkTitle>
                  <WorkTags>{item.tags.join(', ')}</WorkTags>
                </WorkContent>
              </Cell>
              <Cell row={index + 1} column={item.position[1]}>
                <ImageWrapper>
                  <Image
                    src={item.thumbnail}
                    layout="fill"
                    objectFit="contain"
                  />
                </ImageWrapper>
              </Cell>
            </Fragment>
          )
        })}
      </Grid>
    </Wrapper>
  )
}
