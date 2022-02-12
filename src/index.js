import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global.css';

import { BrowserRouter as Routes } from 'react-router-dom';
import { ResultProvider } from './context/ResultContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ResultProvider>
      <Routes>
        <App />
      </Routes>
    </ResultProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
