import React from 'react';
import PropTypes from 'prop-types';

const Trailer = ({ name, url}) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <i>Icon</i>
    <span>{name}</span>
  </a>
);

Trailer.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Trailer;
