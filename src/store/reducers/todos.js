import { todoReducer } from './todo';

const initialState = {
  todo: [],
};
const ADD_TODO = 'ADD_TODO';

export const addTodo = (nameTodo, nameCategory) => ({
  type: ADD_TODO,
  payload: nameTodo,
  nameCategory,
});

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todo: [...state.todo, todoReducer(undefined, action)],
      };
    }
    default:
  }
  return state;
};
