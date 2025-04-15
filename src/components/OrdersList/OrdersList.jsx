import React from 'react';
import Order from '../Order';

const OrdersList = ({ items }) => {
  return (
    <ul className="orders__list">
      {items.map(({ id, items }) => 
        <Order key={id} id={id} products={items} />
      )}
    </ul>
  );
};

export default OrdersList;
