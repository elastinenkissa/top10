export interface FetchedMovie {
  id: string;
  title: string;
  overview: string;
  video?: boolean;
  [any: string]: any;
}

export interface Movie {
  id: string;
  title: string;
}
