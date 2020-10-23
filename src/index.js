import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/@mdi/font/css/materialdesignicons.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import App from './App';
import "./styles/style.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

