import React from 'react';

import { Search, SearchContext } from '../../../context/searchContext';

import styles from './Searchbar.module.css';

const Searchbar: React.FC = () => {
  const { search, updateSearch } = React.useContext<Search>(SearchContext);
  const [input, setInput] = React.useState<string>(search);
 
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (input.length < 3) {
        return updateSearch('');
      }
      updateSearch(input);
    }, 1000);

    return () => clearTimeout(timer);
  }, [input, updateSearch]);

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <input
      className={styles.search}
      value={input}
      onChange={searchHandler}
      placeholder="Search"
    />
  );
};

export default Searchbar;
