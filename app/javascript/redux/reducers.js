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

export default combineReducers({
  isOpen,
});
