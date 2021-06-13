import React, { useEffect } from 'react';

import Result from './Result';
import NotFound from './NotFound';
import PropTypes from 'prop-types';

const ResultList = ( { performFetch, loading, results, match } ) => {

  const query = match.params.query
  let renderedImgs = null;
  if (results.length) {
    renderedImgs = results.map( img => <Result key={img.id} img={img}/> );
  } else {
    renderedImgs = <NotFound />
  }

  useEffect( () => {
    performFetch(query);
    // eslint-disable-next-line
  }, [query] );

  return (
    <div className="photo-container">
      <h2>{query}</h2>
      <ul>
        { 
        (loading) 
        ? <h3> Loading... </h3>
        : renderedImgs
        }
      </ul>
    </div>
  )
}

ResultList.propTypes = {
  performFetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ResultList;