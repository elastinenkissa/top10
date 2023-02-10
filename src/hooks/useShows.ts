import { Show, ListedShow } from '../util/types/shows';

import { useFetch } from './useFetch';
import { useImageconfig } from './useImageConfig';

export const useShows = () => {
  const data = useFetch<Show>('tv');

  const imageConfig = useImageconfig();
  const imageBaseUrl = `${imageConfig?.images.base_url}${imageConfig?.images.poster_sizes[3]}`;
 
  const shows: ListedShow[] = data.map((show) => {
    return {
      id: show.id,
      name: show.name,
      img: show.poster_path
        ? `${imageBaseUrl}/${show.poster_path}`
        : require('../assets/images/unavailable-portrait.png')
    };
  });

  return shows;
};
