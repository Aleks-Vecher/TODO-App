import { createSelector } from 'reselect';
import { deleteTodo } from '../reducers/todos';
import store from '..';

export const getTodo = (state) => state.todo.todo;
export const getTodoToggle = (state) => state.todo.editToggleTodo;
export const getEditTodo = (state) => state.todo.editTodo;
export const getFilter = (state) => state.filter.filter;
export const getSearchValue = (state) => state.filter.searchValue;

export const getCompletedTodo = createSelector(
  (state) => getTodo(state),
  (todo) =>
    todo.length &&
    Math.round(
      (todo.filter((item) => item.completed).length / todo.length) * 100,
    ),
);

export const getFilteredTodo = createSelector(
  (state) => getTodo(state),
  (state) => getFilter(state),
  (todo, filter) => {
    switch (filter) {
      case 'SHOW_ALL': {
        return todo;
      }
      case 'SHOW_COMPLETED': {
        return todo.filter((item) => item.completed);
      }
      default:
        return todo;
    }
  },
);

export const getFilteredTodoBySearchValue = createSelector(
  getFilteredTodo,
  (state) => getSearchValue(state),
  (todo, searchValue) =>
    todo.filter(
      (item) =>
        item.nameTodo
          .trim()
          .toLowerCase()
          .indexOf(searchValue.trim().toLowerCase()) > -1,
    ),
);

export const getTodoStateWithDelAction = createSelector(
  (state) => state.data.deleted,
  (deleted) => store.dispatch(deleteTodo(deleted)),
);
