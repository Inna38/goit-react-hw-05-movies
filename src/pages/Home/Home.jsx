import axios from 'axios';

import { useEffect, useState } from 'react';

import Header from 'components/Layout/Header/Header';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { BASE_URL, API_KEY } from 'components/constants/api.constants';

import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState('');

  useEffect(() => {
    axios
      .get(`${BASE_URL}trending/movie/day${API_KEY}`)
      .then(data => {
        setMovies(data.data.results);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <>
      <Header />
      <h1 className={css.title}>The most popular movies today:</h1>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
