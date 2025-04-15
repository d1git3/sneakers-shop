import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link className="header__logo logo" to="/">
      <img
        className="logo__img"
        src="/images/logo.svg"
        alt="Best Sneakers"
        width={40} height={40} loading="eager"
      />
      <div className="logo__info">
        <h3 className="logo__info-title">
          BEST SNEAKERS
        </h3>
        <p className="logo__info-subtitle">
          Магазин лучших кроссовок
        </p>
      </div>
    </Link>
  );
};

export default Logo;
