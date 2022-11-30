import React from 'react';

export type Query = string

export interface Search {
  search: Query;
  updateSearch: (query: Query) => void;
}

export const SearchContext = React.createContext<Search>({
  search: '',
  updateSearch: (_query: Query) => {},
});
