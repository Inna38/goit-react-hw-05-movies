import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}}/credits?api_key=9c63cd3e2af40f4c55ff67799c62e3dd
    `
      )
      .then(({ data }) => {
        setCast(data.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <div className={css.container}>
        {cast &&
          cast.map(({ cast_id, profile_path, name, character }) => {
            return (
              <ul key={cast_id} className={css.list}>
                <li className={css.item}>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                      alt=""
                      className={css.img}
                    />
                  ) : (
                    ''
                  )}
                  <h4>{name}</h4>
                  <p>Character: {character}</p>
                </li>
              </ul>
            );
          })}
      </div>
    </>
  );
};

export default Cast;
