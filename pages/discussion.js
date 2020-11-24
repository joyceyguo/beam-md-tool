import React from 'react'
import useSWR from 'swr'
import Person from '../components/Person'
import styles from '../styles/Posts.module.css'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'




// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API

  const db = await open({
    filename: './mydb.db',
    driver: sqlite3.Database
  });

  await db.run(
  'INSERT INTO Posts (id, body, user_id, reply_id) VALUES ($a, $b, $c, $d)',
  {$a: 1, $b: "This presentation taught me a lot about what it means to be a champion!", $c: 1, $d: 1}
  );

  await db.run(
  'INSERT INTO Posts (id, body, user_id, reply_id) VALUES ($a, $b, $c, $d)',
  {$a: 2, $b: "I agree! I really liked the part where they talked about what it means to be a leader!", $c: 2, $d: 1}
  );

  await db.run(
  'INSERT INTO Posts (id, body, user_id, reply_id) VALUES ($a, $b, $c, $d)',
  {$a: 3, $b: "This presentation was great! I wished it went a little more into detail on how I can recognize my privileges and biases to be a better champion to others.", $c: 3, $d: 1}
  );

  const ret = await db.all('SELECT * from Posts');
  const result6 = await db.run('DELETE FROM Posts');

  const json = JSON.parse(JSON.stringify(ret));

  // Pass data to the page via props
  return { props: { json } };
}

  const Post = ({user, idx}) => {
    return (
      <div className={styles.post}> 
        <h4>
            User {{user}[{idx}].id}
          </h4>
          <p>
            {{user}[{idx}].body}
          </p>
      </div>
    )
    }
function discussion({ json }) {

  //  const { data, error } = useSWR('/api/people', fetcher)

  //if (error) return <div>Failed to load</div>
  //if (!data) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <div>
          <h1 className={styles.post}>Lesson 1 Discussion Posts:</h1>
          <div className={styles.post}>
            <h4> User {json[0].id}</h4>
            <p>{json[0].body}</p>
          </div>
          

          <div className={styles.post}>
            <h4> User {json[1].id}</h4>
            <p>{json[1].body}</p>
          </div>
          <div className={styles.post}>
            <h4> User {json[2].id}</h4>
            <p>{json[2].body}</p>
        </div>

          


          {/* <p className={styles.}>
            User {json[1].id}: {json[1].body}
          </p>
          <p className={styles.}>
            User {json[2].id}: {json[2].body}
          </p> */}
        </div>
      </div>
  )
}




// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
// function discussion({ posts }) {
//     return (
//         <div>
//             <h1>discussions</h1>
//             {/* <ul>
//                 {posts.map((post) => (
//                     <li>{post.title}</li>
//                 ))

//                 }
//             </ul> */}


//         </div>
//     )
// }

// fetch data at build time (static generation)
// export async function getStaticProps(context) {
//     // call an external API endpoint to get posts
//     const res = await fetch('../api/people/[id].js')
//     const data = await res.json()

//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }

//     return {
//         props: {
//             posts,
//         },
//     }

// }


// export async function getStaticPaths() {

//     const paths = posts.map((post) => ({
//         params: {id: post.id},
//     }))


//     return{
//         paths,
//         fallback: true
//     };
// }

export default discussion
