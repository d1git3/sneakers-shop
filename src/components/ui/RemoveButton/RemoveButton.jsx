import React from 'react';
import { useCart } from '../../../context/CartContext';

const RemoveButton = ({ itemData }) => {
  const { removeFromCart } = useCart();

  return (
    <button 
      className="cart-item__button square-button square-button--remove"
      onClick={() => removeFromCart(itemData)}
    >
    </button>
  );
};

export default RemoveButton;
