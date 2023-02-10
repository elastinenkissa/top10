import React from 'react';

import { getSingle } from '../util/services/films';

export const useSingleFilm = <T>(type: string, id: string) => {
  const [film, setFilm] = React.useState<T>();

  const controller = new AbortController();

  const fetchFilm = async () => {
    const response: T = await getSingle(type, id, controller.signal);
    setFilm(response);
  }; 

  React.useEffect(() => {
    fetchFilm();

    return () => {
      controller.abort();
    };
  }, []);

  return film;
};
