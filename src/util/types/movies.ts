export interface FetchedMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Movie {
  id: number;
  title: string;
  img: string;
  overview?: string;
}

export type ListedMovie = Omit<Movie, 'overview'>;

export interface MovieProps {
  movie: Movie;
}
