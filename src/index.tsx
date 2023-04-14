import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { tlotrStore } from './states/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={tlotrStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
