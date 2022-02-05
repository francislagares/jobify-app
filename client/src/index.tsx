import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContextProvider } from 'contexts/app/AppContext';
import 'normalize.css';
import './assets/css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
