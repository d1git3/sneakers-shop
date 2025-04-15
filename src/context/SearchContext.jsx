import { createContext, useContext, useEffect, useState } from 'react';
import { useItems } from './ItemsContext';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const { items } = useItems();
  const [ filteredItems, setFilteredItems ] = useState([]);
  const [ searchValue, setSearchValue ] = useState('');

  useEffect(() => {
    setFilteredItems(items.filter(item => 
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    ))
  }, [searchValue, items])

  return (
    <SearchContext.Provider value={{
      searchValue,
      setSearchValue,
      filteredItems,
      setFilteredItems,
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);