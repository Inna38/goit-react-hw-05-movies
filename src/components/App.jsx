import { lazy, Suspense  } from "react";
import { Route, Routes } from 'react-router-dom';


const Home = lazy(() => import("pages/Home/Home"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("pages/MovieDetails/ComponentsMovieDetails/Cast/Cast"));
const Reviews = lazy(() => import("pages/MovieDetails/ComponentsMovieDetails/Reviews/Reviews"));
const NotFound = lazy(() => import("pages/NotFound/NotFound"));

// import Home from 'pages/Home/Home';
// import Cast from 'pages/MovieDetails/ComponentsMovieDetails/Cast/Cast';
// import Reviews from 'pages/MovieDetails/ComponentsMovieDetails/Reviews/Reviews';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Movies from 'pages/Movies/Movies';
// import NotFound from 'pages/NotFound/NotFound';


export const App = () => {
  return (
  <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
         <Route path="*" element={<NotFound />} />
      </Routes>
  </Suspense>
  );
};
