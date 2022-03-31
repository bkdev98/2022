import type { NextPage } from 'next'
import Head from 'next/head'

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
  </Layout>
)

export default Home
