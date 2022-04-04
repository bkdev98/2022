import type { NextPage } from 'next'
import Head from 'next/head'

import Contact from '@components/Contact'
import Intro from '@components/Intro'
import Layout from '@components/Layout'
import MegazineCover from '@components/MegazineCover'
import SelectedWorks from '@components/SelectedWorks'

const Home: NextPage = () => (
  <Layout>
    <Head>
      <title>Quoc Khanh</title>
      <meta
        name="description"
        content="Quoc Khanh's personal site & portfolio"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <MegazineCover />
    <Intro />
    <SelectedWorks />
    <Contact />
  </Layout>
)

export default Home
