const initialState = {
  description: '',
  active: false,
  completed: false,
  id: null,
  nameSubCategory: '',
  idTodo: null,
};

const ADD_TODO = 'ADD_TODO';

export const addTodo = (
  nameTodo,
  nameCategory,
  id,
  nameSubCategory,
  idTodo,
) => ({
  type: ADD_TODO,
  payload: {
    nameTodo,
    nameCategory,
    id,
    nameSubCategory,
    idTodo,
  },
});

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        nameTodo: action.payload.nameTodo,
        nameCategory: action.payload.nameCategory,
        id: action.payload.id,
        nameSubCategory: action.payload.nameSubCategory,
        idTodo: action.payload.idTodo,
      };
    default:
  }
  return state;
};
