import React, {Component, Fragment} from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            numberOfQuestion: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            usedHints: 0,
            usedFiftyfifty: 0
            
        };
    }
    
    componentDidMount() {
        const { state } = this.props.location;
        this.setState({
            score: (state.score / state.numberOfQuestion) * 100,
            numberOfQuestion: state.numberOfQuestion,
            numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
            correctAnswers: state.correctAnswers,
            wrongAnswers: state.wrongAnswers, 
        });
    }
    render() {
        const { state, score } = this.props.location;
        let stats, remark;

        if (score <= 30) {
            remark = "You need more practice!"
        } else if(score > 30 && score <= 50){
            remark = "Better luck next time!"
        } else if (score <= 70 && score > 50) {
            remark = "You can do better";
        } else if (score >= 71 && score <= 84) {
            remark = "You did great!";
        } else {
            remark = "You\'re an absolute genius!";
        }

        if (state !== undefined) {
            stats = (
                <>
                    <div>
                        <span className="mdi mdi-check-circle-outline success-icon"></span>
                    </div>
                    <h1>Quiz has ended</h1>
                    <div className="container">
                        <h4>{remark}</h4>
                        <h2>Your score : {this.state.score.toFixed(0)}&#37;</h2>
                        <span className="stat left">Total number of questions : </span>
                        <span className="right">{this.state.numberOfQuestion}</span><br/>

                        <span className="stat left">Total number of answered questions : </span>
                        <span className="right">{this.state.numberOfAnsweredQuestions}</span><br/>

                        <span className="stat left">Total number of correct answers : </span>
                        <span className="right">{this.state.correctAnswers}</span><br/>
    
                        <span className="stat left">Total number of wrong answers : </span>
                        <span className="right">{this.state.wrongAnswers}</span>
                    </div>
                    <section>
                        <ul>
                            <li>
                                <Link to="/">Back to Home</Link>
                            </li>
                            <li>
                                <Link to="/play/quiz">Play Again</Link>
                            </li>
                        </ul>
                    </section>

                </>
            );
        } else {
            stats = (
                <section>
                    <h1 className="no-stats">No stats available. taae a Quiz. </h1>
                        <ul>
                            <li>
                                <Link to="/">Back to Home</Link>
                            </li>
                            <li>
                                <Link to="/play/quiz">Take a Quiz</Link>
                            </li>
                        </ul>
                </section>
            )
        }
        return (
            <Fragment>
                <Helmet><title>Quiz-Summary</title></Helmet>
                {stats}
            </Fragment>
        
    )
    }
    
}

export default Summary;