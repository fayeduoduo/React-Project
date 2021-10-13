import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import CartContextProvider from './Components/Contexts/Context';

ReactDOM.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>,
  document.getElementById('root')
);
