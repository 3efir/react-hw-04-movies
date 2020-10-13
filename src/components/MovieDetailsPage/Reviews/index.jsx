import React, { Component } from 'react';
import { getMovieReviews } from '../../../api/movies';

class Reviews extends Component {
  state = {
    reviewsList: [],
  }

  async componentDidMount() {
    const movieId = this.props.location.pathname.split('/')[2];
    const reviewsResponse = await getMovieReviews(movieId);
    this.setState({ reviewsList: reviewsResponse.results });
  }

  render() {
    return (
      <ul>
        {this.state.reviewsList.length ? this.state.reviewsList.map((item) => (
          <li key={item.id}>
            <h4>Author: {item.author}</h4>
            <p>{item.content}</p>
          </li>
        )) : "Sorry we don't have reviews for this movie."}
      </ul>
    )
  }
}

export default Reviews;
