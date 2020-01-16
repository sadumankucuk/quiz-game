import * as actionTypes from '../actions/actionTypes';

const categoryListInitialState = {
  loadingCategoryList: false,
  categories: '',
  errorCategoryList: false
};

const categoryIdInitialState = {
  categoryId: 0
};

export const getCategoriesReducer = (
  state = categoryListInitialState,
  action
) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
        loadingCategoryList: true
      };
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loadingCategoryList: false,
        categories: action.payload
      };
    case actionTypes.GET_CATEGORIES_FAILED:
      return {
        ...state,
        errorCategoryList: action.payload
      };
    default:
      return state;
  }
};

export const changeCategoryIdReducer = (
  state = categoryIdInitialState,
  action
) => {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY_ID:
      return {
        ...state,
        categoryId: action.payload
      };
    default:
      return state;
  }
};
