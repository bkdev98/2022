import React from 'react'

import { format } from 'date-fns'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { useCountUp } from 'use-count-up'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 8%;
  right: 10vw;
  cursor: pointer;
  z-index: 3;
`

const DayWrapper = styled.div`
  font-size: 16vw;
  font-family: 'Maelstrom', sans-serif;
  display: flex;
  margin-right: ${({ theme }) => theme.sizes.spacing}px;
`

const Day = styled.span``

const LabelWrapper = styled.div``

const Month = styled.h2`
  font-family: 'Migra', sans-serif;
  text-transform: lowercase;
`

const Text = styled.h5`
  font-weight: 400;
`

export default function Availability() {
  const { ref, inView } = useInView()

  const { value: dayDozen } = useCountUp({
    isCounting: inView,
    end: Math.floor((new Date().getDate() / 10) % 10),
    duration: 3.2,
    easing: 'easeOutCubic',
  })
  const { value: dayUnit } = useCountUp({
    isCounting: inView,
    end: new Date().getDate() % 10,
    duration: 3.2,
    easing: 'easeOutCubic',
  })

  return (
    <Wrapper ref={ref}>
      <DayWrapper>
        <Day>{dayDozen}</Day>
        <Day>{dayUnit}</Day>
      </DayWrapper>
      <LabelWrapper>
        <Month>{format(new Date(), 'MMM')}</Month>
        <Text>available</Text>
        <Text>for work</Text>
      </LabelWrapper>
    </Wrapper>
  )
}
