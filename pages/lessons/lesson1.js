import React from 'react'
import Image from 'next/image'
import ReactPlayer from "react-player"
import styles from '../../styles/lesson.module.css'

function lesson1() {
    return(
        
        <div className={styles.all}>
            {/* <Image className={styles.img}
                src="/beam_logo_transp.png"
                alt="Picture of the author"
                width={500}
                height={250}
            /> */}
            <img className={styles.img} src="/beam_logo_transp.png" alt=""/>
            <h1 className={styles.title}>Lesson 1</h1>
            <p className={styles.content}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Eget nullam non nisi est sit amet facilisis magna etiam. 
                Varius sit amet mattis vulputate. Duis at tellus at urna condimentum. 
                Eu sem integer vitae justo eget magna fermentum iaculis. 
                Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur.
                 Volutpat est velit egestas dui id ornare arcu odio. 
                 Bibendum enim facilisis gravida neque. Ullamcorper dignissim cras t
                 incidunt lobortis feugiat vivamus at. In aliquam sem fringilla ut mor
            </p>
            <ReactPlayer className={styles.vid}
                url="https://www.youtube.com/watch?v=SFnMTHhKdkw&vl=en"
            />
            

        </div>
        
    ) 
    
}

export default lesson1
