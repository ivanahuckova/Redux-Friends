import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { rootReducer } from './reducers/index';
import * as types from './actions/actionTypes';

const middlewareToSaveUserToken = store => next => action => {
  if (action.type === types.LOGIN) {
    localStorage.setItem('token', action.payload);
  }
  next(action);
};

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger, thunk, middlewareToSaveUserToken),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
