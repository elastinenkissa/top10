import { FetchedShow, Show } from '../util/types/shows';
import { useFilms } from './useFilms';

export const useShows = () => {
  const data = useFilms<FetchedShow>('tv');

  const shows: Show[] = data.map((show) => {
    return {
      id: show.id,
      name: show.name,
    };
  });

  return shows;
};
