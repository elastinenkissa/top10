import CustomLink from './CustomLink';

const Links: React.FC = () => {
  return (
    <div>
      <CustomLink to="/">TV Shows</CustomLink>
      <CustomLink to="/movies">Movies</CustomLink>
    </div>
  );
};

export default Links;
