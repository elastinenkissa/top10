import React from 'react';
import Show from '../../components/shows/Show';
import { useShows } from '../../hooks/useShows';

const ShowsList: React.FC = () => {
  const shows = useShows();

  return (
    <ul>
      {shows.map((show) => (
        <Show key={show.id} show={show} />
      ))}
    </ul>
  );
};

export default ShowsList;
