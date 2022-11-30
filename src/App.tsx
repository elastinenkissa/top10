import React from 'react';
import Navbar from './components/shared/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Searchbar from './components/shared/Searchbar';
import MoviesList from './pages/movies/MoviesList';
import ShowsList from './pages/shows/ShowsList';
import { Query, SearchContext } from './context/searchContext';

const App: React.FC = () => {
  const [search, setSearch] = React.useState<Query>('');

  const updateSearch = (query: Query) => {
    setSearch(query);
  };

  return (
    <SearchContext.Provider value={{ search, updateSearch }}>
      <Router>
        <div>
          <Navbar />
          <Searchbar />
        </div>
        <Routes>
          <Route path="/" element={<ShowsList />} />
          <Route path="/movies" element={<MoviesList />} />
        </Routes>
      </Router>
    </SearchContext.Provider>
  );
};

export default App;
