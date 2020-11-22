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
            <h1 className={styles.title}>Lesson 1</h1>
            <p className={styles.text}>
            At the end of the day, what is our impact? When you just consider a single day, it seems rather insignificant. We, as BEAM, show up to a site (either in person or virtually) and teach elementary and middle schoolers a science lesson. Then, we leave, and the students continue on with their day, many likely already having forgotten what we taught. Other days, it may not even go so well. We may rant, "The supervisor wasn’t there, so the kids refused to listen to us. It was really hectic." All of these feelings are valid, and teaching can seem useless at times. In spite of all of this, remind yourself of the Pareto principle, where 80% of the effects come from 20% of the causes. 80% of your time is going to be spent on rather trivial tasks that are not going to present many results. 20% of your time is going to be spent on vital tasks that are going to produce an immense amount of results. Think of it this way, 80% of student achievement comes from just 20% of the work that you do with them. In terms of your other 80% of effort, you can take this to mean a lot of things. For example, this could be dealing with mentees fighting or materials breaking. This is why it is important to persevere through those moments.
            </p>
        
            <div className={styles.videoblock}>
                <p className={styles.text, styles.lefttext}>
                Thinking about all of this, let's look directly at BEAM's impact. As of Spring 2020, BEAM goes to 23 different sites and affects nearly 300 students per week. With nine weeks in a semester, we can see how quickly this adds up to over 2700 hours of mentorship and science education to students during the semester. This mentorship, from good teachers and mentors, can be enormous. Apart from the mental health benefits in confidence, financially it has been shown that a good teacher can result in an increase of $2.5 million in income across all their students. Again, finance should not be the absolute on how we rate teacher effectiveness, but these kinds of stats are why it's important to supply students with this high quality STEM education. This quote from Charles Phillips aptly describes it:  
                </p>
                <ReactPlayer className={styles.vid}
                    url="https://www.youtube.com/watch?v=MzcX_0D49Ts"
                />
            </div> 
            <div className={styles.text}>"It is important that educators introduce young students to STEM fields while they are developing their mental capacities and academic habits. In fact, those who receive instruction in these educational topics at an early age have demonstrated better performance in the fields of mathematics and science than those who do not. Early STEM education is, therefore, a key element of elementary learning and skill building for the very youngest of students.” -Charles Phillips
                  </div>
            <div className={styles.text}>Our BEAM mentors may have just said it better though.

            "BEAM has taught me the dire need for STEM education in young students and the need to inspire future professionals. My time as a mentor has shown me that many students do not see the prospect of becoming a professional in a scientific field as a realistic possibility. Students all over the Bay Area are in need of encouragement and mentorship, and BEAM has taught me of the importance and effect of healthy exposure to STEM.”
                        </div>
            <div>
            
            <a>
                <img className={styles.slideimg} id="pareto"src="/pareto.jpg" alt=""/>
            </a>
            </div>
                        
            <div className={styles.text}>Considering all this, it is important to note that this does not mean that we are perfect mentors, and we should always be looking for ways to improve ourselves to have an even greater impact. This means you must expand your edges. Expanding your edges encapsulates everything we need to know about growing as a mentor. As STEM mentors, we are more than just scientists and engineers. We are designers, book lovers, video gamers, and more. Find ways to get out of your comfort zone and get to know your mentors on a more personal level. By expanding your edges, you continuously learn how to be a better mentor and thus continue to have a bigger impact.
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
                <a href="https://docs.google.com/presentation/d/1-Emkl7tkIu_eiykdtN0kK0U41mZDEsvCpPdhKQE1rW4/edit#slide">
                    <img className={styles.slideimg} id="impact-presentation"src="/beams_impact.jpg" alt=""/>
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
