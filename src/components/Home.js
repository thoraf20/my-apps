import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import {Link}  from "react-router-dom";


const Home = () => (
    <Fragment>
        <Helmet><title>JS-QUIZ-APP-HOME</title></Helmet>
        <div id="home">
            <section>
                <div>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1>JS-QUIZ</h1>
                <div className="play-button-container">
                    <ul>
                        <li ><Link className="play-button" to="/play/instructions">Play</Link></li>
                    </ul>
                </div>
                <div className="auth-container">
                    <Link to="/Login" className="auth-buttons" id="login-button">Login</Link>
                    <Link to ="/Register" className="auth-buttons" id="signup-button">Sign up</Link>
                </div>
            </section>
        </div>
    </Fragment>
   
);

export default Home;