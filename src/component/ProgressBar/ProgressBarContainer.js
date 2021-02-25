import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';
import { getCompletedTodo } from '../../store/selectors/todo';

const mapStateToProps = (state) => ({
  todo: getCompletedTodo(state),
});

export default connect(mapStateToProps, null)(ProgressBar);
