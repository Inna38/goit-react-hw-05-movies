import axios from 'axios';

import { useEffect, useState } from 'react';

import Header from 'components/Layout/Header/Header';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=9c63cd3e2af40f4c55ff67799c62e3dd&query=${query}`
      )
      .then(data => {
        setMovies(data.data.results);
        console.log(data.data.results);
      })
      .catch(error => console.log(error));
  }, [query]);

    const handleChange = e => {
    setQuery(e.target.value);
  };

  const handlerQuery = e => {
      e.preventDefault();
      
      
 };
 
  return (
    <>
      <Header />
      <form onSubmit={handlerQuery}>
        <input
          type="text"
        //   value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {movies &&
        movies.map(({ title, id }) => (
          <ul key={id}>
            <li>
              <Link>{title}</Link>
            </li>
          </ul>
        ))}
    </>
  );
};

export default Movies;
