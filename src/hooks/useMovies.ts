import { FetchedMovie, Movie } from '../util/types/movies';
import { useFetch } from './useFetch';

export const useMovies = () => {
  const data = useFetch<FetchedMovie>('movie');

  const movies: Movie[] = data.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
    };
  });

  return movies;
};
