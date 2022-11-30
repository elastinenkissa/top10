import { FetchedShow, Show } from '../util/types/shows';
import { useFetch } from './useFetch';

export const useShows = () => {
  const data = useFetch<FetchedShow>('tv');

  const shows: Show[] = data.map((show) => {
    return {
      id: show.id,
      name: show.name,
    };
  });

  return shows;
};
