import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import App from './App.jsx';
import './index.css';
import { FavoritesProvider } from './context/FavoritesContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
      <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);