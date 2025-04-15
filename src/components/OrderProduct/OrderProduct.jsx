import React from 'react';

const OrderProduct = ({ productData }) => {
  const { title, price, imageURI } = productData
  return (
    <li className="order-products__item order-product">
      <img
        className="order-product__img"
        src={imageURI}
        alt={title}
        width={100} height={100}
      />
      <p className="order-product__title">
        {title}
      </p>
      <span className="order-product__price">
        {price} руб.
      </span>
    </li>
  );
};

export default OrderProduct;
