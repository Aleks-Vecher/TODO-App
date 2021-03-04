const initialState = {
  active: false,
  subCategory: [],
  id: null,
  subCategories: false,
};

const ADD_CATEGORY = 'ADD_CATEGORY';

export const addCategory = (nameCategory, id) => ({
  type: ADD_CATEGORY,
  payload: {
    nameCategory,
    id,
  },
});

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        nameCategory: action.payload.nameCategory,
        id: action.payload.id,
      };
    default:
  }
  return state;
};
