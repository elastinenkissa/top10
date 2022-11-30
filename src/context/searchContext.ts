import React from 'react';


export interface Search {
  search: string;
  updateSearch: (query: string) => void;
}

export const SearchContext = React.createContext<Search>({
  search: '',
  updateSearch: (_query: string) => {},
});
