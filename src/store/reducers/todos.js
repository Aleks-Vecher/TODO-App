import { todoReducer } from './todo';

const initialState = {
  todo: [],
  editToggleTodo: false,
  editTodo: {},
};
const ADD_TODO = 'ADD_TODO';
const EDIT_TODO_TOGGLE = 'EDIT_TODO_TOGGLE';
const EDIT_TODO = 'EDIT_TODO';

export const editTodo = (id) => ({
  type: EDIT_TODO,
  payload: id,
});

export const editTodoToggle = () => ({
  type: EDIT_TODO_TOGGLE,
});

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todo: [...state.todo, todoReducer(undefined, action)],
      };
    }
    case EDIT_TODO_TOGGLE: {
      let nextEditTodo = state.editToggleTodo;
      nextEditTodo = !nextEditTodo;
      return {
        ...state,
        editToggleTodo: nextEditTodo,
      };
    }
    case EDIT_TODO: {
      const nextEditTodo = state.todo.filter((item) => action.id !== item.id);
      return {
        ...state,
        editTodo: { ...state.editTodo, ...nextEditTodo[0] },
      };
    }
    default:
  }
  return state;
};
