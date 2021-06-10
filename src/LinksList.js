import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Stateless component
const LinksList = ({ queries }) => {
  return (
    <nav className="main-nav">
      <ul>
        {queries.map( (query, idx) => 
            <li key={idx}><NavLink to={`/${query}`} >{query}</NavLink></li>
        )}
      </ul>
    </nav>
  )
}

LinksList.propTypes = {
  queries: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default LinksList;