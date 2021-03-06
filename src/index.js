// Application entrypoint.

// Load up the application styles
require("../styles/app.sass");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render((
  <App />
), document.getElementById('the-universe'));
