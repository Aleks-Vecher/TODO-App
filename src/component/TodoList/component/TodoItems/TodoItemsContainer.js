import { connect } from 'react-redux';
import TodoItems from './TodoItems';
import { getCategoryWithActiveStatus } from '../../../../store/selectors/categories';

import { getFilteredTodoBySearchValue } from '../../../../store/selectors/todo';
import { editTodo, setDoneTodo } from '../../../../store/reducers/todos';

const mapStateToProps = (state) => ({
  categories: getCategoryWithActiveStatus(state),
  todo: getFilteredTodoBySearchValue(state),
});

const mapDispatchToProps = {
  setDoneTodo,
  editTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems);
