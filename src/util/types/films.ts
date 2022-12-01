export interface Video {
  official: boolean;
  key: string;
}

export interface Videos {
  results: Array<Video>;
}

export interface FilmProps {
  film: {
    id: number
    img: string;
    title?: string;
    name?: string;
  };
  alt: string;
  path: string;
}
