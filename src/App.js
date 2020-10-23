import React from 'react';
import{BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import QuizInstrctions from "./components/quiz/quizInstruction"

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      < Route path = "/play/instructions" exact component = {QuizInstrctions}/>
    </Router>
  );
}

export default App;
