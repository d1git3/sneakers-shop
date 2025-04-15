import React from 'react';
import OrderProducts from '../OrderProducts';

const Order = ({ id, products }) => {
  return (
    <li className="orders__item order">
      <h2 className="order__id">
        Заказ №: {id}
      </h2>
      <OrderProducts products={products} />
    </li>
  );
};

export default Order;