import { connect } from 'react-redux';
import TodoList from './TodoList';
import { getCategoryWithActiveStatus } from '../../store/selectors/categories';
import {
  getFilteredTodoBySearchValue,
  getTodoToggle,
  getEditTodo,
} from '../../store/selectors/todo';
import {
  editTodoToggle,
  editTodo,
  setTextarea,
  setInput,
  saveTodoItem,
  cancelTodoItem,
  toggleDoneTodo,
  setDoneTodo,
} from '../../store/reducers/todos';

const mapStateToProps = (state) => ({
  categories: getCategoryWithActiveStatus(state),
  todo: getFilteredTodoBySearchValue(state),
  todoToggle: getTodoToggle(state),
  editTodoItem: getEditTodo(state),
});

const mapDispatchToProps = {
  editTodoToggle,
  editTodo,
  setTextarea,
  setInput,
  saveTodoItem,
  cancelTodoItem,
  toggleDoneTodo,
  setDoneTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
