import React from 'react';
import ReactDOM from "react-dom";
import App from './components/App.js';

const $container = document.getElementById("app-container");
$container ? ReactDOM.render(<App />, $container) : false;
