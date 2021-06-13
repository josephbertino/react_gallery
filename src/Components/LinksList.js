import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Stateless component
const LinksList = ({ queries }) => {
  // Render the buttons that query specific terms
  return (
    <nav className="main-nav">
      <ul>
        {/* Performs a redirect so that the ResultList component can call the fetch() */}
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