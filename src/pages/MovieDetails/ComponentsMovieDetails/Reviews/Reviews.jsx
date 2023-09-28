import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {BASE_URL, API_KEY} from 'components/constants/api.constants';

import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState('');

  useEffect(() => {
    axios
      .get(
        `${BASE_URL}movie/${movieId}/reviews${API_KEY}
    `
      )
      .then(({ data }) => setReviews(data.results))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>      
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <ul key={id} className={css.list}>
              <li>
                <h3>Author: {author}</h3>
                <p className={css.description}>{content}</p>
              </li>
            </ul>
          );
        })
      ) : (
        <h4 className={css.title}>We don`t have any reviews for this movie.</h4>
      )}
    </>
  );
};

export default Reviews;
