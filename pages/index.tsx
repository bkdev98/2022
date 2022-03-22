import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quoc Khanh</title>
        <meta
          name="description"
          content="Quoc Khanh's personal site & portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Everything</h1>

        <p className={styles.description}>is more complicated than you think</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://buiquockhanh.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          The personal site & portfolio of HCMC-based developer Quoc Khanh
        </a>
      </footer>
    </div>
  );
};

export default Home;
