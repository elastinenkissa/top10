import React from 'react';
import { Link } from 'react-router-dom';

const Show: React.FC<{ show: { id: string; name: string } }> = (props) => {
  return (
    <li>
      <Link to={`/movies/${props.show.id}`}>
        <div>{props.show.name}</div>
      </Link>
    </li>
  );
};

export default Show;
