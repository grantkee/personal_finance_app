import {connect} from 'react-redux';
import {openModal} from '../redux/actions';
import Expenses from '../views/Expenses';

const mapStateToProps = (state) => ({
  expenseCategories: state.expenseCategories,
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
