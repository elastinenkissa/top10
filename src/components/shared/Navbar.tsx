import React from 'react';
import { useLocation } from 'react-router-dom';

import Links from './Links';
import Searchbar from './Searchbar';

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      {(pathname === '/' || pathname === '/movies') && (
        <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
          <Links />
          <Searchbar />
        </div>
      )}
    </>
  );
};

export default Navbar;
