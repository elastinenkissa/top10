import { Link } from "react-router-dom";

const Links: React.FC = () => {
  return (
    <div>
      <Link to={'/'}>TV Shows</Link>
      <Link to={'/movies'}>Movies</Link>
    </div>
  );
};

export default Links
