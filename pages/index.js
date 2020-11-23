import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <body >
      <div className={styles.container}>

        <div className={styles.welcome}>
          <h1 className={styles.title}>Hello, BEAM mentor 👋 </h1>
          <h1 className={styles.subtitle}>Welcome to our mentor hub, <br/>
            where we learn and grow together 🌿   </h1>
        </div>
      
      
      </div>
    </body>
    
  )
}
// import useSWR from 'swr'
// import Person from '../components/Person'
//
// const fetcher = (url) => fetch(url).then((res) => res.json())
//
// export default function Index() {
//   const { data, error } = useSWR('/api/people', fetcher)
//
//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>
//
//   return (
//     <ul>
//       {data.map((p, i) => (
//         <Person key={i} person={p} />
//       ))}
//     </ul>
//   )
// }
