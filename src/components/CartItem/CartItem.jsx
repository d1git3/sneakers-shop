import React from 'react';
import RemoveButton from '../ui/RemoveButton';

const CartItem = (props) => {

  return (
    <li className="cart__item cart-item">
      <img
        className="cart-item__img"
        src={props.imageURI}
        alt={props.title}
        width={70} height={70} loading="lazy"
      />
      <div className="cart-item__info">
        <p className="cart-item__info-title">{props.title}</p>
        <p className="cart-item__info-price">{props.price} руб.</p>
      </div>
      <RemoveButton
        itemData={props}
      />
    </li>
  );
};

export default CartItem;