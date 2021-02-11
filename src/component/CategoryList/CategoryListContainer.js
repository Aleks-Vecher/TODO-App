import { connect } from 'react-redux';
import CategoryList from './CategoryList';
import { showTodo } from '../../store/reducers/categories';
// import { addCategory } from '../../store/reducers/categories';

const mapStateToProps = (state) => ({
  categories: state.data.categories,
});

const mapDispatchToProps = {
  showTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
