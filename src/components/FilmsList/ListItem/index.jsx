import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ListItem = ({id, title}) => (
  <li>
    <Link to={`/movies/${id}`}>{title}</Link>
  </li>
);

ListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
};
