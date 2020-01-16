import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Home/WelcomePage.css';
import Lottie from 'react-lottie';
import * as successAnimation from '../../assets/success.json';
import * as congratulationAnimation from '../../assets/congratulation.json';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { connect } from 'react-redux';
import {
  nextQuestion,
  removePersist
} from '../../redux/actions/questionsActions';
import Header from '../../components/HeaderComponent';

const CorrectAnswer = props => {
  let history = useHistory();
  const { index, nextQuestion, point, removePersist } = props;

  const next = () => {
    nextQuestion();
    history.push('/quiz');
  };

  const defaultSuccessOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultCongratulationOptions = {
    loop: true,
    autoplay: true,
    animationData: congratulationAnimation.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const completedPage = (
    <div className="App">
      <Lottie options={defaultCongratulationOptions} />
      <Link to="/">
        <Button type="primary" onClick={removePersist}>
          Play Again
        </Button>
      </Link>
    </div>
  );

  const quizPage = (
    <>
      <div className="App">
        <Lottie options={defaultSuccessOptions} height={300} width={300} />
        <Button type="primary" onClick={next}>
          Next Question
        </Button>
      </div>
    </>
  );

  return (
    <>
      <Header questionNumber={index + 1} point={point} />
      {index === 9 ? completedPage : quizPage}
    </>
  );
};

const mapStateToProps = state => {
  const { index, point } = state.nextQuestion;

  return { index, point };
};

const mapDispatchToProps = {
  nextQuestion,
  removePersist
};

export default connect(mapStateToProps, mapDispatchToProps)(CorrectAnswer);
