import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/shared/Navbar';
import MoviesList from './pages/movies/MoviesList';
import ShowsList from './pages/shows/ShowsList';
import { SearchContext } from './context/searchContext';
import ShowView from './pages/shows/ShowView';
import MovieView from './pages/movies/MovieView';

const App: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');

  const updateSearch = (query: string) => {
    setSearch(query);
  };

  return (
    <SearchContext.Provider value={{ search, updateSearch }}>
      <div style={{ margin: 50 }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ShowsList />} />
            <Route path="/movies" element={<MoviesList />} />
            <Route path="/shows/:id" element={<ShowView />} />
            <Route path="/movies/:id" element={<MovieView />} />
          </Routes>
        </Router>
      </div>
    </SearchContext.Provider>
  );
};

export default App;
