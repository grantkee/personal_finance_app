import {connect} from 'react-redux';
import NewCategoryModal from '../../components/Dashboard/NewCategoryModal';
import {addExpenseCat, closeModal} from '../../redux/actions';

const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
  expenseCategories: state.expenseCategories,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  addExpenseCat: (form) => dispatch(addExpenseCat(form)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCategoryModal);
