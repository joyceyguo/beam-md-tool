import React from 'react'
import Image from 'next/image'
import styles from '../../styles/lesson.module.css'

export default function lesson1() {
    return(
        <div className={styles.lesson}>
            <Image
                src="/beam_logo_transp.png"
                alt="Picture of the author"
            />
            <h1 >Lesson 1</h1>
            <p>lesson paragraph text</p>
            

        </div>
        
    ) 
    
}
