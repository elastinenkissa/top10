import { Videos } from './films';

export interface MovieBase {
  id: number;
  title: string;
  img: string;
}

export interface Movie extends MovieBase {
  backdrop_path: string;
  poster_path: string;
  overview: string;
  videos: Videos;
}

export type ListedMovie = MovieBase

export interface MovieProps {
  movie: MovieBase;
}
