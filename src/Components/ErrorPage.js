import React from 'react';

// Stateless component
const ErrorPage = props => {
  return (
    <li className="not-found">
      <h3>404 - File Not Found</h3>
      <p>The requested page does not exist.</p>
      <p>Please try another search, or click one of the selected search buttons!</p>
    </li>
  )
}

export default ErrorPage;