import React from 'react';
import PropTypes from 'prop-types';

// Stateless component
const Result = props => {
  const img = props.img;

  return (
    <li>
      <img src={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} alt="" />
    </li>
  )
}

Result.propTypes = {
  img: PropTypes.object.isRequired
}

export default Result;