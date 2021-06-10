import React from 'react';
import PropTypes from 'prop-types';

// Stateless component
const Result = props => {
  return (
    <li>
      <img src={props.url} alt="" />
    </li>
  )
}

Result.propTypes = {
  url: PropTypes.string.isRequired
}

export default Result;