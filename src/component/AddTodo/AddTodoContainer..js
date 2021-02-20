import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import { addTodo } from '../../store/reducers/todo';

const mapStateToProps = (state) => ({
  todo: state.data.todo,
  categories: state.data.categories,
});

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
