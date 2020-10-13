import { lazy } from 'react';

const Home = lazy(() =>
  import('./components/Home' /* webpackChunkName: "home-page" */),
);

const Movies = lazy(() =>
  import('./components/Movies' /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(() =>
  import('./components/MovieDetailsPage' /* webpackChunkName: "movie-datails-page" */),
);

export default [
  {
    path: '/',
    label: 'Home',
    isExact: true,
    isInMenu: true,
    component: Home,
  },
  {
    path: '/movies',
    label: 'Movies',
    isExact: true,
    isInMenu: true,
    component: Movies,
  },
  {
    path: '/movies/:id',
    label: 'Movie details',
    isExact: false,
    isInMenu: false,
    component: MovieDetailsPage,
  },
];
