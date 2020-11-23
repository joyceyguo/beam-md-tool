import Head from 'next/head'
import styles from '../../styles/Lesson.module.css'

export default function Lesson() {
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
        <a href="http://localhost:3000/discussion" className={styles.card}>
            <h3>DISCUSSION testing &rarr;</h3>
            <p> Discussion posts </p>
          </a>



          <a href="http://localhost:3000/lessons/lesson1" className={styles.card}>
            <h3>Lesson 1 &rarr;</h3>
            <p> Being a Champion </p>
          </a>

          <a href="http://localhost:3000/lessons/lesson2" className={styles.card}>
            <h3>Lesson 2 &rarr;</h3>
            <p> BEAM's Impact </p>
          </a>

          <a href="" className={styles.card}>
            <h3>Lesson 3 &rarr;</h3>
            <p> Lesson description here. </p>
          </a>

          <a href="" className={styles.card}>
            <h3>Lesson 4 &rarr;</h3>
            <p> Lesson description here. </p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
