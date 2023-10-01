import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Cast.module.css';
import {BASE_URL, API_KEY, IMG_BASE_URL } from 'components/constants/api.constants';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState('');

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}movie/${movieId}}/credits${API_KEY}
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
        {cast.length > 0 ?
          cast.map(({ cast_id, profile_path, name, character }) => {
            return (
              <ul key={cast_id} className={css.list}>
                <li className={css.item}>
                  {profile_path ? (
                    <img
                      src={`${IMG_BASE_URL}${profile_path}`}
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
          })
        : <h4 className={css.title}>We don`t have any reviews for this movie.</h4>
        }
      </div>
    </>
  );
};

export default Cast;
