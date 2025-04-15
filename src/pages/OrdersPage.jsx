import React from 'react';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';
import MainContent from '../components/MainContent';
import Cart from '../components/Cart';
import SectionOrders from '../components/SectionOrders';

const OrdersPage = () => {
  const { cartVisibility } = useCart();

  return (
    <>
      <Header />
      <MainContent>
        <SectionOrders />
      </MainContent>
      {cartVisibility && <Cart />}
    </>
  );
};

export default OrdersPage;