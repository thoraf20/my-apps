import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>Quiz Instructions - Quiz App</title></Helmet>
        <div className="instructions-container">
            <div className="header-container">
                <span>
                    <img src="" alt="" />
                    <h1>Quiz Instructions</h1>
                </span>
            </div>

            < h2 > Ensure you read this guide from start to finish. </h2>
            <div className="instructions">
                 <ul className = "browser-default" id = "main-list" >    
                    <li > The game has a duration of 15 minutes and ends as soon as your time elapses. </li> 
                    <li > Each game consists of 15 questions. </li> 
                    <li > Every question contains 4 options. </li>
                    <li>The quiz provides a <b>50-50</b> option.</li>
                    <li>The <b>50-50</b> option remove two incorrect answers and leave out one correct and one incorrect answers.</li>
                    <li>The quiz also provides a <b>HINT</b> to the correct option.</li>
                </ul>
            </div>
           
            <div className="links">
                <span className="left"><Link to="/">No take me back.</Link></span>
                <span className="right">< Link to="/play/quiz " > Ok, lets do this. </Link></span >

            </div>
        </div>
    </Fragment>
    

)

export default QuizInstructions;
