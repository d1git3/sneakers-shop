import React from 'react';
import CheckIcon from '../ui/icons/CheckIcon';
import EmptyHeartIcon from '../ui/icons/EmptyHeartIcon'
import GradientHeartIcon from '../ui/icons/GradientHeartIcon'
import { useCart } from '../../context/CartContext';
import AddButton from '../ui/AddButton';
import { useFavorites } from '../../context/FavoritesContext';

const Card = ({ id, title, price, imageURI }) => {
  const { cartItems } = useCart();
  const { favouritesItems, handleFavoritesItemEvents } = useFavorites();

  const isAdded = cartItems.some(item => item.id === id)
  const isFavorite = favouritesItems.some(item => item.id === id)

  return (
    <li className="sneakers__item sneaker-card">
      <button
        className={"sneaker-card__fav-button square-button" + (isFavorite ? " square-button--liked" : " square-button--like")}
        onClick={() => handleFavoritesItemEvents({id, title, price, imageURI}, isFavorite)}
      >
        {isFavorite 
          ? <GradientHeartIcon />
          : <EmptyHeartIcon />}
      </button>
      <img
        className="sneaker-card__img"
        src={imageURI}
        alt={title}
        width={133} height={112} loading="lazy"
      />
      <p className="sneaker-card__title">
        {title}
      </p>
      <div className="sneaker-card__purchase">
        <div className="sneaker-card__info">
          <span className="sneaker-card__info-label">ЦЕНА:</span>
          <span className="sneaker-card__info-price"><b>{price} руб.</b></span>
        </div>
        <AddButton
          itemData={{id, title, price, imageURI}}
          isAdded={isAdded}
        >
          {isAdded && <CheckIcon/>}
        </AddButton>
      </div>
    </li>
  ); 
};

export default Card;