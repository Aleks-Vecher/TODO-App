// const initialState = {
//   category: {},
// };

// const SET_CATEGORY_NAME = 'SET_CATEGORY_NAME';
const ADD_CATEGORY = 'ADD_CATEGORY';

// export const setCategory = (nameCategory) => ({
//   type: SET_CATEGORY_NAME,
//   payload: nameCategory,
// });
export const addCategory = (nameCategory) => ({
  type: ADD_CATEGORY,
  payload: nameCategory,
});

export const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        name: action.payload,
      };
    default:
  }
  return state;
};
