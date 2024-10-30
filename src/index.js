// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StudentProvider } from './context/StudentContext';

ReactDOM.render(
  <StudentProvider>
    <App />
  </StudentProvider>,
  document.getElementById('root')
);
