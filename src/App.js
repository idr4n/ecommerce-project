import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Routes from './routes';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
