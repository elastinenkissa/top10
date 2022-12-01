import React from 'react';

import { useMovies } from '../../hooks/useMovies';

import styles from '../shared/List.module.css';

import Movie from '../../components/movies/Movie';

const MoviesList: React.FC = () => {
  const movies = useMovies();

  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesList;
