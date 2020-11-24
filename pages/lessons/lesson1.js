import React, { useState } from 'react';

import Image from 'next/image'
import ReactPlayer from "react-player"
import ReactDOM from 'react-dom'
import styles from '../../styles/Lessons.module.css'

import useSWR from 'swr'
import Person from '../../components/Person'





function lesson1() {
    

      
    const questions = [
		{
			questionText: 'Which of thsese is NOT a simple step to allow everyone to be in the loop irregardless of previous knowledge or experience?',
			answerOptions: [
				{ answerText: 'Outine instructions from the start', isCorrect: false },
				{ answerText: 'Keep things straightforward', isCorrect: false },
				{ answerText: 'Ask the class as a whole who knows the material before the lesson starts', isCorrect: true },
                { answerText: 'Live by your word', isCorrect: false },
                { answerText: 'Be flexible and adaptable', isCorrect: false },
			],
        }, 
        {
			questionText: 'Which of thsese is NOT a method to check that our efforts are well-intentioned??',
			answerOptions: [
				{ answerText: 'Check for culture-bound assumptions', isCorrect: false },
				{ answerText: 'Consider diverse backgrounds and experiences', isCorrect: false },
				{ answerText: 'Consider whether each student has equal accessiblity to materials', isCorrect: false },
                { answerText: 'Assume that each student has equal accessibility to BEAM material because they showed up that day', isCorrect: true }
			],
		}
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
            <p className={styles.text}>
            Inclusive teaching is a mindset. Being aware of your inherent biases is essential before you go into a classroom. How are students who are naturally less socially naturally excluded from class conversation? How can we adapt education for those students? These questions are not easy to answer; however, being a champion does not mean just being a champion for the students who look up to you. You must seek to be a champion for students who are shy, who are unlike you, and who maybe simply don't like the subject. When we place special focus on these students, and not just the ones that raise their hand to every question, we begin to recognize that Being A Champion is not a simple task. Adopting this strategy allows great benefits for those who are left out. They get to build friendships with and learn among peers. They receive support in the general classroom without feeling isolated. They develop social competence. Eventually, they feel comfortable voicing their ideas and questions. The more vocal students also benefit. They get to interact with other types of people and communities that they might not meet otherwise. They develop a greater understanding and respect, and they build a stronger sense of social responsibility and comfort.

            </p>
            <p className={styles.text}>
            Recognizing this, we should ask ourselves, "How do I know that my efforts are well-intentioned?" We should take into account culture-bound assumptions and experiences of our students. In addition, we should consider the diverse backgrounds and experiences of each student in the classroom and the accessibilty they have to course material. Students receiving the same education in the same classroom may not have the same accessibility to materials due to the nature that they grew up, remember that. So, be intentional in your interactions with students. Stand up for those students who need a champion to realize that STEM is for them. Be authentic. Be confident. Be a champion. 

            </p>
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
