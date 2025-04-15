import React from 'react';
import SearchInput from '../ui/SearchInput';
import SneakersList from '../SneakersList';
import { useSearch } from '../../context/SearchContext';

const SectionSneakers = () => {
  const { searchValue, filteredItems } = useSearch();

  return (
    <section className="sneakers container">
      <div className="sneakers__header">
        <h1 className="sneakers__heading">
          {searchValue
            ? `Поиск по: "${searchValue}"`
            : "Все кроссовки"}
        </h1>
        <SearchInput />
      </div>
      <SneakersList items={filteredItems} />
    </section>
  );
};

export default SectionSneakers;
