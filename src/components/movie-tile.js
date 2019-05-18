import PropTypes from "prop-types";
import React from "react";

const Tile = ({ id, title, backdrop_path }) => (
  <img alt={title} src={`http://image.tmdb.org/t/p/w500/${backdrop_path}`} />
);

Tile.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Tile;
