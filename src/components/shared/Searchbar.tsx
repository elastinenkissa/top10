import React from 'react';
import { Search, SearchContext } from '../../context/searchContext';

const Searchbar: React.FC = () => {
  const { updateSearch } = React.useContext<Search>(SearchContext);
  const [input, setInput] = React.useState<string>('');

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

  return <input value={input} onChange={searchHandler} />;
};

export default Searchbar;
