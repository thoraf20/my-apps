import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";

class Play extends Component {
    // constructor(props) {
    //     super(props);
        
    // }

    increaseCount = () => {
        this.setState({
            counter: 5
        });
    }

    render() {
        return (
            <Fragment>
                <Helmet><title>Quiz Page</title></Helmet>
                <div className="questions">
                    <h2 className="">Quiz Mode</h2>
                    <div className="lifeline-container">
                        <p>
                            < span className = "mdi mdi-set-center mdi-24px lifline-icon" > </span><span className="lifeline">2</span >
                        </p>
                        <p>
                            < span className = "mdi mdi-lightbulb-on-outline mdi-24px" > </span>< span className = "lifeline" > 5 </span >

                        </p>
                    </div>

                    <div className="timer-container">
                        <p>
                            <span className="left" style={{ float: 'left' }}>1 of 15 </span></p>
                        <p>
                            < span className="right"> 3:17 < span className="mdi mdi-clock-outline mdi-24px" > </span ></span >
                        </p>

                    </div>

                    <h3>Google was founded in what year?</h3>

                    <div className="options-container">
                        <p className="options">1997</p>
                        <p className="options" > 1999  </p>
                    </div>

                    <div className="options-container">
                        <p className = "options" > 1995 </p> 
                        <p className = "options" > 2001 </p>
                    </div>

                    <div className="button-container">
                        <button>Previous</button>
                        <button >Next </button>
                        < button >Quit </button>
                    </div>
                </div>
            </Fragment>
           
            
        )
    }
}


export default Play;