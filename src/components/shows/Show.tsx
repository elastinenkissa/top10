import React from 'react';

import { ShowProps } from '../../util/types/shows';

import Card from '../shared/Card';

const Show: React.FC<ShowProps> = (props) => {
  return <Card film={props.show} path="shows" alt="Poster" />;
};

export default Show;
