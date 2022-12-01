import React from 'react';
import { Link } from 'react-router-dom';
import { FilmProps } from '../../util/types/films';

const Card: React.FC<FilmProps> = (props) => {
  return (
    <div>
      {' '}
      <Link to={`/${props.path}/${props.film.id}`}>
        <>
          <div>
            <img src={props.film.img} alt={props.alt} />
          </div>
          <>{props.film.title || props.film.name}</>
        </>
      </Link>
    </div>
  );
};

export default Card;
