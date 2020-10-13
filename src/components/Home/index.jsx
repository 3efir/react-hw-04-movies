import React, { Component } from 'react';
import { getTrendingMovies } from '../../api/movies';
import FilmsList from '../FilmsList';

class Home extends Component {
  state = {
    trendMoviesList: [],
  }
  async componentDidMount() {
    const trendMoviesList = await getTrendingMovies();
    this.setState({ trendMoviesList });
  }

  render() {
    return (
      <FilmsList list={this.state.trendMoviesList} />
    )
  }
};

export default Home;