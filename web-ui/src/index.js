import React from 'react';
import ReactDOM from "react-dom";
import App from './components/App.js';
import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

let container = document.getElementById('root');
const initialProps = window.__INITIAL_STATE;
console.log('initial props', initialProps)
let component = (
  <Router history={history} >
    <App {...initialProps} />
  </Router>
);

ReactDOM.hydrate(component, container);
