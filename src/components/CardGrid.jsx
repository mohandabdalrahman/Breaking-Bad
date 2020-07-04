import React from 'react';
import CardItem from './CardItem';
const CardGrid = ({ items }) => {
  return (
    <div className="cards">
      {items.map((item) => (
        <CardItem item={item} key={item.char_id} />
      ))}
    </div>
  );
};

export default CardGrid;
