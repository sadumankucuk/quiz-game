import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WelcomePage from './pages/Home/WelcomePage';
import QuestionPage from './pages/Question/QuestionPage';
import CorrectAnswerPage from './pages/Answer/CorrectAnswerPage';
import WrongAnswerPage from './pages/Answer/WrongAnswerPage';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/quiz" component={QuestionPage} />
      <Route path="/correctanswer" component={CorrectAnswerPage} />
      <Route path="/wronganswer" component={WrongAnswerPage} />
    </Switch>
  );
}

export default App;
