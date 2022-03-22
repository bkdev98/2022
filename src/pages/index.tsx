import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '@components/Layout'
import MegazineCover from '@components/MegazineCover'

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
  </Layout>
)

export default Home