import { NavLink } from 'react-router-dom';

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="/" className={css.nav}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={css.nav}>
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
