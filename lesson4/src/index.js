import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/css/bootstrap.css"
import Lists from './List/ListPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Lists />
  </React.StrictMode>
);

