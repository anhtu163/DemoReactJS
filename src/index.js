import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from "redux";
import Reducer from "./Reducer/Reducer";
import {Provider} from "react-redux";
import Container from "./Container/Container";
const store = createStore( Reducer , applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
