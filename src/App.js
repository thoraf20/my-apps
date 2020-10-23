import React from 'react';
import{BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home";
import QuizInstrctions from "./components/quiz/quizInstruction"
import Play from "./components/quiz/play";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      < Route path="/play/instructions" exact component={QuizInstrctions} />
      < Route path = "/play/Quiz" exact component = {Play}/>

    </Router>
  );
}

export default App;
