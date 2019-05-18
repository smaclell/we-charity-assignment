import PropTypes from "prop-types";
import React from "react";
import { Link } from 'gatsby';

const Tile = ({ id, title, backdrop_path }) => (
  <Link to={`/movies/${id}`}>
    <img alt={title} src={`http://image.tmdb.org/t/p/w500/${backdrop_path}`} />
  </Link>
);

Tile.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Tile;
