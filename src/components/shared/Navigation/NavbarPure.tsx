//Component extracted into a pure component for testing purposes

import styles from './Navbar.module.css';

import Links from './Links';
import Searchbar from './Searchbar';

interface NavbarPureProps {
  pathname: string;
}

const NavbarPure: React.FC<NavbarPureProps> = (props) => {
  return (
    <>
      {(props.pathname === '/' || props.pathname === '/movies') && (
        <div className={styles.navbar}>
          <Links />
          <Searchbar />
        </div>
      )}
    </>
  );
};

export default NavbarPure;
