import React from 'react';
import { Link } from 'react-router-dom';
import { ShowProps } from '../../util/types/shows';

const Show: React.FC<ShowProps> = (props) => {
  return (
    <li>
      <Link to={`/shows/${props.show.id}`}>
        <div>
          <div>
            <img
              src={props.show.img}
              alt="No preview available"
            />
          </div>
          <div>{props.show.name}</div>
        </div>
      </Link>
    </li>
  );
};

export default Show;
