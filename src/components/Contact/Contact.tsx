import React from 'react'

import {
  ChatCircle,
  ChatCircleDots,
  FacebookLogo,
  GithubLogo,
  LinkedinLogo,
  LinkSimpleHorizontal,
  Popcorn,
  TwitterLogo,
} from 'phosphor-react'
import styled from 'styled-components'

import Link from '@components/Link'
import SectionTitle from '@components/SectionTitle'

const Wrapper = styled.section`
  position: relative;
  max-width: ${({ theme }) => theme.sizes.container / 2}px;
  margin: 0px auto;
  margin-bottom: 6rem;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  h5 {
    margin-top: 3rem;
    text-transform: uppercase;
  }
`

const LinkColumn = styled(Column)`
  /* margin-left: 5rem; */
  align-items: flex-end;
`

const A = styled.a`
  text-decoration: underline;
`

const SocialLink = styled(A)`
  svg {
    margin-right: 15px;
    margin-bottom: -5px;
  }
  margin-top: 15px;
`

const Contact = () => (
  <Wrapper id="contact">
    <SectionTitle index="II" title="Contact" />
    <Container>
      <Column>
        <h5>Availability</h5>
        <p>
          Right now I'm open to new opportunities or freelance projects. Reach
          out and touch faith. ↓
        </p>
        <h5>Contact</h5>
        <p>
          I'm most reachable{' '}
          <Link href="mailto:khanh@quocs.com">
            <A>via email</A>
          </Link>
          , but you can find me most places on the internet as <b>@bkdev98</b>.
          You can also{' '}
          <Link href="resume" scroll>
            <A>check out my resume</A>
          </Link>
          , if you’re into that sort of thing.
        </p>
      </Column>
      <LinkColumn>
        <h5>Links</h5>
        <SocialLink href="https://github.com/bkdev98" target="_blank">
          <GithubLogo weight="duotone" size={22} />
          GitHub
        </SocialLink>
        <SocialLink href="https://twitter.com/bkdev98" target="_blank">
          <TwitterLogo weight="duotone" size={22} />
          Twitter
        </SocialLink>
        <SocialLink href="https://facebook.com/bkdev98" target="_blank">
          <FacebookLogo weight="duotone" size={22} />
          Facebook
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/bkdev98/" target="_blank">
          <LinkedinLogo weight="duotone" size={22} />
          LinkedIn
        </SocialLink>
        <SocialLink
          href="https://join.skype.com/invite/ykTiyedDiVXY"
          target="_blank"
        >
          <ChatCircleDots weight="duotone" size={22} />
          Skype
        </SocialLink>
        <SocialLink href="/resume" target="_blank">
          <LinkSimpleHorizontal weight="duotone" size={22} />
          Resume
        </SocialLink>
        <SocialLink href="https://letterboxd.com/quocs/" target="_blank">
          <Popcorn weight="duotone" size={22} />
          Letterboxd
        </SocialLink>
      </LinkColumn>
    </Container>
  </Wrapper>
)

export default Contact
