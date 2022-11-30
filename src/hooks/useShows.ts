import { FetchedShow, ListedShow } from '../util/types/shows';
import { useFetch } from './useFetch';
import { useImageconfig } from './useImageConfig';

export const useShows = () => {
  const data = useFetch<FetchedShow>('tv');

  const imageConfig = useImageconfig();

  const shows: ListedShow[] = data.map((show) => {
    return {
      id: show.id,
      name: show.name,
      img: `${imageConfig?.images.base_url}${imageConfig?.images.poster_sizes[2]}/${show.poster_path}`,
    };
  });

  return shows;
};
