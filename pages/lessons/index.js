import styles from '../../styles/Lesson.module.css'

const LessonCard = ({ title, description, href }) => {
  return (
    <div className={styles.card}>
      <a href={href}>
            <h3> {title} &rarr; </h3>
            <p> {description} </p>
          </a>
    </div>
  ) 
}

// class LessonCard extends React.Component {
//   render() {
//     return (
//       <div>
//       </div>
//     )
//   }
// }

export default function Lesson() {
  return (
    <div className={styles.container}>

      
      <LessonCard title="Lesson 1" description="mentoring" href="/lessons/lesson1"></LessonCard>   
        
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
    
    </div>
  )
}
