import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './styles.sass';
import Login from './presentation/pages/login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <main>
      <Login />
    </main>
  </React.StrictMode>
);
