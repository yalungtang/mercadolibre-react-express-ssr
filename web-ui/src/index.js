import React from 'react';
import ReactDOM from "react-dom";
import App from './components/App.js';

let container = document.getElementById('root');
let component = <App />;

ReactDOM.hydrate(component, container);
