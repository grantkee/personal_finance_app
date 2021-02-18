import React from "react";
import Routes from "../routes/Index";
import { Provider } from 'react-redux';
import store from '../redux/store';

const App = (props) => {
  return (
    <Provider store={store}>
      {Routes}
    </Provider>
  );
};

export default App;
