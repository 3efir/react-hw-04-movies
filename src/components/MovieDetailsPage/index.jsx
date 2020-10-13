import React, { Component } from 'react';
import './styles.scss';
import { getMovieDetails } from '../../api/movies';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import routes from './routes';

class MovieDetailsPage extends Component {
  state = {
    details: {},
    imagePath: '',
  }

  async componentDidMount() {
    try {
      const movieDetails = await getMovieDetails(this.props.match.params.id);
      const configurations = JSON.parse(window.localStorage.getItem('configurations'));
      this.setState({ details: movieDetails, imagePath: `${configurations.images.base_url}${configurations.images.poster_sizes[3]}` });
    } catch (e) {
      console.error(e);
    }
  }

  handleBackButton = () => {
    this.props.history.goBack();
  }

  getReleaseYear = () => {
    if (this.state.details.release_date) {
      return this.state.details.release_date.split('-')[0];
    }
  }

  getGenres = () => {
    if (this.state.details.genres) {
      return this.state.details.genres.map((item) => (
        <span key={item.id}>{item.name} </span>
      ));
    }
  }

  render() {
    const { match } = this.props;
    return (
      <div className="details-page">
        <div className="details-page__back-btn-wrapper">
          <button className="details-page__back-btn" type="button" onClick={this.handleBackButton}>Go back</button>
        </div>

        <div className="details-page__content">
          <div className="details-page__img-wrapper">
            <img
              src={`${this.state.imagePath}${this.state.details.poster_path}`}
              alt={this.state.details.original_title}
              className="details-page__img"
            />
          </div>
          <div className="details-page__movie-info">
            <h2 className="details-page__title">{this.state.details.original_title} ({this.getReleaseYear()})</h2>
            <p className="details-page__user-rate">User rate: {this.state.details.vote_average * 10}%</p>
            <h4 className="details-page__subtitle">Overview</h4>
            <p className="details-page__overview">{this.state.details.overview}</p>
            <h4 className="details-page__subtitle">Genres</h4>
            <p className="details-page__genres">{this.getGenres()}</p>
          </div>
        </div>
        <hr/>
          <p>Additional information</p>
          <ul>
            {routes.map(({ path, label, component: Component }) => (
              <li key={`${match.url}${path}`}>
                <Link to={{
                  pathname: `${match.url}${path}`,
                }}>{label}</Link>
              </li>
            ))}
          </ul>
        <hr/>
        {routes.map(({ path, isExact, component: Component }) => (
          <Route
            path={`${match.url}${path}`}
            exact={isExact}
            component={Component}
            key={`${match.url}${path}`}
          />
        ))}
      </div>
    )
  }
}

export default MovieDetailsPage;
