export interface FetchedShow {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: Array<number>;
  id: number;
  name: string;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Show {
  id: number;
  name: string;
  img: string;
  overview?: string;
}

export type ListedShow = Omit<Show, 'overview'>;

export interface ShowProps {
  show: ListedShow;
}
