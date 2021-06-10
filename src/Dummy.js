import React from 'react';

// Stateless component
const Dummy = ({ match }) => {
  return (
    <li className="not-found">
      <h3>{match.url}</h3>
    </li>
  )
}

export default Dummy;