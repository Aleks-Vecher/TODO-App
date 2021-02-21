import { connect } from 'react-redux';
import { addCategory } from '../../store/reducers/categories';
import AddCategory from './AddCategory';

const mapDispatchToProps = {
  addCategory,
};
export default connect(null, mapDispatchToProps)(AddCategory);
