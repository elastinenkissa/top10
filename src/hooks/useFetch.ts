import React from 'react';
import { Search, SearchContext } from '../context/searchContext';
import { fetch } from '../util/services/fetch';

export const useFetch = <T>(type: string): T[] => {
  const [data, setData] = React.useState<T[]>([]);
  const [query, setQuery] = React.useState<string>('discover');

  const { search } = React.useContext<Search>(SearchContext);

  React.useEffect(() => {
    if (search) {
      setQuery('search');
    } else {
      setQuery('discover');
    }

    const controller = new AbortController();

    const fetchData = async () => {
      const response = await fetch(type, query, controller.signal, search);
      setData(response);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }

    return () => {
      controller.abort();
    };
    
  }, [type, query, search]);

  return data;
};
