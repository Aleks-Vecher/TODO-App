import { connect } from 'react-redux';
import EditTodo from './EditTodo';

import { getEditTodo } from '../../../../store/selectors/todo';
import {
  setTextarea,
  setInput,
  saveTodoItem,
  cancelTodoItem,
  toggleDoneTodo,
} from '../../../../store/reducers/todos';

const mapStateToProps = (state) => ({
  editTodoItem: getEditTodo(state),
});

const mapDispatchToProps = {
  setTextarea,
  setInput,
  saveTodoItem,
  cancelTodoItem,
  toggleDoneTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);
