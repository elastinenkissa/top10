/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Search, SearchContext } from '../context/searchContext';
import { getFilms } from '../util/services/films';

export const useFilms = <T>(type: string): T[] => {
  const [data, setData] = React.useState<T[]>([]);
  const [queryType, setQueryType] = React.useState<string>('discover');

  const { search } = React.useContext<Search>(SearchContext);

  const controller = new AbortController();

  React.useEffect(() => {
    if (search) {
      setQueryType('search');
    } else {
      setQueryType('discover');
    }

    const fetchData = async () => {
      const response = await getFilms(type, queryType, controller.signal, search);
      setData(response);
    };

    console.log(controller);

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [search, queryType, type]);

  React.useEffect(() => {
    return () => {
      console.log(controller);
      controller.abort();
    };
  }, [type]);

  return data;
};
