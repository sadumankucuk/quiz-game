import * as actionTypes from '../actions/actionTypes';

const questionListInitialState = {
  loadingQuestions: false,
  questions: '',
  errorQuestions: false
};

const nextQuestionInitialState = {
  index: 0,
  point: 100
};

export const getQuestionListReducer = (
  state = questionListInitialState,
  action
) => {
  switch (action.type) {
    case actionTypes.GET_QUESTIONS:
      return {
        ...state,
        loadingQuestions: true
      };
    case actionTypes.GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        loadingQuestions: false,
        questions: action.payload
      };
    case actionTypes.GET_QUESTIONS_FAILED:
      return {
        ...state,
        errorQuestions: action.payload
      };
    case actionTypes.REMOVE_PERSIST:
      return {
        ...state,
        loadingQuestions: false,
        questions: '',
        errorQuestions: false
      };
    default:
      return state;
  }
};

export const nextQuestionReducer = (
  state = nextQuestionInitialState,
  action
) => {
  switch (action.type) {
    case actionTypes.NEXT_QUESTION:
      return {
        ...state,
        index: state.index + 1,
        point: state.point + 100
      };
    case actionTypes.REMOVE_PERSIST:
      return {
        ...state,
        index: 0,
        point: 100
      };
    default:
      return state;
  }
};
