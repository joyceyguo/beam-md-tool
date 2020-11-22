import React from 'react'
import useSWR from 'swr'
import Person from '../components/Person'

const fetcher = (url) => fetch(url).then((res) => res.json())

function discussion() {
  const { data, error } = useSWR('/api/people', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((p, i) => (
        <Person key={i} person={p} />
      ))}
    </ul>
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