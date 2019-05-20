import PropTypes from 'prop-types';
import React from 'react';

import MovieTile from './movie-tile';

const List = ({ movies = [] }) => (
  <ul
    style={{
      listStyle: 'none',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      margin: 0,
      padding: 0,
      backgroundColor: 'black',
    }}
  >
    {movies.map(movie => (
      <li
        key={movie.id}
        style={{
          flex: 1,
          minWidth: '50%',
          margin: 0,
          padding: 0,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <MovieTile {...movie} />
      </li>
    ))}
  </ul>
);

List.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default List;
