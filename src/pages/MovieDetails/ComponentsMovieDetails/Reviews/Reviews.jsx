import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=9c63cd3e2af40f4c55ff67799c62e3dd
    `
      )
      .then(({ data }) => setReviews(data.results))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      {reviews ? (
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
        <h2>We don`t have any reviews for this movie.</h2>
      )}
    </>
  );
};

export default Reviews;
