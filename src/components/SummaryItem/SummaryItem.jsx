import React from 'react';

const SummaryItem = ({ label, value }) => {
  return (
    <div className="summary__item">
      <span className="summary__label">{label}</span>
      <div className="summary__separator"></div>
      <span className="summary__value">{value} руб.</span>
    </div>
  );
};

export default SummaryItem;
