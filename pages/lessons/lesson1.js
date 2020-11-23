import React, { useState } from 'react';

import Image from 'next/image'
import ReactPlayer from "react-player"
import ReactDOM from 'react-dom'
import styles from '../../styles/lesson.module.css'

import useSWR from 'swr'
import Person from '../../components/Person'





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
    {/*
    const { data, error } = useSWR('../api/people', fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    */}
    
    return(
        
        <div className={styles.content}>
            <img className={styles.img} src="/beam_logo_transp.png" alt=""/>
            <h1 className={styles.title}>Lesson 1: Being a Champion</h1>
            <p className={styles.text}>
            As mentors, it is so easy to get caught up in the material we are teaching; 
            however, students who become lost in the conversation don't learn and don't grow. 
            How do we ensure that we are inclusive of all types of students, and what can we 
            do to be a role model and champion for the students who don't see STEM education 
            as a possibility for themselves. As mentors, we can facilitate some really easy methods to foster
                    inclusivity in the classroom. Firstly, we can outline instructions 
                    and expectations from the start. Such instructions ensure that every
                    student knows what to do in terms of responsibilities!

            </p>
            <div className={styles.videoblock}>
                <p className={styles.text, styles.lefttext}>
                    To further aid this, keep things straightforward and to the point. This simple 
                    step allows everyone to be in the loop irregardless of previous 
                    knowledge or experience. Third, live by your word. This one may seem 
                    simple, but to be there for your students, you must follow through with 
                    your word to establish trust. Fourth, assing responsibilities that match
                    strengths and interests. This individualistic mentorship allows you to 
                    foster an education to each student's learning style (see Learning styles
                    page for more information on this!). The student should not have to adapt
                    to your teaching style; you should adapt to their learning style. Lastly,
                    be flexible and adaptable. If something isn't going as planned, don't worry
                    about it! Keep on moving forward and adjust!
                </p>
                <ReactPlayer className={styles.vid}
                    url="https://www.youtube.com/watch?v=SFnMTHhKdkw&vl=en"
                />
            </div> 
            <h2 className={styles.sectheader}> Check Your Knowledge!! </h2>
            <div className={styles.content}>
			{showScore ? (
				<div className={styles.text}>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>

                    <div className={styles.question_title}>
                        <span>Question {currentQuestion + 1}</span>
                    </div>
                    
                    <div className={styles.question}>{questions[currentQuestion].questionText}</div>
					
					<div className={styles.quiz}>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className={styles.quizbtn} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
                    <div className={styles.title}>
                        Your current score is {score}
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
                {/*
                <div>
                   {data.map((p, i) => (
                     <Person key={i} person={p} />
                   ))}
                </div>
                */}
                

            </div>

            <br/>

            <br/>




        </div>
        
    ) 
    
}

// const fetcher = (url) => fetch(url).then((res) => res.json());
export default lesson1
