const initialState = {
  description: '',
  active: false,
  completed: false,
};

const ADD_TODO = 'ADD_TODO';

export const addTodo = (nameTodo, nameCategory) => ({
  type: ADD_TODO,
  payload: nameTodo,
  nameCategory,
});

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        nameTodo: action.payload,
        nameCategory: action.nameCategory,
      };
    default:
  }
  return state;
};
