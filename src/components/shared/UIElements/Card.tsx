import React from 'react';
import { Link } from 'react-router-dom';

import { FilmProps } from '../../../util/types/films';

import styles from './Card.module.css';

const Card: React.FC<FilmProps> = (props) => {
  return (
    <li className={styles.card}>
      <Link to={`/${props.path}/${props.film.id}`}>
        <div>
          <img className={styles.image} src={props.film.img} alt={props.alt} />
        </div>
        <h2>{props.film.title || props.film.name}</h2>
      </Link>
    </li>
  );
};

export default Card;
