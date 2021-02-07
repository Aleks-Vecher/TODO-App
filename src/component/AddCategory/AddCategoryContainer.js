import { connect } from 'react-redux';
import { addCategory } from '../../store/reducers/categories';
import AddCategory from './AddCategory';

const mapStateToProps = (state) => ({
  categories: state.data.categories,
});

const mapDispatchToProps = {
  addCategory,
};
export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
