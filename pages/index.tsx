import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Creative Alchemy Video Metrics</title>
        <meta name="description" content="Creative Alchemy Video Metrics is a tool that lets TikTok users see metrics for their favorite videos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Creative Alchemy<br />Video Metrics
        </h1>

        <p>See metrics for your favorite videos</p>

        <p className={styles.description}>
          <Link href="/api/oauth">
            <a className={styles.loginButton}>Login with TikTok</a>
          </Link>
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default Home
