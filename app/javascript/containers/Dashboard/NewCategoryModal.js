import {connect} from 'react-redux';
import NewCategoryModal from '../../components/Dashboard/NewCategoryModal';
import {postExpenseCat, closeModal} from '../../redux/actions';

const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
  expenseCategories: state.expenseCategories,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  postExpenseCat: (form) => dispatch(postExpenseCat(form)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCategoryModal);
