import React, { useState } from 'react';

import Image from 'next/image'
import ReactPlayer from "react-player"
import ReactDOM from 'react-dom'
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
    const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
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

            <div className={styles.content}>
			{showScore ? (
				<div className={styles.text}>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className={styles.quizopt}>
						<div className={styles.quizopt}>
							<span>Question {currentQuestion + 1}</span>
						</div>
						<div className={styles.quizopt}>{questions[currentQuestion].questionText}</div>
					</div>
					<div className={styles.quizbtn}>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
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
