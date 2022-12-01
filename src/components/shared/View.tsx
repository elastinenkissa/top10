import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import YouTube, { YouTubeProps } from 'react-youtube';

import { useImageconfig } from '../../hooks/useImageConfig';
import { useSingleFilm } from '../../hooks/useSingleFilm';

import styles from './View.module.css';

import { Movie } from '../../util/types/movies';
import { Show } from '../../util/types/shows';

type Film = Show & Movie;

interface Props {
  type: string;
}

const View: React.FC<Props> = (props) => {
  const { id } = useParams<string>();

  const redirect = useNavigate();

  const film = useSingleFilm<Film>(props.type, id!);

  const imageConfig = useImageconfig();
  const imageUrlBase = `${imageConfig?.images.base_url}${imageConfig?.images.backdrop_sizes[1]}`;

  const trailer = film?.videos.results.find((video) => video.official === true);

  const opts: YouTubeProps['opts'] = { width: '100%', height: 500 };

  return (
    <div>
      <div onClick={() => redirect(-1)} className={styles.back}>
        <strong>{'<'}</strong> Back
      </div>
      <div className={styles.container}>
        {trailer ? (
          <YouTube opts={opts} videoId={trailer.key} />
        ) : (
          <img
            className={styles.image}
            src={
              film?.backdrop_path
                ? `${imageUrlBase}/${film?.backdrop_path}`
                : require('../../assets/images/unavailable.jpeg')
            }
            alt="Cover"
          />
        )}
      </div>
      <h1>{film?.name || film?.title}</h1>
      <p>Overview</p>
      <div>{film?.overview ? film?.overview : 'No overview available'}</div>
    </div>
  );
};

export default View;
