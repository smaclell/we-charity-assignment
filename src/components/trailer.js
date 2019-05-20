import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Trailer = ({ name, url}) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon="play" style={{
      color: `black`,
      fontSize: '24px',
    }} />
    <span>{name}</span>
  </a>
);

Trailer.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Trailer;
