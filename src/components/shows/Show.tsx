import React from 'react';
import { Link } from 'react-router-dom';
import { ShowProps } from '../../util/types/shows';

const Show: React.FC<ShowProps> = (props) => {
  return (
    <li>
      <Link to={`/movies/${props.show.id}`}>
        <div>{props.show.name}</div>
      </Link>
    </li>
  );
};

export default Show;
