import React from 'react';
import ReactDOM from "react-dom";
import App from './components/App.js';

let container = document.getElementById('root');
const initialProps = JSON.parse(container.getAttribute('data-init'));
let component = <App {...initialProps} />;

ReactDOM.hydrate(component, container);
