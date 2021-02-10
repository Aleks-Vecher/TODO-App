const initialState = {
  completed: false,
  active: false,
  subCategory: null,
  todo: [{ nameTodo: 77777, active: false }],
};

// const SET_CATEGORY_NAME = 'SET_CATEGORY_NAME';
const ADD_CATEGORY = 'ADD_CATEGORY';

// export const setCategory = (nameCategory) => ({
//   type: SET_CATEGORY_NAME,
//   payload: nameCategory,
// });
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
