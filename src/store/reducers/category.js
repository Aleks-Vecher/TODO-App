const initialState = {
  active: false,
  subCategory: [],
  todo: [],
};

const ADD_CATEGORY = 'ADD_CATEGORY';

export const addCategory = (nameCategory) => ({
  type: ADD_CATEGORY,
  payload: nameCategory,
  completed: false,
});

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        nameCategory: action.payload,
      };
    default:
  }
  return state;
};
