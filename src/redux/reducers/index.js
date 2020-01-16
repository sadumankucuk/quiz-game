import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  getCategoriesReducer,
  changeCategoryIdReducer
} from './categoryReducers';
import {
  getQuestionListReducer,
  nextQuestionReducer
} from './questionsReducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['questions', 'nextQuestion']
};

const rootReducer = combineReducers({
  categories: getCategoriesReducer,
  questions: getQuestionListReducer,
  nextQuestion: nextQuestionReducer,
  changeCategoryId: changeCategoryIdReducer
});

export default persistReducer(persistConfig, rootReducer);
