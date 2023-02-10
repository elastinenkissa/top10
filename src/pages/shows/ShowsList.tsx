import React from 'react';

import { useShows } from '../../hooks/useShows';

import styles from '../shared/List.module.css';

import Show from '../../components/shows/Show';

const ShowsList: React.FC = () => {
  const shows = useShows();
 
  return (
    <ul className={styles.list}>
      {shows.map((show) => (
        <Show key={show.id} show={show} />
      ))}
    </ul>
  );
};

export default ShowsList;
