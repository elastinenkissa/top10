import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useImageconfig } from '../../hooks/useImageConfig';
import { useSingleFilm } from '../../hooks/useSingleFilm';
import { FetchedMovie } from '../../util/types/movies';

const MovieView: React.FC = () => {
  const { id } = useParams<string>();

  const history = useNavigate();

  const movie = useSingleFilm<FetchedMovie>('movie', id!);

  const imageConfig = useImageconfig();

  return (
    <div>
      <p onClick={() => history(-1)}>{'<'} Go back</p>
      <div>
        <img
          src={`${imageConfig?.images.base_url}${imageConfig?.images.backdrop_sizes[1]}/${movie?.backdrop_path}`}
          alt="No preview available"
        />
      </div>
      <div>{movie?.title}</div>
      <div>Movie overview</div>
      <div>{movie?.overview ? movie?.overview : 'No overview available'}</div>
    </div>
  );
};

export default MovieView;
