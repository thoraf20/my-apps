import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>Quiz Instructions - Quiz App</title></Helmet>
        <div className="instructions container">
            <h1>How to Play the Game</h1>
            <p>Ensure you read this guide from start to finish.</p>
            <ul className="browser-default" id="main-list">
                <li>The game has a duration of 15 minutes and ends as soon as your time elapses.</li>
                <li>Each game consists of 15 questions.</li>
                <li>Every question contains 4 options.</li>
            </ul>
            <div>
                <span className="left"><Link to="/">No take me back.</Link></span>
                <span className="right">< Link to="/play" > Ok, lets do this. </Link></span >

            </div>
        </div>
    </Fragment>
    

)

export default QuizInstructions;
