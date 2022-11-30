import React from 'react';
import { Link } from 'react-router-dom';
import { MovieProps } from '../../util/types/movies';

const Movie: React.FC<MovieProps> = (props) => {
  return (
    <li>
      <Link to={`/movies/${props.movie.id}`}>
      <div>
          <div>
            <img
              src={props.movie.img}
              alt="No preview available"
            />
          </div>
          <div>{props.movie.title}</div>
        </div>
      </Link>
    </li>
  );
};

export default Movie;
