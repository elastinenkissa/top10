import React from 'react';
import { useLocation } from 'react-router-dom';

import NavbarPure from './NavbarPure';

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return <NavbarPure pathname={pathname} />;
};

export default Navbar;
