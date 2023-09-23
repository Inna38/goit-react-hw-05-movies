import axios from 'axios';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Layout/Header/Header';

// import { BASE_URL, API_KEY } from 'components/constants/api.constants';

const Home = () => {
  const [filmsList, setFilmsList] = useState('');
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=9c63cd3e2af40f4c55ff67799c62e3dd&language=en'
      )
      .then(data => {
        setFilmsList(data.data.results);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <>
      <Header />
      {filmsList &&
        filmsList.map(({ title, id }) => (
          <ul key={id}>
            <li>
              <Link>{title}</Link>
            </li>
          </ul>
        ))}
    </>
  );
};

export default Home;
