import { FetchedMovie, Movie } from '../util/types/movies';
import { useFilms } from './useFilms';

export const useMovies = () => {
  const data = useFilms<FetchedMovie>('movie');

  const movies: Movie[] = data.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
    };
  });

  return movies;
};
