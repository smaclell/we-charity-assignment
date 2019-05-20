import React from 'react';
import PropTypes from 'prop-types';

import Trailer from './trailer';
import '../styles/trailers.scss';

const Trailers = ({ trailers }) => (
  <ul>
    {trailers.map(t => (
      <li key={t.id}>
        <Trailer {...t} />
      </li>
    ))}
  </ul>
);

Trailers.propTypes = {
  trailers: PropTypes.array.isRequired,
};

export default Trailers;
