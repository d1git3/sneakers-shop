import React from 'react';
import HeaderNavItem from '../HeaderNavItem';

const HeaderNav = ({ items }) => {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {items.map(item => 
          <HeaderNavItem key={item.label} {...item} />
        )}
      </ul>
    </nav>
  );
};

export default HeaderNav;
