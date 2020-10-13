import React, { Component } from 'react';
import { getMovieCast } from '../../../api/movies';

class Cast extends Component {
  state = {
    castList: [],
    imagePath: '',
  }

  async componentDidMount() {
    try {
      const movieId = this.props.location.pathname.split('/')[2];
      const castResponse = await getMovieCast(movieId);
      const configurations = JSON.parse(window.localStorage.getItem('configurations'));
      this.setState({ castList: castResponse.cast, imagePath: `${configurations.images.base_url}${configurations.images.profile_sizes[0]}` });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <ul>
        {this.state.castList.map((item) => (
          <li key={item.id}>
            <img src={`${this.state.imagePath}${item.profile_path}`} alt={item.name}/>
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    )
  }
}

export default Cast;
