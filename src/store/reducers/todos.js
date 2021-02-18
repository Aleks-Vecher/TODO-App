import { todoReducer } from './todo';

const initialState = {
  todo: [],
  editToggleTodo: false,
  editTodo: {},
};
const ADD_TODO = 'ADD_TODO';
const EDIT_TODO_TOGGLE = 'EDIT_TODO_TOGGLE';
const EDIT_TODO = 'EDIT_TODO';
const SET_TEXTAREA_VALUE = 'SET_TEXTAREA_VALUE';
const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
const SAVE_TODO_ITEM = 'SAVE_TODO_ITEM';
const CANCEL_SAVE_TODO_ITEM = 'CANCEL_SAVE_TODO_ITEM';
const TOGGLE_DONE_TODO = 'TOGGLE_DONE_TODO';
const SET_DONE_TODO = 'SET_DONE_TODO';

export const editTodo = (id) => ({
  type: EDIT_TODO,
  payload: id,
});

export const editTodoToggle = () => ({
  type: EDIT_TODO_TOGGLE,
});

export const setTextarea = (description) => ({
  type: SET_TEXTAREA_VALUE,
  payload: description,
});

export const setInput = (name) => ({
  type: SET_INPUT_VALUE,
  payload: name,
});

export const saveTodoItem = () => ({
  type: SAVE_TODO_ITEM,
});

export const cancelTodoItem = () => ({
  type: CANCEL_SAVE_TODO_ITEM,
});

export const toggleDoneTodo = (checked) => ({
  type: TOGGLE_DONE_TODO,
  payload: checked,
});

export const setDoneTodo = (id) => ({
  type: SET_DONE_TODO,
  payload: id,
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
      const nextEditTodo = state.todo.filter(
        (item) => action.payload === item.idTodo,
      );
      return {
        ...state,
        editTodo: { ...state.editTodo, ...nextEditTodo[0] },
      };
    }
    case SET_TEXTAREA_VALUE: {
      const nextEditTodo = state.editTodo;
      return {
        ...state,
        editTodo: { ...nextEditTodo, description: action.payload },
      };
    }
    case SET_INPUT_VALUE: {
      const nextEditTodo = state.editTodo;
      return {
        ...state,
        editTodo: { ...nextEditTodo, nameTodo: action.payload },
      };
    }
    case SAVE_TODO_ITEM: {
      const { idTodo } = state.editTodo;
      const nextEditTodo = state.editTodo;
      const nextTodo = state.todo.filter((item) => item.idTodo !== idTodo);
      return {
        ...state,
        todo: [...nextTodo, nextEditTodo],
        editTodo: {},
      };
    }
    case CANCEL_SAVE_TODO_ITEM: {
      return {
        ...state,
        editTodo: {},
      };
    }
    case TOGGLE_DONE_TODO: {
      const nextEditTodo = state.editTodo;
      let { completed } = nextEditTodo;
      completed = action.payload;
      return {
        ...state,
        editTodo: { ...nextEditTodo, completed },
      };
    }
    case SET_DONE_TODO: {
      return {
        ...state,
        todo: state.todo.map((item) => {
          if (action.payload !== item.idTodo) {
            return item;
          }
          return {
            ...item,
            completed: !item.completed,
          };
        }),
      };
    }
    default:
  }
  return state;
};
