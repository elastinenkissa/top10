import React from 'react';

import { MovieProps } from '../../util/types/movies';

import Card from '../shared/Card';

const Movie: React.FC<MovieProps> = (props) => {
  return (
    <Card film={props.movie} path="movies" alt="Poster" />
  );
};

export default Movie;
