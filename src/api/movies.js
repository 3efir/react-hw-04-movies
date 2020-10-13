import axios from 'axios';
import { config } from '../config/config';

axios.defaults.params = { 'api_key': config.apiKey };
axios.defaults.baseURL = config.apiLink;

export const getTrendingMovies = () => axios.get('/trending/movie/day').then((res) => res.data.results);

export const getMovieDetails = (movieId) => axios.get(`/movie/${movieId}`).then((res) => res.data);

export const getConfiguration = () => axios.get('/configuration').then((res) => res.data);

export const getMovieCast = (movieId) => axios.get(`/movie/${movieId}/credits`).then((res) => res.data);

export const getMovieReviews = (movieId) => axios.get(`/movie/${movieId}/reviews`).then((res) => res.data);

export const getSearchMovies = (searchText) => axios.get(`/search/movie?query=${searchText}`).then((res) => res.data.results);
