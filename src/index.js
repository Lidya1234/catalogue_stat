import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Route from './routes/Route';
import store from './reducers/index';

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <Route />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
