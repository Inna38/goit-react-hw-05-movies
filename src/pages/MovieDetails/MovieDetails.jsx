import axios from 'axios';

import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';

import { BASE_URL, API_KEY } from 'components/constants/api.constants';

import css from './MovieDetails.module.css';
import Header from 'components/Layout/Header/Header';

const MovieDetails = () => {
  const [movies, setMovies] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    axios
      .get(`${BASE_URL}movie/${movieId}${API_KEY}`)
      .then(({ data }) => {
        setMovies(data);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  const { id, title, popularity, poster_path, overview, genres } = movies;

  return (
    <>
      <Header />
      {movies && (
        <ul key={id} className={css.list}>
          <li className={css.item}>
            <div className={css.containerImg}>
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt=""
                  className={css.img}
                />
              ) : (
                ''
              )}
            </div>

            <div className={css.container}>
              <h1>{title}</h1>
              <p>User Score: {Math.round(popularity)} %</p>

              <h2>Overview </h2>
              <p> {overview}</p>
              <h2>Genres</h2>
              {genres.map(({ name }) => (
                <p key={name} className={css.description}>
                  {name},{' '}
                </p>
              ))}
            </div>
          </li>
        </ul>
      )}

      <ul>
        <ul>
          <h3>Addition information:</h3>
          <li className={css.item}>
            <Link to="cast" className={css.nav}>
              Cast
            </Link>
          </li>
          <li className={css.item}>
            <Link to="reviews" className={css.nav}>
              Reviews
            </Link>
          </li>
        </ul>
      </ul>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
