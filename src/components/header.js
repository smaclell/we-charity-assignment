import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ siteTitle, hasBack = false }) => (
  <header
    style={{
      background: `#212121`,
    }}
  >
    <div
      style={{
        display: 'flex',
        margin: `0 auto`,
        maxWidth: 960,
        padding: `18px 24px`,
        color: `white`,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <h1
        style={{
          display: 'inline',
          margin: 0,
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: `white`,
          }}
        >
          {hasBack && (
            <FontAwesomeIcon
              icon="arrow-left"
              style={{
                color: `white`,
                fontSize: '32px',
                marginRight: '12px',
              }}
            />
          )}
          {siteTitle}
        </Link>
      </h1>

      <FontAwesomeIcon
        icon="ellipsis-v"
        style={{
          color: `white`,
          fontSize: '32px',
        }}
      />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
