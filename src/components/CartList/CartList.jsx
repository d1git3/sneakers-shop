import React from 'react';
import CartItem from '../CartItem/CartItem';
import { useCart } from '../../context/CartContext';

const CartList = () => {
  const { cartItems } = useCart();

  return (
    <ul className="cart__list">
      {cartItems.map(item => 
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          imageURI={item.imageURI}
        />
      )}
    </ul>
  );
};

export default CartList;
