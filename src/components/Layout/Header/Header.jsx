import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
