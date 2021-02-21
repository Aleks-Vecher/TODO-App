import { connect } from 'react-redux';
import CategoryList from './CategoryList';
import {
  showTodo,
  addSubCategory,
  deleteCategory,
  deleteSubCategory,
  editNameCategory,
  editNameSubCategory,
} from '../../store/reducers/categories';
import { deleteCategoryWithTodo } from '../../store/reducers/todos';
import {
  getCategories,
  getSubCategories,
} from '../../store/selectors/categories';
import { getTodoStateWithDelAction } from '../../store/selectors/todo';

const mapStateToProps = (state) => ({
  categories: getCategories(state),
  subCategories: getSubCategories(state),
  deleted: getTodoStateWithDelAction(state),
});

const mapDispatchToProps = {
  showTodo,
  addSubCategory,
  deleteCategory,
  deleteSubCategory,
  deleteCategoryWithTodo,
  editNameCategory,
  editNameSubCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
