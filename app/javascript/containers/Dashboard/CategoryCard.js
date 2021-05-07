import {connect} from 'react-redux';
import CategoryCard from '../../components/Dashboard/CategoryCard';
// import { createExpenseCard } from '../../redux/actions';

const mapStateToProps = (state) => ({
  isOpen: state.isOpen,
});

const mapDispatchToProps = dispatch => ({
  // createExpenseCard: (form) => dispatch(createExpenseCard(form)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCard);
