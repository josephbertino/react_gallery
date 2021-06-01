import React from 'react';
import NavLink from './NavLink';
import PropTypes from 'prop-types';

// Stateless component
const Nav = props => {
  return (
    <nav class="main-nav">
      <ul>
        {props.queries.map(query => {
          return (
            <NavLink query={query} />
          )
        })}
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  queries: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Nav;