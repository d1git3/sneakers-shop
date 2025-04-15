import React from 'react';
import SummaryItem from '../SummaryItem';

const Summary = ({ items }) => {
  return (
    <div className="cart__summary summary">
      {items.map(item =>
        <SummaryItem
          key={item.label}
          label={item.label}
          value={item.value}
        />
      )}
    </div>
  );
};

export default Summary;
