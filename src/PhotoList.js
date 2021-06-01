import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import PropTypes from 'prop-types';

const PhotoList = props => {
  let srcList;
  if (props.srcList.length) {
    srcList = props.srcList.map( src => <Photo url={src} /> );
  } else {
    srcList = <NotFound />;
  }
 
  return (
    <div class="photo-container">
      <h2>Results</h2>
      <ul>
        {srcList}
      </ul>
    </div>
  )
}

PhotoList.propTypes = {
  srcList: PropTypes.arrayOf(PropTypes.string)
}

export default PhotoList;