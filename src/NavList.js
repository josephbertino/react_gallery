import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Stateless component
const NavList = (props) => {
  return (
    <nav className="main-nav">
      <ul>
        {props.queries.map( (query, idx) => {
          return (
            <li key={idx}><NavLink to={`/${query}`} >{query}</NavLink></li>
          )
        })}
      </ul>
    </nav>
  )
}

NavList.propTypes = {
  queries: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default NavList;