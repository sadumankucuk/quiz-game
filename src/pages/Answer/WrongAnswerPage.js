import React from 'react';
import '../Home/WelcomePage.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Lottie from 'react-lottie';
import * as wrongAnimation from '../../assets/wrong.json';
import HeaderComponent from '../../components/HeaderComponent';

import { connect } from 'react-redux';
import {
  nextQuestion,
  removePersist
} from '../../redux/actions/questionsActions';

const WrongAnswerPage = ({ index, point, removePersist }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: wrongAnimation.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <HeaderComponent questionNumber={index + 1} point={point} />
      <div className="App">
        <Lottie options={defaultOptions} height={300} width={300} />
        <Link to="/">
          <Button type="primary" onClick={removePersist} style={{ width: 300 }}>
            Try Again
          </Button>
        </Link>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(WrongAnswerPage);
