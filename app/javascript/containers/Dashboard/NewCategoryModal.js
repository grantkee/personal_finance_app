import {connect} from 'react-redux';
import NewCategoryModal from '../../components/Dashboard/NewCategoryModal';
import {postCategory, closeModal} from '../../redux/actions';

const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
  expenseCategories: state.expenseCategories,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  postCategory: (form) => dispatch(postCategory(form)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCategoryModal);
