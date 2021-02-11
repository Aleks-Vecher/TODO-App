import { categoryReducer } from './category';
import { todoReducer } from './todo';

const initialState = {
  categories: [],
  todo: [],
};

const ADD_CATEGORY = 'ADD_CATEGORY';
const SHOW_TODO = 'SHOW_TODO';
const ADD_TODO = 'ADD_TODO';

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
    case ADD_CATEGORY: {
      const nextCategories = state.categories;
      nextCategories.push(categoryReducer(undefined, action));
      return {
        categories: [...nextCategories],
      };
    }
    case SHOW_TODO: {
      const nextTodoItems = Array.from(state.categories);
      nextTodoItems.forEach((category) => {
        const categoryNew = category;
        categoryNew.active =
          action.payload === category.nameCategory && !category.active;
        return categoryNew;
      });
      return {
        ...state,
        categories: [...nextTodoItems],
      };
    }
    case ADD_TODO: {
      const nextCategories = state.categories.map((category) => {
        if (category.nameCategory === action.nameCategory) {
          return {
            ...category,
            todo: [...category.todo, todoReducer(undefined, action)],
          };
        }
        return category;
      });
      return {
        ...state,
        categories: [...nextCategories],
      };
    }
    default:
  }
  return state;
};
