import * as actionTypes from './actionTypes';
import axios from 'axios';
import shuffle from 'shuffle-array';

export const getQuestions = categoryId => {
  return dispatch => {
    dispatch({ type: actionTypes.GET_QUESTIONS });
    axios
      .get(
        `https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple`
      )
      .then(response => {
        const formattedQuestions = formatAPIQuizData(response.data.results);
        dispatch({
          type: actionTypes.GET_QUESTIONS_SUCCESS,
          payload: formattedQuestions
        });
      })
      .catch(error =>
        dispatch({ type: actionTypes.GET_QUESTIONS_FAILED, payload: error })
      );
  };
};

const decodeHTML = html => {
  var txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

const formatOptions = options => {
  return options.map(option => {
    return { text: decodeHTML(option.trim()) };
  });
};
const combineAllOptions = question =>
  question.correct_answer.split(' ,').concat(question.incorrect_answers);

const formatQuestion = (question, index) => {
  return {
    id: index,
    category: question.category,
    type: question.type,
    difficulty: question.difficulty,
    text: decodeHTML(question.question.trim()),
    options: shuffle(formatOptions(combineAllOptions(question))),
    correct: decodeHTML(question.correct_answer.trim()),
    incorrect: question.incorrect_answers
  };
};

const formatAPIQuizData = questions => {
  return questions.map((question, index) => {
    return formatQuestion(question, index);
  });
};

export const nextQuestion = () => {
  return dispatch => {
    dispatch({ type: actionTypes.NEXT_QUESTION });
  };
};

export const removePersist = () => {
  return dispatch => {
    dispatch({ type: actionTypes.REMOVE_PERSIST });
  };
};
