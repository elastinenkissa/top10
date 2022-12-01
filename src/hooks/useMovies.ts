import { Movie, ListedMovie } from '../util/types/movies';
import { useFetch } from './useFetch';
import { useImageconfig } from './useImageConfig';

export const useMovies = () => {
  const data = useFetch<Movie>('movie');
  
  const imageConfig = useImageconfig();

  const movies: ListedMovie[] = data.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      img: `${imageConfig?.images.base_url}${imageConfig?.images.poster_sizes[2]}/${movie.poster_path}`,
    };
  });

  return movies;
};
