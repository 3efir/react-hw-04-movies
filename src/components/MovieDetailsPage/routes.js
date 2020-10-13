import { lazy } from 'react';

const Cast = lazy(() =>
  import('./Cast' /* webpackChunkName: "movied-details-cast" */),
);

const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "movied-details-reviews" */),
);

export default [
  {
    path: '/cast',
    label: 'Cast',
    isExact: true,
    component: Cast,
  },
  {
    path: '/reviews',
    label: 'Reviews',
    isExact: true,
    component: Reviews,
  },
];
