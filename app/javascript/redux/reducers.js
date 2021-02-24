import { combineReducers } from 'redux';
import initialState from './state';

const isOpen = (state = initialState, action) => {
  switch(action.type){
    case 'OPEN_MODAL':
      return action.value;
    case 'CLOSE_MODAL':
      return action.value;
    default:
      return state;
  }
};

const expenseCategories = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE_CAT':
      return [...state, action.value];
    default:
      return state;
  }
};

// const user = (state = initialState, action) => {
//   switch(action.type) {
//     case 'SIGNUP':
//       return {...state, signup: true};
//     case 'LOGIN':
//       return {username: action.username, isOn: action.value, signup: false};
//     case 'LOGOUT':
//       localStorage.removeItem('token');
//       return {...state, username: '', isOn: action.value, signup: false};
//     default:
//       return state;
//   }
// }

export default combineReducers({
  isOpen,
  expenseCategories,
});
