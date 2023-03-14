import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import { CartProvider } from './components/contexts/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>   
  </React.StrictMode>
);

