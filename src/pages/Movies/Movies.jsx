import axios from 'axios';
import Notiflix from 'notiflix';

import { useEffect, useState } from 'react';

import Header from 'components/Layout/Header/Header';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { BASE_URL, API_KEY } from 'components/constants/api.constants';

import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieId = searchParams.get('movieId') ?? '';

  useEffect(() => {
    if (movieId) {
      axios
        .get(`${BASE_URL}search/movie${API_KEY}&query=${movieId}`)
        .then(data => {
          setMovies(data.data.results);

          if (data.data.results.length === 0) {
            setSearchParams({});
             Notiflix.Notify.failure('Not found');
            // return alert('Not found');
          }
        })
        .catch(error => console.log(error));
    }
  }, [movieId, setSearchParams]);

  const handlerQuery = e => {
    e.preventDefault();
    const moviesIdValue = e.currentTarget.elements.searchParams.value;
    if (!moviesIdValue) {
         Notiflix.Notify.failure('Please enter your request');
      // alert('Please, enter your details');
      return setSearchParams({});
    }
    setSearchParams({ movieId: moviesIdValue });

    const form = e.currentTarget;
    form.reset();
  };

  return (
    <>
      <Header />
      <form onSubmit={handlerQuery} className={css.form}>
        <input
          type="text"
          name="searchParams"
          // value={moviesId}
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>

      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
