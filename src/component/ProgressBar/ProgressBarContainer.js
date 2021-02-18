import { connect } from 'react-redux';
import ProgBar from './ProgressBar';
import { getCompletedTodo } from '../../store/selectors/todo';

const mapStateToProps = (state) => ({
  todo: getCompletedTodo(state),
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps, null)(ProgBar);
