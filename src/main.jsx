import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const path = process.env.NODE_ENV === 'production' ? '/candour' : '';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={path}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
