import React from 'react';
import PropTypes from 'prop-types';

// Stateless component
const Photo = props => {
  return (
    <li>
      <img src={props.url} alt="" />
    </li>
  )
}

Photo.propTypes = {
  url: PropTypes.string.isRequired
}

export default Photo;