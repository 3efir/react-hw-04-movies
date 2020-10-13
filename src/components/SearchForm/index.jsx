import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onFormSubmit }) => {
  const [text, setText] = useState('');

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onFormSubmit(text);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default SearchForm;