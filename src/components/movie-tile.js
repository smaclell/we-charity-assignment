import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

const Tile = ({ id, title, poster_path }) => (
  <Link to={`/movies/${id}`}>
    <img alt={title} src={`http://image.tmdb.org/t/p/w185/${poster_path}`} />
  </Link>
);

Tile.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
};

export default Tile;
