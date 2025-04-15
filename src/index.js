import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/main.scss';
import App from './App';
import { ItemsProvider } from './context/ItemsContext';
import { SearchProvider } from './context/SearchContext';
import { CartProvider } from './context/CartContext';
import { FavouritesProvider } from './context/FavoritesContext';
import { OrdersProvider } from './context/OrdersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ItemsProvider>
      <SearchProvider>
        <FavouritesProvider>
          <OrdersProvider>
            <CartProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </CartProvider>
          </OrdersProvider>
        </FavouritesProvider>
      </SearchProvider>
    </ItemsProvider>
  </React.StrictMode>
);