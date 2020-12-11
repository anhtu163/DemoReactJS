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
import throttle from "lodash/throttle";


const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');

        if(serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);

        localStorage.setItem('state', serializedState);
    } catch (e) {
        // Ignore write errors;
    }
};

const peristedState = loadState();

const store = createStore( Reducer ,peristedState, applyMiddleware(thunk));

store.subscribe(throttle(()=>{
    saveState(store.getState());
},1000));

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