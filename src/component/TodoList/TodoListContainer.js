import { connect } from 'react-redux';
import TodoList from './TodoList';
import getCategories from '../../store/selectors/categories';
// import { addCategory } from '../../store/reducers/categories';

const mapStateToProps = (state) => ({
  categories: getCategories(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
