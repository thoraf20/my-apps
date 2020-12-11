import React from 'react';
import{BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import QuizInstrctions from "./components/quiz/quizInstruction"
import Play from "./components/quiz/play";
import Summary from "./components/quiz/summary";
import {LoginForm} from "./components/access/loginform";
import {RegisterForm} from "./components/access/registerform"

function App() {
 

  return (
    
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/register" exact component={RegisterForm} />
      <Route path="/login" exact component={LoginForm} />
      < Route path="/play/instructions" exact component={QuizInstrctions} />
      < Route path="/play/Quiz" exact component={Play} />
      < Route path="/play/summary" exact component={Summary}/>
    </Router>

  );
}

export default App;
