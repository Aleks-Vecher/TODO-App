import { connect } from 'react-redux';
import Filter from './Filter';
import { sortCompleted, setSearchValue } from '../../store/reducers/filter';

const mapDispatchToProps = {
  sortCompleted,
  setSearchValue,
};

export default connect(null, mapDispatchToProps)(Filter);
