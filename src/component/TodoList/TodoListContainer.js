import { connect } from 'react-redux';
import TodoList from './TodoList';
import { getCategories } from '../../store/selectors/categories';
import {
  getTodo,
  getTodoToggle,
  getEditTodo,
} from '../../store/selectors/todo';
import { editTodoToggle, editTodo } from '../../store/reducers/todos';
// import { addCategory } from '../../store/reducers/categories';

const mapStateToProps = (state) => ({
  categories: getCategories(state),
  todo: getTodo(state),
  todoToggle: getTodoToggle(state),
  editTodoItem: getEditTodo(state),
});

const mapDispatchToProps = {
  editTodoToggle,
  editTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
