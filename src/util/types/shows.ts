import { Videos } from './films';

export interface ShowBase {
  id: number;
  name: string;
  img: string;
}

export interface Show extends ShowBase {
  backdrop_path: string;
  poster_path: string;
  overview: string;
  videos: Videos;
}

export type ListedShow = ShowBase;

export interface ShowProps {
  show: ListedShow;
}
