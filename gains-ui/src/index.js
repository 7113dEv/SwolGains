import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.js';
import './index.css';
import { MainProvider } from './utilities/context/MainContext.jsx';

ReactDOM.render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
