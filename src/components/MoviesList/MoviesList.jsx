import { Link, useLocation } from 'react-router-dom';

import css from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation()
  
  return (
    <>
      {movies &&
        movies.map(({ title, id }) => (
          <div key={id} className={css.container}>
            <ul  className={css.list}>
              <li className={css.item}>
                <Link to={`/movies/${id}`} state={{from: location}} className={css.nav}>
                  {title}
                </Link>
              </li>
            </ul>
          </div>
        ))}
    </>
  );
};
