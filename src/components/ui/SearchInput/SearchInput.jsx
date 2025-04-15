import React from 'react';
import { useSearch } from '../../../context/SearchContext';

const SearchInput = () => {
  const { setSearchValue } = useSearch();

  return (
    <div className="sneakers__header-search">
      <img
        className="sneakers__header-search-icon"
        src="/icons/search.svg"
        alt="Search"
      />
      <input
        className="sneakers__header-search-input" 
        type="text"
        placeholder="Поиск..."
        onChange={e => {
          setSearchValue(e.target.value)
        }}
      />
    </div>
  );
};

export default SearchInput;
