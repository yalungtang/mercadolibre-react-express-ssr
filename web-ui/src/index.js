import React from 'react';
import ReactDOM from "react-dom";
import App from './components/App.js';

let container = document.getElementById('app');
let component = <App />;
ReactDOM.render(component, container);