import React from 'react'
import { Link } from 'react-router-dom';

const HeaderNavItem = ({ icon, label, href, type, onClick }) => {
  return (
    <li className="header__nav-item">
      {type === "button"
        ? (
          <button className="header__nav-button" onClick={onClick}>
            {icon}
            <span className="hidden-mobile">
              {label}
            </span>
          </button>
        )
        : (
          <Link className="header__nav-link" to={href}>
            {icon}
            <span className="hidden-mobile">
              {label}
            </span>
          </Link>
        )}
    </li>
  )
}

export default HeaderNavItem;
