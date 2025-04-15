import React from 'react';
import OrderProduct from '../OrderProduct/OrderProduct';

const OrderProducts = ({ products }) => {
  return (
    <ul className="order__items order-products">
      {products.map(product => 
        <OrderProduct key={product.id} productData={product} />
      )}
    </ul>
  );
};

export default OrderProducts;
