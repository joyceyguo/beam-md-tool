import React, {Component} from 'react'
import {QuizData} from './Quiz1Data'
import styles from '../../styles/lesson.module.css'

export class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userAnswer:null,
            currentIndex: 0,
            options: [],
            quizEnd: false,
            score:0,
            disabled:true
        }
    }

    loadQuiz = () => {
       const {currentIndex} = this.state;
       this.setState(() => {
           return {
               question: QuizData[currentIndex].question,
               options: QuizData[currentIndex].options,
               answer: QuizData[currentIndex].answer
           }
       })
    }
    nextQuestionHandler = () => {
        const {userAnswer, answer, score} = this.state
        if(userAnswer == answer) {
            this.setState ({
                score: score + 1
            })
        }
        this.setState({
            currentIndex: this.state.currentIndex + 1,
            userAnswer: null
        })
    }
    componentDidMount() {
        this.loadQuiuz;
    }

    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled: false
        })
    }

    componentDidUpdate(prevProps, prevState){
        const[currentIndex] = this.state;
        if(this.state.currentIndex != prevState.currentIndex){
            thihs.setState(() => {
                return {
                    disabled: true,
                    question: QuizData[currentIndex].question,
                    options: QuizData[currentIndex].options,
                    answer: QuizData[currentIndex].answer
                }
            })
        }
    }

    finishHandler =() => {
      if(this.state.currentIndex === QuizData.length -1){
        this.setState({
          quizEnd:true
        })
      }
    }
    render() {
        const{question, options, currentIndex, userAnswer, quizEnd} = this.state;
        return( 
            <div>
                <h2>{question}</h2>
                <span>{'Question ${currentIndex + 1} of ${QuizData.length}'}</span>
                {
                  options.map(option => 
                    <p key = {option.id} className={'options'} 
                    onClick = {() => this.checkAnswer(option)}
                    > 
                      {option}                    
                    </p>
                  )
                }
                {currentIndex < QuizData.length - 1 && 
                <button disabled = {this.state.disabled} onClick={this.nextQuestionHandler}>
                  Next Question
                 </button>}
                 {currentIndex === QuizData.length-1 && 
                 <button onClick={this.finishHandler} disabled = {this.state.disabled}>
                   Finished!
                 </button>}
            </div>
        )
    }
}

export default Quiz
