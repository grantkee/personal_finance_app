import {connect} from 'react-redux';
import Dashboard from '../views/Dashboard-main/Dashboard';
import {openModal} from '../redux/actions';

const mapStateToProps = (state) => ({
  expenseCategories: state.expenseCategories,
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
