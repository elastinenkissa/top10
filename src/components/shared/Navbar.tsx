import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div>
      <Link to={'/'}>TV Shows</Link>
      <Link to={'/movies'}>Movies</Link>
    </div>
  );
};

export default Navbar;
