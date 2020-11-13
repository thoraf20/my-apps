import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import questions from "../../questions.json";
import isEmpty from "../../utils/is-empty"
import M from "materialize-css";

class Play extends Component {
    constructor(props) {
        super(props)
            console.log(questions)

        this.state = {
            questions,
            currentQuestion: {},
            nextQuestion: {},
            previousQuestion: {},
            answer: '',
            numberOfQuestion: 0,
            numberOfAnsweredQuestions: 0,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hints: 5,
            fiftyfifty: 2,
            usedFiftyFifty: false,
            time: {}
        
        }
        
    }

    //call this component when the page load 
    componentDidMount() {
        const { questions, currentQuestion, previousQuestion, nextQuestion } = this.state;
        this.displayQuestions(questions, currentQuestion, previousQuestion, nextQuestion);
    }

    displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion) => {

        let { currentQuestionIndex } = this.state;
        if (!isEmpty(this.state.questions)) {
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previousQuestion = questions[currentQuestionIndex - 1];
            const answer = currentQuestion.answer;
            this.setState({
                currentQuestion, 
                nextQuestion,
                previousQuestion,
                answer
            })
        }
    };

    handleOptionClick = (e) => {
        if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
            this.correctAnswer();
        } else {
            this.wrongAnswer();
       }
    }

    handleNextbuttonClick = () => {
        if (this.state.nextQuestion !== undefined) {
            this.setState(prevState => ({
                currentQuestionIndex: prevState.currentQuestionIndex + 1
            }), this.displayQuestions(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion));
        }
    }

      handlePreviousbuttonClick = () => {
        if (this.state.previousQuestion !== undefined) {
            this.setState(prevState => ({
                currentQuestionIndex: prevState.currentQuestionIndex - 1
            }), this.displayQuestions(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion));
        }
      }
    
    handleQuitButtonClick = () => {
        if (window.confirm("Are you sure you want to quit?")) {
            this.props.history.push("/");
        }
    }

    handleButtonClick = (e) => {
        switch (e.target.id) {
            case "next-button": this.handleNextbuttonClick();
                break;
            
            case "previous-button": this.handlePreviousbuttonClick();
                break;
            
            case "quit-button": this.handleQuitButtonClick();
                break;
            
            default:
                break;
        }
    }
    
    correctAnswer = () => {
        M.toast({
            html: "Correct-Answer!",
            classes: "toast-valid",
            displayLength : 1500
        })
        this.setState(prevState => ({
            score: prevState.score + 1,
            correctAnswers: prevState.correctAnswer + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), () => {
            this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion)   
        } );
    }

    wrongAnswer = () => {
        navigator.vibrate(1000);
        M.toast({
            html: "Wrong-Answer!",
            classes: "toast-invalid",
            displayLength : 1500
        })
        this.setState(prevState => ({
            wrongAnswers: prevState.wrongAnswer + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), () => {
            this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion)   

        });
    }

    render() {
        const { currentQuestion } = this.state; 

        return (
            <Fragment>
                <Helmet><title>Quiz Page</title></Helmet>
                <div className="questions">
                    <h2 className="">Quiz Mode</h2>
                    <div className="lifeline-container">
                        <p>
                            < span className = "mdi mdi-set-center mdi-24px lifline-icon" > </span><span className="lifeline">2</span>
                        </p>
                        <p>
                            < span className = "mdi mdi-lightbulb-on-outline mdi-24px" > </span>< span className = "lifeline" > 5 </span>
                        </p>
                    </div>

                    <div className="timer-container">
                        <p>
                            <span className="left" style={{ float: 'left' }}> {this.state.currentQuestionIndex + 1} of {this.state.questions.length} </span></p>
                        <p>
                            < span className="right"> 3:17 < span className="mdi mdi-clock-outline mdi-24px" > </span ></span >
                        </p>
                    </div>

                    <h3>{currentQuestion.question}</h3>

                    <div className="options-container">
                        <p onClick={this.handleOptionClick} className="options">{currentQuestion.optionA}</p>
                        <p onClick={this.handleOptionClick} className="options">{currentQuestion.optionB}</p>
                    </div>

                    <div className="options-container">
                        <p onClick={this.handleOptionClick} className="options">{currentQuestion.optionC}</p>
                        <p onClick={this.handleOptionClick} className="options">{currentQuestion.optionD}</p>
                    </div>

                    <div className="button-container">
                        <button id="previous-button" onClick={this.handleButtonClick}>Previous</button>
                        <button id="next-button" onClick={this.handleButtonClick}>Next </button>
                        < button id="quit-button" onClick={this.handleButtonClick}>Quit </button>
                    </div>
                </div>
            </Fragment>
            
        )
    }
}

export default Play;