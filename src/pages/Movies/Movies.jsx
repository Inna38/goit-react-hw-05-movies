import axios from 'axios';

import { useEffect, useState } from 'react';

import Header from 'components/Layout/Header/Header';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const movieId = searchParams.get('movieId') ?? '';

  useEffect(() => {
    if (movieId) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=9c63cd3e2af40f4c55ff67799c62e3dd&query=${movieId}`
        )
        .then(data => {
          setMovies(data.data.results);
          
          if (data.data.results.length === 0) {
            setSearchParams({});
            return alert('Not found');
          }
        })
        .catch(error => console.log(error));
    }
  }, [movieId, setSearchParams]);

  const handlerQuery = e => {
    e.preventDefault();
    const moviesIdValue = e.currentTarget.elements.searchParams.value;
    if (!moviesIdValue) {
      alert('Please, enter your details');
      return setSearchParams({});
    }
    setSearchParams({ movieId: moviesIdValue });

    const form = e.currentTarget;
    form.reset();
  };

  return (
    <>
      <Header />
      <form onSubmit={handlerQuery}>
        <input
          type="text"
          name="searchParams"
          // value={moviesId}
        />
        <button type="submit">Search</button>
      </form>
      {movies &&
        movies.map(({ title, id }) => (
          <ul key={id}>
            <li>
              <Link to={`${id}`}>{title}</Link>
            </li>
          </ul>
        ))}
    </>
  );
};

export default Movies;
