import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './QuestionPage.css';
import HeaderComponent from '../../components/HeaderComponent';
import { Card, Row, Col, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import { changeCategoryId } from '../../redux/actions/categoryActions';
import {
  getQuestions,
  nextQuestion
} from '../../redux/actions/questionsActions';

const QuestionPage = props => {
  let history = useHistory();
  const {
    getQuestions,
    questions,
    index,
    categoryId,
    point,
    loadingQuestions
  } = props;
  const currentQuestion = questions && questions[index];

  useEffect(() => {
    if (index === 0) {
      getQuestions(categoryId);
    }
  }, [getQuestions, categoryId, index]);

  const nextStep = event => {
    if (event.target.value === currentQuestion.correct) {
      history.push('/correctanswer');
    } else {
      history.push('/wronganswer');
    }
  };

  return (
    <>
      <HeaderComponent questionNumber={index + 1} point={point - 100} />
      {loadingQuestions ? (
        <Icon type="loading" className="icon" />
      ) : (
        <Row>
          <Col span={6} />
          <Col span={12}>
            <Card
              title={currentQuestion.text}
              bordered={false}
              className="card"
            >
              {currentQuestion &&
                currentQuestion.options.map((option, index) => (
                  <p key={index}>
                    <Button
                      size="large"
                      value={option.text}
                      block
                      onClick={nextStep}
                    >
                      {option.text}
                    </Button>
                  </p>
                ))}
            </Card>
          </Col>
          <Col span={6} />
        </Row>
      )}
    </>
  );
};

const mapStateToProps = state => {
  const { questions, loadingQuestions } = state.questions;
  const { index, point } = state.nextQuestion;
  const { categoryId } = state.changeCategoryId;

  return { questions, index, categoryId, point, loadingQuestions };
};

const mapDispatchToProps = {
  getQuestions,
  nextQuestion,
  changeCategoryId
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
