/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Search, SearchContext } from '../context/searchContext';
import { getTopRated, getSearched } from '../util/services/films';

export const useFetch = <T>(type: string): T[] => {
  const [data, setData] = React.useState<T[]>([]);

  const { search } = React.useContext<Search>(SearchContext);

  const controller = new AbortController();

  const fetchData = async () => {
    const response: T[] = await getTopRated(type, controller.signal);
    setData(response);
  };

  const fetchSearchedData = async () => {
    const response: T[] = await getSearched(
      type,
      controller.signal,
      search
    );
    setData(response);
  };

  React.useEffect(() => {
    if (search) {
      try {
        fetchSearchedData();
      } catch (error) {
        console.log(error);
      }
    }
    if (!search) {
      try {
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }

    return () => {
      controller.abort();
    };
  }, [type, search]);

  return data;
};
