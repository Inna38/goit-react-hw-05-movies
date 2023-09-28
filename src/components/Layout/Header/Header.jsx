import { NavLink } from 'react-router-dom';

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink
            to="/"
            className={css.nav}
            style={({ isActive }) => ({
              color: isActive ? '#e87272' : 'black',
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={css.nav}
            style={({ isActive }) => ({
              color: isActive ? '#e87272' : 'black',
            })}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
