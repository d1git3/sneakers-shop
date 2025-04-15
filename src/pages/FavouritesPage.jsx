import React from 'react';
import Header from '../components/Header';
import { useCart } from '../context/CartContext';
import MainContent from '../components/MainContent';
import SectionFavorites from '../components/SectionFavourites';
import Cart from '../components/Cart';

const FavouritesPage = () => {
  const { cartVisibility } = useCart();

  return (
    <>
      <Header />
      <MainContent>
        <SectionFavorites />
      </MainContent>
      {cartVisibility && <Cart />}
    </>
  );
};

export default FavouritesPage;
