import {connect} from 'react-redux';
import {openModal} from '../redux/actions';
import Expenses from '../views/Categories';

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
