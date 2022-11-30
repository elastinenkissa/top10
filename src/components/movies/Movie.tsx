import React from 'react';
import { Link } from 'react-router-dom';

const Movie: React.FC<{ movie: { id: string; title: string } }> = (props) => {
  return (
    <li>
      <Link to={`/movies/${props.movie.id}`}>
        <div>{props.movie.title}</div>
      </Link>
    </li>
  );
};

export default Movie;
