import React from 'react';
import { NavLink } from 'react-router-dom';

// Stateless component
const Header = () => {
  return (
    <h1 className="header">
      {/* Redirect to root route */}
      <NavLink to={'/'}>React Gallery App</NavLink>
    </h1>
  )
}

export default Header;