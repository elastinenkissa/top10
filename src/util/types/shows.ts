export interface FetchedShow {
  id: string;
  name: string;
  overview: string;
  [any: string]: any;
}

export interface Show {
  id: string;
  name: string;
}

export interface ShowProps {
  show: Show;
}
