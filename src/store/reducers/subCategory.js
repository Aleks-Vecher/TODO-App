const initialState = {
  active: false,
  completed: false,
  id: null,
};

const ADD_SUBCATEGORY = 'ADD_SUBCATEGORY';

const subCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBCATEGORY:
      return {
        ...state,
        category: action.payload.nameCategory,
        nameSubCategory: action.payload.nameSubCategory,
        id: action.payload.id,
      };
    default:
  }
  return state;
};

export default subCategoryReducer;
