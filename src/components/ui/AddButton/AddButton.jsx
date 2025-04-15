import React from 'react';
import { useCart } from '../../../context/CartContext';

const AddButton = ({ children, itemData, isAdded }) => {
  const { handleCartItemEvents } = useCart();

  return (
    <button
      className={"square-button sneaker-card__add-button " + (isAdded ? "square-button--added" : "square-button--add")}
      onClick={() => {
        handleCartItemEvents(itemData, !isAdded)
      }}
    >
      {children}
    </button>
  );
};

export default AddButton;