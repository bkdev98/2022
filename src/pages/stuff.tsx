import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '@components/Layout'

const Stuff: NextPage = () => (
  <Layout>
    <Head>
      <title>Quoc Khanh</title>
      <meta
        name="description"
        content="Quoc Khanh's personal site & portfolio"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>stuffs</h1>
  </Layout>
)

export default Stuff
