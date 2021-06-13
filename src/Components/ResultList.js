import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Result from './Result';
import NotFound from './NotFound';

const ResultList = ( { performFetch, loading, results, match } ) => {

  // query is the string searched for
  const query = match.params.query

  // if there are no results returned by fetch for the query,
  // render the NotFound route as a helpful hint to the user
  let renderedImgs = null;
  if (results.length) {
    renderedImgs = results.map( img => <Result key={img.id} img={img}/> );
  } else {
    renderedImgs = <NotFound />
  }

  // We only want to fetch from the Flickr API when the query changes,
  // Otherwise it will re-fetch in an endless loop
  useEffect( () => {
    performFetch(query);
    // eslint-disable-next-line
  }, [query] );

  return (
    <div className="photo-container">
      <h2>{query}</h2>
      <ul>
        {/* props.loading is true until the async fetch() function returns the promise */}
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