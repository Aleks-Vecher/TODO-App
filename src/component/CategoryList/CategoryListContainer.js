import { connect } from 'react-redux';
import CategoryList from './CategoryList';
import {
  showTodo,
  addSubCategory,
  deleteCategory,
  deleteSubCategory,
} from '../../store/reducers/categories';
import {
  getCategories,
  getSubCategories,
} from '../../store/selectors/categories';

const mapStateToProps = (state) => ({
  categories: getCategories(state),
  subCategories: getSubCategories(state),
});

const mapDispatchToProps = {
  showTodo,
  addSubCategory,
  deleteCategory,
  deleteSubCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
