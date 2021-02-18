import { createSelector } from 'reselect';

export const getTodo = (state) => state.todo.todo;
export const getTodoToggle = (state) => state.todo.editToggleTodo;
export const getEditTodo = (state) => state.todo.editTodo;

export const getCompletedTodo = createSelector(
  (state) => getTodo(state),
  (todo) =>
    Math.round(
      (todo.filter((item) => item.completed).length / todo.length) * 100,
    ),
);
