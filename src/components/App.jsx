import { lazy, Suspense  } from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from "./Layout/Layout";


const Home = lazy(() => import("pages/Home/Home"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("pages/MovieDetails/ComponentsMovieDetails/Cast/Cast"));
const Reviews = lazy(() => import("pages/MovieDetails/ComponentsMovieDetails/Reviews/Reviews"));
const NotFound = lazy(() => import("pages/NotFound/NotFound"));


export const App = () => {
  return (
<Layout>
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
</Layout>
  );
};
