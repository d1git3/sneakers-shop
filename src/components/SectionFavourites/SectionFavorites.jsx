import React from 'react';
import { useNavigate } from 'react-router-dom';
import SneakersList from '../SneakersList';
import Alert from '../Alert';
import { useFavorites } from '../../context/FavoritesContext';

const SectionFavorites = () => {
  const { favouritesItems } = useFavorites();
  const navigate = useNavigate();

  return (
    <section className="sneakers container">
      {favouritesItems.length > 0
        ? (
          <>
            <div className="sneakers__header">
              <h1 className="sneakers__heading">
                Мои закладки
              </h1>
            </div>
            <SneakersList items={favouritesItems} />
          </>
        )
        : <Alert
            title="Закладок нет :("
            description="Вы ничего не добавляли в закладки"
            imageURI="/images/empty-favourites.png"
            imageSize={70}
            onClick={() => navigate("/")}
          />}
    </section>
  );
};

export default SectionFavorites;
