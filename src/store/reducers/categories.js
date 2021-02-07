import { categoryReducer } from './category';

const initialState = {
  categories: [],
};

const ADD_CATEGORY = 'ADD_CATEGORY';

export const addCategory = (nameCategory) => ({
  type: ADD_CATEGORY,
  payload: nameCategory,
});

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, categoryReducer({}, action)],
      };
    default:
  }
  return state;
};
