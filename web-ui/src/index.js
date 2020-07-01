import React from 'react';
import ReactDOM from "react-dom";
import App from './components/App.js';
import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

let container = document.getElementById('root');
const initialProps = JSON.parse(container.getAttribute('data-init'));
let component = (
  <Router history={history} >
    <App {...initialProps} />
  </Router>
);

ReactDOM.hydrate(component, container);
