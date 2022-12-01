import { Movie, ListedMovie } from '../util/types/movies';

import { useFetch } from './useFetch';
import { useImageconfig } from './useImageConfig';

export const useMovies = () => {
  const data = useFetch<Movie>('movie');

  const imageConfig = useImageconfig();

  const imageBaseUrl = `${imageConfig?.images.base_url}${imageConfig?.images.poster_sizes[3]}`;

  const movies: ListedMovie[] = data.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      img: movie.poster_path
        ? `${imageBaseUrl}/${movie.poster_path}`
        : require('../assets/images/unavailable-portrait.png')
    };
  });

  return movies;
};
