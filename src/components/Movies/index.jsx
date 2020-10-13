import React, {Component} from 'react';
import queryString from 'query-string';
import SearchForm from '../SearchForm';
import FilmsList from '../FilmsList';
import { getSearchMovies } from '../../api/movies';

class Movies extends Component {
  state = {
    filmsList: [],
  }

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);

    if(queryParams.query) {
      this.fetchSearchFilms(queryParams.query);
    }
  }

  handleFormSubmit = (searchText) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${searchText}`,
    });

    this.fetchSearchFilms(searchText);
  }

  async fetchSearchFilms(searchText) {
    const filmsList = await getSearchMovies(searchText);

    this.setState({
      filmsList,
    });
  }

  render() {
    return (
      <>
        <SearchForm onFormSubmit={this.handleFormSubmit}/>
        <FilmsList list={this.state.filmsList} />
      </>
    );
  }
}

export default Movies;
