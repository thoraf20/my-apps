import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import questions from "../../questions.json";
import isEmpty from "../../utils/is-empty"
import classnames from "classnames";
import M from "materialize-css";

class Play extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questions,
            currentQuestion: {},
            nextQuestion: {},
            previousQuestion: {},
            answer: '',
            numberOfQuestion: questions.length,
            numberOfAnsweredQuestions: 0,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hints: 5,
            fiftyFifty: 4,
            usedFiftyFifty: false,
            nextButtonDisabled: false,
            previousButtonDisabled : true,
            previousRandomNumbers: [],
            time: {}
        
        };
        this.interval = null;
        
    }

    //call this component when the page load 
    componentDidMount() {
        const { questions, currentQuestion, previousQuestion, nextQuestion } = this.state;
        this.displayQuestions(questions, currentQuestion, previousQuestion, nextQuestion);
        this.startTimer();
    }

    //reset interval once used
    componentWillUnmount() {
        clearInterval(this.interval);
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
                numberOfAnsweredQuestion: questions.length,
                answer,
                previousRandomNumbers : []
            
            }, () => {
                    this.showOptions();
                    this.handleDisabledButton();
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
            correctAnswers: prevState.correctAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), () => {
                 if (this.state.nextQuestion === undefined) {
                    this.endGame();
                } else {
            this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion)   
                }
            }
         );
    }

    wrongAnswer = () => {
        navigator.vibrate(1000);
        M.toast({
            html: "Wrong-Answer!",
            classes: "toast-invalid",
            displayLength : 1500
        })
        this.setState(prevState => ({
            wrongAnswers: prevState.wrongAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), () => {
                if (this.state.nextQuestion === undefined) {
                    this.endGame();
                } else {
                    this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);   
                }
            }
        );
    }

    showOptions = () => {
        const options = Array.from(document.querySelectorAll('.option'));

        options.forEach((option) => {
            option.style.visibilty = 'visible';
        });
        
    }

    handleHints = () => {
        if (this.state.hints > 0) {
            const options = Array.from(document.querySelectorAll('.option'));
        let indexOfAnswer;

        options.forEach((option, index) => {
            if (option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
                indexOfAnswer = index;
            }
        });

        while (true) {
        const randomNumber = Math.round(Math.round() * 3);
         if (randomNumber !== indexOfAnswer && !this.state.previousRandomNumbers.includes(randomNumber)) {
             options.forEach((option, index) => {
             if (index === randomNumber) {
                option.style.visibility = 'hidden';
                this.setState((prevState) => ({
                    hints: prevState.hints - 1,
                    previousRandomNumbers : prevState.previousRandomNumbers.concat(randomNumber)
                }));      
            }
        });
        break;
         }
            if (this.state.previousRandomNumbers.length >=  3) break; 
            
            }
        }      
    }

    startTimer = () => {
        const countDownTime = Date.now() + 60000;
        this.interval = setInterval(() => {
            const now = new Date();
            const distance = countDownTime - now;

            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / (1000));
            
            if (distance < 0) {
                clearInterval(this.interval);
                this.setState({
                    time: {
                        minutes: 0,
                        seconds: 0
                    }
                }, () => {
                    this.endGame();
                });
            } else {
                this.setState({
                    time: {
                        minutes,
                        seconds
                    }
                });
            }

        }, 1000);
    }

    handleDisabledButton = () => {
        if (this.state.previousQuestion === undefined || this.state.currentQuestionIndex === 0) {
            this.setState({
                previousButtonDisabled: true
            });
        } else {
            this.setState({
                previousButtonDisabled: false
            });
        }

         if (this.state.nextQuestion === undefined || this.state.currentQuestionIndex + 1 === this.state.numberOfQuestion) {
            this.setState({
                nextButtonDisabled: true
            });
        } else {
            this.setState({
                nextButtonDisabled: false
            });
        }
    }

    endGame = () => {
        alert('quiz has ended');
        const { state } = this;
        const playerStats = {
            score: state.score,
            numberOfQuestion: state.numberOfQuestion,
            numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
            correctAnswers: state.correctAnswers,
            wrongAnswers: state.wrongAnswers
        };
        
        console.log(playerStats);
        setTimeout(() => {
            this.props.history.push("/");
        }, 1000);
    }

    render() {
        const {
            currentQuestion,
            currentQuestionIndex,
            fiftyFifty,
            hints,
            numberOfQuestion,
            time } = this.state; 

        return (
            <Fragment>
                <Helmet><title>Quiz Page</title></Helmet>
                <div className="questions">
                    <h2 className="">Quiz Mode</h2>
                    <div className="lifeline-container">
                        <p>
                            <span onClick={this.handleFiftyFifty} className="mdi mdi-set-center mdi-24px lifeline-icon" >
                                <span className="lifeline">{fiftyFifty}</span>
                            </span>
                            
                        </p>
                        <p>
                            < span onClick={this.handleHints} className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"> 
                                < span className="lifeline "> {hints} </span>
                            </span>
                        </p>
                    </div>

                    <div className="timer-container">
                        <p>
                            <span className="left" style={{ float: 'left' }}> {currentQuestionIndex + 1} of {numberOfQuestion} </span></p>
                            <p><span className="right">{time.minutes}:{time.seconds}< span className="mdi mdi-clock-outline mdi-24px" > </span ></span >
                        </p>
                    </div>

                    <h3>{currentQuestion.question}</h3>

                    <div className="options-container">
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionA}</p>
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionB}</p>
                    </div>

                    <div className="options-container">
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionC}</p>
                        <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionD}</p>
                    </div>

                    <div className="button-container">
                        <button
                            className={classnames('', {'disable' : this.state.previousButtonDisabled})}
                            id="previous-button"
                            onClick={this.handleButtonClick}>
                            Previous
                            </button>
                        
                        <button
                            className={classnames('', {'disable' : this.state.nextButtonDisabled})}
                            id="next-button"
                            onClick={this.handleButtonClick}>
                            Next
                            </button>
                        < button id="quit-button" onClick={this.handleButtonClick}> Quit </button>
                    </div>
                </div>
            </Fragment>
            
        )
    }
}

export default Play;