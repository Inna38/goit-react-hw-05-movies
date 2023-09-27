import { Link } from 'react-router-dom';

import css from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  return (
    <>
      {movies &&
        movies.map(({ title, id }) => (
          <div key={id} className={css.container}>
            <ul  className={css.list}>
              <li className={css.item}>
                <Link to={`/movies/${id}`} className={css.nav}>
                  {title}
                </Link>
              </li>
            </ul>
          </div>
        ))}
    </>
  );
};
