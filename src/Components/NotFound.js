import React from 'react';

// Stateless component
const NotFound = props => {
  // A simple message to the user indicating that no results were obtained
  return (
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
    </li>
  )
}

export default NotFound;