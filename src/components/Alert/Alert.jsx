import React from 'react';
import MainButton from '../ui/MainButton';

const Alert = ({ title, description, imageURI, imageSize, onClick }) => {
  return (
    <div className="alert">
      <img
        className="alert__img"
        src={imageURI}
        alt=""
        width={imageSize} height={imageSize} loading='lazy'
      />
      <h3 className="alert__title">{title}</h3>
      <p className='alert__description'>{description}</p>
      <MainButton type="alert" onClick={onClick}>
        Вернуться назад
      </MainButton>
    </div>
  );
};

export default Alert;
