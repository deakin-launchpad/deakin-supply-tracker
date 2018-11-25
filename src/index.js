import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import BrowserRouter  from 'helpers/router';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from 'reducers';

export const baseURL = process.env.REACT_APP_BASE_URL + "/api";

export const client = axios.create({
  baseURL: baseURL,
  responseType: 'json'
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(axiosMiddleware(client))
  
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);
// const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)));

render(
  <Provider store={store}>
    <BrowserRouter>
      <App client={client} />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
