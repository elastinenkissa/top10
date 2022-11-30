import React from 'react';
import Movie from '../../components/movies/Movie';
import { useMovies } from '../../hooks/useMovies';

const MoviesList: React.FC = () => {
 const movies = useMovies()
 

  return (
    <ul>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesList;
