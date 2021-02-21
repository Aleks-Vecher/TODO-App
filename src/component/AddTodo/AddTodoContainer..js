import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import { addTodo } from '../../store/reducers/todo';
import { getCategoryWithActiveStatus } from '../../store/selectors/categories';

const mapStateToProps = (state) => ({
  categories: getCategoryWithActiveStatus(state),
});

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
