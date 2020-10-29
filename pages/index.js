import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://beam.berkeley.edu/">BEAM!</a>
        </h1>

        

        <div className={styles.grid}>
          <a href="http://localhost:3000/lessons/lesson1" className={styles.card}>
            <h3>Lesson 1 &rarr;</h3>
            <p> Lesson description here. </p>
          </a>

          <a href="" className={styles.card}>
            <h3>Lesson 2 &rarr;</h3>
            <p> Lesson description here. </p>
          </a>

          <a href="" className={styles.card}>
            <h3>Lesson 3 &rarr;</h3>
            <p> Lesson description here. </p>
          </a>

          <a href="" className={styles.card}>
            <h3>Lesson 4 &rarr;</h3>
            <p> Lesson description here. </p>
          </a>

          <a href="" className={styles.card}>
            <h3>Lesson 5 &rarr;</h3>
            <p> Lesson description here. </p>
          </a>

          <a href="" className={styles.card}>
            <h3>Lesson 6 &rarr;</h3>
            <p> Lesson description here. </p>
          </a>

          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
