import { categoryReducer } from './category';

const initialState = {
  categories: [],
  todo: [],
};

const ADD_CATEGORY = 'ADD_CATEGORY';
const SHOW_TODO = 'SHOW_TODO';

export const addCategory = (nameCategory) => ({
  type: ADD_CATEGORY,
  payload: nameCategory,
  completed: false,
});

export const showTodo = (nameCategory) => ({
  type: SHOW_TODO,
  payload: nameCategory,
});

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, categoryReducer(undefined, action)],
      };
    case SHOW_TODO: {
      const nextTodoItems = Array.from(state.categories);
      nextTodoItems.map((category) => ({
        ...category,
        active: action.payload === category.nameCategory && !category.active,
      }));
      return {
        ...state,
        categories: [...nextTodoItems],
      };
    }
    default:
  }
  return state;
};
