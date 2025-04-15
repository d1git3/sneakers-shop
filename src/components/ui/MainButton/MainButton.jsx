import React from 'react';

const MainButton = ({children, type = null, ...props }) => {
  return (
    <button 
      className={"button" + (type ? ` button--${type}`: "")}
      {...props}
    >
      {children}
    </button>
  );
};

export default MainButton;
