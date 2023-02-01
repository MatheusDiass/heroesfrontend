import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './styles.sass';
//import Login from './presentation/pages/login';
import Header from './presentation/components/header';
import Navigation from './presentation/components/navigation';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Navigation />
    <main>{/* <Login /> */}</main>
  </React.StrictMode>
);
