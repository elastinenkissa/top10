import React from 'react';

export interface Search {
  search: string;
  updateSearch: (query: string) => void;
}

export const SearchContext = React.createContext<Search>({
  search: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  updateSearch: (_query: string) => {}
});
