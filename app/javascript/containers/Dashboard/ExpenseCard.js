import {connect} from 'react-redux';
import ExpenseCard from '../../components/Dashboard/ExpenseCard';
// import { createExpenseCard } from '../../redux/actions';

const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
});

const mapDispatchToProps = dispatch => ({
  // createExpenseCard: (form) => dispatch(createExpenseCard(form)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseCard);
