import {connect} from 'react-redux';
import Dashboard from '../';
import {openModal} from '../redux/actions';

const mapStateToProps = (state) => ({
  expenseCategories: state.expenseCategories,
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
