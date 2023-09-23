import { Route, Routes } from 'react-router-dom';

import Home from 'pages/Home/Home';
import Cast from 'pages/MovieDetails/ComponentsMovieDetails/Cast/Cast';
import Reviews from 'pages/MovieDetails/ComponentsMovieDetails/Reviews/Reviews';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Routes>
  );
};
