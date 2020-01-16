import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getCategories = () => {
  return dispatch => {
    dispatch({ type: actionTypes.GET_CATEGORIES });
    axios
      .get('https://opentdb.com/api_category.php')
      .then(response =>
        dispatch({
          type: actionTypes.GET_CATEGORIES_SUCCESS,
          payload: response.data.trivia_categories
        })
      )
      .catch(error =>
        dispatch({ type: actionTypes.GET_CATEGORIES_FAILED, payload: error })
      );
  };
};

export const changeCategoryId = categoryId => {
  return dispatch => {
    dispatch({ type: actionTypes.CHANGE_CATEGORY_ID, payload: categoryId });
  };
};
