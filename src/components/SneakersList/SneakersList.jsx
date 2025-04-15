import React from 'react';
import Card from '../Card';

const SneakersList = ({ items }) => {
  return (
    <ul className={"sneakers__list" + (items.length < 4 ? ` cols-${items.length}` : "")}>
      {items.map(item => 
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          imageURI={item.imageURI}
        />
      )}
    </ul>
  );
};

export default SneakersList;
