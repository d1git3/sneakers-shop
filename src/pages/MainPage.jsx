import React from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import SectionSneakers from '../components/SectionSneakers';
import Cart from '../components/Cart';
import { useCart } from '../context/CartContext';

const MainPage = () => {
  const { cartVisibility } = useCart();

  return (
    <>
      <Header />
      <MainContent>
        <SectionSneakers />
      </MainContent>
      {cartVisibility && <Cart />}
    </>
  );
};

export default MainPage;;
