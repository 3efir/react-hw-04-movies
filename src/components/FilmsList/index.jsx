import React from 'react';
import { ListItem } from './ListItem';
import PropTypes from 'prop-types';

const FilmsList = ({ list }) => (
  <ul>
    {list.map((item) => (
      <ListItem
        key={item.id}
        id={item.id}
        title={item.title}
      />
    ))}
  </ul>
);

FilmsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }))
};

export default FilmsList;