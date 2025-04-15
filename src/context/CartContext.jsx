import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [ cartItems, setCartItems ] = useState([]);
  const [ cartVisibility, setCartVisibility ] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/cart")
      .then(response => setCartItems(response.data));
  }, [])

  function handleCartItemEvents(item, isAdded) {
    if (isAdded) {
      addToCart(item);
    } else {
      removeFromCart(item);
    }
  }

  const addToCart = async (newItem) => {
    try {
      await axios.post("http://localhost:3000/cart", newItem);
      setCartItems(items => [...items, newItem]);
    } catch (error) {
      alert("Не удалось добавить в корзину");
    }
  }

  const removeFromCart = async (itemToRemove) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${itemToRemove.id}`);
      setCartItems(items => [...items.filter(item => item.id !== itemToRemove.id)]);
    } catch (error) {
      alert("Не удалось удалить из корзины");
    }
  }

  return (
    <CartContext.Provider value={{
      cartItems,
      setCartItems,
      cartVisibility,
      setCartVisibility,
      handleCartItemEvents,
      addToCart,
      removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);