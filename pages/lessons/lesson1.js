import React from 'react'
import Image from 'next/image'
import ReactPlayer from "react-player"
import styles from '../../styles/lesson.module.css'



const updateScore = e => {

    variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
    sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
    con = parseInt(document.querySelector('input[name = "con"]:checked').value);
    ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
    
    result = variable + sub + con + ifstate;
    
    document.getElementById("grade").innerHTML = result;
         
    return false;
}


function lesson1() {
    return(
        
        <div className={styles.content}>
            <img className={styles.img} src="/beam_logo_transp.png" alt=""/>
            <h1 className={styles.title}>Lesson 1</h1>
            <p className={styles.text}>
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
            <div className={styles.videoblock}>
                <p className={styles.text, styles.lefttext}>
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


            <div className={styles.quiz}>          
                <form id="form1" onSubmit={updateScore}>
                    <h2>Which is the best description of a variable?</h2>
                    <div className={styles.quizopt}>
                        <label for="var_string"><input type="radio" name="variable" value="0" id="var_string" />Identifies a portion of a string.</label>
                        <label for="var_join"><input type="radio" name="variable" value="0" id="var_join" />A method to join strings.</label>
                        <label for="var_info"><input type="radio" name="variable" value="25" id="var_info" />Allows you to store information so it can be reused throughout the program</label>
                        <label for="var_condition"><input type="radio" name="variable" value="0" id="var_condition"/>Allows you to make a decision based on a condition.</label>
                    </div>
                    
                    <button type="submit" value="Submit" className={styles.quizbtn}>Submit</button>
                </form>
                <p>Your grade is: <span id="grade">__</span></p>
                <p id="grade2"></p>
            </div>

            <div>
                <h2 className={styles.sectheader}>Mentor Development Presentations</h2>
                <a href="https://docs.google.com/presentation/d/17oEikc4j0d67w_uwxzMSADxYNA001ohHWVJPVthzLAE/edit?usp=sharing">
                    <img className={styles.slideimg} id="privilege-presentation"src="/privilege-fa20.png" alt=""/>
                </a>
            </div>

            <div>

                <h2 className={styles.sectheader}>Discussion</h2>
                <div className={styles.discussion}>
                    <form id="dispost">
                        <h2>Share your thoughts!</h2>
                        <div >
                            <label>
                                {/* Share your thoughts! */}
                                <input className={styles.disbox} type="text" name="discussion post" id=""/>
                            </label>
                        </div>
                        
                        <button type="submit" value="Submit" className={styles.quizbtn}>Submit</button>
                    </form>
                </div>

            </div>

            <br/>

            <br/>




        </div>
        
    ) 
    
}

export default lesson1
